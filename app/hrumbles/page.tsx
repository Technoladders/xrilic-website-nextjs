// app/hrumbles/page.tsx
"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Calendar,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  Loader2,
  AlertCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css"
import { supabase } from "@/lib/supabase"
import PhoneInput from "react-phone-number-input"
import "react-phone-number-input/style.css"
import { cn } from "@/lib/utils"

// ---------- Demo Step 0: Date & Time Picker ----------
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
        {/* Calendar */}
        <div className="flex-1">
          <Label className="mb-3 block text-muted-foreground font-medium">
            Select Date
          </Label>
          <div className="border rounded-xl p-4 bg-card/50 shadow-sm">
            <DayPicker
              mode="single"
              selected={value.date}
              onSelect={(date) => onChange({ ...value, date, time: null })}
              disabled={{ before: new Date(), dayOfWeek: [0, 6] }}
              showOutsideDays
              fixedWeeks
              style={{ "--rdp-selected-border": "none" } as React.CSSProperties}
              components={{
                Caption: ({ displayMonth }) => (
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-border">
                    <h3 className="text-sm font-semibold text-foreground">
                      {displayMonth.format("MMMM yyyy")}
                    </h3>
                  </div>
                ),
              }}
              modifiersStyles={{
                selected: {
                  backgroundColor: "var(--primary)",
                  color: "white",
                  borderRadius: "50%",
                  fontWeight: "bold",
                  border: "none",
                },
                today: {
                  backgroundColor: "white",
                  color: "var(--primary)",
                  border: "none",
                  borderRadius: "50%",
                  fontWeight: "bold",
                },
              }}
              className="w-full custom-day-picker"
            />
          </div>
        </div>

        {/* Time slots */}
        <div className="w-full md:w-40 flex flex-col">
          <Label className="mb-3 block text-muted-foreground font-medium">
            Select Time
          </Label>
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

// ---------- Field Renderer ----------
function FieldRenderer({
  field,
  value,
  onChange,
}: {
  field: { name: string; label: string; type: string; placeholder?: string; options?: string[]; required?: boolean }
  value: any
  onChange: (name: string, value: any) => void
}) {
  return (
    <div className="space-y-1">
      <Label className="text-xs font-medium text-foreground">
        {field.label} {field.required && <span className="text-destructive">*</span>}
      </Label>

      {field.type === "text" || field.type === "email" ? (
        <Input
          type={field.type}
          placeholder={field.placeholder}
          value={value || ""}
          onChange={(e) => onChange(field.name, e.target.value)}
          className="h-9 bg-background text-xs"
        />
      ) : field.type === "textarea" ? (
        <Textarea
          placeholder={field.placeholder}
          value={value || ""}
          onChange={(e) => onChange(field.name, e.target.value)}
          className="min-h-[75px] bg-background resize-none text-xs"
        />
      ) : field.type === "select" ? (
        <div className="relative">
          <select
            className="w-full h-9 border border-input bg-background rounded-md px-2 text-xs ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 appearance-none"
            value={value || ""}
            onChange={(e) => onChange(field.name, e.target.value)}
          >
            <option value="">Select an option</option>
            {field.options?.map((o: string) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          <div className="absolute right-2 top-2.5 pointer-events-none opacity-50">
            <ChevronLeft className="w-3.5 h-3.5 -rotate-90" />
          </div>
        </div>
      ) : field.type === "phone" ? (
        <PhoneInput
          international
          defaultCountry="IN"
          value={value || ""}
          onChange={(val) => onChange(field.name, val)}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-background px-2 py-1 text-xs ring-offset-background transition-colors",
            "focus-within:outline-none focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-1",
            "[&_.PhoneInputInput]:!border-none [&_.PhoneInputInput]:!bg-transparent [&_.PhoneInputInput]:!outline-none [&_.PhoneInputInput]:!ring-0 [&_.PhoneInputInput]:!shadow-none",
            "[&_.PhoneInputInput]:ml-1.5 [&_.PhoneInputInput]:text-foreground"
          )}
        />
      ) : null}
    </div>
  )
}

// ---------- Success View ----------
function SuccessView() {
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
    </motion.div>
  )
}

// ---------- DEMO FORM FIELDS ----------
const DEMO_DETAILS_FIELDS = [
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
    required: true,
  },
  {
    name: "message",
    label: "What are you looking to improve?",
    type: "textarea",
    placeholder: "e.g. We need to automate screening...",
    required: false,
  },
]

// ---------- MAIN PAGE COMPONENT ----------
export default function HrumblesPage() {
  const [step, setStep] = useState(0)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [formData, setFormData] = useState<Record<string, any>>({})
  const [demoSchedule, setDemoSchedule] = useState<{ date?: Date; time?: string }>({})

  const updateValue = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async () => {
    setLoading(true)
    setErrorMsg(null)

    try {
      const payload = {
        type: "demo",
        email: formData.email,
        phone: formData.phone,
        status: "new",
        first_name: formData.firstName,
        last_name: formData.lastName,
        full_name: `${formData.firstName} ${formData.lastName}`,
        company_name: formData.company,
        company_size: formData.companySize,
        demo_date: demoSchedule.date
          ? new Date(demoSchedule.date).toISOString().split("T")[0]
          : null,
        demo_time: demoSchedule.time,
        message: formData.message,
      }

      const { error } = await supabase.from("action_submissions").insert([payload])
      if (error) throw error

      setSuccess(true)
    } catch (err: any) {
      console.error("Submission error:", err)
      setErrorMsg("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  // Reset form if needed (e.g., when leaving the page)
  // Not strictly necessary for a standalone page, but good practice.

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-4 px-4">
      <div className="w-full max-w-8xl mx-auto bg-background rounded-2xl overflow-hidden shadow-2xl border border-border flex flex-col md:flex-row">
{/* LEFT BRAND PANEL – same structure, but compact */}
<div className="hidden md:flex w-2/5 p-6 text-white bg-gradient-to-br from-purple-600 to-pink-600 flex-col justify-between relative overflow-hidden">
  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
  <div className="relative z-10">
    <div className="p-2.5 bg-white/20 w-fit rounded-lg backdrop-blur-md mb-4 border border-white/10 shadow-lg">
      <Calendar className="w-7 h-7" /> {/* slightly smaller icon */}
    </div>
    <h2 className="text-2xl font-bold mb-1">Book a Demo</h2>
    <p className="text-white/80 text-sm leading-relaxed">
      See xrilic in action with a personalized walkthrough.
    </p>
  </div>
  <div className="relative z-10 space-y-3 text-sm">
    <div className="flex items-center gap-2">
      <div className="p-0.5 rounded-full bg-white/20">
        <CheckCircle2 className="w-3.5 h-3.5" />
      </div>
      <span className="font-medium">Enterprise-grade security</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="p-0.5 rounded-full bg-white/20">
        <CheckCircle2 className="w-3.5 h-3.5" />
      </div>
      <span className="font-medium">Dedicated support team</span>
    </div>
  </div>
</div>

        {/* RIGHT INTERACTIVE FORM */}
<div className="w-full md:w-3/5 p-4 md:p-6 bg-background flex flex-col">
  {success ? (
    <SuccessView />
  ) : (
    <>
      {/* Mobile header */}
      <div className="md:hidden mb-4">
        <h2 className="text-xl font-bold">Book a Demo</h2>
      </div>

      {/* Progress indicator – reduced mb */}
      <div className="mb-5">
        <div className="flex items-center justify-between text-xs font-medium text-muted-foreground mb-1">
          <span>Step {step + 1} of 2</span>
          <span>{step === 0 ? "50" : "100"}%</span>
        </div>
        <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: step === 0 ? "50%" : "0%" }}
            animate={{ width: step === 0 ? "50%" : "100%" }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Step title – smaller font & less spacing */}
      {step === 0 ? (
        <>
          <h3 className="text-lg font-semibold mb-0.5">Select a time</h3>
          <p className="text-xs text-muted-foreground mb-3">
            Choose a date and time that works for you.
          </p>
        </>
      ) : (
        <>
          <h3 className="text-lg font-semibold mb-0.5">Your details</h3>
          <p className="text-xs text-muted-foreground mb-3">
            Tell us a bit about yourself.
          </p>
        </>
      )}
      {/* error message stays similar but can be compact */}
      {errorMsg && (
        <div className="mb-3 p-2 rounded-lg bg-destructive/10 text-destructive text-xs flex items-center gap-2 border border-destructive/20">
          <AlertCircle className="w-3.5 h-3.5" />
          {errorMsg}
        </div>
      )}
      {/* Step content – unchanged from before, but the FieldRenderer inside will be smaller */}
              {/* Step content */}
              <AnimatePresence mode="wait">
                {step === 0 ? (
                  <motion.div
                    key="step0"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="flex-1 flex flex-col"
                  >
                    <DemoScheduleStep
                      value={demoSchedule}
                      onChange={setDemoSchedule}
                      onNext={() => setStep(1)}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="flex-1 flex flex-col"
                  >
                    <div className="space-y-5">
                      {DEMO_DETAILS_FIELDS.map((field) => (
                        <FieldRenderer
                          key={field.name}
                          field={field}
                          value={formData[field.name]}
                          onChange={updateValue}
                        />
                      ))}
                    </div>

                    <div className="flex justify-between pt-8 mt-auto">
                      <Button
                        variant="ghost"
                        onClick={() => setStep(0)}
                        disabled={loading}
                      >
                        <ChevronLeft className="w-4 h-4 mr-1" /> Back
                      </Button>
                      <Button
                        size="lg"
                        onClick={handleSubmit}
                        disabled={
                          loading ||
                          DEMO_DETAILS_FIELDS.some(
                            (f) => f.required && !formData[f.name]
                          )
                        }
                        className="min-w-[140px]"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Submit Request"
                        )}
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </div>
      </div>
    </div>
  )
}