"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Clock, ArrowRight, Tag } from "lucide-react"
import { motion } from "framer-motion"

const categories = ["All", "Product Updates", "Best Practices", "Customer Stories", "Industry Insights", "AI & Tech"]

const blogPosts = [
  {
    title: "How AI is Transforming Recruitment in 2025",
    excerpt:
      "Discover the latest AI trends reshaping how companies find and hire top talent, from automated screening to predictive analytics.",
    category: "AI & Tech",
    author: "Sarah Chen",
    date: "Jan 15, 2025",
    readTime: "8 min read",
    featured: true,
    image: "abstract AI recruitment visualization",
  },
  {
    title: "10 Best Practices for Remote Hiring",
    excerpt:
      "Learn proven strategies for building successful remote teams, including interview techniques and onboarding processes.",
    category: "Best Practices",
    author: "Michael Torres",
    date: "Jan 12, 2025",
    readTime: "6 min read",
    featured: false,
    image: "remote team collaboration",
  },
  {
    title: "Customer Spotlight: How TechFlow Reduced Time-to-Hire by 70%",
    excerpt:
      "Read how TechFlow transformed their recruitment process and scaled from 50 to 200 employees in just 6 months.",
    category: "Customer Stories",
    author: "Emily Rodriguez",
    date: "Jan 10, 2025",
    readTime: "5 min read",
    featured: false,
    image: "success story visualization",
  },
  {
    title: "Introducing: Advanced Analytics Dashboard",
    excerpt:
      "We've launched a powerful new analytics suite with real-time insights, custom reports, and predictive analytics.",
    category: "Product Updates",
    author: "David Kim",
    date: "Jan 8, 2025",
    readTime: "4 min read",
    featured: false,
    image: "analytics dashboard screenshot",
  },
  {
    title: "The Future of Healthcare Recruitment",
    excerpt:
      "Explore how healthcare organizations are adapting to talent shortages with AI-powered recruitment solutions.",
    category: "Industry Insights",
    author: "Dr. James Wilson",
    date: "Jan 5, 2025",
    readTime: "7 min read",
    featured: false,
    image: "healthcare recruitment trends",
  },
  {
    title: "Building a Diverse Tech Team: A Complete Guide",
    excerpt:
      "Practical strategies for creating inclusive hiring processes that attract diverse talent and build stronger teams.",
    category: "Best Practices",
    author: "Jessica Martinez",
    date: "Jan 3, 2025",
    readTime: "10 min read",
    featured: false,
    image: "diverse team illustration",
  },
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
              The xrilic.ai{" "}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Insights, updates, and best practices for modern recruitment teams
            </p>

            {/* Search Bar */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-md mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 bg-background border-border focus:border-primary"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                variants={fadeInUp}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <p className="text-lg text-muted-foreground">No articles found. Try a different search or category.</p>
            </motion.div>
          ) : (
            <motion.div
              key={selectedCategory + searchQuery}
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.title}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className={post.featured ? "md:col-span-2 lg:col-span-3" : ""}
                >
                  <Card
                    className={`h-full bg-card/50 backdrop-blur border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 overflow-hidden ${
                      post.featured ? "md:flex md:flex-row" : ""
                    }`}
                  >
                    <div
                      className={`bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center ${
                        post.featured ? "md:w-1/2 min-h-[300px]" : "h-48"
                      }`}
                    >
                      <div className="text-center p-6">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mx-auto mb-2">
                          <Tag className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-xs text-muted-foreground">{post.image}</p>
                      </div>
                    </div>

                    <div className={`p-6 ${post.featured ? "md:w-1/2" : ""}`}>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className={`font-bold mb-3 ${post.featured ? "text-3xl" : "text-xl"}`}>{post.title}</h3>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <div className="text-sm">
                          <div className="font-medium">{post.author}</div>
                          <div className="text-muted-foreground text-xs">{post.date}</div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                          Read More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-purple-500/10 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative"
        >
          <Card className="p-12 bg-card/50 backdrop-blur border-border/50 max-w-3xl mx-auto text-center">
            <motion.h2
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Stay updated with our newsletter
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground mb-6"
            >
              Get the latest insights, product updates, and best practices delivered to your inbox
            </motion.p>
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input type="email" placeholder="Enter your email" className="h-12 bg-background border-border" />
              <Button size="lg" className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300">
                Subscribe
              </Button>
            </motion.div>
          </Card>
        </motion.div>
      </section>


    </div>
  )
}
