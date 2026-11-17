import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { site } from "@/lib/content";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ScrollReveal from "@/components/ScrollReveal";
import ChatBar from "@/components/ChatBar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// Variable font: all weights are available, so no `weight` option.
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  openGraph: { title: site.title, description: site.description, url: site.url, siteName: site.name },
};

// Marks the page as JS-enabled before paint so scroll-reveal content is not hidden without JavaScript.
const jsScript = `document.documentElement.classList.add("js")`;

const APOLLO = `function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n;o.async=true;o.defer=true;o.onload=function(){window.trackingFunctions?.onLoad?.({appId:"66547c6f1cf7c001eba4b77e"});};}initApollo();`;
const GA = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-8TJNLNBP29');`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsScript }} />
        {/* Trackers carried over from the previous xrilic.ai site */}
        <Script id="apollo-installation" strategy="afterInteractive">{APOLLO}</Script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-8TJNLNBP29" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{GA}</Script>
      </head>
      <body className="relative flex min-h-svh flex-col overflow-x-hidden">
        {children}
        <ScrollReveal />
        <ChatBar />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
