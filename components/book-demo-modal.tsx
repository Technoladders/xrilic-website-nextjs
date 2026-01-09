"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X, Calendar, Clock, Check } from "lucide-react"

interface BookDemoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BookDemoModal({ isOpen, onClose }: BookDemoModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Generate next 14 days
  const generateDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 0; i < 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      dates.push(date)
    }
    return dates
  }

  const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"]

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format"
    }
    if (!formData.company.trim()) newErrors.company = "Company is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone is required"
    if (!selectedDate) newErrors.date = "Please select a date"
    if (!selectedTime) newErrors.time = "Please select a time"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSuccess(false)
      onClose()
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      })
      setSelectedDate(null)
      setSelectedTime(null)
      setErrors({})
    }, 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal */}
      <Card className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border/50 animate-in zoom-in-95 fade-in duration-300">
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-border/50 bg-card/95 backdrop-blur-sm">
          <div>
            <h2 className="text-2xl font-bold">Chat with an expert</h2>
            <p className="text-sm text-muted-foreground mt-1">A team member will reach out to discuss your needs.</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-12 text-center animate-in zoom-in-95 fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-purple-500 mx-auto mb-4 flex items-center justify-center">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Demo Scheduled!</h3>
            <p className="text-muted-foreground">
              We've received your request. A team member will contact you shortly to confirm your demo.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                  First Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded-lg bg-background border ${
                    errors.firstName ? "border-destructive" : "border-border"
                  } focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 focus:shadow-[0_0_20px_rgba(139,92,246,0.3)]`}
                  placeholder="John"
                />
                {errors.firstName && <p className="text-xs text-destructive mt-1">{errors.firstName}</p>}
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                  Last Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded-lg bg-background border ${
                    errors.lastName ? "border-destructive" : "border-border"
                  } focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 focus:shadow-[0_0_20px_rgba(139,92,246,0.3)]`}
                  placeholder="Doe"
                />
                {errors.lastName && <p className="text-xs text-destructive mt-1">{errors.lastName}</p>}
              </div>

              {/* Work Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Work Email <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded-lg bg-background border ${
                    errors.email ? "border-destructive" : "border-border"
                  } focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 focus:shadow-[0_0_20px_rgba(139,92,246,0.3)]`}
                  placeholder="john@company.com"
                />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded-lg bg-background border ${
                    errors.company ? "border-destructive" : "border-border"
                  } focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 focus:shadow-[0_0_20px_rgba(139,92,246,0.3)]`}
                  placeholder="Acme Inc."
                />
                {errors.company && <p className="text-xs text-destructive mt-1">{errors.company}</p>}
              </div>

              {/* Phone */}
              <div className="md:col-span-2">
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone <span className="text-destructive">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded-lg bg-background border ${
                    errors.phone ? "border-destructive" : "border-border"
                  } focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 focus:shadow-[0_0_20px_rgba(139,92,246,0.3)]`}
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 focus:shadow-[0_0_20px_rgba(139,92,246,0.3)] resize-none"
                  placeholder="Tell us about your hiring needs..."
                />
              </div>
            </div>

            {/* Calendar Section */}
            <div className="border-t border-border/50 pt-6 animate-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">Select Date & Time</h3>
              </div>

              {/* Date Picker */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-3">
                  Choose a date <span className="text-destructive">*</span>
                </label>
                <div className="grid grid-cols-7 gap-2">
                  {generateDates().map((date, index) => {
                    const dateStr = date.toISOString().split("T")[0]
                    const isSelected = selectedDate === dateStr
                    const isToday = index === 0

                    return (
                      <button
                        key={dateStr}
                        type="button"
                        onClick={() => {
                          setSelectedDate(dateStr)
                          if (errors.date) setErrors((prev) => ({ ...prev, date: "" }))
                        }}
                        className={`p-2 rounded-lg border transition-all duration-200 ${
                          isSelected
                            ? "bg-gradient-to-r from-primary to-purple-500 border-primary text-white shadow-lg shadow-primary/30"
                            : "border-border hover:border-primary/50 hover:bg-primary/5"
                        } ${isToday ? "ring-2 ring-primary/30" : ""}`}
                      >
                        <div className="text-xs text-muted-foreground">
                          {date.toLocaleDateString("en-US", { weekday: "short" })}
                        </div>
                        <div className="text-sm font-semibold">{date.getDate()}</div>
                      </button>
                    )
                  })}
                </div>
                {errors.date && <p className="text-xs text-destructive mt-2">{errors.date}</p>}
              </div>

              {/* Time Picker */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  <Clock className="w-4 h-4 inline mr-1" />
                  Choose a time <span className="text-destructive">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {timeSlots.map((time) => {
                    const isSelected = selectedTime === time

                    return (
                      <button
                        key={time}
                        type="button"
                        onClick={() => {
                          setSelectedTime(time)
                          if (errors.time) setErrors((prev) => ({ ...prev, time: "" }))
                        }}
                        className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 ${
                          isSelected
                            ? "bg-gradient-to-r from-purple-500 to-pink-500 border-purple-500 text-white shadow-lg shadow-purple-500/30"
                            : "border-border hover:border-purple-500/50 hover:bg-purple-500/5"
                        }`}
                      >
                        {time}
                      </button>
                    )
                  })}
                </div>
                {errors.time && <p className="text-xs text-destructive mt-2">{errors.time}</p>}
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 flex justify-end">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="relative px-8 bg-gradient-to-r from-primary via-purple-500 to-pink-500 hover:from-primary/90 hover:via-purple-500/90 hover:to-pink-500/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-105"
              >
                {isSubmitting ? (
                  <>
                    <span className="opacity-0">Schedule Demo</span>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    </div>
                  </>
                ) : (
                  "Schedule Demo"
                )}
              </Button>
            </div>
          </form>
        )}
      </Card>
    </div>
  )
}
