"use client";

import { useEffect, useRef } from "react";

/**
 * Animated grainy gradients, drawn with WebGL2.
 *
 * - `GradientCanvas`: a flowing colour field (cards, orbs).
 * - `RibbonCanvas`: the hero wave, a tilted ribbon mesh coloured by the same field.
 *
 * Browsers allow only a handful of WebGL contexts per page, and this page has many gradients. So every
 * canvas here is a plain 2D canvas, and a single shared offscreen WebGL context renders each visible one
 * in turn and copies the result across. Off-screen gradients are not drawn. Without WebGL2 the CSS
 * fallback background stays visible.
 */

export type Palette = "warm" | "green" | "orange" | "pearl" | "blue";

// Four colours per palette: [shadow/deep, base, soft warm, accent]. "warm" is the reference's yellow palette.
const PALETTES: Record<Palette, number[]> = {
  warm: [0.173, 0.545, 1, 0.94, 0.935, 0.9, 0.98, 0.92, 0.68, 1, 0.686, 0.224],
  green: [0.16, 0.75, 0.35, 0.85, 0.97, 0.9, 0.25, 0.9, 0.6, 0.255, 0.875, 0.77],
  orange: [0.98, 0.55, 0.3, 0.99, 0.95, 0.9, 1, 0.82, 0.6, 1, 0.7, 0.38],
  pearl: [0.93, 0.72, 0.58, 0.97, 0.94, 0.9, 0.98, 0.86, 0.74, 0.88, 0.62, 0.5],
  blue: [0.173, 0.545, 1, 0.92, 0.9, 0.97, 0.72, 0.68, 0.95, 0.77, 0.63, 1],
};

export const FALLBACK: Record<Palette, string> = {
  warm: "linear-gradient(135deg,#fbefc4,#f3efe6 45%,#9cc4ff)",
  green: "linear-gradient(135deg,#7fe6bd,#e6fbf0 55%,#35d69a)",
  orange: "linear-gradient(135deg,#ffb08a,#ffe3d2 55%,#ff7a45)",
  pearl: "linear-gradient(135deg,#f1d5b2,#f8ece0 55%,#e8b79d)",
  blue: "linear-gradient(135deg,#9cc4ff,#ece6f8 55%,#b9a3f5)",
};

/* ------------------------------ shaders ------------------------------ */

const FIELD_VERT = `#version 300 es
in vec2 a_position;
out vec2 v_uv;
void main() {
  v_uv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

// Ribbon: a strip of triangles. x runs along the ribbon (a_uv.x), v across it (a_uv.y). The centre line
// meanders, the width swells and pinches, and an orthographic camera looks at it from slightly above.
const RIBBON_VERT = `#version 300 es
precision highp float;
in vec2 a_uv;
out vec2 v_uv;
uniform float u_time;
uniform float u_projectionAspect;
void main() {
  v_uv = a_uv;
  float x = (a_uv.x - 0.5) * 6.0;
  float v = a_uv.y;
  float time = u_time * 0.7;
  float centerY = 0.15 * (
    sin(x * 0.9 + 0.4 + time * 0.1) * 0.5 +
    sin(x * 1.7 - 0.6 + time * 0.07) * 0.3 +
    sin(x * 2.8 + 1.0 + time * 0.05) * 0.2
  );
  float baseWave = sin(x * 1.4 + 0.2 + time * 0.4) * 0.09 +
    sin(x * 2.5 - 0.5 + time * 0.28) * 0.05 +
    sin(x * 3.8 + 0.8 + time * 0.18) * 0.025;
  float edgeDiv = sin(x * 3.6 + 1.2 + time * 0.32) * 0.15 +
    sin(x * 6.4 - 0.4 + time * 0.22) * 0.08;
  float ripple = sin(x * 3.5 + v * 5.0 + time * 0.35) * 0.04 +
    sin(x * 5.5 - v * 3.5 + time * 0.22) * 0.02;
  float y = centerY + baseWave + edgeDiv * (v - 0.5) * 2.0 + ripple;
  float z = (v - 0.5) * 1.5;

  // Orthographic camera at (0, 0.15, 5) looking at the origin, vertical frustum [-1, 1].
  vec2 tilt = normalize(vec2(0.15, 5.0));
  float viewY = y * tilt.y - z * tilt.x;
  float viewZ = y * tilt.x + z * tilt.y - length(vec2(0.15, 5.0));
  gl_Position = vec4(x / u_projectionAspect, viewY, (-2.0 * viewZ - 100.1) / 99.9, 1.0);
}`;

// Colour field shared by the cards and the ribbon: domain-warped simplex noise mapped onto four palette
// colours, a soft white diffusion, and film grain.
const FIELD_FRAG = `#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 fragColor;

uniform float u_time;
uniform float u_warpIntensity;
uniform float u_speed;
uniform float u_energy;
uniform float u_noiseScale;
uniform float u_aspectRatio;
uniform float u_ribbon;
uniform vec3 u_color0;
uniform vec3 u_color1;
uniform vec3 u_color2;
uniform vec3 u_color3;

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

// 2D simplex noise (Ashima Arts / Stefan Gustavson, MIT licence)
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

void main() {
  vec2 uv = v_uv;
  if (u_aspectRatio > 1.0) uv.x *= u_aspectRatio; else uv.y /= u_aspectRatio;
  float time = u_time * u_speed;

  vec2 t1 = time * vec2(0.017, -0.013);
  vec2 t2 = time * vec2(-0.011, 0.019);
  float t3 = time * 0.015;

  vec2 q = vec2(
    snoise(uv * u_noiseScale + t1),
    snoise(uv * u_noiseScale + vec2(5.2, 1.3) + t1 * 0.8)
  );
  vec2 r = vec2(
    snoise(uv * u_noiseScale + u_warpIntensity * 0.65 * q + vec2(1.7, 9.2) + t2),
    snoise(uv * u_noiseScale + u_warpIntensity * 0.65 * q + vec2(8.3, 2.8) + t2 * 0.9)
  );
  float f = snoise(uv * u_noiseScale + u_warpIntensity * 0.65 * r + t3);
  float pattern = clamp(f * 0.5 + 0.48, 0.0, 1.0);

  // Slowly drifting areas where the colour edges are sharper
  float focusNoise = snoise(uv * u_noiseScale * 0.5 + vec2(4.3, 7.9) + t2 * 0.4);
  float sharp = smoothstep(0.2, 0.6, focusNoise) * 0.5;
  float deepEdge = mix(0.45, 0.30, sharp);
  float warmStart = mix(0.32, 0.42, sharp);
  float warmEnd = mix(0.72, 0.60, sharp);

  vec3 deep = mix(u_color0, vec3(luma(u_color0)), 0.12);
  vec3 warm2 = mix(u_color2, vec3(luma(u_color2)), 0.2);
  vec3 warm3 = mix(u_color3, vec3(luma(u_color3)), 0.35);

  vec3 color = mix(deep, u_color1, smoothstep(0.05, deepEdge, pattern));
  vec3 warm = mix(warm2, warm3, smoothstep(0.65, 1.0, pattern));
  color = mix(color, warm, smoothstep(warmStart, warmEnd, pattern));

  float edgeGlow = smoothstep(0.2, 0.4, pattern) * smoothstep(0.85, 0.5, pattern);
  color = mix(color, vec3(1.0), edgeGlow * 0.25);
  color = mix(vec3(luma(color)), color, 1.0 + u_energy * 0.3);

  float d1 = snoise(v_uv * 1.5 + vec2(13.7, 3.1) + t1 * 0.6);
  float d2 = snoise(v_uv * 0.8 + vec2(6.2, 11.8) + t2 * 0.4);
  float diffuse = smoothstep(-0.1, 0.4, d1) * smoothstep(-0.2, 0.3, d2);
  color = mix(color, mix(color, vec3(1.0), 0.5), diffuse * 0.35);

  float cMax = max(max(color.r, color.g), color.b);
  float sat = (cMax - min(min(color.r, color.g), color.b)) / (cMax + 0.001);
  float lightBoost = (1.0 - sat) * smoothstep(0.5, 0.8, luma(color));
  float grainIntensity = 0.08 + lightBoost * 0.06;

  vec2 gUv = gl_FragCoord.xy;
  float g1 = snoise(gUv * 0.25 + u_time * 0.15);
  float g2 = snoise(gUv * 0.45 - u_time * 0.12);
  float gp = g1 * g2;
  float grain = sign(gp) * max(0.0, abs(gp) - 0.02) * 2.5;
  color = mix(color, color + vec3(0.08, 0.08, 0.07), max(0.0, grain) * grainIntensity * 15.0);
  color = clamp(color, 0.0, 1.0);

  float alpha = 1.0;
  if (u_ribbon > 0.5) alpha = smoothstep(0.0, 0.005, min(v_uv.y, 1.0 - v_uv.y));
  fragColor = vec4(color, alpha);
}`;

/* --------------------------- shared GL context --------------------------- */

type Prog = { program: WebGLProgram; u: Record<string, WebGLUniformLocation | null> };
type GL = {
  gl: WebGL2RenderingContext;
  canvas: HTMLCanvasElement;
  field: Prog;
  ribbon: Prog;
  quad: WebGLBuffer;
  size: { w: number; h: number };
};

const UNIFORMS = ["u_time", "u_warpIntensity", "u_speed", "u_energy", "u_noiseScale", "u_aspectRatio", "u_ribbon", "u_color0", "u_color1", "u_color2", "u_color3", "u_projectionAspect"];

function build(gl: WebGL2RenderingContext, vs: string, fs: string, attribute: string): Prog | null {
  const mk = (type: number, src: string) => {
    const s = gl.createShader(type)!;
    gl.shaderSource(s, src);
    gl.compileShader(s);
    return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
  };
  const v = mk(gl.VERTEX_SHADER, vs);
  const f = mk(gl.FRAGMENT_SHADER, fs);
  if (!v || !f) return null;
  const program = gl.createProgram()!;
  gl.attachShader(program, v);
  gl.attachShader(program, f);
  gl.bindAttribLocation(program, 0, attribute);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return null;
  return { program, u: Object.fromEntries(UNIFORMS.map((n) => [n, gl.getUniformLocation(program, n)])) };
}

let shared: GL | null | undefined;

function getGL(): GL | null {
  if (shared && !shared.gl.isContextLost()) return shared;
  if (shared === null) return null; // WebGL2 unavailable: do not retry
  const canvas = document.createElement("canvas");
  canvas.width = 16;
  canvas.height = 16;
  const gl = canvas.getContext("webgl2", { alpha: true, antialias: true, premultipliedAlpha: true });
  if (!gl) return (shared = null);
  const field = build(gl, FIELD_VERT, FIELD_FRAG, "a_position");
  const ribbon = build(gl, RIBBON_VERT, FIELD_FRAG, "a_uv");
  if (!field || !ribbon) return (shared = null);
  const quad = gl.createBuffer()!;
  gl.bindBuffer(gl.ARRAY_BUFFER, quad);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
  shared = { gl, canvas, field, ribbon, quad, size: { w: 16, h: 16 } };
  return shared;
}

/* ------------------------------ consumers ------------------------------ */

type Consumer = {
  kind: "field" | "ribbon";
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  palette: number[];
  seed: number;
  cssW: number;
  cssH: number;
  w: number;
  h: number;
  visible: boolean;
  last: number;
  mesh?: { buffer: WebGLBuffer; index: WebGLBuffer; count: number; columns: number };
};

const consumers = new Set<Consumer>();
let raf = 0;
const t0 = typeof performance !== "undefined" ? performance.now() : 0;
const reduceMotion = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const clock = () => (performance.now() - t0) / 1000 + 4;

function draw(c: Consumer, t: number) {
  const g = getGL();
  if (!g || c.w < 1 || c.h < 1) return;
  const { gl } = g;
  if (g.size.w < c.w || g.size.h < c.h) {
    g.size = { w: Math.max(g.size.w, c.w), h: Math.max(g.size.h, c.h) };
    g.canvas.width = g.size.w;
    g.canvas.height = g.size.h;
  }
  gl.viewport(0, 0, c.w, c.h);
  gl.enable(gl.SCISSOR_TEST);
  gl.scissor(0, 0, c.w, c.h);
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  const p = c.kind === "ribbon" ? g.ribbon : g.field;
  gl.useProgram(p.program);
  const maxDim = Math.max(c.cssW, c.cssH);
  if (c.kind === "ribbon") {
    gl.uniform1f(p.u.u_time, t);
    gl.uniform1f(p.u.u_projectionAspect, c.cssW / c.cssH);
    gl.uniform1f(p.u.u_warpIntensity, 0.8);
    gl.uniform1f(p.u.u_speed, 0.2);
    gl.uniform1f(p.u.u_energy, 0.5);
    gl.uniform1f(p.u.u_noiseScale, 0.35);
    gl.uniform1f(p.u.u_aspectRatio, 4);
    gl.uniform1f(p.u.u_ribbon, 1);
  } else {
    gl.uniform1f(p.u.u_time, t + 137.5 * c.seed);
    gl.uniform1f(p.u.u_warpIntensity, 0.8);
    gl.uniform1f(p.u.u_speed, 0.2 * Math.max(1, Math.pow(maxDim / 72, 0.4)));
    gl.uniform1f(p.u.u_energy, 0.5);
    gl.uniform1f(p.u.u_noiseScale, 0.25 * Math.pow(maxDim / 72, 0.42));
    gl.uniform1f(p.u.u_aspectRatio, c.w / Math.max(c.h, 1));
    gl.uniform1f(p.u.u_ribbon, 0);
  }
  for (let i = 0; i < 4; i++) gl.uniform3f(p.u[`u_color${i}`], c.palette[i * 3], c.palette[i * 3 + 1], c.palette[i * 3 + 2]);

  if (c.kind === "ribbon") {
    const columns = Math.max(100, Math.min(500, Math.round(0.3 * Math.max(c.cssW, 1440))));
    if (!c.mesh || c.mesh.columns !== columns) {
      const rows = 8;
      const verts = new Float32Array((columns + 1) * (rows + 1) * 2);
      const idx = new Uint16Array(columns * rows * 6);
      let k = 0;
      for (let i = 0; i <= columns; i++) {
        for (let j = 0; j <= rows; j++) {
          const n = (rows + 1) * i + j;
          verts[2 * n] = i / columns;
          verts[2 * n + 1] = j / rows;
          if (i < columns && j < rows) {
            const m = n + rows + 1;
            idx.set([n, n + 1, m, n + 1, m + 1, m], k);
            k += 6;
          }
        }
      }
      const buffer = c.mesh?.buffer ?? gl.createBuffer()!;
      const index = c.mesh?.index ?? gl.createBuffer()!;
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, idx, gl.STATIC_DRAW);
      c.mesh = { buffer, index, count: idx.length, columns };
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, c.mesh.buffer);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, c.mesh.index);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.enable(gl.BLEND);
    gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.drawElements(gl.TRIANGLES, c.mesh.count, gl.UNSIGNED_SHORT, 0);
    gl.disable(gl.DEPTH_TEST);
    gl.disable(gl.BLEND);
  } else {
    gl.bindBuffer(gl.ARRAY_BUFFER, g.quad);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }

  c.ctx.clearRect(0, 0, c.w, c.h);
  c.ctx.drawImage(g.canvas, 0, g.size.h - c.h, c.w, c.h, 0, 0, c.w, c.h);
  c.canvas.dataset.ready = "true";
}

function tick(now: number) {
  raf = requestAnimationFrame(tick);
  const t = clock();
  for (const c of consumers) {
    if (!c.visible) continue;
    const gap = c.kind === "ribbon" ? 16 : 33; // ribbon ~60fps, fields ~30fps
    if (now - c.last >= gap) {
      c.last = now;
      draw(c, t);
    }
  }
}

function wake() {
  if (raf || reduceMotion()) return;
  if ([...consumers].some((c) => c.visible)) raf = requestAnimationFrame(tick);
}

function useConsumer(ref: React.RefObject<HTMLCanvasElement | null>, kind: Consumer["kind"], palette: number[], seed: number) {
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const c: Consumer = { kind, canvas, ctx, palette, seed, cssW: 0, cssH: 0, w: 0, h: 0, visible: false, last: 0 };
    consumers.add(c);

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      c.cssW = canvas.offsetWidth || r.width;
      c.cssH = canvas.offsetHeight || r.height;
      c.w = Math.max(1, Math.round(c.cssW * dpr));
      c.h = Math.max(1, Math.round(c.cssH * dpr));
      canvas.width = c.w;
      canvas.height = c.h;
      if (c.visible) draw(c, clock());
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(
      ([e]) => {
        c.visible = e.isIntersecting;
        if (c.visible) {
          draw(c, clock());
          wake();
        }
      },
      { rootMargin: "150px" },
    );
    io.observe(canvas);

    return () => {
      ro.disconnect();
      io.disconnect();
      consumers.delete(c);
      const g = shared;
      if (c.mesh && g && !g.gl.isContextLost()) {
        g.gl.deleteBuffer(c.mesh.buffer);
        g.gl.deleteBuffer(c.mesh.index);
      }
      if (!consumers.size) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };
  }, [ref, kind, palette, seed]);
}

const fade = "opacity-0 transition-opacity duration-500 data-[ready=true]:opacity-100";

/** Fills its parent (which must be `relative` and sized). A CSS gradient shows until WebGL is ready. */
export function GradientCanvas({ palette = "warm", seed = 0, className = "" }: { palette?: Palette; seed?: number; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useConsumer(ref, "field", PALETTES[palette], seed);
  return (
    <div aria-hidden className={`absolute inset-0 overflow-hidden ${className}`} style={{ background: FALLBACK[palette] }}>
      <canvas ref={ref} className={`absolute inset-0 size-full ${fade}`} />
    </div>
  );
}

/** The hero wave. Size it with classes; it draws on a transparent background. */
export function RibbonCanvas({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useConsumer(ref, "ribbon", PALETTES.warm, 0);
  return <canvas aria-hidden ref={ref} className={`${fade} ${className}`} />;
}
