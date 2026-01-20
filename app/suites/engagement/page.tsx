"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Users,
  FileText,
  TrendingUp,
  Clock,
  CheckCircle2,
  DollarSign,
  Calendar,
  BarChart3,
  Target,
  Search,
  Shield,
  RefreshCw,
  MessageSquare,
  ChevronDown,
  ArrowRight,
  Star,
  Building2,
  Briefcase,
  UserCheck,
} from "lucide-react"
import Link from "next/link"

export default function EngagementSuitePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const faqs = [
    {
      question: "How does contract management work?",
      answer:
        "Engagement Suite digitizes and automates contract workflows. Create templates, track signatures, manage renewals, and store all contracts in one secure location with version control.",
    },
    {
      question: "Can I track multiple client deployments?",
      answer:
        "Yes! Track unlimited client deployments with real-time status updates, resource allocation, timesheet management, and performance metrics for each engagement.",
    },
    {
      question: "Does it integrate with accounting software?",
      answer:
        "Engagement Suite integrates with QuickBooks, Xero, NetSuite, and other major accounting platforms for seamless invoicing and revenue tracking.",
    },
    {
      question: "How are timesheets managed?",
      answer:
        "Consultants submit timesheets through mobile or web apps. Managers can review, approve, and sync with payroll and billing systems automatically.",
    },
    {
      question: "Can clients access the portal?",
      answer:
        "Yes! Client portal provides transparency into deployment status, timesheets, invoices, and performance metrics without exposing internal operations.",
    },
    {
      question: "What reports are available?",
      answer:
        "Generate revenue forecasts, utilization rates, margin analysis, client health scores, and custom reports with exportable data and scheduled delivery.",
    },
    {
      question: "Is there mobile access?",
      answer:
        "Engagement Suite offers native iOS and Android apps for on-the-go timesheet approvals, deployment updates, and client communication.",
    },
    {
      question: "How does revenue tracking work?",
      answer:
        "Automatically calculate revenue based on contracted rates, logged hours, and milestones. Track actual vs projected revenue with real-time dashboards.",
    },
  ]

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6"
            >
              <Users className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">Client Relationship Management</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance"
            >
              Engagement Suite
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 text-balance"
            >
              Streamline client operations and track deployment pipelines
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-gray-400 mb-10 max-w-3xl mx-auto text-pretty"
            >
              Manage contracts, deployments, timesheets, and revenue analytics in one unified platform. Save 15 hours
              per week with automated approvals and real-time tracking.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10 bg-transparent"
              >
                Book a Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16 p-8 bg-gradient-to-br from-purple-900/20 to-purple-600/10 rounded-2xl border border-purple-500/20"
            >
              <div className="flex flex-wrap justify-center gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-purple-400 mb-2">15 hrs/week</div>
                  <div className="text-sm text-gray-400">Time Saved</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-400 mb-2">Real-Time</div>
                  <div className="text-sm text-gray-400">Deployment Tracking</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
                  <div className="text-sm text-gray-400">Approval Automation</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Client Management Challenges</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Managing client engagements shouldn't be this complicated
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FileText,
                title: "Contract Chaos",
                description: "Paper contracts, lost signatures, missed renewals, and no centralized repository.",
              },
              {
                icon: Clock,
                title: "Manual Timesheets",
                description: "Hours wasted chasing timesheet approvals and reconciling billing discrepancies.",
              },
              {
                icon: Target,
                title: "Deployment Blindspots",
                description: "No visibility into consultant utilization, client satisfaction, or project health.",
              },
              {
                icon: DollarSign,
                title: "Revenue Uncertainty",
                description:
                  "Difficulty forecasting revenue, tracking margins, and identifying profitable engagements.",
              },
            ].map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-xl border border-red-500/20 hover:border-red-500/40 transition-all"
              >
                <problem.icon className="w-12 h-12 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                <p className="text-gray-400">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Complete Engagement Management</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to manage client relationships at scale
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: FileText,
                title: "Contract Management",
                description:
                  "Digital contracts with e-signatures, templates, automated renewals, and compliance tracking.",
              },
              {
                icon: Users,
                title: "Deployment Tracking",
                description: "Real-time visibility into consultant placements, client engagements, and project status.",
              },
              {
                icon: Clock,
                title: "Timesheet Automation",
                description: "Mobile timesheet capture, automated approvals, and seamless payroll integration.",
              },
              {
                icon: DollarSign,
                title: "Revenue Analytics",
                description: "Track actual vs projected revenue, margins, profitability by client and consultant.",
              },
              {
                icon: Calendar,
                title: "Resource Planning",
                description: "Optimize consultant utilization with capacity planning and availability forecasting.",
              },
              {
                icon: MessageSquare,
                title: "Client Portal",
                description:
                  "Give clients transparency into deployments, timesheets, invoices, and performance metrics.",
              },
              {
                icon: Shield,
                title: "Compliance Tracking",
                description: "Monitor certifications, background checks, insurance, and regulatory requirements.",
              },
              {
                icon: RefreshCw,
                title: "Renewal Management",
                description: "Automated alerts for contract renewals, rate negotiations, and engagement extensions.",
              },
              {
                icon: BarChart3,
                title: "Performance Dashboards",
                description: "Real-time KPIs for utilization rates, client satisfaction, and engagement health.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.2)" }}
                className="p-6 bg-gradient-to-br from-purple-900/20 to-purple-600/10 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all"
              >
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">From contract to payment in a seamless workflow</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 via-purple-500 to-purple-600 hidden lg:block" />

            <div className="space-y-12">
              {[
                {
                  step: 1,
                  icon: FileText,
                  title: "Create & Sign Contracts",
                  description:
                    "Use templates or create custom contracts. Send for e-signature and track approval status in real-time.",
                },
                {
                  step: 2,
                  icon: Users,
                  title: "Deploy Consultants",
                  description:
                    "Match consultants to client engagements, set start dates, define roles, and configure billing rates.",
                },
                {
                  step: 3,
                  icon: Clock,
                  title: "Track Time & Progress",
                  description:
                    "Consultants log hours via mobile app. Managers review and approve timesheets with one-click automation.",
                },
                {
                  step: 4,
                  icon: DollarSign,
                  title: "Generate Invoices",
                  description:
                    "Automatically create invoices based on approved timesheets. Sync with accounting systems for payment tracking.",
                },
                {
                  step: 5,
                  icon: BarChart3,
                  title: "Monitor Performance",
                  description:
                    "Track utilization, revenue, margins, and client satisfaction with real-time dashboards and alerts.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center font-bold text-xl">
                        {step.step}
                      </div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-400 text-lg">{step.description}</p>
                  </div>

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center shadow-lg shadow-purple-500/50"
                    >
                      <step.icon className="w-10 h-10 text-white" />
                    </motion.div>
                  </div>

                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Transform Your Operations</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Real results from real customers</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                metric: "15 hrs/week",
                title: "Save Administrative Time",
                description:
                  "Eliminate manual processes with automated approvals, timesheet collection, and invoicing.",
              },
              {
                icon: TrendingUp,
                metric: "28% Higher",
                title: "Increase Utilization",
                description:
                  "Optimize consultant allocation with real-time capacity planning and availability tracking.",
              },
              {
                icon: DollarSign,
                metric: "Real-Time",
                title: "Revenue Visibility",
                description:
                  "Track actual vs projected revenue by client, consultant, and engagement in live dashboards.",
              },
              {
                icon: Target,
                metric: "99% On-Time",
                title: "Improve Billing Accuracy",
                description:
                  "Reduce billing disputes with accurate timesheet tracking and automated invoice generation.",
              },
              {
                icon: Users,
                metric: "35% Faster",
                title: "Speed Up Deployments",
                description:
                  "Streamline consultant placement with digital contracts and automated onboarding workflows.",
              },
              {
                icon: CheckCircle2,
                metric: "100%",
                title: "Contract Compliance",
                description:
                  "Never miss renewals, certifications, or regulatory requirements with automated tracking and alerts.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-8 bg-gradient-to-br from-purple-900/20 to-purple-600/10 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all"
              >
                <benefit.icon className="w-12 h-12 text-purple-400 mb-4" />
                <div className="text-3xl font-bold text-purple-400 mb-2">{benefit.metric}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases / Industries Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Perfect for Your Business</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Trusted by staffing and professional services firms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Building2,
                industry: "Staffing Agencies",
                description:
                  "Manage hundreds of client engagements with automated contract workflows and deployment tracking.",
              },
              {
                icon: Briefcase,
                industry: "Consulting Firms",
                description:
                  "Track project-based engagements, consultant utilization, and profitability by practice area.",
              },
              {
                icon: UserCheck,
                industry: "Professional Services",
                description:
                  "Streamline client operations from proposal to payment with integrated contract and billing management.",
              },
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-gradient-to-br from-purple-900/20 to-purple-600/10 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all"
              >
                <useCase.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{useCase.industry}</h3>
                <p className="text-gray-400">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Seamless Integrations</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Connect with your existing business tools</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-gradient-to-br from-purple-900/20 to-purple-600/10 rounded-xl border border-purple-500/20 mb-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {[
                "QuickBooks",
                "Xero",
                "NetSuite",
                "Salesforce",
                "HubSpot",
                "Slack",
                "Teams",
                "DocuSign",
                "HelloSign",
                "ADP",
                "Gusto",
                "Workday",
              ].map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="w-24 h-24 bg-gray-800/50 rounded-xl flex items-center justify-center border border-gray-700 hover:border-purple-500/50 transition-all"
                >
                  <span className="text-sm font-medium text-gray-300 text-center px-2">{tool}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 bg-gray-900 rounded-xl border border-gray-800"
            >
              <h3 className="text-lg font-semibold mb-3">Accounting Integration</h3>
              <p className="text-gray-400">Sync invoices, payments, and revenue data with your accounting system.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 bg-gray-900 rounded-xl border border-gray-800"
            >
              <h3 className="text-lg font-semibold mb-3">CRM Integration</h3>
              <p className="text-gray-400">Connect client data, opportunities, and engagement history with your CRM.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 bg-gray-900 rounded-xl border border-gray-800"
            >
              <h3 className="text-lg font-semibold mb-3">API Access</h3>
              <p className="text-gray-400">Build custom workflows with our comprehensive REST API and webhooks.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Engagement Suite?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how we compare to traditional client management tools
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-x-auto"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="p-4 text-left text-gray-400">Feature</th>
                  <th className="p-4 text-center bg-gradient-to-br from-purple-900/20 to-purple-600/10 border-x border-purple-500/20">
                    <div className="text-purple-400 font-bold text-lg">Engagement Suite</div>
                  </th>
                  <th className="p-4 text-center text-gray-400">Spreadsheets</th>
                  <th className="p-4 text-center text-gray-400">Generic CRM</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Contract Management", engagement: true, spreadsheets: false, crm: false },
                  { feature: "Deployment Tracking", engagement: true, spreadsheets: false, crm: false },
                  { feature: "Timesheet Automation", engagement: true, spreadsheets: false, crm: false },
                  { feature: "Revenue Analytics", engagement: true, spreadsheets: false, crm: true },
                  { feature: "Client Portal", engagement: true, spreadsheets: false, crm: false },
                  { feature: "Compliance Tracking", engagement: true, spreadsheets: false, crm: false },
                  { feature: "Mobile Access", engagement: true, spreadsheets: false, crm: true },
                  { feature: "Accounting Integration", engagement: true, spreadsheets: false, crm: false },
                ].map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="border-b border-gray-800 hover:bg-gray-900/50"
                  >
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="p-4 text-center bg-gradient-to-br from-purple-900/10 to-purple-600/5 border-x border-purple-500/20">
                      {row.engagement ? (
                        <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto" />
                      ) : (
                        <div className="w-6 h-6 mx-auto text-gray-600">—</div>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.spreadsheets ? (
                        <CheckCircle2 className="w-6 h-6 text-gray-500 mx-auto" />
                      ) : (
                        <div className="w-6 h-6 mx-auto text-gray-600">—</div>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.crm ? (
                        <CheckCircle2 className="w-6 h-6 text-gray-500 mx-auto" />
                      ) : (
                        <div className="w-6 h-6 mx-auto text-gray-600">—</div>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">See what our customers achieve</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Engagement Suite transformed our operations. We went from spending 20 hours per week on timesheet approvals to complete automation. Our billing accuracy is now 99%.",
                author: "David Park",
                role: "COO",
                company: "StaffPro Agency",
                metric: "15 hrs/week saved",
              },
              {
                quote:
                  "Real-time deployment tracking has been a game-changer. We can see exactly who's working where, track utilization, and forecast revenue with confidence.",
                author: "Lisa Martinez",
                role: "VP Operations",
                company: "Consulting Partners",
                metric: "28% higher utilization",
              },
              {
                quote:
                  "The client portal gives our clients full transparency. They can review timesheets, approve hours, and access invoices 24/7. It's improved our relationships dramatically.",
                author: "James Wilson",
                role: "Managing Director",
                company: "ProServe Solutions",
                metric: "99% client satisfaction",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-8 bg-gradient-to-br from-purple-900/20 to-purple-600/10 rounded-xl border border-purple-500/20"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-purple-400 text-purple-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-400">{testimonial.metric}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900/20 via-black to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Streamline Your Operations?</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join staffing and consulting firms managing thousands of engagements effortlessly
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10 bg-transparent"
              >
                Schedule Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 text-gray-400 hover:bg-gray-800 bg-transparent"
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

      {/* FAQ Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">Everything you need to know about Engagement Suite</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500 text-white"
              />
            </div>
          </motion.div>

          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900/50"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-800/50 transition-colors"
                >
                  <span className="font-semibold pr-8">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-purple-400 transition-transform flex-shrink-0 ${
                      openFaq === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? "auto" : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-gray-400">{faq.answer}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 text-gray-400">No FAQs found matching your search.</div>
          )}
        </div>
      </section>

      {/* Related Suites Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Explore Other Suites</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Build a complete recruitment ecosystem</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Hiring Suite",
                description: "Automate candidate sourcing and matching with AI-powered recruitment tools.",
                link: "/suites/hiring",
              },
              {
                title: "Recruiter Suite",
                description: "Empower individual recruiters with AI assistance and productivity analytics.",
                link: "/suites/recruiter",
              },
              {
                title: "Analytics Suite",
                description: "Transform recruitment data into actionable insights with custom dashboards.",
                link: "/suites/analytics",
              },
            ].map((suite, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Link href={suite.link}>
                  <div className="p-8 bg-gradient-to-br from-purple-900/20 to-purple-600/10 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all h-full">
                    <h3 className="text-2xl font-bold mb-4">{suite.title}</h3>
                    <p className="text-gray-400 mb-6">{suite.description}</p>
                    <div className="flex items-center text-purple-400 font-semibold">
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
