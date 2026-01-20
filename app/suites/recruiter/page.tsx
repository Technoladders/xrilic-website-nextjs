"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  User,
  Brain,
  TrendingUp,
  Target,
  CheckCircle2,
  Zap,
  BarChart3,
  Award,
  Search,
  ChevronDown,
  ArrowRight,
  Star,
  Briefcase,
  Users,
  Building2,
  Clock,
  Mail,
  Database,
  MessageSquare,
  Calendar,
} from "lucide-react"
import Link from "next/link"

export default function RecruiterSuitePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const faqs = [
    {
      question: "How does the personal candidate database work?",
      answer:
        "Maintain your own candidate pipeline with unlimited profiles, notes, tags, and relationship history. AI automatically enriches profiles with relevant information.",
    },
    {
      question: "What AI recommendations do I get?",
      answer:
        "Receive daily candidate recommendations matched to your open roles, suggested next actions, follow-up reminders, and personalized workflow optimizations based on your patterns.",
    },
    {
      question: "Can I track my individual performance?",
      answer:
        "Yes! View your personal dashboard with metrics like placements, time-to-fill, candidate quality scores, client satisfaction ratings, and revenue contributions.",
    },
    {
      question: "Does it integrate with LinkedIn?",
      answer:
        "Recruiter Suite integrates with LinkedIn for profile import, messaging sync, and activity tracking to streamline your sourcing workflow.",
    },
    {
      question: "How do productivity insights help me?",
      answer:
        "AI analyzes your daily activities to identify time-wasters, suggest efficiency improvements, and highlight your most successful sourcing strategies.",
    },
    {
      question: "Can I collaborate with my team?",
      answer:
        "While maintaining your personal pipeline, you can share candidates, coordinate on placements, and access team-wide resources and best practices.",
    },
    {
      question: "Is there mobile access?",
      answer:
        "Yes! Full-featured mobile apps for iOS and Android let you manage candidates, respond to messages, and track metrics anywhere.",
    },
    {
      question: "What training is provided?",
      answer:
        "We offer onboarding videos, weekly webinars, AI coaching tips, and 24/7 support to help you maximize your recruiting productivity.",
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
              <User className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">Individual Productivity Tools</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance"
            >
              Recruiter Suite
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 text-balance"
            >
              Empower recruiters with AI assistance and personal analytics
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-gray-400 mb-10 max-w-3xl mx-auto text-pretty"
            >
              Your personal AI recruiting assistant. Manage your candidate database, get smart recommendations, and
              track your performance with tools designed for individual recruiters.
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
                  <div className="text-4xl font-bold text-purple-400 mb-2">10x Faster</div>
                  <div className="text-sm text-gray-400">Candidate Research</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-400 mb-2">20% More</div>
                  <div className="text-sm text-gray-400">Placements per Recruiter</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-400 mb-2">5 hrs/day</div>
                  <div className="text-sm text-gray-400">Time Saved</div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Recruiter Challenges</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">What holds individual recruiters back?</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Database,
                title: "Disorganized Candidates",
                description:
                  "Scattered notes across multiple tools, lost candidate relationships, and no single source of truth.",
              },
              {
                icon: Clock,
                title: "Time-Consuming Tasks",
                description:
                  "Repetitive manual work like profile research, email outreach, and schedule coordination eats up productive hours.",
              },
              {
                icon: Target,
                title: "Lack of Guidance",
                description:
                  "No personalized coaching on what to work on next, which candidates to prioritize, or how to improve.",
              },
              {
                icon: BarChart3,
                title: "No Performance Visibility",
                description:
                  "Unclear metrics, no benchmarking against peers, and limited insights into what's working.",
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Your Personal Recruiting Arsenal</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">AI-powered tools built for individual recruiters</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Database,
                title: "Personal Candidate Database",
                description:
                  "Maintain unlimited candidate profiles with notes, tags, communication history, and relationship status.",
              },
              {
                icon: Brain,
                title: "AI Recommendations",
                description:
                  "Get smart candidate suggestions matched to your roles based on skills, experience, and fit indicators.",
              },
              {
                icon: Zap,
                title: "Workflow Automation",
                description:
                  "Automate repetitive tasks like follow-up emails, interview reminders, and status updates.",
              },
              {
                icon: BarChart3,
                title: "Performance Dashboard",
                description:
                  "Track your personal metrics: placements, pipeline health, response rates, and revenue contribution.",
              },
              {
                icon: Search,
                title: "Smart Search",
                description:
                  "Instantly find candidates in your database with AI-powered natural language search and filters.",
              },
              {
                icon: Mail,
                title: "Email Integration",
                description:
                  "Sync Gmail or Outlook to automatically log candidate communications and track engagement.",
              },
              {
                icon: Calendar,
                title: "Activity Tracking",
                description:
                  "Monitor your daily activities, time allocation, and identify opportunities for efficiency gains.",
              },
              {
                icon: MessageSquare,
                title: "Communication Templates",
                description:
                  "Access and customize proven email templates for outreach, follow-ups, and candidate nurturing.",
              },
              {
                icon: Award,
                title: "Goal Setting & Coaching",
                description:
                  "Set personal goals, receive AI coaching tips, and get actionable recommendations to hit targets.",
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Your AI-Powered Workflow</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">How Recruiter Suite supercharges your day</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 via-purple-500 to-purple-600 hidden lg:block" />

            <div className="space-y-12">
              {[
                {
                  step: 1,
                  icon: Database,
                  title: "Build Your Pipeline",
                  description:
                    "Import candidates from LinkedIn, job boards, or referrals. AI automatically enriches profiles with relevant data.",
                },
                {
                  step: 2,
                  icon: Brain,
                  title: "Get AI Recommendations",
                  description:
                    "Start your day with AI-curated candidate matches, prioritized follow-ups, and suggested next actions.",
                },
                {
                  step: 3,
                  icon: MessageSquare,
                  title: "Engage Candidates",
                  description:
                    "Send personalized outreach using proven templates. Track opens, responses, and engagement automatically.",
                },
                {
                  step: 4,
                  icon: Calendar,
                  title: "Coordinate & Place",
                  description:
                    "Schedule interviews, collect feedback, and move candidates through your pipeline with simple workflows.",
                },
                {
                  step: 5,
                  icon: BarChart3,
                  title: "Track & Improve",
                  description:
                    "Review your performance metrics, identify improvement areas, and refine your strategy with AI insights.",
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Measurable Impact on Your Success</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Real results from real recruiters</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                metric: "10x Faster",
                title: "Accelerate Research",
                description:
                  "AI-powered candidate enrichment eliminates hours of manual research and profile building.",
              },
              {
                icon: TrendingUp,
                metric: "20% More",
                title: "Increase Placements",
                description: "Higher productivity and better candidate matching lead to more successful placements.",
              },
              {
                icon: Clock,
                metric: "5 hrs/day",
                title: "Save Time Daily",
                description: "Automation and AI assistance free you from repetitive tasks to focus on relationships.",
              },
              {
                icon: Target,
                metric: "85% Higher",
                title: "Boost Response Rates",
                description: "Personalized outreach and optimal timing recommendations improve candidate engagement.",
              },
              {
                icon: Award,
                metric: "Top 10%",
                title: "Join Elite Performers",
                description: "AI coaching and performance insights help you reach top-recruiter status faster.",
              },
              {
                icon: Users,
                metric: "3x Larger",
                title: "Build Better Pipelines",
                description:
                  "Maintain larger, more organized candidate databases without losing track of relationships.",
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Perfect for Every Recruiter</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Whether you're agency or in-house</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Briefcase,
                industry: "Agency Recruiters",
                description:
                  "Manage multiple clients and diverse roles with organized pipelines, client-specific databases, and performance tracking.",
              },
              {
                icon: Building2,
                industry: "Corporate Recruiters",
                description:
                  "Build long-term talent pools, maintain candidate relationships, and track internal mobility opportunities.",
              },
              {
                icon: Users,
                industry: "Independent Recruiters",
                description:
                  "Run your entire recruiting business solo with tools that scale from startup to established practice.",
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Connect Your Tools</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Work seamlessly with platforms you use daily</p>
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
                "Gmail",
                "Outlook",
                "Slack",
                "Zoom",
                "Calendly",
                "HubSpot",
                "Salesforce",
                "Notion",
                "Zapier",
                "API",
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
              <h3 className="text-lg font-semibold mb-3">LinkedIn Sync</h3>
              <p className="text-gray-400">Import profiles, track InMail conversations, and sync activity history.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 bg-gray-900 rounded-xl border border-gray-800"
            >
              <h3 className="text-lg font-semibold mb-3">Email Integration</h3>
              <p className="text-gray-400">Connect Gmail or Outlook to automatically log candidate communications.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 bg-gray-900 rounded-xl border border-gray-800"
            >
              <h3 className="text-lg font-semibold mb-3">CRM Connection</h3>
              <p className="text-gray-400">Link with Salesforce or HubSpot to unify client and candidate data.</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Recruiter Suite?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Purpose-built for individual recruiters</p>
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
                    <div className="text-purple-400 font-bold text-lg">Recruiter Suite</div>
                  </th>
                  <th className="p-4 text-center text-gray-400">Generic ATS</th>
                  <th className="p-4 text-center text-gray-400">Spreadsheets</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Personal Candidate Database", recruiter: true, ats: false, spreadsheets: false },
                  { feature: "AI Recommendations", recruiter: true, ats: false, spreadsheets: false },
                  { feature: "Individual Analytics", recruiter: true, ats: false, spreadsheets: false },
                  { feature: "Workflow Automation", recruiter: true, ats: true, spreadsheets: false },
                  { feature: "Email Integration", recruiter: true, ats: true, spreadsheets: false },
                  { feature: "AI Coaching Tips", recruiter: true, ats: false, spreadsheets: false },
                  { feature: "Mobile Apps", recruiter: true, ats: true, spreadsheets: false },
                  { feature: "Performance Tracking", recruiter: true, ats: false, spreadsheets: false },
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
                      {row.recruiter ? (
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Loved by Recruiters</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Real stories from real recruiters</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Recruiter Suite is like having an assistant who never sleeps. The AI recommendations save me hours every day, and my placement rate has increased by 25%.",
                author: "Jessica Torres",
                role: "Senior Technical Recruiter",
                company: "TechStaff Inc",
                metric: "25% more placements",
              },
              {
                quote:
                  "I can finally manage 300+ candidates without losing track. The personal database and smart search make it easy to find the perfect match instantly.",
                author: "Ryan Cooper",
                role: "Executive Recruiter",
                company: "Independent",
                metric: "300+ candidates managed",
              },
              {
                quote:
                  "The performance analytics opened my eyes. I can see exactly what's working, where I'm spending time, and how to improve. I'm now in my firm's top 10%.",
                author: "Amanda Lee",
                role: "Recruitment Consultant",
                company: "Elite Recruiting",
                metric: "Top 10% performer",
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Become a Top Performer</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join thousands of recruiters using AI to place more candidates faster
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
            <p className="text-xl text-gray-400">Everything you need to know about Recruiter Suite</p>
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
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Expand your capabilities with more tools</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Hiring Suite",
                description: "Automate team-wide candidate sourcing and matching with AI-powered workflows.",
                link: "/suites/hiring",
              },
              {
                title: "Engagement Suite",
                description: "Manage client relationships, contracts, and deployments at scale.",
                link: "/suites/engagement",
              },
              {
                title: "Analytics Suite",
                description: "Visualize recruitment metrics and generate actionable business intelligence.",
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
