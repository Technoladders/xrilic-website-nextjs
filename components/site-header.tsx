"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { BookDemoModal } from "@/components/book-demo-modal"
import { motion, AnimatePresence } from "framer-motion"
import { ActionModal } from "@/components/action-modal"

export function SiteHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)


   // Theme handling logic
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Determine which logo to show
  // If not mounted yet, we show the default light logo to prevent layout shift
  const logoSrc = mounted && resolvedTheme === "dark" 
    ? "/xrilic-logos/white/xrilic.W.ai.svg" 
    : "/logo/xrilic_ai.svg"

  return (
    <>
      <nav className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center">
                <img 
                  src={logoSrc} 
                  alt="xrilic.ai" 
                  className="h-12 w-auto transition-opacity duration-300" 
                />
              </Link>
              <div className="hidden md:flex items-center gap-6">
                <div
                  className="relative"
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  <button className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 h-full py-2">
                    Products
                    <svg
                      className={`w-4 h-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {isProductsOpen && (
                     <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-lg overflow-hidden"
                      >
                        <Link
                          href="/suites/general"
                          className="block px-4 py-3 hover:bg-purple-500/10 transition-colors"
                        >
                          <div className="font-semibold text-sm mb-1">People Suite</div>
                          <div className="text-xs text-muted-foreground">Integrated HR and operations management</div>
                        </Link>
                        <Link
                          href="/suites/hiring"
                          className="block px-4 py-3 hover:bg-purple-500/10 transition-colors"
                        >
                          <div className="font-semibold text-sm mb-1">Hiring Suite</div>
                          <div className="text-xs text-muted-foreground">Advanced recruitment and talent management</div>
                        </Link>
                        <Link
                          href="/suites/verification"
                          className="block px-4 py-3 hover:bg-purple-500/10 transition-colors"
                        >
                          <div className="font-semibold text-sm mb-1">Verification Suite</div>
                          <div className="text-xs text-muted-foreground">Automated background checks and compliance</div>
                        </Link>
                        <Link
                          href="/suites/sales"
                          className="block px-4 py-3 hover:bg-purple-500/10 transition-colors"
                        >
                          <div className="font-semibold text-sm mb-1">Sales Suite</div>
                          <div className="text-xs text-muted-foreground">Sales pipeline and client relationship management</div>
                        </Link>
                        <Link
                          href="/suites/finance"
                          className="block px-4 py-3 hover:bg-purple-500/10 transition-colors"
                        >
                          <div className="font-semibold text-sm mb-1">Finance Suite</div>
                          <div className="text-xs text-muted-foreground">Financial management and accounting platform</div>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <Link
                  href="/features"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </Link>
                <Link
                  href="/solutions"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Solutions
                </Link>
                <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ModeToggle />
              {/* <Button variant="ghost" size="sm" className="text-sm" >
                Sign In
              </Button> */}
               <Button size="sm" className="..." onClick={() => setIsModalOpen(true)}>
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </nav>
      
       <ActionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} defaultTab="demo" />
    </>
  )
}