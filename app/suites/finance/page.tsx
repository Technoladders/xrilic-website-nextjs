"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard, Users, Target, FileText, Clock, Calendar, CheckCircle2,
  Settings, Shield, BarChart3, ChevronDown, ArrowRight, Star, 
  Briefcase, DollarSign, Activity, Layers, UserCheck, Download, Zap,
  TrendingUp, AlertCircle, CreditCard, Banknote
} from "lucide-react"
import Link from "next/link"
import { ActionModal } from "@/components/action-modal"




export default function FinanceSuitePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  // --- ANIMATION VARIANTS (Unique to Finance Suite) ---
  const fadeInUp = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.7 } }
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
      question: "How does bank reconciliation work?",
      answer: "Automated matching of transactions with bank feeds, flagging discrepancies for quick resolution."
    },
    {
      question: "What payroll features are included?",
      answer: "Full-cycle processing including salary calculations, deductions, tax withholdings, and direct deposits."
    },
    {
      question: "Can I customize invoice templates?",
      answer: "Yes, drag-and-drop designer with branding, multi-currency support, and automated reminders."
    },
    {
      question: "How secure are financial records?",
      answer: "Bank-level encryption, SOC 2 compliance, and audit logs for all transactions and access."
    },
    {
        question: "Does it support multi-entity accounting?",
        answer: "Yes, manage multiple companies, consolidated reporting, and inter-company transactions seamlessly."
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <DollarSign className="w-4 h-4 text-blue-500" />
              <span className="text-blue-500 text-sm font-medium">Financial Operations & Reporting</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Finance Suite
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
              Centralize Financial Operations & Reporting
            </motion.p>

            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto text-pretty">
              Control your entire financial operation with integrated invoicing, expense tracking, and payroll.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => setIsModalOpen(true)} className="bg-blue-500 hover:bg-blue-500/90 text-blue-500-foreground px-8">
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
                  <div className="text-4xl font-bold text-blue-500 mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Automation Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-500 mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Real-time Sync</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-500 mb-2">Zero</div>
                  <div className="text-sm text-muted-foreground">Reconciliation Errors</div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Financial Challenges</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Why traditional finance fails</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Cash Flow Gaps",
                description: "Unpredictable inflows and outflows lead to liquidity crises and missed opportunities.",
              },
              {
                icon: AlertCircle,
                title: "Billing Errors",
                description: "Manual invoicing and tracking result in disputes, delays, and revenue leakage.",
              },
              {
                icon: Clock,
                title: "Manual Payroll",
                description: "Time-consuming calculations and compliance checks strain HR and finance teams.",
              },
              {
                icon: DollarSign,
                title: "Expense Leaks",
                description: "Uncontrolled spending and poor visibility erode margins without detection.",
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
              Everything you need for financial mastery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: LayoutDashboard, title: "Finance Dashboard", desc: "Real-time overview of cash position, P&L, and key metrics." },
              { icon: FileText, title: "Invoice Management", desc: "Create, send, and track invoices with automated reminders." },
              { icon: DollarSign, title: "Expense Tracking", desc: "Receipt capture, approvals, and categorization for compliance." },
              { icon: Users, title: "Payroll Processing", desc: "Automated salary runs, tax filings, and employee self-service." },
              { icon: Download, title: "Bank Statements", desc: "Secure imports and reconciliation with AI-powered matching." },
              { icon: BarChart3, title: "Profitability Analysis", desc: "Break down revenues, costs, and margins by product or team." }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                className="p-6 bg-card rounded-xl border border-blue-500/10 hover:border-blue-500/40 transition-all"
              >
                <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Streamlined Financial Workflow</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              How Finance Suite powers your bottom line
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-blue-500/50 to-blue-500 hidden lg:block" />

            <div className="space-y-12">
              {[
                { step: 1, icon: Banknote, title: "Connect Bank", description: "Link accounts for automatic transaction imports and categorization." },
                { step: 2, icon: FileText, title: "Create Invoice", description: "Generate professional bills with one click and multi-currency support." },
                { step: 3, icon: ArrowRight, title: "Track Payment", description: "Monitor receivables, send reminders, and reconcile upon receipt." },
                { step: 4, icon: Users, title: "Run Payroll", description: "Process salaries, handle deductions, and distribute payslips securely." },
                { step: 5, icon: BarChart3, title: "View Profit", description: "Access dynamic reports and forecasts for strategic decision-making." },
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
                      <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center font-bold text-xl text-blue-500-foreground">
                        {step.step}
                      </div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-lg">{step.description}</p>
                  </div>

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-20 h-20 rounded-2xl bg-card border-2 border-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20"
                    >
                      <step.icon className="w-10 h-10 text-blue-500" />
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
              Real results for finance teams
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, metric: "30%", title: "Better Cash Flow", description: "Predictive insights prevent shortages and optimize working capital." },
              { icon: Clock, metric: "70%", title: "Time Saved", description: "Automation eliminates manual entry and reconciliation drudgery." },
              { icon: DollarSign, metric: "20%", title: "Cost Reduction", description: "Catch leaks early and streamline vendor payments." },
              { icon: CheckCircle2, metric: "100%", title: "Compliance", description: "Built-in tax rules and audit-ready reports." },
              { icon: BarChart3, metric: "Real-Time", title: "Reporting", description: "Instant P&L, balance sheets, and custom KPIs." },
              { icon: Activity, metric: "Zero", title: "Errors", description: "AI validation ensures accuracy in every transaction." },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-8 bg-card rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition-all"
              >
                <benefit.icon className="w-12 h-12 text-blue-500 mb-4" />
                <div className="text-3xl font-bold text-blue-500 mb-2">{benefit.metric}</div>
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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Connects with your finance ecosystem</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Bank APIs", desc: "Direct feeds from major banks for instant transaction syncing." },
              { title: "Accounting Software", desc: "Export to QuickBooks, Xero, and Sage for seamless continuity." },
              { title: "Payment Gateways", desc: "Stripe, PayPal, and ACH integrations for frictionless collections." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-card rounded-xl border border-border hover:border-blue-500/50 transition-colors"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Finance Suite?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Purpose-built for modern finance</p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 text-left text-muted-foreground">Feature</th>
                  <th className="p-4 text-center bg-blue-500/10 border-x border-blue-500/20">
                    <div className="text-blue-500 font-bold text-lg">Finance Suite</div>
                  </th>
                  <th className="p-4 text-center text-muted-foreground">Legacy ERP</th>
                  <th className="p-4 text-center text-muted-foreground">Spreadsheets</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Real-time Reconciliation", ours: true, legacy: false, manual: false },
                  { feature: "Automated Payroll", ours: true, legacy: true, manual: false },
                  { feature: "AI Expense Coding", ours: true, legacy: false, manual: false },
                  { feature: "Multi-currency Invoices", ours: true, legacy: true, manual: false },
                  { feature: "Predictive Analytics", ours: true, legacy: false, manual: false },
                  { feature: "Compliance Automation", ours: true, legacy: true, manual: false },
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
                    <td className="p-4 text-center bg-blue-500/5 border-x border-blue-500/20">
                      <CheckCircle2 className="w-6 h-6 text-blue-500 mx-auto" />
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
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Trusted by Finance Leaders</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Finance Suite has given us complete visibility into our cash flow. No more surprises at month-end.",
                author: "Lisa Wong",
                role: "CFO",
                company: "ScaleUp Inc."
              },
              {
                quote: "Payroll used to take days; now it's hours. The integrations with our banks are flawless.",
                author: "Mark Thompson",
                role: "Finance Director",
                company: "RetailMax"
              },
              {
                quote: "The profitability reports are a revelation. We identified 15% margin leaks in the first week.",
                author: "Aisha Khan",
                role: "Controller",
                company: "TechFlow"
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
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-blue-500 text-blue-500" />)}
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
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-500/20 via-background to-background relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Master Your Finances?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join finance teams transforming operations with intelligent automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" onClick={() => setIsModalOpen(true)} className="bg-blue-500 hover:bg-blue-500/90 text-blue-500-foreground px-8">
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
              className="w-full pl-6 pr-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:border-blue-500"
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
              { title: "Verification Suite", desc: "Secure background checks.", link: "/suites/verification", color: "text-emerald-500" },
              { title: "Sales Suite", desc: "Manage client relationships.", link: "/suites/sales", color: "text-pink-500" }
            ].map((suite, i) => (
              <Link key={i} href={suite.link}>
                <div className="p-8 bg-card rounded-xl border border-border hover:border-blue-500/50 transition-all cursor-pointer hover:-translate-y-1">
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