"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard, Users, Target, FileText, Clock, Calendar, CheckCircle2,
  Settings, Shield, BarChart3, ChevronDown, ArrowRight, Star, 
  Briefcase, DollarSign, Activity, Layers, UserCheck, Download, Zap,
  Eye, AlertCircle, List, Columns
} from "lucide-react"
import Link from "next/link"
import { ActionModal } from "@/components/action-modal"

export default function SalesSuitePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  // --- ANIMATION VARIANTS (Unique to Sales Suite) ---
  const fadeInUp = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "circOut" } }
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
      question: "How does lead scoring work in Sales Suite?",
      answer: "AI-driven scoring based on engagement, fit, and behavior. Automatically prioritizes hot leads for your team."
    },
    {
      question: "Can I import data from other CRMs?",
      answer: "Yes, seamless imports from Salesforce, HubSpot, and CSV files with data deduplication and enrichment."
    },
    {
      question: "What analytics are available?",
      answer: "Pipeline velocity, win rates, forecast accuracy, and custom dashboards for sales performance."
    },
    {
      question: "Is there mobile access for sales reps?",
      answer: "Fully responsive mobile app for on-the-go deal updates, contact management, and activity logging."
    },
    {
        question: "How secure is client data?",
        answer: "Enterprise-grade encryption, GDPR compliance, and role-based access to protect sensitive information."
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
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-pink-500/10 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full mb-6">
              <Briefcase className="w-4 h-4 text-pink-500" />
              <span className="text-pink-500 text-sm font-medium">CRM & Client Relationship Management</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Sales Suite (CRM)
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
              Manage Client Relationships & Company Records
            </motion.p>

            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto text-pretty">
              Build strong client partnerships with comprehensive company and contact management.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => setIsModalOpen(true)} className="bg-pink-500 hover:bg-pink-500/90 text-pink-500-foreground px-8">
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
                  <div className="text-4xl font-bold text-pink-500 mb-2">200%</div>
                  <div className="text-sm text-muted-foreground">Lead Growth</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-pink-500 mb-2">50%</div>
                  <div className="text-sm text-muted-foreground">Faster Closes</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-pink-500 mb-2">Zero</div>
                  <div className="text-sm text-muted-foreground">Lost Deals</div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Sales Challenges</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Why traditional CRM fails</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: AlertCircle,
                title: "Lost Leads",
                description: "Prospects slip through cracks due to poor tracking and follow-up.",
              },
              {
                icon: Layers,
                title: "Disorganized Contacts",
                description: "Scattered data across emails, notes, and multiple tools leads to duplication.",
              },
              {
                icon: Clock,
                title: "Missed Follow-ups",
                description: "Timely nurturing falls off with manual reminders and forgotten tasks.",
              },
              {
                icon: Eye,
                title: "Poor Visibility",
                description: "Lack of pipeline insights hinders accurate forecasting and team alignment.",
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
              Everything you need to close more deals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: LayoutDashboard, title: "Company Dashboard", desc: "Overview of accounts, opportunities, and revenue trends." },
              { icon: Users, title: "People Directory", desc: "Centralized contact profiles with interaction history." },
              { icon: List, title: "My Lists", desc: "Customizable lists for segmentation and targeted campaigns." },
              { icon: Columns, title: "People Kanban", desc: "Visual pipeline management for deals and contacts." },
              { icon: Target, title: "Lead Scoring", desc: "Automated prioritization based on behavior and fit." },
              { icon: BarChart3, title: "Sales Analytics", desc: "Deep insights into performance, forecasts, and trends." }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                className="p-6 bg-card rounded-xl border border-pink-500/10 hover:border-pink-500/40 transition-all"
              >
                <feature.icon className="w-12 h-12 text-pink-500 mb-4" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Streamlined Sales Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              How Sales Suite drives revenue
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 via-pink-500/50 to-pink-500 hidden lg:block" />

            <div className="space-y-12">
              {[
                { step: 1, icon: Download, title: "Import Leads", description: "Bulk upload or API sync from forms, ads, and events." },
                { step: 2, icon: Zap, title: "Enrich Data", description: "Auto-fill company info, contacts, and intent signals." },
                { step: 3, icon: BarChart3, title: "Track Pipeline", description: "Move deals through stages with automated reminders." },
                { step: 4, icon: DollarSign, title: "Close Deals", description: "Generate quotes, e-sign contracts, and log wins." },
                { step: 5, icon: Activity, title: "Analyze Growth", description: "Review metrics to refine strategies and scale." },
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
                      <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center font-bold text-xl text-pink-500-foreground">
                        {step.step}
                      </div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-lg">{step.description}</p>
                  </div>

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-20 h-20 rounded-2xl bg-card border-2 border-pink-500 flex items-center justify-center shadow-lg shadow-pink-500/20"
                    >
                      <step.icon className="w-10 h-10 text-pink-500" />
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
              Real results for sales teams
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Clock, metric: "50%", title: "Faster Closes", description: "Streamlined pipelines accelerate deal velocity." },
              { icon: Target, metric: "3x", title: "Lead Conversion", description: "Smart scoring turns prospects into customers." },
              { icon: DollarSign, metric: "30%", title: "Revenue Growth", description: "Better insights drive upsell opportunities." },
              { icon: Users, metric: "Zero", title: "Dropped Leads", description: "Automated nurturing ensures no opportunity is lost." },
              { icon: BarChart3, metric: "95%", title: "Forecast Accuracy", description: "Data-driven predictions for confident planning." },
              { icon: Activity, metric: "Real-Time", title: "Collaboration", description: "Team-wide visibility into account activities." },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-8 bg-card rounded-xl border border-pink-500/20 hover:border-pink-500/50 transition-all"
              >
                <benefit.icon className="w-12 h-12 text-pink-500 mb-4" />
                <div className="text-3xl font-bold text-pink-500 mb-2">{benefit.metric}</div>
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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Connects with your sales stack</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Email & Calendar", desc: "Sync with Gmail, Outlook, and Google Calendar for seamless scheduling." },
              { title: "Marketing Tools", desc: "Integrate with Mailchimp, HubSpot for lead handoff and nurturing." },
              { title: "Communication", desc: "Slack and Teams notifications for deal updates and alerts." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-card rounded-xl border border-border hover:border-pink-500/50 transition-colors"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Sales Suite?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Purpose-built for revenue teams</p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 text-left text-muted-foreground">Feature</th>
                  <th className="p-4 text-center bg-pink-500/10 border-x border-pink-500/20">
                    <div className="text-pink-500 font-bold text-lg">Sales Suite</div>
                  </th>
                  <th className="p-4 text-center text-muted-foreground">Legacy CRM</th>
                  <th className="p-4 text-center text-muted-foreground">Spreadsheets</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "AI Lead Scoring", ours: true, legacy: false, manual: false },
                  { feature: "Pipeline Automation", ours: true, legacy: true, manual: false },
                  { feature: "Real-time Analytics", ours: true, legacy: false, manual: false },
                  { feature: "Mobile Access", ours: true, legacy: true, manual: false },
                  { feature: "Custom Workflows", ours: true, legacy: true, manual: false },
                  { feature: "Data Enrichment", ours: true, legacy: false, manual: false },
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
                    <td className="p-4 text-center bg-pink-500/5 border-x border-pink-500/20">
                      <CheckCircle2 className="w-6 h-6 text-pink-500 mx-auto" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Trusted by Sales Leaders</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Sales Suite transformed our disorganized pipeline into a revenue machine. Leads don't get lost anymore.",
                author: "Chris Patel",
                role: "VP Sales",
                company: "GrowthHub"
              },
              {
                quote: "The kanban views and analytics have doubled our close rates. It's like having a sales coach in the tool.",
                author: "Emily Chen",
                role: "Sales Director",
                company: "InnoVentures"
              },
              {
                quote: "Easy integrations and mobile access keep our remote team aligned. We've hit quota three months early.",
                author: "Raj Singh",
                role: "Account Executive",
                company: "CloudSync"
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
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-pink-500 text-pink-500" />)}
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
      <section className="py-24 bg-gradient-to-br from-pink-500/20 via-background to-background relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Supercharge Your Sales?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join teams closing deals faster with intelligent CRM.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" onClick={() => setIsModalOpen(true)} className="bg-pink-500 hover:bg-pink-500/90 text-pink-500-foreground px-8">
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
              className="w-full pl-6 pr-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:border-pink-500"
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
              { title: "Finance Suite", desc: "Control financial ops.", link: "/suites/finance", color: "text-blue-500" }
            ].map((suite, i) => (
              <Link key={i} href={suite.link}>
                <div className="p-8 bg-card rounded-xl border border-border hover:border-pink-500/50 transition-all cursor-pointer hover:-translate-y-1">
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