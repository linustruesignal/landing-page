import { Metadata } from "next";
import Link from "next/link";
import { Check, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for AI phone answering and business automation. No hidden fees, no long-term contracts. Cancel anytime.",
};

const tiers = [
  {
    name: "Starter",
    price: "$297",
    description: "Perfect for businesses ready to stop missing calls",
    features: [
      { text: "AI Phone Answering (24/7)", included: true },
      { text: "Up to 100 calls/month", included: true },
      { text: "Custom greeting & scripts", included: true },
      { text: "Lead notifications (SMS + Email)", included: true },
      { text: "Call transcripts", included: true },
      { text: "Basic reporting", included: true },
      { text: "AI Website Chatbot", included: false },
      { text: "Review Management", included: false },
    ],
    cta: "Start Capturing Leads",
    popular: false,
  },
  {
    name: "Growth",
    price: "$497",
    description: "For businesses ready to automate their entire front office",
    features: [
      { text: "Everything in Starter", included: true },
      { text: "Unlimited calls", included: true },
      { text: "AI Website Chatbot", included: true },
      { text: "Appointment booking", included: true },
      { text: "CRM integration", included: true },
      { text: "SMS follow-up automation", included: true },
      { text: "Priority support", included: true },
      { text: "Review Management", included: false },
    ],
    cta: "Automate My Business",
    popular: true,
  },
  {
    name: "Premium",
    price: "$797",
    description: "Complete automation for maximum growth",
    features: [
      { text: "Everything in Growth", included: true },
      { text: "Review request automation", included: true },
      { text: "AI review responses", included: true },
      { text: "Reputation monitoring", included: true },
      { text: "Advanced reporting & analytics", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Custom integrations", included: true },
      { text: "White-glove onboarding", included: true },
    ],
    cta: "Get Premium Access",
    popular: false,
  },
];

const includedFeatures = [
  "24-hour setup",
  "No long-term contract",
  "30-day money-back guarantee",
  "Free onboarding call",
  "Ongoing support",
];

const pricingFaqs = [
  {
    question: "Is there a setup fee?",
    answer:
      "No. Setup is included in all plans. We handle everything to get you up and running within 24 hours.",
  },
  {
    question: "What happens if I go over my call limit?",
    answer:
      "On the Starter plan, additional calls are $2.50 each. Growth and Premium plans include unlimited calls, so you never have to worry about overage charges.",
  },
  {
    question: "Can I upgrade or downgrade anytime?",
    answer:
      "Yes. Changes take effect on your next billing cycle. You can upgrade instantly if you need more features right away.",
  },
  {
    question: "Do you offer annual discounts?",
    answer:
      "Yes. Pay annually and get 2 months free on any plan. That's a 17% savings compared to monthly billing.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, ACH bank transfers, and can invoice for annual plans.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Simple Pricing. Real Results.
            </h1>
            <p className="mt-6 text-lg text-navy-300">
              No hidden fees. No long-term contracts. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border ${
                  tier.popular
                    ? "border-violet-500 shadow-xl shadow-violet-500/10"
                    : "border-navy-200"
                } bg-white p-8`}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-500 text-white">
                    <Zap className="mr-1 h-3 w-3" />
                    Most Popular
                  </Badge>
                )}

                <div className="text-center">
                  <h3 className="text-xl font-semibold text-navy-900">{tier.name}</h3>
                  <p className="mt-2 text-sm text-navy-600">{tier.description}</p>
                  <p className="mt-6">
                    <span className="text-4xl font-bold text-navy-900">{tier.price}</span>
                    <span className="text-navy-600">/month</span>
                  </p>
                </div>

                <ul className="mt-8 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="h-5 w-5 shrink-0 text-success-600" />
                      ) : (
                        <X className="h-5 w-5 shrink-0 text-navy-300" />
                      )}
                      <span
                        className={
                          feature.included ? "text-navy-700" : "text-navy-400"
                        }
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`mt-8 w-full py-6 font-semibold ${
                    tier.popular
                      ? "bg-cta-500 hover:bg-cta-600 text-white"
                      : "bg-navy-900 hover:bg-navy-800 text-white"
                  }`}
                >
                  <Link href="/contact">{tier.cta}</Link>
                </Button>
              </div>
            ))}
          </div>

          {/* All Plans Include */}
          <div className="mt-16 rounded-2xl border border-navy-200 bg-white p-8">
            <h3 className="text-center text-lg font-semibold text-navy-900">
              All plans include:
            </h3>
            <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-4">
              {includedFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-navy-600">
                  <Check className="h-5 w-5 text-success-600" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise CTA */}
          <div className="mt-16 rounded-2xl bg-navy-50 p-8 text-center sm:p-12">
            <h3 className="text-2xl font-bold text-navy-900">Need something custom?</h3>
            <p className="mt-4 text-navy-600">
              Enterprise solutions and custom packages available for multi-location
              businesses.
            </p>
            <Button
              asChild
              variant="outline"
              className="mt-6 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white"
            >
              <Link href="/contact">Contact Us for Custom Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy-50 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-navy-900">
            Pricing Questions
          </h2>
          <div className="mt-12">
            <Accordion type="single" collapsible className="space-y-4">
              {pricingFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-lg border border-navy-200 bg-white px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left font-semibold text-navy-900 hover:text-violet-600 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-navy-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
