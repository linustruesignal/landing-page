import { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionDivider } from "@/components/ui/section-divider";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for AI phone answering and business automation. No hidden fees, no contracts. Cancel anytime.",
  openGraph: {
    title: "Pricing | SignalCrew",
    description: "Simple, transparent pricing. No hidden fees, no contracts. Cancel anytime.",
  },
};

const tiers = [
  {
    name: "Starter",
    price: "$297",
    tagline: "For businesses ready to stop the bleeding",
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
    tagline: "The complete front-office replacement",
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
    tagline: "Full-stack growth engine",
    features: [
      { text: "Everything in Growth", included: true },
      { text: "Review request automation", included: true },
      { text: "AI review responses", included: true },
      { text: "Reputation monitoring", included: true },
      { text: "Advanced reporting", included: true },
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
  "No contract",
  "30-day money-back guarantee",
  "Free onboarding",
  "Ongoing support",
];

const pricingFaqs = [
  { question: "Is there a setup fee?", answer: "No. Setup is included in every plan. We handle everything and get you live within 24 hours." },
  { question: "What happens if I exceed my call limit?", answer: "On the Starter plan, additional calls are billed at $2.50 each. Growth and Premium include unlimited calls — no overage charges ever." },
  { question: "Can I upgrade or downgrade anytime?", answer: "Yes. Plan changes take effect on your next billing cycle. Upgrades can be applied immediately if you need features right away." },
  { question: "Do you offer annual discounts?", answer: "Yes. Pay annually and receive 2 months free on any plan — a 17% savings compared to monthly billing." },
  { question: "What payment methods do you accept?", answer: "All major credit cards, ACH bank transfers, and invoicing for annual plans." },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-warm-50 pt-32 pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionDivider className="mx-auto mb-8" />
            <h1 className="font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
              One missed call costs more
              <br className="hidden sm:inline" /> than a month of service.
            </h1>
            <p className="mt-6 text-lg text-ink-500 leading-relaxed">
              Simple pricing. No hidden fees. No contracts. Cancel with a click.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-lg border p-8 sm:p-10 ${
                  tier.popular
                    ? "border-primary-600 shadow-xl"
                    : "border-ink-300/50"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-4 left-8 inline-block rounded-full bg-primary-600 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                    Most Popular
                  </span>
                )}

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-400">
                    {tier.name}
                  </p>
                  <p className="mt-4">
                    <span className="font-display text-5xl font-bold tracking-tight text-ink-900">
                      {tier.price}
                    </span>
                    <span className="ml-1 text-sm text-ink-500">/mo</span>
                  </p>
                  <p className="mt-3 text-sm text-ink-500 leading-relaxed">
                    {tier.tagline}
                  </p>
                </div>

                <div className="my-8 h-px w-full bg-ink-300/30" aria-hidden="true" />

                <ul className="flex-1 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                      ) : (
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-ink-300" />
                      )}
                      <span className={`text-sm ${feature.included ? "text-ink-700" : "text-ink-300"}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`mt-10 w-full py-6 font-display text-sm font-semibold transition-colors duration-300 ${
                    tier.popular
                      ? "bg-primary-600 text-white hover:bg-primary-700"
                      : "bg-warm-100 text-ink-900 hover:bg-primary-600 hover:text-white"
                  }`}
                >
                  <Link href="/contact">
                    {tier.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          {/* All Plans Include */}
          <div className="mt-20 rounded-lg border border-ink-300/50 p-8 sm:p-10">
            <p className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-400">
              Included in every plan
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {includedFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-ink-600">
                  <Check className="h-4 w-4 text-primary-600" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise CTA */}
          <div className="mt-16 rounded-lg border border-ink-300/50 bg-warm-50 p-10 text-center sm:p-14">
            <h3 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
              Need something custom?
            </h3>
            <p className="mt-4 text-ink-500 leading-relaxed">
              Enterprise solutions and custom packages for multi-location businesses.
            </p>
            <Button asChild variant="brand-outline" className="mt-8 py-6">
              <Link href="/contact">
                Contact Us for Custom Pricing
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-warm-50 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionDivider className="mx-auto mb-8" />
          <h2 className="text-center font-display text-3xl font-bold text-ink-900 sm:text-4xl">
            Pricing Questions
          </h2>

          <div className="mt-14">
            {pricingFaqs.map((faq) => (
              <div key={faq.question} className="border-b border-ink-300/30 py-8">
                <h3 className="font-display text-base font-semibold text-ink-900">
                  {faq.question}
                </h3>
                <p className="mt-3 max-w-xl text-sm text-ink-500 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
