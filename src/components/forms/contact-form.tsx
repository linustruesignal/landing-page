"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Loader2 } from "lucide-react";

const businessTypes = [
  { value: "hvac", label: "HVAC" },
  { value: "plumbing", label: "Plumbing" },
  { value: "electrical", label: "Electrical" },
  { value: "contractor", label: "General Contractor" },
  { value: "restaurant", label: "Restaurant" },
  { value: "wedding", label: "Wedding & Events" },
  { value: "other", label: "Other" },
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-success-200 bg-success-50 p-8 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-success-600" />
        <h3 className="mt-4 text-xl font-semibold text-navy-900">Message Sent!</h3>
        <p className="mt-2 text-navy-600">
          Thanks for reaching out. We'll get back to you within 2 hours during business
          hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-navy-700">
          Name <span className="text-red-500">*</span>
        </label>
        <Input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-navy-700">
          Email <span className="text-red-500">*</span>
        </label>
        <Input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-1"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-navy-700">
          Phone <span className="text-navy-400">(optional)</span>
        </label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="mt-1"
          placeholder="(210) 555-1234"
        />
      </div>

      <div>
        <label htmlFor="businessType" className="block text-sm font-medium text-navy-700">
          Business Type
        </label>
        <Select
          value={formData.businessType}
          onValueChange={(value) => setFormData({ ...formData, businessType: value })}
        >
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select your industry" />
          </SelectTrigger>
          <SelectContent>
            {businessTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy-700">
          Message
        </label>
        <Textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="mt-1"
          placeholder="Tell us about your biggest challenge with customer calls..."
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-cta-500 hover:bg-cta-600 text-white font-semibold py-6"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
