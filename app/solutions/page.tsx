"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ArrowRight,
  Users,
  Target,
  Clock,
  CheckCircle2,
  Activity,
  FileText,
  Calendar,
  Shield,
  DollarSign,
  BarChart3,
  Zap,
  Briefcase,
  Search,
  TrendingUp,
  Workflow,
} from "lucide-react"
import { motion } from "framer-motion"
import { ActionModal, ActionType } from "@/components/action-modal"

const solutions = [
  {
    name: "Integrated HR & Workforce Management",
    icon: Users,
    color: "primary",
    description: "Centralize employee lifecycle from onboarding to performance with unified dashboards and automation",
    benefits: [
      "Employee directory, goals, attendance, and leave in one platform",
      "Automated workflows for approvals and compliance",
      "Real-time analytics for team visibility and insights",
    ],
    metrics: {
      timeReduction: "65%",
      efficiencyGain: "90%",
      complianceRate: "99%",
    },
  },
  {
    name: "Advanced Recruitment & Talent Acquisition",
    icon: Briefcase,
    color: "purple-500",
    description: "Streamline hiring with AI matching, pipeline tracking, and talent pools for faster, smarter recruitment",
    benefits: [
      "Job management, candidate sourcing, and interview scheduling",
      "Bench and project resource optimization",
      "Client and opportunity tracking for end-to-end delivery",
    ],
    metrics: {
      timeReduction: "60%",
      hireSpeed: "3x faster",
      matchAccuracy: "95%",
    },
  },
  {
    name: "Compliance & Verification Excellence",
    icon: Shield,
    color: "pink-500",
    description: "Automate background checks and compliance with integrated verification workflows and audit trails",
    benefits: [
      "UAN, EPFO, and identity verifications with real-time status",
      "Credit management and team collaboration tools",
      "Standardized decisioning for risk-free hiring",
    ],
    metrics: {
      timeReduction: "75%",
      verificationSpeed: "80%",
      riskReduction: "98%",
    },
  },
  {
    name: "Sales & Client Relationship Optimization",
    icon: TrendingUp,
    color: "primary",
    description: "Manage prospects, pipelines, and deals with enriched data and visual Kanban for growth acceleration",
    benefits: [
      "Company and contact database with list organization",
      "Pipeline tracking and performance analytics",
      "Collaborative tools for team alignment and forecasting",
    ],
    metrics: {
      timeReduction: "55%",
      closeRate: "40% improvement",
      pipelineVisibility: "92%",
    },
  },
]

const testimonials = [
  {
    company: "TechFlow Inc.",
    industry: "Technology",
    logo: "TF",
    quote:
      "xrilic.ai integrated our recruitment and HR ops, cutting hiring time by 60% while ensuring full compliance across verifications.",
    author: "Sarah Chen",
    role: "Head of Talent",
    metrics: ["60% faster hires", "99% compliance", "₹20L savings"],
  },
  {
    company: "MedHealth Systems",
    industry: "Healthcare",
    logo: "MH",
    quote:
      "From talent pooling to financial tracking, the platform unified our workflows, boosting sales pipeline visibility by 92%.",
    author: "Dr. James Wilson",
    role: "Operations Director",
    metrics: ["92% pipeline insights", "40% close rate up", "500+ hours saved"],
  },
  {
    company: "Global Consulting Partners",
    industry: "Professional Services",
    logo: "GC",
    quote:
      "Seamless verification and sales tools transformed our client management, reducing risks and accelerating deal closures.",
    author: "Michael Torres",
    role: "CEO",
    metrics: ["98% risk reduction", "3x hire speed", "₹30L efficiency"],
  },
]

export default function SolutionsPage() {
  const [selectedSolution, setSelectedSolution] = useState(0)
  const [painPoints, setPainPoints] = useState<string[]>([])
  const [recommendations, setRecommendations] = useState<{ solution: string; features: string[] }[]>([])
  const [showRecommendations, setShowRecommendations] = useState(false)

    const [modalState, setModalState] = useState<{ isOpen: boolean; tab: ActionType }>({
    isOpen: false,
    tab: "demo"
  })
  
  const openModal = (tab: ActionType) => setModalState({ isOpen: true, tab })
  const closeModal = () => setModalState(prev => ({ ...prev, isOpen: false }))

  const painPointOptions = [
    { id: "hr-fragmentation", label: "Scattered HR data across systems", suite: "HR" },
    { id: "manual-attendance", label: "Manual attendance and timesheet tracking", suite: "HR" },
    { id: "leave-complexity", label: "Complex leave approvals and balance management", suite: "HR" },
    { id: "goal-chaos", label: "Lack of goal setting and performance visibility", suite: "HR" },
    { id: "report-gaps", label: "Insufficient HR reporting and analytics", suite: "HR" },
    { id: "hiring-bottlenecks", label: "Slow job posting and candidate sourcing", suite: "Hiring" },
    { id: "pipeline-chaos", label: "Disorganized recruitment pipelines", suite: "Hiring" },
    { id: "talent-visibility", label: "No centralized talent pool or bench management", suite: "Hiring" },
    { id: "client-complexity", label: "Managing client requirements and projects", suite: "Hiring" },
    { id: "verification-delays", label: "Manual background verification processes", suite: "Verification" },
    { id: "compliance-risks", label: "Compliance gaps in candidate screening", suite: "Verification" },
    { id: "credit-management", label: "Inefficient verification credit tracking", suite: "Verification" },
    { id: "company-data", label: "Fragmented company prospect data", suite: "Sales" },
    { id: "contact-chaos", label: "Disorganized contact and lead management", suite: "Sales" },
    { id: "pipeline-loss", label: "Lost visibility in sales pipelines", suite: "Sales" },
    { id: "invoice-chaos", label: "Scattered invoice creation and tracking", suite: "Finance" },
    { id: "expense-failures", label: "Poor expense categorization and reconciliation", suite: "Finance" },
    { id: "payroll-complexity", label: "Manual payroll calculations and processing", suite: "Finance" },
    { id: "bank-challenges", label: "Bank statement reconciliation issues", suite: "Finance" },
  ]

  const handlePainPointToggle = (id: string) => {
    setPainPoints(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    )
  }

  const generateRecommendations = () => {
    const recs: { solution: string; features: string[] }[] = []
    const selectedPainPoints = painPoints

    if (selectedPainPoints.includes("hr-fragmentation") || selectedPainPoints.includes("manual-attendance") || selectedPainPoints.includes("leave-complexity") || selectedPainPoints.includes("goal-chaos") || selectedPainPoints.includes("report-gaps")) {
      recs.push({
        solution: "Integrated HR & Workforce Management",
        features: [
          "Centralized employee directory and status tracking",
          "Automated attendance, timesheet, and leave approval workflows",
          "Goal setting with real-time progress monitoring and reports",
        ]
      })
    }

    if (selectedPainPoints.includes("hiring-bottlenecks") || selectedPainPoints.includes("pipeline-chaos") || selectedPainPoints.includes("talent-visibility") || selectedPainPoints.includes("client-complexity")) {
      recs.push({
        solution: "Advanced Recruitment & Talent Acquisition",
        features: [
          "AI-powered job creation and candidate matching",
          "Visual pipeline stages and bench resource optimization",
          "Client project tracking with deployment management",
        ]
      })
    }

    if (selectedPainPoints.includes("verification-delays") || selectedPainPoints.includes("compliance-risks") || selectedPainPoints.includes("credit-management")) {
      recs.push({
        solution: "Compliance & Verification Excellence",
        features: [
          "Automated UAN/EPFO verifications with real-time status",
          "Standardized compliance workflows and audit trails",
          "Credit consumption tracking and team collaboration",
        ]
      })
    }

    if (selectedPainPoints.includes("company-data") || selectedPainPoints.includes("contact-chaos") || selectedPainPoints.includes("pipeline-loss")) {
      recs.push({
        solution: "Sales & Client Relationship Optimization",
        features: [
          "Enriched company and contact database management",
          "Kanban-style pipeline visualization and list organization",
          "Performance analytics for deal forecasting",
        ]
      })
    }

    if (selectedPainPoints.includes("invoice-chaos") || selectedPainPoints.includes("expense-failures") || selectedPainPoints.includes("payroll-complexity") || selectedPainPoints.includes("bank-challenges")) {
      recs.push({
        solution: "Financial Operations Management",
        features: [
          "Automated invoice generation with tax compliance",
          "Expense categorization and bank reconciliation",
          "Payroll processing with salary breakdowns and reports",
        ]
      })
    }

    setRecommendations(recs.length > 0 ? recs : [{
      solution: "Platform-Wide Automation",
      features: ["Unified workflows across all suites for comprehensive operations"]
    }])
    setShowRecommendations(true)
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen bg-background dark">


      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-purple-500/10 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
     <motion.div
  initial="hidden"
  animate="visible"
  variants={fadeInUp}
  transition={{ duration: 0.6 }}
  className="text-center max-w-4xl mx-auto"
>
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
    <Zap className="w-4 h-4 text-primary" />
    <span className="text-sm text-muted-foreground">End-to-End Business Solutions</span>
  </div>

  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
    Stop switching between{" "}
    <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
      dozens of tools.
    </span>
  </h1>

  <p className="text-xl text-muted-foreground mb-8 text-balance">
    Manage your entire business from one place.
  </p>

  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
    <Button
      size="lg"
      className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 text-base px-8"
    >
      Discover Solutions
      <ArrowRight className="ml-2 w-4 h-4" />
    </Button>
    <Button
      size="lg"
      variant="outline"
      className="text-base px-8 bg-transparent hover:scale-105 transition-all duration-300"
    >
      Find Your Fit
    </Button>
  </div>
</motion.div>
        </div>
      </section>

      {/* Solution Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <motion.button
                  key={solution.name}
                  variants={fadeInUp}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  onClick={() => setSelectedSolution(index)}
                  className={`p-6 rounded-xl border transition-all text-left ${
                    selectedSolution === index
                      ? "bg-primary/10 border-primary/50 shadow-lg shadow-primary/20"
                      : "bg-card border-border hover:border-primary/30"
                  }`}
                >
                  <Icon
                    className={`w-8 h-8 mb-3 ${selectedSolution === index ? "text-primary" : "text-muted-foreground"}`}
                  />
                  <h3 className="text-lg font-semibold mb-2">{solution.name}</h3>
                  <p className="text-sm text-muted-foreground">{solution.description}</p>
                </motion.button>
              )
            })}
          </motion.div>

          {/* Selected Solution Details */}
          <motion.div
            key={selectedSolution}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeInUp} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{solutions[selectedSolution].name}</h2>
              <p className="text-lg text-muted-foreground mb-8">{solutions[selectedSolution].description}</p>

              <div className="space-y-4 mb-8">
                {solutions[selectedSolution].benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    variants={fadeInUp}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300">
                Explore Details
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <Card className="p-8 bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 border-primary/30">
                <h3 className="text-2xl font-bold mb-6">Proven Impact</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Efficiency Boost</span>
                      <span className="text-2xl font-bold text-primary">
                        {solutions[selectedSolution].metrics.efficiencyGain || solutions[selectedSolution].metrics.hireSpeed || "N/A"}
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "90%" }}
                        transition={{ duration: 1 }}
                        className="h-full bg-gradient-to-r from-primary to-purple-500"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Time Savings</span>
                      <span className="text-2xl font-bold text-purple-500">
                        {solutions[selectedSolution].metrics.timeReduction}
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "75%" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Success Metrics</span>
                      <span className="text-2xl font-bold text-pink-500">
                        {solutions[selectedSolution].metrics.complianceRate || solutions[selectedSolution].metrics.matchAccuracy || solutions[selectedSolution].metrics.pipelineVisibility || solutions[selectedSolution].metrics.closeRate}
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "95%" }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="h-full bg-gradient-to-r from-pink-500 to-primary"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Success stories from our customers</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See how businesses across sectors are scaling with xrilic.ai's comprehensive solutions
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.company}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-card/50 backdrop-blur border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300">
                  <Activity className="w-8 h-8 text-primary mb-4" />
                  <p className="text-muted-foreground mb-6 italic">{testimonial.quote}</p>

                  <div className="space-y-2 mb-6">
                    {testimonial.metrics.map((metric) => (
                      <div key={metric} className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm font-medium">{metric}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-6 border-t border-border/50">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white font-bold">
                      {testimonial.logo}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solution Finder */}
      {/* Solution Finder */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Find Your Perfect Solution</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Select your key challenges to discover tailored xrilic.ai solutions that address them directly
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Your Challenges</h3>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPainPoints([])}
                        className="h-8 px-3 text-xs"
                      >
                        Deselect All
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPainPoints(painPointOptions.map(opt => opt.id))}
                        className="h-8 px-3 text-xs"
                      >
                        Select All
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-6 max-h-96 overflow-y-auto pr-2">
                    <div>
                      <h4 className="font-medium mb-3 text-primary flex items-center gap-2">
                        <Users className="w-4 h-4" /> HR & Workforce
                      </h4>
                      {painPointOptions.filter(opt => opt.suite === "HR").map((option) => (
                        <label key={option.id} className="flex items-center gap-2 cursor-pointer mb-2 block">
                          <input
                            type="checkbox"
                            checked={painPoints.includes(option.id)}
                            onChange={() => handlePainPointToggle(option.id)}
                            className="rounded"
                          />
                          <span className="text-sm text-muted-foreground">{option.label}</span>
                        </label>
                      ))}
                    </div>
                    <div>
                      <h4 className="font-medium mb-3 text-purple-500 flex items-center gap-2">
                        <Briefcase className="w-4 h-4" /> Hiring & Talent
                      </h4>
                      {painPointOptions.filter(opt => opt.suite === "Hiring").map((option) => (
                        <label key={option.id} className="flex items-center gap-2 cursor-pointer mb-2 block">
                          <input
                            type="checkbox"
                            checked={painPoints.includes(option.id)}
                            onChange={() => handlePainPointToggle(option.id)}
                            className="rounded"
                          />
                          <span className="text-sm text-muted-foreground">{option.label}</span>
                        </label>
                      ))}
                    </div>
                    <div>
                      <h4 className="font-medium mb-3 text-pink-500 flex items-center gap-2">
                        <Shield className="w-4 h-4" /> Verification & Compliance
                      </h4>
                      {painPointOptions.filter(opt => opt.suite === "Verification").map((option) => (
                        <label key={option.id} className="flex items-center gap-2 cursor-pointer mb-2 block">
                          <input
                            type="checkbox"
                            checked={painPoints.includes(option.id)}
                            onChange={() => handlePainPointToggle(option.id)}
                            className="rounded"
                          />
                          <span className="text-sm text-muted-foreground">{option.label}</span>
                        </label>
                      ))}
                    </div>
                    <div>
                      <h4 className="font-medium mb-3 text-green-500 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" /> Sales & Clients
                      </h4>
                      {painPointOptions.filter(opt => opt.suite === "Sales").map((option) => (
                        <label key={option.id} className="flex items-center gap-2 cursor-pointer mb-2 block">
                          <input
                            type="checkbox"
                            checked={painPoints.includes(option.id)}
                            onChange={() => handlePainPointToggle(option.id)}
                            className="rounded"
                          />
                          <span className="text-sm text-muted-foreground">{option.label}</span>
                        </label>
                      ))}
                    </div>
                    <div>
                      <h4 className="font-medium mb-3 text-blue-500 flex items-center gap-2">
                        <DollarSign className="w-4 h-4" /> Finance & Operations
                      </h4>
                      {painPointOptions.filter(opt => opt.suite === "Finance").map((option) => (
                        <label key={option.id} className="flex items-center gap-2 cursor-pointer mb-2 block">
                          <input
                            type="checkbox"
                            checked={painPoints.includes(option.id)}
                            onChange={() => handlePainPointToggle(option.id)}
                            className="rounded"
                          />
                          <span className="text-sm text-muted-foreground">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <Button
                    onClick={generateRecommendations}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Generate Recommendations
                  </Button>
                </div>

                <motion.div 
                  key={showRecommendations ? recommendations.length : 0}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  {!showRecommendations && (
                    <div className="p-8 rounded-xl bg-muted/50 border border-border flex flex-col items-center justify-center text-center">
                      <Search className="w-12 h-12 text-muted-foreground mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Discover Tailored Workflows</h3>
                      <p className="text-sm text-muted-foreground">Select your challenges above to unlock customized solutions and streamlined workflows that fit your needs perfectly.</p>
                    </div>
                  )}
                  {recommendations.length > 0 && recommendations.map((rec, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 border border-primary/30"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <Workflow className="w-5 h-5 text-primary" />
                        <span className="text-sm font-semibold text-primary">{rec.solution}</span>
                      </div>
                      <ul className="space-y-1">
                        {rec.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-purple-500/10 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center"
        >
          <motion.h2
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-balance"
          >
            Ready to integrate and accelerate?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Unlock unified solutions for your business with xrilic.ai
          </motion.p>
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 text-base px-8"
              onClick={() => openModal("demo")}
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 bg-transparent hover:scale-105 hover:border-primary/50 transition-all duration-300"
              onClick={() => openModal("sales")}
            >
              Talk to Sales
            </Button>
          </motion.div>
        </motion.div>
      </section>


<ActionModal 
        isOpen={modalState.isOpen} 
        onClose={closeModal} 
        defaultTab={modalState.tab} 
      />
    </div>
  )
}