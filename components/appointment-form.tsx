"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

export function AppointmentForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    preferredDate: "",
    description: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/submit-appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit")
      }

      // Clear form
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        preferredDate: "",
        description: "",
      })

      toast.success("Thank you! Your appointment request has been submitted successfully. We'll contact you shortly.")
    } catch (error) {
      console.error("Submission error:", error)
      toast.error("Sorry, there was a problem submitting your request. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-background text-foreground p-6 rounded-lg">
      <h3 className="text-xl font-bold">Contact Information</h3>
      <div className="space-y-3">
        <div className="grid grid-cols-1 gap-3">
          <Input
            placeholder="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
          <Input
            placeholder="Phone Number"
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
          <Input
            placeholder="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
          <Input
            placeholder="Preferred Date"
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
          <Textarea
            placeholder="Brief description of your dental concern"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            required
            disabled={isSubmitting}
          />
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Request"}
        </Button>
        <p className="text-xs text-muted-foreground text-center">
          We'll contact you shortly to confirm your appointment.
        </p>
      </div>
    </form>
  )
}

