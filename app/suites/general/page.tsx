"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard, Users, Target, FileText, Clock, Calendar, CheckCircle2,
  Settings, Shield, BarChart3, ChevronDown, ArrowRight, Star, 
  Briefcase, DollarSign, Activity, Layers, UserCheck
} from "lucide-react"
import Link from "next/link"
import { ActionModal } from "@/components/action-modal"



export default function GeneralSuitePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  // --- ANIMATION VARIANTS (Unique to General Suite) ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  // --- CONTENT DATA ---
  const faqs = [
    {
      question: "Can I manage employees across multiple locations?",
      answer: "Yes, the People Suite supports multi-location management with location-specific holiday calendars, shifts, and policies."
    },
    {
      question: "Is the leave management customizable?",
      answer: "Absolutely. You can define custom leave types, accrual rules, carry-forward policies, and approval workflows."
    },
    {
      question: "How does the goal tracking work?",
      answer: "Goals can be set at organizational, department, and individual levels. Progress is tracked via milestones and updates in real-time."
    },
    {
      question: "Are reports exportable?",
      answer: "Yes, all reports including attendance, leave, and performance data can be exported to Excel, CSV, or PDF formats."
    },
    {
        question: "Does it support role-based access?",
        answer: "Yes, you can define granular permissions for Admins, HR Managers, Team Leads, and Employees."
    }
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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <LayoutDashboard className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">HR Operations & Workforce Management</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              People Suite
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
              Manage your complete workforce from one unified platform
            </motion.p>

            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto text-pretty">
              Streamline all HR operations, employee management, and performance tracking in a single, intuitive dashboard that keeps your entire organization aligned and productive.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => setIsModalOpen(true)} className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" onClick={() => setIsModalOpen(true)} className="bg-background hover:bg-muted">
                Book a Demo
              </Button>
            </motion.div>

            {/* Stats Box */}
            <motion.div
              variants={fadeInUp}
              className="mt-16 p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border"
            >
              <div className="flex flex-wrap justify-center gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Digital Operations</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">30hrs</div>
                  <div className="text-sm text-muted-foreground">Saved Weekly</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">Zero</div>
                  <div className="text-sm text-muted-foreground">Data Redundancy</div>
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Operational Challenges</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Why traditional HR management fails</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Layers,
                title: "Fragmented Data",
                description: "Employee records scattered across spreadsheets, emails, and physical files.",
              },
              {
                icon: Clock,
                title: "Manual Tracking",
                description: "Hours wasted manually calculating attendance, leave balances, and timesheets.",
              },
              {
                icon: Target,
                title: "Misaligned Goals",
                description: "Lack of visibility into individual and department goals leads to poor performance.",
              },
              {
                icon: FileText,
                title: "Compliance Risk",
                description: "Inaccurate records and missed approvals create legal and compliance liabilities.",
              },
            ].map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-card rounded-xl border border-destructive/10 hover:border-destructive/30 transition-all shadow-sm"
              >
                <problem.icon className="w-12 h-12 text-destructive/80 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Core Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to manage your organization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Employee Directory", desc: "Centralized profiles, hierarchy management, and document storage." },
              { icon: Target, title: "Goal Management", desc: "Track objectives, key results (OKRs), and performance milestones." },
              { icon: Clock, title: "Time & Attendance", desc: "Automated timesheets, shift scheduling, and biometric integration." },
              { icon: Calendar, title: "Leave Management", desc: "Custom policies, balance tracking, and approval workflows." },
              { icon: CheckCircle2, title: "Smart Approvals", desc: "Streamlined requests for expenses, leave, and travel." },
              { icon: BarChart3, title: "HR Analytics", desc: "Deep insights into attrition, headcount, and workforce trends." },
              { icon: Settings, title: "User Management", desc: "Control user access, roles, and permissions across the organization." },
              { icon: FileText, title: "Reports Engine", desc: "Comprehensive reports for attendance, performance, and compliance." },
              { icon: Activity, title: "Activity Logs", desc: "Audit trails for all system actions and data changes." }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                className="p-6 bg-card rounded-xl border border-primary/10 hover:border-primary/40 transition-all"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Streamlined Operations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              How People Suite organizes your workplace
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-primary/50 to-primary hidden lg:block" />

            <div className="space-y-12">
              {[
                { step: 1, icon: Users, title: "Onboard & Organize", description: "Add employees, assign roles, and set up your organizational hierarchy in minutes." },
                { step: 2, icon: Target, title: "Set Goals & Policies", description: "Define leave policies, working hours, and performance goals for teams." },
                { step: 3, icon: Clock, title: "Track Daily Activity", description: "Employees log attendance and timesheets. Managers approve requests instantly." },
                { step: 4, icon: BarChart3, title: "Analyze & Optimize", description: "Generate reports to identify trends, improve productivity, and ensure compliance." },
                { step: 5, icon: CheckCircle2, title: "Scale Confidence", description: "Add new locations and departments seamlessly as your organization grows." },
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
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-bold text-xl text-primary-foreground">
                        {step.step}
                      </div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-lg">{step.description}</p>
                  </div>

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-20 h-20 rounded-2xl bg-card border-2 border-primary flex items-center justify-center shadow-lg shadow-primary/20"
                    >
                      <step.icon className="w-10 h-10 text-primary" />
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Measurable Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results for modern organizations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Clock, metric: "30 hrs/week", title: "Admin Time Saved", description: "Automated workflows reduce manual HR tasks significantly." },
              { icon: Target, metric: "95%", title: "Goal Alignment", description: "Employees clearly understand objectives and track progress." },
              { icon: CheckCircle2, metric: "100%", title: "Compliance", description: "Never miss a policy update or statutory requirement." },
              { icon: Users, metric: "40% Lower", title: "Attrition Rate", description: "Better engagement and transparency improves retention." },
              { icon: FileText, metric: "Zero", title: "Paperwork", description: "Fully digital onboarding, document management, and approvals." },
              { icon: Activity, metric: "Real-Time", title: "Workforce Visibility", description: "Know exactly who is working on what, when, and where." },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-8 bg-card rounded-xl border border-primary/20 hover:border-primary/50 transition-all"
              >
                <benefit.icon className="w-12 h-12 text-primary mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{benefit.metric}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Seamless Integrations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Connects with your ecosystem</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Biometric Devices", desc: "Sync attendance data from hardware devices." },
              { title: "Payroll Systems", desc: "Push attendance and leave data for salary processing." },
              { title: "Communication", desc: "Get notifications on Slack, Teams, and Email." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose People Suite?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Purpose-built for modern workforce management</p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 text-left text-muted-foreground">Feature</th>
                  <th className="p-4 text-center bg-primary/10 border-x border-primary/20">
                    <div className="text-primary font-bold text-lg">People Suite</div>
                  </th>
                  <th className="p-4 text-center text-muted-foreground">Legacy HRMS</th>
                  <th className="p-4 text-center text-muted-foreground">Spreadsheets</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Real-time Dashboard", ours: true, legacy: false, manual: false },
                  { feature: "Leave Management", ours: true, legacy: true, manual: false },
                  { feature: "Goal Tracking (OKRs)", ours: true, legacy: false, manual: false },
                  { feature: "Automated Approvals", ours: true, legacy: true, manual: false },
                  { feature: "Advanced Analytics", ours: true, legacy: false, manual: false },
                  { feature: "Document Storage", ours: true, legacy: true, manual: false },
                ].map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-border hover:bg-muted/50"
                  >
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="p-4 text-center bg-primary/5 border-x border-primary/20">
                      <CheckCircle2 className="w-6 h-6 text-primary mx-auto" />
                    </td>
                    <td className="p-4 text-center">
                      {row.legacy ? <CheckCircle2 className="w-6 h-6 text-muted-foreground mx-auto" /> : "-"}
                    </td>
                    <td className="p-4 text-center">
                      {row.manual ? <CheckCircle2 className="w-6 h-6 text-muted-foreground mx-auto" /> : "-"}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Trusted by HR Leaders</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The People Suite completely organized our chaos. We finally have a single source of truth for all employee data.",
                author: "Sarah Jenkins",
                role: "HR Director",
                company: "RetailCo"
              },
              {
                quote: "Goal tracking has transformed our performance reviews. It's transparent, fair, and data-driven.",
                author: "Mike Ross",
                role: "Operations Head",
                company: "LogiTech"
              },
              {
                quote: "The approval workflows saved me 10 hours a week. No more chasing emails for leave requests.",
                author: "Priya Sharma",
                role: "Team Lead",
                company: "Design Studio"
              }
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-card rounded-xl border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-primary text-primary" />)}
                </div>
                <p className="text-muted-foreground mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold">{t.author}</div>
                  <div className="text-sm text-muted-foreground">{t.role}, {t.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/20 via-background to-background relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Centralize HR?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join thousands of companies simplifying their workforce management.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" onClick={() => setIsModalOpen(true)} className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => setIsModalOpen(true)} className="bg-background">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          </div>
          
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-6 pr-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:border-primary"
            />
          </div>

          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="border border-border rounded-lg overflow-hidden bg-card/50">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="font-semibold pr-8">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-muted-foreground animate-in fade-in">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Suites */}
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Explore Other Suites</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Hiring Suite", desc: "Automate recruitment.", link: "/suites/hiring", color: "text-purple-500" },
              { title: "Sales Suite", desc: "Manage client relationships.", link: "/suites/sales", color: "text-pink-500" },
              { title: "Finance Suite", desc: "Control financial ops.", link: "/suites/finance", color: "text-blue-500" }
            ].map((suite, i) => (
              <Link key={i} href={suite.link}>
                <div className="p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all cursor-pointer hover:-translate-y-1">
                  <h3 className="text-2xl font-bold mb-4">{suite.title}</h3>
                  <p className="text-muted-foreground mb-6">{suite.desc}</p>
                  <div className={`flex items-center font-semibold ${suite.color}`}>
                    Learn More <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ActionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} defaultTab="demo" />
    </div>
  )
}