import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header" // Import the new header
import { SiteFooter } from "@/components/site-footer"

import { Plus_Jakarta_Sans as V0_Font_Plus_Jakarta_Sans, IBM_Plex_Mono as V0_Font_IBM_Plex_Mono, Lora as V0_Font_Lora } from 'next/font/google'

const _plusJakartaSans = V0_Font_Plus_Jakarta_Sans({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800"] })
const _ibmPlexMono = V0_Font_IBM_Plex_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700"] })
const _lora = V0_Font_Lora({ subsets: ['latin'], weight: ["400","500","600","700"] })

export const metadata: Metadata = {
  // 1. MAIN HOMEPAGE SERP
  title: {
    default: "xrilic.ai | AI-Powered Business Platform",
    template: "%s | xrilic.ai", 
  },
  description: "Transform hiring with AI-powered recruitment, HR automation, verification, sales & finance. Get 60% faster hires. Start your 7-day free trial today—no credit card needed.",
  
  // 2. FAVICONS (Matches your favicon.io files)
  icons: {
    icon: [
      { url: "favicon_io_92/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "favicon_io_92/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "favicon_io_92/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "favicon_io_92/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
        {/* 3. APOLLO SCRIPT */}
        <Script id="apollo-installation" strategy="afterInteractive">
          {`
            function initApollo(){
              var n=Math.random().toString(36).substring(7),o=document.createElement("script");
              o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
              o.onload=function(){window.trackingFunctions.onLoad({appId:"66547c6f1cf7c001eba4b77e"})},
            }
            initApollo();
          `}
        </Script>
      </head>
      <body className={`font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Header sits here, available on all pages */}
          <SiteHeader />
          {children}
           <SiteFooter />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}