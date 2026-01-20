"use client"

import { useState, useEffect } from "react" // Added useEffect
import Link from "next/link"
import { useTheme } from "next-themes" // Added useTheme

export function SiteFooter() {
   const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true)
  }, [])

  // Determine logo source
  const logoSrc = mounted && resolvedTheme === "dark" 
    ? "/xrilic-logos/white/xrilic.W.ai.svg" 
    : "/logo/xrilic_ai.svg"


  return (
    <footer className="border-t border-border/40 py-12 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                <Link href="/suites/general" className="hover:text-foreground transition-colors">
                  People Suite
                </Link>
              </li>
                            <li>
                <Link href="/suites/hiring" className="hover:text-foreground transition-colors">
                  Hiring Suite
                </Link>
              </li>
               <li>
                <Link href="/suites/verification" className="hover:text-foreground transition-colors">
                  Verification Suite
                </Link>
              </li>
              <li>
                <Link href="/suites/sales" className="hover:text-foreground transition-colors">
                  Sales Suite
                </Link>
              </li>
               <li>
                <Link href="/suites/finance" className="hover:text-foreground transition-colors">
                  Finance Suite
                </Link>
              </li>

             
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/docs" className="hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-foreground transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
                   <Link href="/" className="flex items-center">
            <img 
              src={logoSrc} 
              alt="xrilic.ai" 
              className="h-12 w-auto transition-opacity duration-300" 
            />
          </Link>
          <p className="text-sm text-muted-foreground">© 2025 xrilic.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}