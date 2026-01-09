"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ArrowRight,
  Check,
  X,
  Sparkles,
  BarChart3,
  Users,
  TrendingUp,
  Zap,
  Target,
  Clock,
  Shield,
  Globe,
  MessageSquare,
  Calendar,
  FileText,
  Brain,
  Boxes,
  LineChart,
  LayoutDashboard,
  Briefcase,
  DollarSign,
  Building2
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ActionModal } from "@/components/action-modal"

const features = {
  general: {
    title: "General Suite",
    description: "Centralize all HR operations and workforce management in a unified, intuitive platform that scales with your organization.",
    icon: LayoutDashboard,
    color: "primary",
    features: [
      {
        name: "Employee Directory",
        description: "Maintain a comprehensive, searchable database of employee profiles including organizational hierarchy, contact details, emergency information, and secure document storage for contracts, certifications, and performance reviews.",
        icon: Users,
      },
      {
        name: "Goal Management",
        description: "Set, track, and cascade SMART goals and OKRs across departments and individuals with real-time progress updates, milestone notifications, and collaborative feedback tools to drive alignment and accountability.",
        icon: Target,
      },
      {
        name: "Time & Attendance",
        description: "Implement robust time-tracking with automated timesheets, flexible shift scheduling, geo-fencing for remote teams, and seamless integration with biometric devices or mobile check-ins to ensure accurate payroll inputs.",
        icon: Clock,
      },
      {
        name: "Leave Management",
        description: "Configure custom leave types, accrual rules, and carry-forward policies with multi-level approval workflows, balance forecasting, and automated notifications to minimize administrative overhead and boost employee satisfaction.",
        icon: Calendar,
      },
      {
        name: "Smart Approvals",
        description: "Accelerate decision-making with configurable approval chains for expenses, leaves, purchases, and travel requests, including mobile approvals, audit trails, and integration with expense tracking for full visibility.",
        icon: Check,
      },
      {
        name: "HR Analytics",
        description: "Unlock actionable insights through customizable dashboards analyzing attrition rates, diversity metrics, headcount trends, and engagement scores, with predictive modeling to inform strategic workforce planning.",
        icon: BarChart3,
      },
    ],
  },
  hiring: {
    title: "Hiring Suite",
    description: "Leverage AI-driven recruitment automation to source, screen, and onboard top talent faster while reducing bias and administrative burden across your entire hiring lifecycle.",
    icon: Users,
    color: "purple-500",
    features: [
      {
        name: "AI Candidate Matching",
        description: "Harness advanced machine learning to analyze resumes, job descriptions, and behavioral data, delivering precise candidate-role matches that prioritize skills, experience, cultural alignment, and long-term potential for reduced turnover.",
        icon: Brain,
      },
      {
        name: "Job Dashboard",
        description: "Centralize job requisition management with visual overviews of open positions, application volumes, sourcing channels, and hiring timelines, enabling proactive adjustments to meet diversity goals and budget constraints.",
        icon: Briefcase,
      },
      {
        name: "Interview Scheduling",
        description: "Eliminate coordination chaos with AI-optimized calendar syncing, automated availability polling, timezone adjustments, and integrated video conferencing to ensure seamless, candidate-friendly interview experiences.",
        icon: Calendar,
      },
      {
        name: "Bench Profiles",
        description: "Curate and nurture a talent bench of pre-vetted candidates with detailed skill matrices, availability calendars, and engagement scoring, ready to deploy for urgent roles or seasonal spikes without starting from scratch.",
        icon: Users,
      },
      {
        name: "Communication Automation",
        description: "Craft hyper-personalized outreach, rejection, and offer sequences using dynamic templates, A/B testing, and behavioral triggers to enhance candidate experience and maintain a positive employer brand throughout the process.",
        icon: MessageSquare,
      },
      {
        name: "Performance Analytics",
        description: "Measure and optimize your recruitment funnel with granular metrics on source effectiveness, interviewer bias detection, time-to-hire variances, and quality-of-hire scores to continuously refine your talent acquisition strategy.",
        icon: LineChart,
      },
    ],
  },
  verification: {
    title: "Verification Suite",
    description: "Ensure compliance and build unbreakable trust through automated, secure background checks that scale with high-volume hiring while minimizing risks and turnaround times.",
    icon: Shield,
    color: "emerald-500",
    features: [
      {
        name: "Candidate Directory",
        description: "Build a centralized repository for verification histories with advanced search, status filtering (Verified/Pending/Partial), and bulk actions to streamline audits and reference future hires efficiently.",
        icon: Users,
      },
      {
        name: "UAN Checks",
        description: "Access comprehensive employment verification directly from the UAN database, cross-referencing salary slips, PF contributions, and tenure details to validate claims with government-backed accuracy and speed.",
        icon: Shield,
      },
      {
        name: "ID Verification",
        description: "Perform instant, OCR-powered validation of Aadhaar, PAN, and Passport documents using facial recognition and liveness detection to prevent fraud and ensure KYC compliance from day one.",
        icon: FileText,
      },
      {
        name: "Criminal Record",
        description: "Conduct thorough nationwide court record searches across civil and criminal databases, flagging discrepancies with risk scores and legal summaries to support informed, defensible hiring decisions.",
        icon: FileText,
      },
      {
        name: "Credit Usage",
        description: "Monitor and forecast verification credit consumption with detailed usage reports, tiered pricing alerts, and optimization recommendations to control costs in high-volume environments without compromising quality.",
        icon: DollarSign,
      },
      {
        name: "Compliance Workflows",
        description: "Enforce role-based verification protocols with automated escalation, consent management, and immutable audit logs to meet GDPR, EEOC, and local regulations while reducing liability exposure.",
        icon: Check,
      },
    ],
  },
  sales: {
    title: "Sales Suite (CRM)",
    description: "Transform client interactions into revenue growth with an intuitive CRM that centralizes company data, pipelines, and analytics for unparalleled visibility and efficiency.",
    icon: Briefcase,
    color: "pink-500",
    features: [
      {
        name: "Company Dashboard",
        description: "Gain 360-degree views of client organizations with employee counts, revenue histories, engagement timelines, and bulk import tools for seamless data migration from spreadsheets or legacy systems.",
        icon: Building2,
      },
      {
        name: "People Directory",
        description: "Organize contacts with robust filtering, custom grouping, and real-time enrichment via Apollo.io integrations, including interaction histories and propensity-to-buy signals for targeted prospecting.",
        icon: Users,
      },
      {
        name: "Visual Kanban",
        description: "Visualize and manage sales pipelines with intuitive drag-and-drop boards, stage-specific automations, and collaborative notes to accelerate deal progression and team alignment.",
        icon: LayoutDashboard,
      },
      {
        name: "Custom Lists",
        description: "Create dynamic, rule-based contact lists for segmentation by industry, role, or behavior, enabling personalized nurture campaigns and ABM strategies that boost conversion rates.",
        icon: FileText,
      },
      {
        name: "Lead Scoring",
        description: "Apply predictive scoring models that weigh firmographics, technographics, and engagement data to surface high-intent leads, prioritizing your team's efforts on opportunities most likely to close.",
        icon: Target,
      },
      {
        name: "Sales Analytics",
        description: "Dive into pipeline velocity, win/loss ratios, quota attainment, and forecast accuracy with interactive dashboards and what-if scenarios to refine tactics and hit revenue targets consistently.",
        icon: BarChart3,
      },
    ],
  },
  finance: {
    title: "Finance Suite",
    description: "Streamline end-to-end financial operations with integrated tools for invoicing, expenses, payroll, and reporting that deliver real-time accuracy and strategic foresight.",
    icon: DollarSign,
    color: "blue-500",
    features: [
      {
        name: "Finance Dashboard",
        description: "Monitor key financial health indicators like revenue run rates, expense burn, cash runway, and profitability margins through customizable widgets and trend visualizations for proactive decision-making.",
        icon: LayoutDashboard,
      },
      {
        name: "Invoice Management",
        description: "Generate, customize, and dispatch professional invoices with multi-currency support, automated recurring billing, payment gateways, and dunning sequences to optimize cash collection and reduce AR days.",
        icon: FileText,
      },
      {
        name: "Expense Tracking",
        description: "Capture receipts via mobile OCR, enforce approval hierarchies, categorize spends with AI suggestions, and integrate with credit cards for real-time reconciliation to curb overspending and ensure compliance.",
        icon: ArrowRight,
      },
      {
        name: "Payroll Processing",
        description: "Automate gross-to-net calculations, statutory deductions, tax filings, and payslip distributions across global payrolls, with self-service portals for employees to view and update details securely.",
        icon: Users,
      },
      {
        name: "Bank Reconciliation",
        description: "Import statements from multiple banks, apply rule-based auto-matching, and resolve exceptions with collaborative tools to achieve 99% accuracy in under an hour, eliminating manual errors.",
        icon: Building2,
      },
      {
        name: "Profitability Reports",
        description: "Break down P&L by client, project, or department with variance analysis, scenario modeling, and exportable formats to identify growth levers and cost-saving opportunities at a granular level.",
        icon: BarChart3,
      },
    ],
  },
}

const comparisonData = [
  { feature: "AI Candidate Matching", xrilic: true, competitor1: true, competitor2: false },
  { feature: "Automated Interview Scheduling", xrilic: true, competitor1: false, competitor2: true },
  { feature: "UAN Verification", xrilic: true, competitor1: false, competitor2: false },
  { feature: "Real-Time Analytics", xrilic: true, competitor1: true, competitor2: true },
  { feature: "Payroll Processing", xrilic: true, competitor1: false, competitor2: false },
  { feature: "Deployment Tracking", xrilic: true, competitor1: false, competitor2: false },
  { feature: "Mobile App", xrilic: true, competitor1: true, competitor2: false },
  { feature: "Sales Pipeline (CRM)", xrilic: true, competitor1: false, competitor2: true },
  { feature: "Automated Timesheets", xrilic: true, competitor1: false, competitor2: false },
  { feature: "Predictive Analytics", xrilic: true, competitor1: false, competitor2: false },
]

export default function FeaturesPage() {
  const [selectedSuite, setSelectedSuite] = useState<keyof typeof features>("general")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      },
    },
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Comprehensive Feature Suite</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                run your business
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground mb-8 text-balance">
              Five powerful suites working together to automate HR, Recruitment, Sales, Verification, and Finance.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" onClick={() => setIsModalOpen(true)} className="bg-primary hover:bg-primary/90 text-base px-8">
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
                View Pricing
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Suite Selector */}
      <section className="py-12 bg-card/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {(Object.keys(features) as Array<keyof typeof features>).map((key, index) => {
              const suite = features[key]
              const Icon = suite.icon
              const isActive = selectedSuite === key
              
              const activeClass = isActive 
                ? `bg-${suite.color}/10 border-${suite.color}/50 ring-1 ring-${suite.color}/30 shadow-lg shadow-${suite.color}/20`
                : "bg-card border-border/50 hover:border-primary/30 hover:shadow-md"

              return (
                <motion.button
                  key={key}
                  variants={fadeInUp}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -4, transition: { duration: 0.2 } }}
                  onClick={() => setSelectedSuite(key)}
                  className={`p-4 rounded-xl border transition-all text-left ${activeClass}`}
                >
                  <motion.div
                    animate={{ rotate: isActive ? [0, 5, -5, 0] : 0 }}
                    transition={{ duration: isActive ? 1 : 0, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
                  >
                    <Icon
                      className={`w-6 h-6 mb-3 transition-colors ${isActive ? `text-${suite.color}` : "text-muted-foreground"}`}
                    />
                  </motion.div>
                  <h3 className={`text-sm font-semibold mb-1 transition-colors ${isActive ? "text-foreground" : "text-muted-foreground"}`}>{suite.title}</h3>
                </motion.button>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20 min-h-[600px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSuite}
              initial={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.6, ease: "backOut" } }}
              exit={{ opacity: 0, y: -50, scale: 0.95, filter: "blur(10px)", transition: { duration: 0.4 } }}
              className="max-w-6xl mx-auto"
            >
              <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{features[selectedSuite].title}</h2>
                <p className="text-lg text-muted-foreground">{features[selectedSuite].description}</p>
              </motion.div>

              <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features[selectedSuite].features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <motion.div 
                      key={feature.name} 
                      variants={fadeInUp}
                      whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
                      className="group"
                    >
                      <Card className="p-6 h-full bg-card/80 backdrop-blur-sm border-border/50 group-hover:border-[hsl(var(--${features[selectedSuite].color}-500)/0.3)] group-hover:shadow-xl group-hover:shadow-[hsl(var(--${features[selectedSuite].color}-500)/0.1)] transition-all duration-300 overflow-hidden">
                        <div className={`p-3 rounded-lg bg-[hsl(var(--${features[selectedSuite].color}-500)/0.1)] w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`w-6 h-6 text-[hsl(var(--${features[selectedSuite].color}-500))]`} />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-[hsl(var(--${features[selectedSuite].color}-500))] transition-colors">{feature.name}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                      </Card>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-4">How we compare</motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See how xrilic.ai stacks up against the competition with comprehensive features that others can't match.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <Card className="overflow-hidden bg-card/80 backdrop-blur-sm border-border/50">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-4 font-semibold">Feature</th>
                      <th className="text-center p-4 font-semibold">
                        <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                          xrilic.ai
                        </span>
                      </th>
                      <th className="text-center p-4 font-semibold text-muted-foreground">Competitor A</th>
                      <th className="text-center p-4 font-semibold text-muted-foreground">Competitor B</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <motion.tr
                        key={row.feature}
                        variants={fadeInUp}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ backgroundColor: "hsl(var(--muted)/0.2)" }}
                        className="border-t border-border/50 transition-colors"
                      >
                        <td className="p-4 font-medium">{row.feature}</td>
                        <td className="p-4 text-center">
                          {row.xrilic ? (
                            <motion.div whileHover={{ scale: 1.2 }}><Check className="w-5 h-5 text-primary mx-auto" /></motion.div>
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground mx-auto" />
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {row.competitor1 ? (
                            <Check className="w-5 h-5 text-muted-foreground mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground mx-auto" />
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {row.competitor2 ? (
                            <Check className="w-5 h-5 text-muted-foreground mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground mx-auto" />
                          )}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
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
            Ready to experience all these features?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Start your 14-day free trial today. No credit card required.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 text-base px-8"
              onClick={() => setIsModalOpen(true)}
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 bg-transparent hover:scale-105 hover:border-primary/50 transition-all duration-300"
              onClick={() => setIsModalOpen(true)}
            >
              Talk to Sales
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <ActionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} defaultTab="demo" />
    </div>
  )
}