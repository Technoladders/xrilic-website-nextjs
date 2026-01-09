"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  TrendingUp,
  PieChart,
  Target,
  CheckCircle2,
  Search,
  ChevronDown,
  ArrowRight,
  Star,
  Database,
  FileDown,
  RefreshCw,
  Layout,
  Filter,
  DollarSign,
  Users,
  Clock,
  Award,
} from "lucide-react"
import Link from "next/link"

export default function AnalyticsSuitePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const faqs = [
    {
      question: "What metrics can I track?",
      answer:
        "Track time-to-hire, fill rate, source effectiveness, cost-per-hire, candidate pipeline health, recruiter productivity, hiring velocity, offer acceptance rates, and 50+ other KPIs.",
    },
    {
      question: "Can I create custom dashboards?",
      answer:
        "Yes! Build unlimited custom dashboards with drag-and-drop widgets. Save, share, and schedule automated delivery to stakeholders.",
    },
    {
      question: "How does data integration work?",
      answer:
        "Analytics Suite connects to your ATS, HRIS, job boards, and other recruitment tools via API. Data syncs automatically in real-time.",
    },
    {
      question: "Can I export reports?",
      answer:
        "Export any report or dashboard to PDF, Excel, CSV, or PowerPoint. Schedule automatic report delivery via email on a recurring basis.",
    },
    {
      question: "What visualization options are available?",
      answer:
        "Choose from line charts, bar graphs, pie charts, funnels, heatmaps, geographic maps, tables, and custom widgets to visualize your data.",
    },
    {
      question: "Is historical data available?",
      answer:
        "Access unlimited historical data with trend analysis, year-over-year comparisons, and predictive forecasting based on past patterns.",
    },
    {
      question: "Can multiple teams use it?",
      answer:
        "Yes! Create role-based access with team-specific dashboards. Share insights across departments while maintaining data privacy.",
    },
    {
      question: "How accurate are the predictive insights?",
      answer:
        "Our AI models analyze historical patterns to forecast hiring needs, candidate availability, and resource requirements with 85%+ accuracy.",
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
              <BarChart3 className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">Data Visualization & BI</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance"
            >
              Analytics Suite
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 text-balance"
            >
              Transform recruitment data into actionable insights
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-gray-400 mb-10 max-w-3xl mx-auto text-pretty"
            >
              Make data-driven hiring decisions with custom dashboards, real-time metrics, predictive analytics, and
              automated reporting. See exactly what's working and where to optimize.
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
                  <div className="text-4xl font-bold text-purple-400 mb-2">87%</div>
                  <div className="text-sm text-gray-400">Fill Rate Improvement</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-400 mb-2">Real-Time</div>
                  <div className="text-sm text-gray-400">Hiring Velocity Tracking</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
                  <div className="text-sm text-gray-400">Recruitment KPIs</div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Analytics Gap</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Why recruitment data remains underutilized</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Database,
                title: "Data Silos",
                description:
                  "Recruitment data scattered across ATS, spreadsheets, and emails with no unified view of performance.",
              },
              {
                icon: BarChart3,
                title: "Manual Reporting",
                description: "Hours wasted compiling reports manually instead of focusing on strategic improvements.",
              },
              {
                icon: Target,
                title: "Lack of Insights",
                description:
                  "No clear visibility into what's working, which sources perform best, or where bottlenecks exist.",
              },
              {
                icon: TrendingUp,
                title: "No Predictive Power",
                description:
                  "Unable to forecast hiring needs, anticipate challenges, or optimize resource allocation proactively.",
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Powerful Analytics Features</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to understand and optimize your recruiting
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Layout,
                title: "Custom Dashboards",
                description:
                  "Build personalized dashboards with drag-and-drop widgets. Create views for different teams and stakeholders.",
              },
              {
                icon: BarChart3,
                title: "Real-Time KPIs",
                description:
                  "Monitor 50+ recruitment metrics live including time-to-hire, fill rates, and source effectiveness.",
              },
              {
                icon: TrendingUp,
                title: "Predictive Analytics",
                description:
                  "AI-powered forecasting predicts hiring needs, candidate availability, and resource requirements.",
              },
              {
                icon: PieChart,
                title: "Visual Reports",
                description:
                  "Create stunning visualizations with charts, graphs, funnels, heatmaps, and geographic distributions.",
              },
              {
                icon: FileDown,
                title: "Automated Reporting",
                description: "Schedule reports to be automatically generated and delivered to stakeholders via email.",
              },
              {
                icon: Database,
                title: "Data Integration",
                description:
                  "Connect to ATS, HRIS, job boards, and other systems for unified data analysis across platforms.",
              },
              {
                icon: Filter,
                title: "Advanced Filtering",
                description:
                  "Drill down into data with multi-dimensional filters by role, department, location, source, and more.",
              },
              {
                icon: RefreshCw,
                title: "Historical Trends",
                description: "Access unlimited historical data with year-over-year comparisons and trend analysis.",
              },
              {
                icon: Award,
                title: "Benchmarking",
                description: "Compare your metrics against industry standards and identify areas for improvement.",
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
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">From data to decisions in minutes</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 via-purple-500 to-purple-600 hidden lg:block" />

            <div className="space-y-12">
              {[
                {
                  step: 1,
                  icon: Database,
                  title: "Connect Your Data",
                  description:
                    "Integrate with your ATS, HRIS, and recruitment tools. Data syncs automatically in real-time.",
                },
                {
                  step: 2,
                  icon: Layout,
                  title: "Build Dashboards",
                  description:
                    "Choose from pre-built templates or create custom dashboards. Drag and drop widgets to visualize your KPIs.",
                },
                {
                  step: 3,
                  icon: BarChart3,
                  title: "Analyze Metrics",
                  description:
                    "Monitor real-time performance, identify trends, and drill down into specific metrics with advanced filtering.",
                },
                {
                  step: 4,
                  icon: TrendingUp,
                  title: "Get Predictions",
                  description:
                    "Receive AI-powered forecasts for hiring needs, bottlenecks, and optimization opportunities.",
                },
                {
                  step: 5,
                  icon: FileDown,
                  title: "Share Insights",
                  description:
                    "Export reports, schedule automated delivery, and share dashboards with stakeholders across your organization.",
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Drive Better Hiring Outcomes</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Real impact on your recruitment performance</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                metric: "87% Higher",
                title: "Improve Fill Rates",
                description:
                  "Identify and fix bottlenecks in your hiring process with data-driven insights and optimization.",
              },
              {
                icon: Clock,
                metric: "40% Faster",
                title: "Reduce Time-to-Hire",
                description:
                  "Spot inefficiencies, streamline workflows, and accelerate hiring with real-time performance tracking.",
              },
              {
                icon: DollarSign,
                metric: "30% Lower",
                title: "Decrease Cost-per-Hire",
                description: "Optimize source allocation and identify the most cost-effective recruitment channels.",
              },
              {
                icon: TrendingUp,
                metric: "Real-Time",
                title: "Track Hiring Velocity",
                description: "Monitor pipeline health and candidate progression with live dashboards and alerts.",
              },
              {
                icon: Users,
                metric: "25% Better",
                title: "Enhance Team Performance",
                description: "Benchmark recruiters, identify top performers, and share best practices across teams.",
              },
              {
                icon: Award,
                metric: "Predictive",
                title: "Forecast Hiring Needs",
                description: "Plan resources proactively with AI-powered predictions of future hiring requirements.",
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for Enterprise Scale</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Trusted by organizations with complex hiring needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                industry: "Enterprise Organizations",
                description:
                  "Multi-team coordination with centralized reporting, department-specific dashboards, and executive summaries.",
              },
              {
                icon: TrendingUp,
                industry: "High-Volume Hiring",
                description:
                  "Track thousands of positions across locations with real-time visibility into pipeline health and velocity.",
              },
              {
                icon: Award,
                industry: "Data-Driven Teams",
                description:
                  "Organizations committed to continuous improvement with metrics-based optimization and A/B testing.",
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Universal Data Integration</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Connect to any recruitment system</p>
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
                "Greenhouse",
                "Lever",
                "Workday",
                "SAP",
                "Oracle",
                "BambooHR",
                "LinkedIn",
                "Indeed",
                "Tableau",
                "Power BI",
                "Looker",
                "Custom API",
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
              <h3 className="text-lg font-semibold mb-3">Real-Time Sync</h3>
              <p className="text-gray-400">
                Data updates automatically every few minutes for always-current analytics.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 bg-gray-900 rounded-xl border border-gray-800"
            >
              <h3 className="text-lg font-semibold mb-3">Data Warehousing</h3>
              <p className="text-gray-400">
                Connect to Snowflake, BigQuery, or Redshift for enterprise-scale analytics.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 bg-gray-900 rounded-xl border border-gray-800"
            >
              <h3 className="text-lg font-semibold mb-3">Custom API</h3>
              <p className="text-gray-400">Build custom integrations with our comprehensive REST API and webhooks.</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Analytics Suite?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Purpose-built for recruitment intelligence</p>
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
                    <div className="text-purple-400 font-bold text-lg">Analytics Suite</div>
                  </th>
                  <th className="p-4 text-center text-gray-400">Generic BI Tools</th>
                  <th className="p-4 text-center text-gray-400">Spreadsheets</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Recruitment KPIs", analytics: true, bi: false, spreadsheets: false },
                  { feature: "Custom Dashboards", analytics: true, bi: true, spreadsheets: false },
                  { feature: "Predictive Analytics", analytics: true, bi: false, spreadsheets: false },
                  { feature: "Real-Time Data", analytics: true, bi: true, spreadsheets: false },
                  { feature: "ATS Integration", analytics: true, bi: false, spreadsheets: false },
                  { feature: "Automated Reports", analytics: true, bi: true, spreadsheets: false },
                  { feature: "Benchmarking", analytics: true, bi: false, spreadsheets: false },
                  { feature: "Role-Based Access", analytics: true, bi: true, spreadsheets: false },
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
                      {row.analytics ? (
                        <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto" />
                      ) : (
                        <div className="w-6 h-6 mx-auto text-gray-600">—</div>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.bi ? (
                        <CheckCircle2 className="w-6 h-6 text-gray-500 mx-auto" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Data-Driven Success</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">How teams use analytics to win</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Analytics Suite revealed that 60% of our best hires came from just two sources. We reallocated budget and improved our fill rate by 40% in three months.",
                author: "Mark Stevens",
                role: "VP of Talent Acquisition",
                company: "GlobalTech Solutions",
                metric: "40% better fill rate",
              },
              {
                quote:
                  "The predictive analytics helped us anticipate a hiring surge. We ramped up recruiting capacity two months early and met all our Q4 goals ahead of schedule.",
                author: "Jennifer Park",
                role: "Head of TA",
                company: "FinanceFirst Corp",
                metric: "100% on-target hiring",
              },
              {
                quote:
                  "Real-time dashboards gave our executive team visibility they never had. Now they trust our recruitment strategy because we can prove ROI with data.",
                author: "Robert Chen",
                role: "Director of Recruiting",
                company: "InnovateCo",
                metric: "Complete exec buy-in",
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Making Data-Driven Decisions</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Transform your recruitment data into competitive advantage
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
                <span>14-day free trial</span>
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
            <p className="text-xl text-gray-400">Everything you need to know about Analytics Suite</p>
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
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Complete your recruitment platform</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Hiring Suite",
                description: "Automate candidate sourcing and matching with AI-powered recruitment workflows.",
                link: "/suites/hiring",
              },
              {
                title: "Engagement Suite",
                description: "Manage client relationships, contracts, and deployments efficiently.",
                link: "/suites/engagement",
              },
              {
                title: "Recruiter Suite",
                description: "Empower individual recruiters with AI tools and personal performance tracking.",
                link: "/suites/recruiter",
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
