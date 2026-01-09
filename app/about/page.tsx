"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Heart, Target, Zap, Users, Linkedin, Twitter, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { ActionModal, ActionType } from "@/components/action-modal"


const team = [
  {
    name: "Sarah Chen",
    role: "Co-Founder & CEO",
    bio: "Former VP of Engineering at TechCorp. 15+ years in HR tech and AI.",
    initials: "SC",
    gradient: "from-primary to-purple-500",
  },
  {
    name: "Michael Torres",
    role: "Co-Founder & CTO",
    bio: "Ex-Google ML Engineer. PhD in Computer Science from Stanford.",
    initials: "MT",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Product",
    bio: "10 years in product management at leading SaaS companies.",
    initials: "ER",
    gradient: "from-pink-500 to-primary",
  },
  {
    name: "David Kim",
    role: "Head of Engineering",
    bio: "Previously led engineering teams at Microsoft and Amazon.",
    initials: "DK",
    gradient: "from-primary to-purple-500",
  },
  {
    name: "Jessica Martinez",
    role: "Head of Customer Success",
    bio: "Expert in scaling customer success teams in high-growth startups.",
    initials: "JM",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Alex Johnson",
    role: "Head of Design",
    bio: "Award-winning designer with passion for intuitive user experiences.",
    initials: "AJ",
    gradient: "from-pink-500 to-primary",
  },
]

const values = [
  {
    icon: Heart,
    title: "People First",
    description: "We believe that great companies are built by great people. Every decision we make puts people first.",
    color: "primary",
  },
  {
    icon: Target,
    title: "Customer Obsessed",
    description: "Our customers' success is our success. We're committed to helping them achieve their goals.",
    color: "purple-500",
  },
  {
    icon: Zap,
    title: "Innovation Driven",
    description: "We're constantly pushing boundaries with AI and technology to solve real recruitment challenges.",
    color: "pink-500",
  },
  {
    icon: Users,
    title: "Transparency & Trust",
    description: "We build trust through transparency, honest communication, and delivering on our promises.",
    color: "primary",
  },
]

const timeline = [
  {
    year: "2021",
    title: "The Beginning",
    description: "Founded with a mission to revolutionize recruitment through AI.",
  },
  {
    year: "2022",
    title: "First Product Launch",
    description: "Launched our AI Candidate Matching platform, serving 50+ early customers.",
  },
  {
    year: "2023",
    title: "Series A Funding",
    description: "Raised 15M Series A led by top venture capital firms to scale the platform.",
  },
  {
    year: "2024",
    title: "Major Expansion",
    description: "Grew to 5,000+ customers and launched Analytics Suite and Engagement Suite.",
  },
  {
    year: "2025",
    title: "Going Global",
    description: "Expanding internationally and serving 10,000+ companies across 40 countries.",
  },
]

export default function AboutPage() {
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
              We're on a mission to{" "}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                transform recruitment
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 text-balance">
              xrilic.ai was born from a simple belief: hiring great people shouldn't be so hard. We're building
              AI-powered tools that make recruitment faster, smarter, and more human.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            <motion.div variants={fadeInUp} transition={{ duration: 0.6 }}>
              <Card className="p-8 h-full bg-gradient-to-br from-primary/20 via-purple-500/20 to-transparent border-primary/30 hover:scale-105 transition-all duration-300">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To empower every organization to build exceptional teams by combining the power of AI with human
                  intuition. We believe the future of work starts with better hiring.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <Card className="p-8 h-full bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-transparent border-purple-500/30 hover:scale-105 transition-all duration-300">
                <Zap className="w-12 h-12 text-purple-500 mb-4" />
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  A world where every person finds fulfilling work and every company builds diverse, high-performing
                  teams. We're making this vision a reality through innovation and technology.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These principles guide every decision we make and how we work together
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                >
                  <Card className="p-6 h-full bg-card/50 backdrop-blur border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                    <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From a small startup to a global platform serving thousands of companies
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-pink-500 hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex gap-6 items-start">
                    {/* Timeline Dot */}
                    <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-purple-500 flex-shrink-0 shadow-lg shadow-primary/30">
                      <span className="text-white font-bold text-sm">{item.year}</span>
                    </div>

                    <Card className="flex-1 p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300">
                      <div className="md:hidden text-sm font-bold text-primary mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're a diverse team of engineers, designers, and recruitment experts passionate about solving hard
              problems
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
              >
                <Card className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-2xl font-bold mb-4`}
                  >
                    {member.initials}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <div className="text-sm text-primary mb-3">{member.role}</div>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                  <div className="flex items-center gap-3">
                    <button className="p-2 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors">
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors">
                      <Mail className="w-4 h-4" />
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
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
            Join us on our mission
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Whether you're looking to transform your hiring or want to join our team, we'd love to hear from you
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
              View Open Positions
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 bg-transparent hover:scale-105 hover:border-primary/50 transition-all duration-300"
              onClick={() => openModal("sales")}
            >
              Contact Us
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
