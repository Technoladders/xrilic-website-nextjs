"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookOpen, Code, Zap, Shield, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const docSections = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "Quick start guides and installation instructions",
    links: ["Installation", "Configuration", "First Steps", "Authentication"],
    color: "primary",
  },
  {
    icon: Code,
    title: "API Reference",
    description: "Complete API documentation with code examples",
    links: ["REST API", "GraphQL API", "Webhooks", "Rate Limits"],
    color: "purple-500",
  },
  {
    icon: Zap,
    title: "Integrations",
    description: "Connect with your favorite tools and platforms",
    links: ["ATS Systems", "Calendar Apps", "Slack", "Microsoft Teams"],
    color: "pink-500",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Best practices for securing your implementation",
    links: ["Authentication", "Authorization", "Data Encryption", "Compliance"],
    color: "primary",
  },
]

export default function DocsPage() {
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
      {/* Navigation */}


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
              Developer{" "}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Documentation
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Everything you need to integrate xrilic.ai into your applications
            </p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300">
                Quick Start Guide
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent hover:scale-105 transition-all duration-300"
              >
                View API Reference
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {docSections.map((section, index) => {
              const Icon = section.icon
              return (
                <motion.div
                  key={section.title}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Card className="p-8 h-full bg-card/50 backdrop-blur border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{section.title}</h3>
                        <p className="text-muted-foreground">{section.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {section.links.map((link) => (
                        <li key={link}>
                          <a
                            href="#"
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                          >
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>


    </div>
  )
}
