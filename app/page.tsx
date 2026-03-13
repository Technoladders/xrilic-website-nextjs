"use client"

import React from "react"
import dynamic from "next/dynamic"
import { useTheme } from "next-themes"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { 
  ArrowRight, Sparkles, BarChart3, Users, CheckCircle2, 
  TrendingUp, Zap, Shield, Briefcase, 
  DollarSign, LayoutDashboard, Clock 
} from "lucide-react"
import { BookDemoModal } from "@/components/book-demo-modal"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ModeToggle } from "@/components/mode-toggle"
// Import CardSwap
import CardSwap, { Card as SwapCard } from "@/components/react-bits/CardSwap"
import { ActionModal, ActionType } from "@/components/action-modal"

const LiquidEther = dynamic(
  () => import("@/components/LiquidEther"),
  { ssr: false }
)

function useMounted() {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  return mounted
}

function useCounter(end: number, duration = 2000, shouldStart = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, shouldStart])

  return count
}

const DASHBOARD_IMAGES = [
  "/app/client_dashboard.png",
  "/app/companies_profile_page.png",
  
  
  "/app/goal_dashboard.png",
  "/app/invoice_bill.png",
  "/app/job_candidate_page.png",
  "/app/job_dashboard.png",
  
  "/app/talent_ai_jobmatching.png",

  "/app/talent_profile_page.png",

  "/app/verify_profile_full.png",
  
  "/app/zive-result-page.png",
  "/app/zive-x-search.png"
]

const SUITES_DATA = [
  { 
    id: "general",
    name: "People Suite", 
    logoLight: "/xrilic-logos/black/Xrilic.B.people.svg",
    logoDark: "/xrilic-logos/white/Xrilic.W.people.svg",
    icon: LayoutDashboard, 
    color: "primary",
    title: "Centralize HR Operations & Workforce Management",
    features: [
      { title: "Dashboard & Employees", description: "Real-time views of attendance, goals, and a complete employee directory with hierarchy." },
      { title: "Goal Management", description: "Track active assignments, measure progress, and identify overdue instances across departments." },
      { title: "Operations", description: "Manage Timesheets, Leave, Attendance, and Approvals in a single streamlined workflow." },
    ],
    capabilities: ["Goal Dashboard", "Employee Directory", "Attendance Tracking", "Shift Management"]
  },
  { 
    id: "hiring",
    name: "Hiring Suite", 
    logoLight: "/logo/Xrilic Recruit.svg",
    logoDark: "/xrilic-logos/white/Xrilic.W.recruit.svg",
    icon: Users, 
    color: "purple-500",
    title: "Automate Your Complete Recruitment Workflow",
    features: [
      { title: "Jobs & Talent Pool", description: "Manage postings and build a candidate database with one-click AI matching." },
      { title: "Bench Profiles", description: "Maintain bench strength with suggested titles, notice periods, and availability windows." },
      { title: "Client & Project Dashboard", description: "Track revenue, profit metrics, and recruitment progress for every open position." },
    ],
    capabilities: ["AI Matching", "Bench Management", "Job Dashboard", "Revenue Tracking"]
  },
  { 
    id: "verification",
    name: "Verification", 
    logoLight: "/logo/Xrilic Verify Black.svg",
    logoDark: "/xrilic-logos/white/Xrilic.W.verify.svg",
    icon: Shield, 
    color: "emerald-500",
    title: "Build Trust with Automated Background Verification",
    features: [
      { title: "Candidate Directory", description: "Search, verify, and manage background checks. Track Verified, Pending, and Partial statuses." },
      { title: "Detailed Analytics", description: "Monitor credit usage, total lookups, and active verifiers in real-time." },
      { title: "Compliance Workflows", description: "Mobile to UAN, Employment History, Passport checks, and more standardized decisioning." },
    ],
    capabilities: ["UAN History", "Credit Tracking", "Bulk Verification", "Compliance Check"]
  },
  { 
    id: "sales",
    name: "Sales (CRM)", 
    logoLight: "/logo/Xrilic CRM.svg",
    logoDark: "/xrilic-logos/white/Xrilic.W.crm.svg",
    icon: Briefcase, 
    color: "pink-500",
    title: "Manage Client Relationships & Company Records",
    features: [
      { title: "Company & People", description: "Centralize records, bulk import via CSV, and integrate with Apollo.io for contact enrichment." },
      { title: "Visual Kanban", description: "Drag and drop leads to update stages. Track progress through defined sales pipelines." },
      { title: "Lists & Segmentation", description: "Organize contacts into custom folders for targeted outreach campaigns." },
    ],
    capabilities: ["Pipeline Kanban", "Apollo.io Integration", "Contact Management", "Bulk Actions"]
  },
  { 
    id: "finance",
    name: "Finance Suite", 
    logoLight: "/logo/Xrilic Books.svg",
    logoDark: "/xrilic-logos/white/Xrilic.W.books.svg",
    icon: DollarSign, 
    color: "blue-500",
    title: "Centralize Financial Operations & Reporting",
    features: [
      { title: "Finance Dashboard", description: "Monitor Total Revenue, Expenses, and Net Profit with breakdown analysis charts." },
      { title: "Invoices & Expenses", description: "Track overdue payments, manage expense categories, and automate billing." },
      { title: "Payroll & Banking", description: "Run monthly payroll, view projected costs, and reconcile bank statements automatically." },
    ],
    capabilities: ["Auto Invoicing", "Payroll Processing", "Expense Tracking", "Bank Reconciliation"]
  },
]

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("general")
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const { resolvedTheme } = useTheme()
  const mounted = useMounted()
    const [modalState, setModalState] = useState<{ isOpen: boolean; tab: ActionType }>({
    isOpen: false,
    tab: "demo"
  })
  
  // Helper to open specific tab
  const openModal = (tab: ActionType) => setModalState({ isOpen: true, tab })
  const closeModal = () => setModalState(prev => ({ ...prev, isOpen: false }))

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" })

  const count60 = useCounter(82, 2000, statsInView)
  const count70 = useCounter(70, 2000, statsInView)
  const count97 = useCounter(97, 2000, statsInView)

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      },
    },
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  const renderVisualCard = (id: string) => {
    switch (id) {
      case "general":
        return (
          <Card className="bg-gradient-to-br from-primary/10 via-background to-background border-primary/20 p-6 h-full relative overflow-hidden group hover:border-primary/40 transition-all">
             <div className="space-y-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="font-bold text-lg">HR Overview</div>
                  <div className="bg-primary/20 text-primary text-xs px-2 py-1 rounded">Live</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <div className="bg-card p-4 rounded-lg border border-border">
                      <div className="text-muted-foreground text-xs">Total Employees</div>
                      <div className="text-2xl font-bold">142</div>
                      <div className="text-emerald-500 text-xs mt-1">↑ 12 New</div>
                   </div>
                   <div className="bg-card p-4 rounded-lg border border-border">
                      <div className="text-muted-foreground text-xs">Attendance</div>
                      <div className="text-2xl font-bold">96%</div>
                      <div className="text-muted-foreground text-xs mt-1">On Time</div>
                   </div>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border">
                   <div className="text-sm font-medium mb-2">Goal Progress</div>
                   <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[75%]" />
                   </div>
                   <div className="flex justify-between text-xs mt-1 text-muted-foreground">
                      <span>Q3 Objectives</span>
                      <span>75%</span>
                   </div>
                </div>
             </div>
          </Card>
        )
      case "hiring":
        return (
          <Card className="bg-gradient-to-br from-purple-500/10 via-background to-background border-purple-500/20 p-6 h-full relative overflow-hidden group hover:border-purple-500/40 transition-all">
            <div className="relative space-y-4">
              <div className="bg-card/90 backdrop-blur p-4 rounded-lg border border-border/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">AI Matching Score</span>
                  <span className="text-2xl font-bold text-purple-500">94%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "94%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                  />
                </div>
              </div>
              <div className="bg-card/90 backdrop-blur p-4 rounded-lg border border-border/50">
                <div className="text-xs text-muted-foreground mb-2">Top Candidate</div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-primary" />
                  <div>
                    <div className="font-medium">Sarah Johnson</div>
                    <div className="text-xs text-muted-foreground">Sr. Developer • 8y Exp</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        )
      case "verification":
        return (
          <Card className="bg-gradient-to-br from-emerald-500/10 via-background to-background border-emerald-500/20 p-6 h-full relative overflow-hidden group hover:border-emerald-500/40 transition-all">
             <div className="space-y-3">
                {[
                  { label: "Employment History", status: "Verified", color: "text-emerald-500" },
                  { label: "UAN Check", status: "Verified", color: "text-emerald-500" },
                  { label: "Criminal Record", status: "Pending", color: "text-yellow-500" },
                  { label: "ID Verification", status: "Verified", color: "text-emerald-500" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center bg-card p-3 rounded border border-border">
                    <span className="text-sm font-medium">{item.label}</span>
                    <div className="flex items-center gap-1">
                       {item.status === "Verified" ? <CheckCircle2 className="w-4 h-4 text-emerald-500"/> : <Clock className="w-4 h-4 text-yellow-500"/>}
                       <span className={`text-xs ${item.color}`}>{item.status}</span>
                    </div>
                  </div>
                ))}
             </div>
          </Card>
        )
      case "sales":
        return (
          <Card className="bg-gradient-to-br from-pink-500/10 via-background to-background border-pink-500/20 p-6 h-full relative overflow-hidden group hover:border-pink-500/40 transition-all">
             <div className="flex gap-4 overflow-hidden h-full opacity-90">
                <div className="w-1/2 bg-card/50 rounded-lg p-2 border border-border flex flex-col gap-2">
                   <div className="text-xs font-bold text-muted-foreground uppercase mb-2">New Leads</div>
                   <div className="bg-card p-2 rounded shadow-sm border border-border text-xs">Acme Corp</div>
                   <div className="bg-card p-2 rounded shadow-sm border border-border text-xs">Global Tech</div>
                </div>
                <div className="w-1/2 bg-card/50 rounded-lg p-2 border border-border flex flex-col gap-2">
                   <div className="text-xs font-bold text-purple-500 uppercase mb-2">Negotiation</div>
                   <div className="bg-card p-2 rounded shadow-sm border border-border text-xs border-l-4 border-l-pink-500">Stark Ind.</div>
                </div>
             </div>
          </Card>
        )
      case "finance":
        return (
          <Card className="bg-gradient-to-br from-blue-500/10 via-background to-background border-blue-500/20 p-6 h-full relative overflow-hidden group hover:border-blue-500/40 transition-all">
             <div className="space-y-4">
                <div className="bg-card p-4 rounded-lg border border-border">
                   <div className="text-xs text-muted-foreground mb-1">Net Profit</div>
                   <div className="text-3xl font-bold text-blue-500">$124,500</div>
                   <div className="text-emerald-500 text-xs flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> +18% vs last month
                   </div>
                </div>
                <div className="flex gap-2 h-20 items-end">
                   {[30, 45, 35, 60, 50, 75, 65].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="flex-1 bg-blue-500/80 rounded-t-sm"
                      />
                   ))}
                </div>
             </div>
          </Card>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero Section */}
      <section className="relative min-h-[70vh] overflow-hidden">
        {mounted && !prefersReducedMotion && (
          <div className="absolute inset-0 z-0 pointer-events-none">
            {resolvedTheme === "dark" ? (
                <LiquidEther
                  colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
                  mouseForce={20}
                  cursorSize={100}
                  isViscous={false}
                  viscous={30}
                  iterationsViscous={32}
                  iterationsPoisson={32}
                  resolution={0.5}
                  isBounce={false}
                  autoDemo
                  autoSpeed={0.5}
                  autoIntensity={2.2}
                  takeoverDuration={0.25}
                  autoResumeDelay={3000}
                  autoRampDuration={0.6}
                />
            ) : (
              <LiquidEther
                mouseForce={18}
                cursorSize={80}
                isViscous
                viscous={28}
                colors={["#7c3aed", "#ec4899"]}
                autoDemo
                autoSpeed={0.45}
                autoIntensity={2}
                isBounce={false}
                resolution={0.4}
              />
            )}
          </div>
        )}

        <motion.div
          className="absolute inset-0 z-10 bg-gradient-to-b from-primary/30 via-purple-500/15 to-background"
          animate={prefersReducedMotion ? {} : { opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent" />

        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-20 pb-24 md:pt-28 md:pb-32 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/70 dark:bg-primary/10 border border-primary/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-white dark:text-primary" />
              <span className="text-sm text-white dark:text-white">
                Enterprise Business Suite, Simplified
              </span>
            </motion.div>

           <motion.h1
  initial="hidden"
  animate="visible"
  variants={fadeInUp}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance text-center"
>
  One platform. Every function.
  <br />
  <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
    Zero chaos.
  </span>
</motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-foreground dark:text-muted-foreground mb-8 max-w-2xl mx-auto text-balance"
            >
              Manage your entire business with AI-powered intelligence 
across 5 integrated suites. Start in minutes.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 ..."
                onClick={() => openModal("sales")} // TRIGGER TRIAL
              >
                Start 7 day free trial
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="..."
                onClick={() => openModal("demo")} // TRIGGER DEMO
              >
                Book a Demo
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section (Separate from Hero) */}
      <section className="py-12  bg-card/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={statsRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            <motion.div variants={scaleIn}>
              <div className="text-center p-4">
                <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mb-2">
                  {count60}%
                </div>
                <div className="text-lg font-medium">Recruitment Efficiency</div>
                <div className="text-sm text-muted-foreground mt-1">Streamlined workflows save time</div>
              </div>
            </motion.div>

            <motion.div variants={scaleIn}>
              <div className="text-center p-4">
                <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                  {count70}%
                </div>
                <div className="text-lg font-medium">Manual Work Reduction</div>
                <div className="text-sm text-muted-foreground mt-1">Automating repetitive tasks</div>
              </div>
            </motion.div>

            <motion.div variants={scaleIn}>
              <div className="text-center p-4">
                <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-primary bg-clip-text text-transparent mb-2">
                  {count97}%
                </div>
                <div className="text-lg font-medium">Satisfaction Rate</div>
                <div className="text-sm text-muted-foreground mt-1">With AI-powered matching</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Value Prop / Suite Navigation */}
<section className="mt-24 py-20 bg-gradient-to-b from-background to-card/20 min-h-[800px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Unified Platform, Five Powerful Suites
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
              Manage your complete workforce, sales, and finances from one centralized hub.
            </p>
          </motion.div>

          {/* TAB BUTTONS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12"
          >
            {SUITES_DATA.map((tab) => {
              const isActive = activeTab === tab.id;
              
              // Helper to map tab IDs to new text & gradients for light/dark themes
              const getSuiteStyles = (id: string) => {
                switch (id) {
                  case "general": return { text: "People", gradient: "from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400" };
                  case "hiring": return { text: "Recruit", gradient: "from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400" };
                  case "verification": return { text: "Verify", gradient: "from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400" };
                  case "sales": return { text: "CRM", gradient: "from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400" };
                  case "finance": return { text: "Books", gradient: "from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400" };
                  default: return { text: tab.name, gradient: "from-primary to-primary/80" };
                }
              };
              
              const style = getSuiteStyles(tab.id);

              return (
                <motion.button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.id)}
                  className={`p-6 rounded-xl border transition-all flex flex-col items-center justify-center gap-4 group ${
                    isActive 
                      ? `bg-background border-${tab.color} ring-2 ring-${tab.color}/20 shadow-xl` 
                      : "bg-card/20 border-border opacity-70 hover:opacity-100"
                  }`}
                >
                  <div className="relative h-18 w-full flex items-center justify-center">
                    <span 
                      className={`text-2xl md:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r transition-all duration-300 ${
                        isActive 
                          ? style.gradient
                          : "from-muted-foreground to-muted-foreground group-hover:from-foreground group-hover:to-foreground"
                      }`}
                    >
                      {style.text}
                    </span>
                  </div>
                </motion.button>
              )
            })}
          </motion.div>

          {/* ANIMATED FEATURE CONTENT */}
          <AnimatePresence mode="wait">
            {SUITES_DATA.map((suite) => {
              if (activeTab === suite.id) {
                // Re-use helper for the feature section
                const getSuiteStyles = (id: string) => {
                  switch (id) {
                    case "general": return { text: "People", gradient: "from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400" };
                    case "hiring": return { text: "Recruit", gradient: "from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400" };
                    case "verification": return { text: "Verify", gradient: "from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400" };
                    case "sales": return { text: "CRM", gradient: "from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400" };
                    case "finance": return { text: "Books", gradient: "from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400" };
                    default: return { text: suite.name, gradient: "from-primary to-primary/80" };
                  }
                };
                
                const style = getSuiteStyles(suite.id);

                return (
                  <motion.div
                    key={suite.id}
                    initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <FeatureSection
                      badge={{ 
                        text: style.text, 
                        gradient: style.gradient, // Passed gradient instead of logo
                        color: suite.color,
                        id: suite.id 
                      }}
                      title={suite.title}
                      features={suite.features}
                      capabilities={suite.capabilities}
                      visualCard={renderVisualCard(suite.id)}
                      reverse={suite.id === "hiring" || suite.id === "sales"}
                    />
                  </motion.div>
                )
              }
              return null;
            })}
          </AnimatePresence>

        </div>
      </section>

      {/* Interface Gallery / Card Swap Section */}
      <section className=" bg-card/50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Intuitive Interface</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Designed for speed and clarity
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Experience a unified design language across all modules. From detailed analytics to candidate profiles, everything is just a click away.
              </p>
              <div className="space-y-4">
                {[
                  "Clean, distraction-free layouts",
                  "Responsive role-based views",
                  "Customizable dashboard",
                  "Real-time data visualization"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Card Swap */}
         {/* Right Content - Synthetic Card Swap */}
{/* Right Content - Rich Synthetic Card Swap */}
<div className="relative h-[600px] w-full flex justify-center items-center">
  <CardSwap
    cardDistance={40}
    verticalDistance={30}
    delay={1200}
    pauseOnHover={true}
    width="100%"
    height="500px"
  >
    {/* Analytics Overview Card */}
    <SwapCard customClass="bg-card border-border shadow-2xl overflow-hidden">
      <div className="w-full h-full p-6 flex flex-col gap-4">
        {/* Header row */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
              Analytics · Hiring overview
            </p>
            <p className="text-lg font-semibold">Recruitment performance</p>
          </div>
          <div className="flex items-center gap-2 text-[11px]">
            <span className="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/30">
              Updated 2 min ago
            </span>
          </div>
        </div>

        {/* Filters / legend */}
        <div className="flex items-center justify-between text-[11px] text-muted-foreground">
          <div className="flex gap-2">
            <button className="px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/30">
              Last 30 days
            </button>
            <button className="px-2 py-1 rounded-full bg-muted hover:bg-muted/80 transition">
              Quarter
            </button>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="inline-block w-2 h-2 rounded-full bg-primary" />
              <span>Tech roles</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="inline-block w-2 h-2 rounded-full bg-purple-500" />
              <span>Non‑tech</span>
            </div>
          </div>
        </div>

        {/* Funnel / bar chart */}
        <div className="bg-muted/60 rounded-lg p-4">
          <div className="flex items-end gap-3 h-28">
            {[
              { label: "Views", tech: 60, non: 52 },
              { label: "Applied", tech: 44, non: 38 },
              { label: "Screened", tech: 30, non: 26 },
              { label: "Interview", tech: 22, non: 18 },
              { label: "Offer", tech: 14, non: 11 },
              { label: "Hired", tech: 9, non: 7 },
            ].map((step) => (
              <div
                key={step.label}
                className="flex-1 flex flex-col items-center gap-1"
              >
                <div className="flex-1 flex items-end gap-1 w-full">
                  <div
                    className="flex-1 rounded-t-full bg-primary/80"
                    style={{ height: `${step.tech}%` }}
                  />
                  <div
                    className="flex-1 rounded-t-full bg-purple-500/80"
                    style={{ height: `${step.non}%` }}
                  />
                </div>
                <span className="text-[11px] text-muted-foreground">
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-3 gap-3 text-xs">
          <div className="bg-card/70 border border-border rounded-lg p-3 space-y-1">
            <p className="text-muted-foreground text-[11px]">
              Avg. time to hire
            </p>
            <p className="text-lg font-semibold">14 days</p>
            <p className="flex items-center gap-1 text-[11px] text-emerald-500">
              <TrendingUp className="w-3 h-3" />
              <span>3 days faster</span>
            </p>
          </div>
          <div className="bg-card/70 border border-border rounded-lg p-3 space-y-1">
            <p className="text-muted-foreground text-[11px]">Offer acceptance</p>
            <p className="text-lg font-semibold">87%</p>
            <p className="text-[11px] text-muted-foreground">
              Top quartile for SaaS
            </p>
          </div>
          <div className="bg-card/70 border border-border rounded-lg p-3 space-y-1">
            <p className="text-muted-foreground text-[11px]">
              Pipeline health
            </p>
            <p className="text-lg font-semibold text-emerald-500">Strong</p>
            <p className="text-[11px] text-muted-foreground">
              3 critical roles flagged
            </p>
          </div>
        </div>
      </div>
    </SwapCard>

    {/* Candidate Snapshot Card */}
    <SwapCard customClass="bg-card border-border shadow-2xl overflow-hidden">
      <div className="w-full h-full p-6 flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
              Candidate · Shortlist
            </p>
            <p className="text-lg font-semibold">Senior Full‑Stack Engineer</p>
          </div>
          <div className="flex flex-col items-end gap-1 text-[11px]">
            <span className="px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/30">
              Match 94%
            </span>
            <span className="text-muted-foreground">
              Bench available · 15 days
            </span>
          </div>
        </div>

        {/* Main profile */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white font-semibold">
            SJ
          </div>
          <div className="flex-1 space-y-1">
            <p className="font-medium">Sarah Johnson</p>
            <p className="text-xs text-muted-foreground">
              8 yrs · React · Node · AWS · Microservices
            </p>
            <div className="flex flex-wrap gap-2 text-[11px]">
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/30">
                Culture fit: High
              </span>
              <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/30">
                Notice: 30 days
              </span>
            </div>
          </div>
        </div>

        {/* Skills matrix */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-2">
            Skill coverage
          </p>
          <div className="flex flex-col gap-2 text-[11px]">
            {[
              { label: "Frontend", value: "92%" },
              { label: "Backend", value: "86%" },
              { label: "System design", value: "78%" },
              { label: "Leadership", value: "81%" },
            ].map((row) => (
              <div key={row.label} className="flex items-center gap-2">
                <span className="w-24 text-muted-foreground">
                  {row.label}
                </span>
                <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-purple-500"
                    style={{ width: row.value }}
                  />
                </div>
                <span className="w-10 text-right">{row.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline / next steps */}
        <div className="grid grid-cols-2 gap-3 text-[11px] mt-2">
          <div className="bg-muted/60 rounded-lg p-3 space-y-1">
            <p className="text-muted-foreground">Current stage</p>
            <p className="font-semibold">Hiring manager interview</p>
            <p className="text-muted-foreground">
              Completed tech screen · score 4.6/5
            </p>
          </div>
          <div className="bg-muted/60 rounded-lg p-3 space-y-1">
            <p className="text-muted-foreground">Next action</p>
            <p className="font-semibold">Panel + case study</p>
            <p className="text-muted-foreground">
              Auto reminder 24h before slot
            </p>
          </div>
        </div>
      </div>
    </SwapCard>

    {/* Pipeline Board Card */}
    <SwapCard customClass="bg-card border-border shadow-2xl overflow-hidden">
      <div className="w-full h-full p-6 flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
              Pipeline · Active jobs
            </p>
            <p className="text-lg font-semibold">Recruitment Kanban</p>
          </div>
          <span className="text-[11px] px-2 py-1 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/30">
            Live SLAs
          </span>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-3 gap-3 text-xs">
          {[
            {
              label: "Screening",
              count: 6,
              color: "border-blue-500/40",
              items: ["Frontend Engineer", "Data Analyst"],
            },
            {
              label: "Interview",
              count: 4,
              color: "border-purple-500/40",
              items: ["Product Designer", "DevOps Engineer"],
            },
            {
              label: "Offer",
              count: 2,
              color: "border-emerald-500/40",
              items: ["Sales Lead", "QA Engineer"],
            },
          ].map((col) => (
            <div
              key={col.label}
              className={`bg-muted/60 rounded-lg p-3 border ${col.color} flex flex-col gap-2`}
            >
              <p className="font-medium flex items-center justify-between">
                <span>{col.label}</span>
                <span className="text-[11px] text-muted-foreground">
                  {col.count}
                </span>
              </p>
              <div className="space-y-1.5">
                {col.items.map((title) => (
                  <div
                    key={title}
                    className="bg-card rounded px-2 py-1 flex items-center justify-between gap-2"
                  >
                    <p className="truncate">{title}</p>
                    <span className="text-[10px] text-muted-foreground">
                      3 candidates
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer row */}
        <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>Next SLA breach in 3h · 2 roles at risk</span>
          </div>
          <div className="flex items-center gap-1">
            <Zap className="w-3 h-3 text-yellow-400" />
            <span>5 automations triggered today</span>
          </div>
        </div>
      </div>
    </SwapCard>

    {/* Finance / ROI Card */}
    <SwapCard customClass="bg-card border-border shadow-2xl overflow-hidden">
      <div className="w-full h-full p-6 flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
              Finance · Hiring spend
            </p>
            <p className="text-lg font-semibold">Recruitment ROI</p>
          </div>
          <DollarSign className="w-4 h-4 text-blue-500" />
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-3 gap-3 text-xs">
          <div className="bg-muted/60 rounded-lg p-3 space-y-1">
            <p className="text-muted-foreground text-[11px]">Cost / hire</p>
            <p className="text-lg font-semibold">₹18k</p>
            <p className="text-[11px] text-emerald-500 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              <span>-22% vs last Q</span>
            </p>
          </div>
          <div className="bg-muted/60 rounded-lg p-3 space-y-1">
            <p className="text-muted-foreground text-[11px]">Saved / month</p>
            <p className="text-lg font-semibold text-emerald-500">₹2.4L</p>
            <p className="text-[11px] text-muted-foreground">
              Automation + vendor cuts
            </p>
          </div>
          <div className="bg-muted/60 rounded-lg p-3 space-y-1">
            <p className="text-muted-foreground text-[11px]">Automation</p>
            <p className="text-lg font-semibold">63%</p>
            <p className="text-[11px] text-muted-foreground">
              Manual tasks replaced
            </p>
          </div>
        </div>

        {/* Trend bars */}
        <div className="mt-3">
          <p className="text-xs font-medium text-muted-foreground mb-2">
            Monthly spend trend
          </p>
          <div className="flex items-end gap-2 h-20">
            {[60, 52, 48, 42, 37, 33].map((h, i) => (
              <div key={i} className="flex-1 flex justify-center">
                <div
                  className="w-2 rounded-t-full bg-gradient-to-t from-blue-500 to-emerald-500"
                  style={{ height: `${h}%` }}
                />
              </div>
            ))}
          </div>
          <div className="mt-2 flex justify-between text-[11px] text-muted-foreground">
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
            <span>Jan</span>
          </div>
        </div>

        {/* Footer stats */}
        <div className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground">
          <div className="flex flex-col gap-0.5">
            <span>Top source: Referrals (41%)</span>
            <span>Agency cost reduced to 9% of hires</span>
          </div>
          <span className="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/30">
            On track vs budget
          </span>
        </div>
      </div>
    </SwapCard>
  </CardSwap>
</div>


          </div>
        </div>
      </section>


{/* Suites Section (Links) */}
<section className="py-24 bg-gradient-to-b from-background to-muted/20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
        Comprehensive Business OS
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        Streamline recruitment, human resources, employee verification, sales pipeline management, and financial operations without juggling multiple tools. One login, one dashboard, complete control.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
      {[
        {
          id: "general",
          title: "People Suite",
          logoLight: "/xrilic-logos/black/Xrilic.B.people.svg",
          logoDark: "/xrilic-logos/white/Xrilic.W.people.svg",
          description: "Centralize HR operations, employee directory, and workforce management.",
          features: ["HR Dashboard", "Goal Tracking", "Timesheets & Leave", "Approval Workflows"],
          link: "/suites/general", 
          color: "text-primary",
          borderColor: "border-primary/20",
          hoverBorder: "hover:border-primary/50",
          iconColor: "text-primary"
        },
        {
          id: "hiring",
          title: "Hiring Suite",
          logoLight: "/logo/Xrilic Recruit.svg",
          logoDark: "/xrilic-logos/white/Xrilic.W.recruit.svg",
          description: "Automate candidate sourcing, tracking, and placement with AI precision.",
          features: ["AI Matching", "Job Dashboard", "Bench Management", "Client Portal"],
          link: "/suites/hiring",
          color: "text-purple-500",
          borderColor: "border-purple-500/20",
          hoverBorder: "hover:border-purple-500/50",
          iconColor: "text-purple-500"
        },
        {
          id: "verification",
          title: "Verification Suite",
          logoLight: "/logo/Xrilic Verify Black.svg",
          logoDark: "/xrilic-logos/white/Xrilic.W.verify.svg",
          description: "Run automated background checks and maintain compliance at scale.",
          features: ["Identity Verification", "Employment History", "UAN Checks", "Credit Analytics"],
          link: "/suites/verification",
          color: "text-emerald-500",
          borderColor: "border-emerald-500/20",
          hoverBorder: "hover:border-emerald-500/50",
          iconColor: "text-emerald-500"
        },
        {
          id: "sales",
          title: "Sales Suite",
          logoLight: "/logo/Xrilic CRM.svg",
          logoDark: "/xrilic-logos/white/Xrilic.W.crm.svg",
          description: "Build strong client partnerships with comprehensive company and contact management.",
          features: ["Pipeline Kanban", "Apollo.io Integration", "Contact Management", "List Segmentation"],
          link: "/suites/sales",
          color: "text-pink-500",
          borderColor: "border-pink-500/20",
          hoverBorder: "hover:border-pink-500/50",
          iconColor: "text-pink-500"
        },
        {
          id: "finance",
          title: "Finance Suite",
          logoLight: "/logo/Xrilic Books.svg",
          logoDark: "/xrilic-logos/white/Xrilic.W.books.svg",
          description: "Control your entire financial operation with integrated invoicing and payroll.",
          features: ["Revenue Dashboard", "Auto Invoicing", "Payroll Processing", "Expense Tracking"],
          link: "/suites/finance",
          color: "text-blue-500",
          borderColor: "border-blue-500/20",
          hoverBorder: "hover:border-blue-500/50",
          iconColor: "text-blue-500"
        },
      ].map((suite, index) => {
        // Correctly choose logo based on theme and mount status
        const currentLogo = mounted && resolvedTheme === "dark" ? suite.logoDark : suite.logoLight;
        
        return (
          <Link key={index} href={suite.link} className="group h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`h-full p-8 bg-card rounded-xl border ${suite.borderColor} ${suite.hoverBorder} transition-all shadow-sm hover:shadow-lg flex flex-col`}
            >
              <div className="h-10 w-fit mb-6">
                <img 
                  src={currentLogo} 
                  alt={suite.title} 
                  className="h-14 w-auto object-contain transition-opacity duration-300"
                />
              </div>
              
              <p className="text-muted-foreground mb-6 flex-grow">{suite.description}</p>
              <ul className="space-y-3 mb-8">
                {suite.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className={`w-4 h-4 ${suite.iconColor} flex-shrink-0`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className={`mt-auto flex items-center font-semibold ${suite.color} transition-colors`}>
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          </Link>
        )
      })}
    </div>
  </div>
</section>

      {/* Ready to Transform Your Hiring? Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900/20 via-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Hiring?</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join thousands of companies hiring better, faster, and smarter with AI
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8" onClick={() => openModal("sales")}>
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10 bg-transparent"
                onClick={() => openModal("demo")}
              >
                Schedule Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 text-gray-400 hover:bg-gray-800 bg-transparent"
                onClick={() => openModal("sales")}
              >
                Talk to Sales
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>7-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
         {/* CHANGE 3: Render the new modal */}
      <ActionModal 
        isOpen={modalState.isOpen} 
        onClose={closeModal} 
        defaultTab={modalState.tab} 
      />
    </div>
  )
}

function FeatureSection({
  badge,
  title,
  features,
  capabilities,
  visualCard,
  reverse = false,
}: {
  badge: { logo: string; text: string; color: string; id: string }
  title: string
  features: { title: string; description: string }[]
  capabilities: string[]
  visualCard: React.ReactNode
  reverse?: boolean
}) {
  return (
    <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>
      {/* TEXT SIDE */}
      <div className={reverse ? "lg:order-2" : ""}>
         {/* <div
          className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-background border border-${badge.color}/20 mb-6 shadow-sm`}
        >
          <img 
            src={badge.logo} 
            alt="" 
            className="w-fit h-12 object-contain " 
          />
          <span className="text-sm font-semibold tracking-wide uppercase">{badge.text}</span>
        </div> */}
        <h3 className="text-3xl md:text-4xl font-bold mb-6">{title}</h3>

        <div className="space-y-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <h4 className="text-xl font-semibold mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                <CheckCircle2 className={`w-5 h-5 text-${badge.color}`} />
                {feature.title}
              </h4>
              <p className="text-muted-foreground ml-7">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <h5 className="text-sm font-medium text-muted-foreground mb-3">Featured capabilities</h5>
          <div className="flex flex-wrap gap-2">
            {capabilities.map((cap, index) => (
              <span
                key={cap}
                className={`px-3 py-1 text-xs rounded-full bg-${badge.color}/10 text-${badge.color} border border-${badge.color}/20 cursor-default hover:scale-105 transition-transform`}
              >
                {cap}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* VISUAL CARD SIDE */}
      <div className={reverse ? "lg:order-1" : ""}>
        {visualCard}
      </div>
    </div>
  )
}
// content