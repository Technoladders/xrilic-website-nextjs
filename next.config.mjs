/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // Docker image (see Dockerfile); runs as a Node server
  images: { unoptimized: true },
};
export default nextConfig;
