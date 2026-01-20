"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, Check, Sparkles, HelpCircle, Users, Briefcase, Shield, TrendingUp, DollarSign } from "lucide-react"
import { motion } from "framer-motion"
import { ActionModal, ActionType } from "@/components/action-modal"



const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small teams getting started with core HR and operations",
    color: "primary",
    features: [
      "Basic Dashboard & Employee Directory",
      "Attendance & Leave Tracking",
      "Standard Goal Setting",
      "Basic Reports",
      "Email Support",
      "Limited Integrations",
    ],
    notIncluded: ["Advanced AI Features", "Full Suite Access", "Custom Workflows", "Priority Support"],
  },
  {
    name: "Professional",
    description: "For growing teams with full access to all suites and advanced tools",
    color: "purple-500",
    popular: true,
    features: [
      "Complete HR, Hiring, Verification, Sales & Finance Suites",
      "AI-Powered Matching & Automation",
      "Advanced Analytics & Reports",
      "Client & Project Management",
      "Priority Email & Chat Support",
      "API Access & Custom Templates",
      "Automated Workflows",
    ],
    notIncluded: ["Dedicated Manager", "Custom Integrations"],
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom requirements and scalability",
    color: "pink-500",
    features: [
      "Everything in Professional",
      "Unlimited Storage & Users",
      "Dedicated Account Manager",
      "Custom Integrations & SSO",
      "Advanced Security & Compliance",
      "SLA Guarantee & Onboarding",
      "24/7 Priority Support",
      "Multi-Region Deployment",
      "Custom Analytics & Reporting",
    ],
    notIncluded: [],
  },
]

const faqs = [
  {
    question: "How does the free trial work?",
    answer:
      "Start with a 7-day free trial of our Professional plan. No credit card required. You'll have full access to all suites and features during the trial period, and you can upgrade, downgrade, or cancel anytime.",
  },
  {
    question: "Can I change plans later?",
    answer:
      "Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, changes take effect at the end of your current billing cycle.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express, Discover), as well as ACH transfers for Enterprise plans. For Enterprise customers, we also offer invoice-based billing.",
  },
  {
    question: "Is there a discount for annual billing?",
    answer:
      "Yes! Annual plans save you approximately 20% compared to monthly billing. Contact sales for detailed quotes and custom pricing options.",
  },
  {
    question: "What happens if I exceed my limits?",
    answer:
      "Starter plans have usage limits. If you need more, upgrade to Professional for unlimited access or contact sales for custom scaling on Enterprise plans.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a 30-day money-back guarantee for all new subscriptions. If you're not satisfied within the first 30 days, contact support for a full refund. Refunds are prorated after the first month.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "Starter plans include email support. Professional plans get priority email and chat support. Enterprise plans receive 24/7 priority support with a dedicated account manager and SLA guarantee.",
  },
]

export default function PricingPage() {
  const [modalState, setModalState] = useState({ isOpen: false, tab: "" })

  const openModal = (tab: string) => setModalState({ isOpen: true, tab })
  const closeModal = () => setModalState({ isOpen: false, tab: "" })

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
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Simple, transparent pricing</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Plans that{" "}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                scale with you
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Start with a 7-day free trial. No credit card required. Cancel anytime.
            </p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 text-base px-8"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="px-4 py-1 rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-white text-sm font-medium shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                <Card
                  className={`p-8 h-full bg-card/50 backdrop-blur transition-all duration-300 ${
                    plan.popular
                      ? "border-primary/50 shadow-xl shadow-primary/20"
                      : "border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
                  }`}
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm">{plan.description}</p>
                  </div>

                  <div className="mb-6">
                    <div className="text-4xl font-bold text-primary">Get Quote</div>
                  </div>

                  <Button
                    size="lg"
                    onClick={() => openModal("sales")}
                    className={`w-full mb-6 ${
                      plan.popular ? "bg-primary hover:bg-primary/90" : "bg-primary/10 hover:bg-primary/20 text-primary"
                    } transition-all duration-300 hover:scale-105`}
                  >
                    Get Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>

                  <div className="space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feature Comparison */}
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Compare all features</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See which plan is right for your team with our detailed feature comparison across all suites
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <Card className="overflow-hidden bg-card/50 backdrop-blur border-border/50">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-4 font-semibold">Feature</th>
                      <th className="text-center p-4 font-semibold">Starter</th>
                      <th className="text-center p-4 font-semibold">Professional</th>
                      <th className="text-center p-4 font-semibold">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "HR Dashboard & Employee Management", values: ["Basic", "Full", "Full + Custom"] },
                      { feature: "Attendance & Leave Tracking", values: [true, true, true] },
                      { feature: "Goals & Performance Analytics", values: ["Standard", "Advanced", "Custom"] },
                      { feature: "Hiring Suite (Jobs & Talent Pool)", values: [false, true, true] },
                      { feature: "AI Candidate Matching", values: [false, true, true] },
                      { feature: "Verification Suite (Background Checks)", values: [false, true, true] },
                      { feature: "Sales Suite (Pipeline & Clients)", values: [false, true, true] },
                      { feature: "Finance Suite (Invoices & Payroll)", values: [false, true, true] },
                      { feature: "Advanced Reports & Analytics", values: [false, true, true] },
                      { feature: "API Access & Integrations", values: ["Limited", "Standard", "Custom"] },
                      { feature: "Storage & Users", values: ["Limited", "Standard", "Unlimited"] },
                      { feature: "Custom Workflows & Security", values: [false, false, true] },
                      { feature: "Dedicated Account Manager", values: [false, false, true] },
                      { feature: "24/7 Priority Support", values: [false, false, true] },
                    ].map((row, index) => (
                      <motion.tr
                        key={row.feature}
                        variants={fadeInUp}
                        transition={{ duration: 0.3, delay: index * 0.03 }}
                        className="border-t border-border/50 hover:bg-muted/20 transition-colors"
                      >
                        <td className="p-4 font-medium">{row.feature}</td>
                        {row.values.map((value, i) => (
                          <td key={i} className="p-4 text-center">
                            {typeof value === "boolean" ? (
                              value ? (
                                <Check className="w-5 h-5 text-primary mx-auto" />
                              ) : (
                                <span className="text-muted-foreground">-</span>
                              )
                            ) : (
                              <span className="text-sm">{value}</span>
                            )}
                          </td>
                        ))}
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Frequently Asked Questions</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Got questions? We've got answers</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about pricing, billing, and plans
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div key={index} variants={fadeInUp} transition={{ duration: 0.4, delay: index * 0.05 }}>
                  <AccordionItem
                    value={`item-${index}`}
                    className="border border-border/50 rounded-lg px-6 bg-card/50 backdrop-blur hover:border-primary/30 transition-colors"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <span className="font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => openModal("sales")}
              className="bg-transparent hover:scale-105 transition-all duration-300"
            >
              Contact Sales
            </Button>
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
            Ready to transform your operations?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Join leading organizations streamlining with xrilic.ai's integrated platform
          </motion.p>
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 text-base px-8"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => openModal("sales")}
              className="text-base px-8 bg-transparent hover:scale-105 hover:border-primary/50 transition-all duration-300"
            >
              Talk to Sales
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Action Modal */}
      <ActionModal 
        isOpen={modalState.isOpen} 
        onClose={closeModal} 
        defaultTab={modalState.tab} 
      />

    </div>
  )
}