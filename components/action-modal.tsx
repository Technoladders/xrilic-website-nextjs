"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  X,
  Calendar,
  Building2,
  ChevronLeft,
  ArrowRight,
  CheckCircle2,
  Loader2,
  AlertCircle,
  Clock
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea" // Ensure you have this component or use standard textarea
import { cn } from "@/lib/utils"
import { DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css"
import { supabase } from "@/lib/supabase" 
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

/* =========================================================
   TYPES
========================================================= */

// Removed 'trial' as requested
export type ActionType = "demo" | "sales"

type FieldType = "text" | "email" | "select" | "textarea" | "phone"

interface FieldSchema {
  name: string
  label: string
  type: FieldType
  placeholder?: string
  options?: string[]
  required?: boolean
  condition?: (values: any) => boolean // For conditional fields like ATS
}

interface StepSchema {
  title?: string
  description?: string
  fields: FieldSchema[]
}

interface ActionSchema {
  title: string
  subtitle: string
  icon: any
  gradient: string
  steps: StepSchema[]
}

/* =========================================================
   SCHEMA CONFIG
========================================================= */

const ACTION_SCHEMA: Record<ActionType, ActionSchema> = {
  demo: {
    title: "Book a Demo",
    subtitle: "See xrilic in action with a personalized walkthrough.",
    icon: Calendar,
    gradient: "from-purple-600 to-pink-600",
    steps: [
      {
        title: "Select a time",
        description: "Choose a date and time that works for you.",
        fields: [], // Handled by custom scheduler UI
      },
      {
        title: "Your details",
        description: "Tell us a bit about yourself.",
        fields: [
          { name: "firstName", label: "First Name", type: "text", required: true },
          { name: "lastName", label: "Last Name", type: "text", required: true },
          { name: "email", label: "Work Email", type: "email", required: true },
          { name: "phone", label: "Phone Number", type: "phone", required: true },
          { name: "company", label: "Company Name", type: "text", required: true },
          {
            name: "companySize",
            label: "Company Size",
            type: "select",
            options: ["1–10", "11–20", "21–50", "51-100", "101-200", "201-500", "501-1000", "1001-2000", "2001-5000", "5001-10000", "10000+"],
            required: true
          },
          {
            name: "message",
            label: "What are you looking to improve?",
            type: "textarea",
            placeholder: "e.g. We need to automate screening...",
            required: false,
          },
        ],
      },
    ],
  },

  sales: {
    title: "Contact Sales",
    subtitle: "Get a custom quote for your enterprise requirements.",
    icon: Building2,
    gradient: "from-emerald-600 to-teal-600",
    steps: [
      {
        title: "Contact sales",
        description: "Fill out the form and we'll get back to you shortly.",
        fields: [
          { name: "name", label: "Full Name", type: "text", required: true },
          { name: "email", label: "Work Email", type: "email", required: true },
          { name: "phone", label: "Phone Number", type: "phone", required: true },
          {
            name: "companySize",
            label: "Company Size",
            type: "select",
            options: ["1–10", "11–20", "21–50", "51-100", "101-200", "201-500", "501-1000", "1001-2000", "2001-5000", "5001-10000", "10000+"],
            required: true
          },
          {
            name: "usingAts",
            label: "Are you currently using an ATS?",
            type: "select",
            options: ["Yes", "No"],
            required: true
          },
          {
            name: "currentTool",
            label: "Which ATS are you using?",
            type: "text",
            required: true,
            // Only show if user selected "Yes" above
            condition: (values) => values.usingAts === "Yes" 
          },
          {
            name: "message",
            label: "Message",
            type: "textarea",
            placeholder: "Tell us about your needs...",
            required: true
          },
        ],
      },
    ],
  },
}

/* =========================================================
   ADVANCED CALENDAR COMPONENT
========================================================= */

function DemoScheduleStep({
  value,
  onChange,
  onNext,
}: {
  value: { date?: Date; time?: string }
  onChange: (v: any) => void
  onNext: () => void
}) {
  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "01:00 PM", "01:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
    "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
    "06:00 PM", "06:30 PM"
  ]

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col md:flex-row gap-6 h-full">
        
{/* Left: Calendar */}
<div className="flex-1">
  <Label className="mb-3 block text-muted-foreground font-medium">Select Date</Label>
  <div className="border rounded-xl p-4 bg-card/50 shadow-sm">
    <DayPicker
      mode="single"
      selected={value.date}
      onSelect={(date) => onChange({ ...value, date, time: null })} // Reset time on date change
      disabled={{ before: new Date(), dayOfWeek: [0, 6] }} // Disable past + weekends
      showOutsideDays // Show days from adjacent months for better context
      fixedWeeks // Always show 6 weeks for consistent height
      style={{ '--rdp-selected-border': 'none' } as React.CSSProperties} // Override CSS variable directly on DayPicker root
      components={{
        Caption: ({ displayMonth }) => (
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-border">
            <h3 className="text-sm font-semibold text-foreground">
              {displayMonth.format('MMMM yyyy')} {/* Custom caption with bold month/year */}
            </h3>
          </div>
        ),
        NavButton: ({ onClick, ...props }) => (
          <button
            onClick={onClick}
            className="p-1 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors" // Styled nav arrows
            {...props}
          />
        ),
        DayButton: ({ ...props }) => (
          <button
            className={`
              ${props.disabled ? 'text-muted-foreground cursor-not-allowed' : 'hover:bg-accent hover:text-accent-foreground transition-colors'}
              w-10 h-10 flex items-center justify-center text-sm font-medium rounded-full border border-transparent
            `}
            {...props}
          />
        )
      }}
      modifiersStyles={{
        selected: {
          backgroundColor: 'var(--primary)',
          color: 'white',
          borderRadius: '50%',
          fontWeight: 'bold',
          border: 'none' // Additional inline override for safety
        },
        today: {
          backgroundColor: 'white',
          color: 'var(--primary)',
          border: 'none', // Removed border to eliminate ring effect
          borderRadius: '50%',
          fontWeight: 'bold'
        },
        disabled: {
          color: 'var(--muted-foreground)',
          backgroundColor: 'transparent',
          cursor: 'not-allowed'
        },
        outside: { // Style for outside days
          color: 'var(--muted-foreground)',
          backgroundColor: 'transparent'
        },
        range_middle: { // If switching to range later, but optional
          backgroundColor: 'var(--primary/20)',
          color: 'var(--foreground)'
        }
      }}
      className="w-full custom-day-picker"
    />
  </div>
</div>

        {/* Right: Time Slots */}
        <div className="w-full md:w-40 flex flex-col">
          <Label className="mb-3 block text-muted-foreground font-medium">Select Time</Label>
          
          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar max-h-[300px] md:max-h-[320px]">
            {!value.date ? (
              <div className="h-full flex items-center justify-center text-xs text-muted-foreground text-center border rounded-xl bg-muted/20 p-4">
                Pick a date first
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => onChange({ ...value, time: slot })}
                    className={cn(
                      "py-2 px-3 rounded-lg border text-sm transition-all text-center font-medium",
                      value.time === slot
                        ? "bg-primary text-primary-foreground border-primary ring-2 ring-primary/20"
                        : "hover:border-primary hover:bg-primary/5 bg-card"
                    )}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer / CTA */}
      <div className="mt-auto pt-6 border-t flex justify-end">
        <Button
          size="lg"
          className="w-full md:w-auto min-w-[140px]"
          disabled={!value.date || !value.time}
          onClick={onNext}
        >
          Next Details <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export function ActionModal({
  isOpen,
  onClose,
  defaultTab = "demo",
}: {
  isOpen: boolean
  onClose: () => void
  defaultTab?: ActionType
}) {
  // Ensure we default to 'demo' if 'trial' is passed accidentally
  const safeTab = defaultTab === 'trial' as any ? 'demo' : defaultTab;
  
  const [step, setStep] = useState(0)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  
  const [formData, setFormData] = useState<Record<string, any>>({})
  const [demoSchedule, setDemoSchedule] = useState<{
    date?: Date
    time?: string
  }>({})

  useEffect(() => {
    if (isOpen) {
      setStep(0)
      setSuccess(false)
      setErrorMsg(null)
      setFormData({})
      setDemoSchedule({})
    }
  }, [isOpen])

  if (!isOpen) return null

  const schema = ACTION_SCHEMA[safeTab]
  const stepSchema = schema.steps[step]

  const updateValue = (name: string, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async () => {
    setLoading(true)
    setErrorMsg(null)

    try {
      // 1. Prepare Payload
      const payload: any = {
        type: safeTab,
        email: formData.email, // Common field
        phone: formData.phone,
        status: 'new',
        
        // Demo Specifics
        ...(safeTab === 'demo' && {
          first_name: formData.firstName,
          last_name: formData.lastName,
          full_name: `${formData.firstName} ${formData.lastName}`,
          company_name: formData.company,
          company_size: formData.companySize,
          demo_date: demoSchedule.date ? new Date(demoSchedule.date).toISOString().split('T')[0] : null,
          demo_time: demoSchedule.time,
          message: formData.message, // "What looking to improve"
        }),

        // Sales Specifics
        ...(safeTab === 'sales' && {
          full_name: formData.name,
          company_size: formData.companySize,
          current_tool: formData.usingAts === 'Yes' ? formData.currentTool : 'None',
          message: formData.message,
        })
      }

      // 2. Insert into Supabase
      const { error } = await supabase
        .from('action_submissions')
        .insert([payload])

      if (error) throw error

      setSuccess(true)
    } catch (err: any) {
      console.error("Submission error:", err)
      setErrorMsg("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-5xl h-[650px] bg-background rounded-2xl overflow-hidden flex shadow-2xl border border-border"
      >
        {/* LEFT SIDE (Static Context) */}
        <div className={cn("hidden md:flex w-2/5 p-10 text-white bg-gradient-to-br flex-col justify-between relative overflow-hidden", schema.gradient)}>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="p-3 bg-white/20 w-fit rounded-xl backdrop-blur-md mb-8 border border-white/10 shadow-lg">
                <schema.icon className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-3">{schema.title}</h2>
            <p className="text-white/80 text-lg leading-relaxed">{schema.subtitle}</p>
          </div>

          <div className="relative z-10 space-y-5">
            <div className="flex items-center gap-3">
                <div className="p-1 rounded-full bg-white/20"><CheckCircle2 className="w-4 h-4" /></div>
                <span className="font-medium">Enterprise-grade security</span>
            </div>
            {/* <div className="flex items-center gap-3">
                <div className="p-1 rounded-full bg-white/20"><CheckCircle2 className="w-4 h-4" /></div>
                <span className="font-medium">GDPR & SOC2 Compliant</span>
            </div> */}
            <div className="flex items-center gap-3">
                <div className="p-1 rounded-full bg-white/20"><CheckCircle2 className="w-4 h-4" /></div>
                <span className="font-medium">Dedicated support team</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (Interactive) */}
        <div className="w-full md:w-3/5 p-6 md:p-10 overflow-y-auto bg-background relative flex flex-col">
          
          <button 
            onClick={onClose} 
            className="absolute top-2 right-2 p-2 rounded-full hover:bg-muted transition-colors z-20"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>

          {success ? (
            <SuccessView onClose={onClose} />
          ) : (
            <>
              {/* Header (Mobile Only Context) */}
              <div className="md:hidden mb-6">
                <h2 className="text-2xl font-bold">{schema.title}</h2>
              </div>

              {/* Progress Bar */}
              {schema.steps.length > 1 && (
                <div className="mb-8">
                  <div className="flex items-center justify-between text-xs font-medium text-muted-foreground mb-2">
                    <span>Step {step + 1} of {schema.steps.length}</span>
                    <span className="pr-8">{Math.round(((step + 1) / schema.steps.length) * 100)}%</span>
                  </div>
                  <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: `${((step + 1) / schema.steps.length) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              )}

              {/* Step Title */}
              {stepSchema.title && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold">{stepSchema.title}</h3>
                  {stepSchema.description && (
                    <p className="text-sm text-muted-foreground mt-1">{stepSchema.description}</p>
                  )}
                </div>
              )}

              {/* Error Message */}
              {errorMsg && (
                  <div className="mb-6 p-3 rounded-lg bg-destructive/10 text-destructive text-sm flex items-center gap-2 border border-destructive/20">
                      <AlertCircle className="w-4 h-4" />
                      {errorMsg}
                  </div>
              )}

              {/* Form Area */}
              <div className="flex-1 flex flex-col">
                <AnimatePresence mode="wait">
                  <motion.div
                      key={`${safeTab}-${step}`}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className="flex-1 flex flex-col"
                  >
                      {/* 🔥 DEMO STEP 0 (CUSTOM SCHEDULER) */}
                      {safeTab === "demo" && step === 0 ? (
                      <DemoScheduleStep
                          value={demoSchedule}
                          onChange={setDemoSchedule}
                          onNext={() => {
                              setFormData(prev => ({
                                  ...prev,
                                  demoDate: demoSchedule.date,
                                  demoTime: demoSchedule.time,
                              }))
                              setStep(1)
                          }}
                      />
                      ) : (
                      <>
                          {/* 🔹 DYNAMIC FIELDS */}
                          <div className="space-y-5">
                              {stepSchema.fields.map(field => {
                                // Conditional Logic Check
                                if (field.condition && !field.condition(formData)) return null;

                                return (
                                  <FieldRenderer
                                      key={field.name}
                                      field={field}
                                      value={formData[field.name]}
                                      onChange={updateValue}
                                  />
                                )
                              })}
                          </div>

                          {/* 🔹 ACTIONS */}
                          <div className="flex justify-between pt-8 mt-auto">
                              {step > 0 && (
                                  <Button variant="ghost" onClick={() => setStep(step - 1)} disabled={loading}>
                                  <ChevronLeft className="w-4 h-4 mr-1" /> Back
                                  </Button>
                              )}

                              <div className="ml-auto">
                                  {step < schema.steps.length - 1 ? (
                                      <Button
                                      size="lg"
                                      onClick={() => setStep(step + 1)}
                                      disabled={stepSchema.fields.some(
                                          f => {
                                            if (f.condition && !f.condition(formData)) return false; // Skip required check if hidden
                                            return f.required && !formData[f.name];
                                          }
                                      )}
                                      >
                                      Continue <ArrowRight className="w-4 h-4 ml-1" />
                                      </Button>
                                  ) : (
                                      <Button onClick={handleSubmit} disabled={loading} size="lg" className="min-w-[140px]">
                                      {loading ? (
                                          <>
                                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                            Sending...
                                          </>
                                      ) : (
                                          "Submit Request"
                                      )}
                                      </Button>
                                  )}
                              </div>
                          </div>
                      </>
                      )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  )
}

/* =========================================================
   FIELD RENDERER
========================================================= */

/* =========================================================
   FIELD RENDERER
========================================================= */

function FieldRenderer({
  field,
  value,
  onChange,
}: {
  field: FieldSchema
  value: any
  onChange: (name: string, value: any) => void
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm font-medium text-foreground">
        {field.label} {field.required && <span className="text-destructive">*</span>}
      </Label>

      {field.type === "text" || field.type === "email" ? (
        <Input
          type={field.type}
          placeholder={field.placeholder}
          value={value || ""}
          onChange={e => onChange(field.name, e.target.value)}
          className="h-11 bg-background"
        />
      ) : field.type === "textarea" ? (
        <Textarea 
          placeholder={field.placeholder}
          value={value || ""}
          onChange={e => onChange(field.name, e.target.value)}
          className="min-h-[100px] bg-background resize-none"
        />
      ) : field.type === "select" ? (
        <div className="relative">
            <select
            className="w-full h-11 border border-input bg-background rounded-md px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 appearance-none"
            value={value || ""}
            onChange={e => onChange(field.name, e.target.value)}
            >
            <option value="">Select an option</option>
            {field.options?.map((o: string) => (
                <option key={o} value={o}>{o}</option>
            ))}
            </select>
            <div className="absolute right-3 top-3.5 pointer-events-none opacity-50">
              <ChevronLeft className="w-4 h-4 -rotate-90" />
            </div>
        </div>
      ) : field.type === "phone" ? ( 
        <PhoneInput
          international
          defaultCountry="IN"
          value={value || ""}
          onChange={val => onChange(field.name, val)}
          className={cn(
            // 1. Outer Container Styles (Matches standard input)
            "flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background transition-colors",
            "focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
            
            // 2. Inner Input Resets (Removes the double border)
            "[&_.PhoneInputInput]:!border-none [&_.PhoneInputInput]:!bg-transparent [&_.PhoneInputInput]:!outline-none [&_.PhoneInputInput]:!ring-0 [&_.PhoneInputInput]:!shadow-none",
            "[&_.PhoneInputInput]:ml-2 [&_.PhoneInputInput]:text-foreground",
            
            // 3. Country Dropdown Resets
            "[&_.PhoneInputCountrySelect]:!outline-none[&_.PhoneInputCountrySelect]:!ring-0"
          )}
        />
      ) : null}
    </div>
  )
}

function SuccessView({ onClose }: { onClose: () => void }) {
  return (
    <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="h-full flex flex-col items-center justify-center text-center gap-6"
    >
      <div className="w-24 h-24 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center justify-center mb-2">
        <CheckCircle2 className="w-12 h-12 text-green-600 dark:text-green-400" />
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">Request Received!</h3>
        <p className="text-muted-foreground max-w-sm mx-auto">
            We have sent a confirmation email to your work address. Our team will review your request and get back to you shortly.
        </p>
      </div>
      <Button variant="outline" onClick={onClose} className="min-w-[150px] mt-4">
        Close Window
      </Button>
    </motion.div>
  )
}