"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard, Users, Target, FileText, Clock, Calendar, CheckCircle2,
  Settings, Shield, BarChart3, ChevronDown, ArrowRight, Star, 
  Briefcase, DollarSign, Activity, Layers, UserCheck, Search, AlertCircle,
  Scale, Zap, Download, ShieldCheck
} from "lucide-react"
import Link from "next/link"
import { ActionModal } from "@/components/action-modal"

export default function VerificationSuitePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  // --- ANIMATION VARIANTS (Unique to Verification Suite) ---
  const fadeInUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "backOut" } }
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
      question: "What types of background checks are supported?",
      answer: "The Verification Suite handles criminal records, employment history, education credentials, and reference checks with automated workflows."
    },
    {
      question: "How secure is candidate data?",
      answer: "All data is encrypted at rest and in transit, compliant with GDPR, CCPA, and SOC 2 standards. Access is strictly role-based."
    },
    {
      question: "Can I integrate with ATS systems?",
      answer: "Yes, seamless integrations with popular ATS like Workable, Greenhouse, and Lever for automated verification triggers."
    },
    {
      question: "What is the turnaround time for verifications?",
      answer: "Most checks complete within 24-48 hours, with real-time status updates and notifications for delays."
    },
    {
        question: "Are there bulk verification options?",
        answer: "Yes, process up to 1,000 candidates in batches with priority queuing and discounted credits for volume."
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
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span className="text-emerald-500 text-sm font-medium">Background & Compliance Verification</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Verification Suite
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
              Build Trust with Automated Background Verification
            </motion.p>

            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto text-pretty">
              Run comprehensive compliance checks and manage candidate verification at scale.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => setIsModalOpen(true)} className="bg-emerald-500 hover:bg-emerald-500/90 text-emerald-500-foreground px-8">
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
                  <div className="text-4xl font-bold text-emerald-500 mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-emerald-500 mb-2">48hrs</div>
                  <div className="text-sm text-muted-foreground">Avg Turnaround</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-emerald-500 mb-2">Zero</div>
                  <div className="text-sm text-muted-foreground">False Positives</div>
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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Why traditional verification fails</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Search,
                title: "Manual Verification",
                description: "Tedious phone calls, emails, and paperwork slow down the hiring process dramatically.",
              },
              {
                icon: AlertCircle,
                title: "Compliance Risks",
                description: "Outdated checks and inconsistent processes expose companies to legal vulnerabilities.",
              },
              {
                icon: Clock,
                title: "Slow Turnaround",
                description: "Delays in verification lead to lost candidates and prolonged time-to-hire.",
              },
              {
                icon: Shield,
                title: "Data Security",
                description: "Scattered records and insecure handling risk breaches and regulatory fines.",
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
              Everything you need for secure hiring
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Candidate Directory", desc: "Central repository for all verification records and candidate profiles." },
              { icon: BarChart3, title: "Verification Analytics", desc: "Track success rates, turnaround times, and compliance metrics." },
              { icon: DollarSign, title: "Credits Used", desc: "Monitor usage and optimize your verification budget in real-time." },
              { icon: Search, title: "Total Lookups", desc: "Historical data on all checks performed across your organization." },
              { icon: Users, title: "Active Verifiers", desc: "Manage team access and assign verification tasks efficiently." },
              { icon: Scale, title: "Compliance Workflows", desc: "Automated rules for regulatory checks and audit trails." }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                className="p-6 bg-card rounded-xl border border-emerald-500/10 hover:border-emerald-500/40 transition-all"
              >
                <feature.icon className="w-12 h-12 text-emerald-500 mb-4" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Streamlined Verification</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              How Verification Suite ensures trust
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-500 via-emerald-500/50 to-emerald-500 hidden lg:block" />

            <div className="space-y-12">
              {[
                { step: 1, icon: FileText, title: "Request Check", description: "Initiate verification from your ATS or dashboard with candidate details." },
                { step: 2, icon: Users, title: "Candidate Consent", description: "Secure e-signature and consent forms for compliant data collection." },
                { step: 3, icon: Zap, title: "Auto-Verify", description: "AI-powered checks against databases for instant results where possible." },
                { step: 4, icon: Download, title: "Report Generation", description: "Compile detailed, shareable reports with flags and recommendations." },
                { step: 5, icon: CheckCircle2, title: "Decision", description: "Review results and make informed hiring decisions with full audit trail." },
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
                      <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-xl text-emerald-500-foreground">
                        {step.step}
                      </div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-lg">{step.description}</p>
                  </div>

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-20 h-20 rounded-2xl bg-card border-2 border-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20"
                    >
                      <step.icon className="w-10 h-10 text-emerald-500" />
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
              Real results for secure hiring
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Clock, metric: "48 hrs", title: "Faster Hiring", description: "Reduce time-to-hire with automated checks." },
              { icon: ShieldCheck, metric: "100%", title: "Compliance", description: "Fully audited and regulatory-ready processes." },
              { icon: Search, metric: "99%", title: "Accuracy", description: "Minimize risks with verified candidate data." },
              { icon: DollarSign, metric: "50% Less", title: "Verification Costs", description: "Efficient workflows and bulk discounts." },
              { icon: Users, metric: "Zero", title: "Bad Hires", description: "Proactive screening prevents costly mistakes." },
              { icon: BarChart3, metric: "Real-Time", title: "Insights", description: "Dashboard for verification trends and alerts." },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-8 bg-card rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all"
              >
                <benefit.icon className="w-12 h-12 text-emerald-500 mb-4" />
                <div className="text-3xl font-bold text-emerald-500 mb-2">{benefit.metric}</div>
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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Connects with your hiring ecosystem</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "ATS Platforms", desc: "Trigger verifications directly from applicant tracking systems." },
              { title: "HRIS Systems", desc: "Sync verified data into employee records seamlessly." },
              { title: "Notification Tools", desc: "Alerts via Slack, Email, and SMS for status updates." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-card rounded-xl border border-border hover:border-emerald-500/50 transition-colors"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Verification Suite?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Purpose-built for compliant screening</p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 text-left text-muted-foreground">Feature</th>
                  <th className="p-4 text-center bg-emerald-500/10 border-x border-emerald-500/20">
                    <div className="text-emerald-500 font-bold text-lg">Verification Suite</div>
                  </th>
                  <th className="p-4 text-center text-muted-foreground">Manual Agencies</th>
                  <th className="p-4 text-center text-muted-foreground">Basic Tools</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Automated Checks", ours: true, legacy: false, manual: false },
                  { feature: "Real-time Status", ours: true, legacy: false, manual: true },
                  { feature: "Compliance Audits", ours: true, legacy: true, manual: false },
                  { feature: "Bulk Processing", ours: true, legacy: true, manual: false },
                  { feature: "AI Risk Scoring", ours: true, legacy: false, manual: false },
                  { feature: "Secure Storage", ours: true, legacy: true, manual: false },
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
                    <td className="p-4 text-center bg-emerald-500/5 border-x border-emerald-500/20">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500 mx-auto" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Trusted by HR Leaders</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Verification Suite cut our background check time in half while ensuring full compliance. Game-changer for high-volume hiring.",
                author: "Alex Rivera",
                role: "Talent Acquisition Lead",
                company: "TechStart"
              },
              {
                quote: "The analytics dashboard gives us insights we never had before. No more surprises in the hiring pipeline.",
                author: "Jordan Lee",
                role: "HR Manager",
                company: "GlobalCorp"
              },
              {
                quote: "Secure, fast, and scalable. We've verified thousands without a single data issue.",
                author: "Taylor Kim",
                role: "Compliance Officer",
                company: "FinSecure"
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
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-emerald-500 text-emerald-500" />)}
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
      <section className="py-24 bg-gradient-to-br from-emerald-500/20 via-background to-background relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Verify with Confidence?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join companies building trust through automated screening.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" onClick={() => setIsModalOpen(true)} className="bg-emerald-500 hover:bg-emerald-500/90 text-emerald-500-foreground px-8">
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
              className="w-full pl-6 pr-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:border-emerald-500"
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
                <div className="p-8 bg-card rounded-xl border border-border hover:border-emerald-500/50 transition-all cursor-pointer hover:-translate-y-1">
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