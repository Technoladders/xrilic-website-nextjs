"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Sparkles,
  Target,
  MessageSquare,
  Calendar,
  BarChart3,
  Clock,
  Users,
  TrendingUp,
  CheckCircle2,
  Zap,
  Search,
  Filter,
  Award,
  Building2,
  Stethoscope,
  Landmark,
  Rocket,
  ChevronDown,
  ArrowRight,
  Star,
} from "lucide-react"
import Link from "next/link"

export default function HiringSuitePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const faqs = [
    {
      question: "How does AI candidate matching work?",
      answer:
        "Our AI analyzes job requirements, candidate profiles, skills, experience, and cultural fit indicators to provide match scores. The system learns from your hiring decisions to improve recommendations over time.",
    },
    {
      question: "Can I integrate with my existing ATS?",
      answer:
        "Yes! Hiring Suite integrates with major ATS platforms including Greenhouse, Lever, Workday, and more. We also offer API access for custom integrations.",
    },
    {
      question: "What job boards do you source from?",
      answer:
        "We aggregate candidates from 50+ job boards including LinkedIn, Indeed, Monster, Dice, and niche industry platforms. You can also add custom sources.",
    },
    {
      question: "How accurate is the AI matching?",
      answer:
        "Our AI achieves 94% matching accuracy based on customer data. The system continuously learns and improves based on your hiring outcomes and feedback.",
    },
    {
      question: "Is there a limit on candidate profiles?",
      answer:
        "Limits vary by plan. Starter plans include up to 1,000 active candidates, while Enterprise plans offer unlimited candidates with advanced features.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "Most teams are up and running within 24-48 hours. Our onboarding team provides setup assistance, training, and integration support.",
    },
    {
      question: "Can multiple recruiters use the system?",
      answer:
        "Yes! Hiring Suite supports team collaboration with role-based permissions, shared candidate pools, and activity tracking across your recruitment team.",
    },
    {
      question: "What kind of analytics do you provide?",
      answer:
        "We provide comprehensive metrics including time-to-hire, source effectiveness, candidate pipeline health, interviewer performance, and custom KPIs tailored to your needs.",
    },
  ]

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-background" />
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
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">AI-Powered Recruitment</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance"
            >
              Hiring Suite
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 text-balance"
            >
              Automate candidate sourcing and matching with AI precision
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-gray-400 mb-10 max-w-3xl mx-auto text-pretty"
            >
              Reduce hiring time by 60% while finding better candidates. Let AI handle sourcing, screening, and matching
              while you focus on building relationships with top talent.
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
                  <div className="text-4xl font-bold text-purple-400 mb-2">60%</div>
                  <div className="text-sm text-gray-400">Faster Hiring</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-400 mb-2">94%</div>
                  <div className="text-sm text-gray-400">Match Accuracy</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-400 mb-2">70%</div>
                  <div className="text-sm text-gray-400">Less Manual Work</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Hiring Challenge</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Traditional recruitment is slow, manual, and inefficient. Here's what teams struggle with:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Clock,
                title: "Time-Consuming Sourcing",
                description:
                  "Hours spent manually searching job boards and reviewing hundreds of unqualified candidates.",
              },
              {
                icon: Filter,
                title: "Poor Candidate Matching",
                description: "Difficulty identifying candidates who truly fit role requirements and company culture.",
              },
              {
                icon: Users,
                title: "Scattered Communication",
                description: "Lost emails, missed follow-ups, and inconsistent candidate experience across channels.",
              },
              {
                icon: BarChart3,
                title: "Limited Visibility",
                description: "No clear insights into pipeline health, bottlenecks, or recruiter performance metrics.",
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
     <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Powerful Features</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to transform your hiring process with AI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Sparkles,
                title: "AI Candidate Matching",
                description:
                  "Advanced algorithms analyze skills, experience, and culture fit to recommend the best candidates for each role.",
              },
              {
                icon: Search,
                title: "Automated Sourcing",
                description:
                  "Automatically discover and aggregate candidates from 50+ job boards and professional networks.",
              },
              {
                icon: MessageSquare,
                title: "Smart Communication",
                description:
                  "AI-powered email templates, automated follow-ups, and multi-channel messaging keep candidates engaged.",
              },
              {
                icon: Calendar,
                title: "Interview Scheduling",
                description:
                  "Intelligent calendar integration syncs with interviewer availability and automates scheduling coordination.",
              },
              {
                icon: Target,
                title: "Skills Assessment",
                description:
                  "Built-in technical assessments and custom evaluation forms to qualify candidates efficiently.",
              },
              {
                icon: BarChart3,
                title: "Hiring Analytics",
                description:
                  "Real-time dashboards track pipeline metrics, time-to-hire, source effectiveness, and team performance.",
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description:
                  "Share candidate profiles, feedback, and notes across your recruitment team with role-based access.",
              },
              {
                icon: Zap,
                title: "Workflow Automation",
                description:
                  "Create custom hiring workflows with automated actions, notifications, and stage progressions.",
              },
              {
                icon: Award,
                title: "Candidate Scoring",
                description:
                  "Objective scoring system ranks candidates based on customizable criteria and hiring priorities.",
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
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get started in minutes and transform your hiring process
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 via-purple-500 to-purple-600 hidden lg:block" />

            <div className="space-y-12">
              {[
                {
                  step: 1,
                  icon: Target,
                  title: "Define Your Requirements",
                  description:
                    "Create job postings with detailed requirements, skills, and culture fit criteria. Our AI learns your preferences.",
                },
                {
                  step: 2,
                  icon: Search,
                  title: "AI Sources Candidates",
                  description:
                    "Our system automatically searches 50+ platforms, aggregates candidates, and ranks them by match score.",
                },
                {
                  step: 3,
                  icon: Filter,
                  title: "Review Top Matches",
                  description:
                    "Get AI-curated shortlists with detailed match explanations. Review profiles and qualification summaries.",
                },
                {
                  step: 4,
                  icon: MessageSquare,
                  title: "Engage & Schedule",
                  description:
                    "Send personalized outreach, automate follow-ups, and schedule interviews with integrated calendar tools.",
                },
                {
                  step: 5,
                  icon: CheckCircle2,
                  title: "Track & Hire",
                  description:
                    "Monitor candidate progress, collect team feedback, and make data-driven hiring decisions with confidence.",
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
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Measurable Results</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join companies achieving breakthrough hiring metrics
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                metric: "60% Faster",
                title: "Reduce Time-to-Hire",
                description: "Cut your hiring timeline from weeks to days with automated sourcing and AI matching.",
              },
              {
                icon: Target,
                metric: "94% Accuracy",
                title: "Better Candidate Quality",
                description: "AI precision matching ensures you interview only the most qualified candidates.",
              },
              {
                icon: TrendingUp,
                metric: "3x More",
                title: "Increase Productivity",
                description: "Each recruiter can handle 3x more requisitions with automation and AI assistance.",
              },
              {
                icon: Users,
                metric: "Save 10 hrs/week",
                title: "Reduce Manual Work",
                description: "Eliminate repetitive tasks like resume screening and interview scheduling.",
              },
              {
                icon: Award,
                metric: "40% Higher",
                title: "Improve Offer Acceptance",
                description: "Better candidate experience and engagement leads to more accepted offers.",
              },
              {
                icon: BarChart3,
                metric: "Real-Time",
                title: "Data-Driven Decisions",
                description: "Access live metrics and insights to optimize your hiring strategy continuously.",
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
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for Your Industry</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Trusted by leading organizations across multiple sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Rocket,
                industry: "Technology",
                description:
                  "Hire engineers, designers, and product talent 60% faster with AI-powered technical screening.",
              },
              {
                icon: Stethoscope,
                industry: "Healthcare",
                description:
                  "Find qualified medical professionals with credential verification and specialized skill matching.",
              },
              {
                icon: Landmark,
                industry: "Finance",
                description:
                  "Source compliance-ready financial professionals with automated background checks and certifications.",
              },
              {
                icon: Building2,
                industry: "Startups",
                description:
                  "Build your team quickly with lean hiring processes and AI assistance without large HR teams.",
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
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Seamless Integrations</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Connect with the tools you already use</p>
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
                "LinkedIn",
                "Indeed",
                "Greenhouse",
                "Lever",
                "Workday",
                "BambooHR",
                "Slack",
                "Teams",
                "Gmail",
                "Outlook",
                "Zoom",
                "Calendly",
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
                  <span className="text-sm font-medium text-gray-300">{tool}</span>
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
              <h3 className="text-lg font-semibold mb-3">ATS Integration</h3>
              <p className="text-gray-400">Sync with your existing applicant tracking system seamlessly.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 bg-gray-900 rounded-xl border border-gray-800"
            >
              <h3 className="text-lg font-semibold mb-3">Job Board Sync</h3>
              <p className="text-gray-400">Automatically post to 50+ job boards with one click.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 bg-gray-900 rounded-xl border border-gray-800"
            >
              <h3 className="text-lg font-semibold mb-3">API Access</h3>
              <p className="text-gray-400">Build custom integrations with our comprehensive REST API.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Hiring Suite?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how we compare to traditional recruitment methods
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
                    <div className="text-purple-400 font-bold text-lg">Hiring Suite</div>
                  </th>
                  <th className="p-4 text-center text-gray-400">Traditional ATS</th>
                  <th className="p-4 text-center text-gray-400">Manual Process</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "AI Candidate Matching", hiring: true, ats: false, manual: false },
                  { feature: "Automated Sourcing", hiring: true, ats: false, manual: false },
                  { feature: "Multi-Channel Communication", hiring: true, ats: true, manual: false },
                  { feature: "Interview Scheduling", hiring: true, ats: true, manual: false },
                  { feature: "Advanced Analytics", hiring: true, ats: false, manual: false },
                  { feature: "Skills Assessment", hiring: true, ats: false, manual: false },
                  { feature: "Workflow Automation", hiring: true, ats: true, manual: false },
                  { feature: "Job Board Integration", hiring: true, ats: true, manual: false },
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
                      {row.hiring ? (
                        <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto" />
                      ) : (
                        <div className="w-6 h-6 mx-auto text-gray-600">—</div>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.ats ? (
                        <CheckCircle2 className="w-6 h-6 text-gray-500 mx-auto" />
                      ) : (
                        <div className="w-6 h-6 mx-auto text-gray-600">—</div>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.manual ? (
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
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Trusted by Top Teams</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Hear from recruiters transforming their hiring process
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Hiring Suite reduced our time-to-hire from 45 days to just 18 days. The AI matching is incredibly accurate and saves our team hours every week.",
                author: "Sarah Chen",
                role: "VP of Talent",
                company: "TechCorp",
                metric: "60% faster hiring",
              },
              {
                quote:
                  "We've tripled our hiring capacity without adding headcount. The automation handles the repetitive work so our recruiters can focus on relationship building.",
                author: "Michael Rodriguez",
                role: "Head of Recruitment",
                company: "FinanceHub",
                metric: "3x more hires",
              },
              {
                quote:
                  "The candidate quality has improved dramatically. We're interviewing fewer people but making better hires. Our offer acceptance rate went from 65% to 92%.",
                author: "Emily Thompson",
                role: "Talent Director",
                company: "HealthTech Inc",
                metric: "92% offer acceptance",
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
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">Everything you need to know about Hiring Suite</p>
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
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Explore Other Suites</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Build a complete recruitment ecosystem with our integrated suites
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Engagement Suite",
                description: "Manage client relationships and track deployments with automated workflows.",
                link: "/suites/engagement",
              },
              {
                title: "Recruiter Suite",
                description: "Empower individual recruiters with AI tools and personal productivity metrics.",
                link: "/suites/recruiter",
              },
              {
                title: "Analytics Suite",
                description: "Turn recruitment data into actionable insights with powerful visualizations.",
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
