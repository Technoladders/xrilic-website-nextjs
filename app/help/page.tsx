"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, BookOpen, Video, MessageCircle, HelpCircle, CheckCircle2, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { ActionModal, ActionType } from "@/components/action-modal"


const categories = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "Learn the basics and set up your account",
    articles: 12,
    color: "primary",
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step video guides",
    articles: 8,
    color: "purple-500",
  },
  {
    icon: MessageCircle,
    title: "Best Practices",
    description: "Tips from recruitment experts",
    articles: 15,
    color: "pink-500",
  },
  {
    icon: HelpCircle,
    title: "Troubleshooting",
    description: "Solve common issues quickly",
    articles: 20,
    color: "primary",
  },
]

const popularArticles = [
  "How to set up your first job posting",
  "Understanding AI candidate matching scores",
  "Customizing your recruitment workflow",
  "Integrating with your ATS",
  "Managing team permissions and roles",
  "Interpreting analytics dashboard metrics",
]

const faqs = [
  {
    question: "How do I create my first job posting?",
    answer:
      "Navigate to the Hiring Suite dashboard and click 'Create Job Posting'. Fill in the job details including title, description, requirements, and salary range. Our AI will automatically optimize the posting for better candidate matching. Click 'Publish' when ready, and your job will be live across all integrated platforms.",
  },
  {
    question: "What is the AI matching score?",
    answer:
      "The AI matching score is a percentage that represents how well a candidate fits your job requirements. It analyzes skills, experience, education, location, and other factors. Scores above 80% indicate excellent matches, 60-79% are good matches, and below 60% may need manual review. The algorithm improves over time as you provide feedback.",
  },
  {
    question: "How do I invite team members?",
    answer:
      "Go to Settings > Team Management and click 'Invite Member'. Enter their email address and select their role (Admin, Recruiter, or Viewer). They'll receive an invitation email with setup instructions. You can manage permissions and roles anytime from the same page.",
  },
  {
    question: "Can I customize the candidate pipeline stages?",
    answer:
      "Yes! Go to Settings > Pipeline Configuration. You can add, remove, or rename stages to match your recruitment process. Common stages include Applied, Screening, Interview, Offer, and Hired. You can also set automated actions for each stage, like sending emails or scheduling interviews.",
  },
  {
    question: "How does automated interview scheduling work?",
    answer:
      "Connect your calendar (Google Calendar, Outlook, or iCal) in Settings > Integrations. When you move a candidate to the Interview stage, they'll receive an email with available time slots based on your availability. They can book directly, and the meeting is automatically added to both calendars with video conferencing details.",
  },
  {
    question: "What integrations are available?",
    answer:
      "We integrate with major ATS platforms (Greenhouse, Lever, Workday), calendar apps (Google Calendar, Outlook), communication tools (Slack, Microsoft Teams), and job boards (LinkedIn, Indeed, Glassdoor). Check Settings > Integrations for the full list and setup instructions.",
  },
  {
    question: "How do I export candidate data?",
    answer:
      "Go to the Candidates page, select the candidates you want to export, and click 'Export' in the top-right menu. Choose your preferred format (CSV, Excel, or PDF) and select which fields to include. For bulk exports, use the Analytics Suite to create custom reports with scheduled delivery.",
  },
  {
    question: "Can I try xrilic.ai before purchasing?",
    answer:
      "We offer a 7-day free trial with full access to all Professional plan features. No credit card required. You can upgrade, downgrade, or cancel anytime during or after the trial. If you need more time to evaluate, contact our sales team for an extended trial.",
  },
]

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              How can we{" "}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                help you?
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Search our knowledge base or browse categories to find answers
            </p>

            {/* Search Bar */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for help articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-lg bg-background border-border focus:border-primary"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                >
                  <Card className="p-6 text-center bg-card/50 backdrop-blur border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer">
                    <div className="inline-flex p-4 rounded-lg bg-primary/10 mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                    <p className="text-xs text-primary font-medium">{category.articles} articles</p>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Popular Articles */}
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Popular articles</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Most frequently viewed help articles</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto space-y-3"
          >
            {popularArticles.map((article, index) => (
              <motion.div
                key={article}
                variants={fadeInUp}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ x: 8 }}
              >
                <Card className="p-4 bg-card/50 backdrop-blur border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="font-medium">{article}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </Card>
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently asked questions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Quick answers to common questions</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div key={index} variants={fadeInUp} transition={{ duration: 0.4, delay: index * 0.03 }}>
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
        </div>
      </section>

      {/* Contact Support CTA */}
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
            Still need help?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Our support team is available 24/7 to assist you with any questions
          </motion.p>
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 text-base px-8"
               onClick={() => openModal("sales")}
            >
              Contact Support
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 bg-transparent hover:scale-105 hover:border-primary/50 transition-all duration-300"
            >
              Schedule a Call
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
