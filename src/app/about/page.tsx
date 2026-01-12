import { Metadata } from "next";
import Link from "next/link";
import { Target, Lightbulb, MapPin, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "True Signal Digital brings enterprise-level AI automation to San Antonio's service businesses—without the enterprise complexity or price tag.",
};

const values = [
  {
    icon: Target,
    title: "Results Over Features",
    description:
      "We measure success by your revenue, not our feature list. Every solution is designed to generate measurable ROI.",
  },
  {
    icon: Lightbulb,
    title: "Simplicity",
    description:
      "If it's complicated, we haven't done our job. Our solutions work seamlessly without requiring technical expertise.",
  },
  {
    icon: MapPin,
    title: "Local First",
    description:
      "San Antonio businesses deserve San Antonio service. We're here in your community, invested in your success.",
  },
  {
    icon: Heart,
    title: "No BS Pricing",
    description:
      "Transparent pricing, no hidden fees, cancel anytime. We earn your business every month with results.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              We Help Local Businesses Compete with AI
            </h1>
            <p className="mt-6 text-lg text-navy-300">
              True Signal Digital brings enterprise-level automation to San Antonio's
              service businesses—without the enterprise complexity or price tag.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-navy-900">
              Why I Started True Signal Digital
            </h2>

            <div className="mt-8 space-y-6 text-lg text-navy-600">
              <p>
                With a background in computer science, I've spent years building
                technology solutions for businesses of all sizes. But I noticed something
                frustrating: the same AI tools helping Fortune 500 companies were
                completely out of reach for local businesses.
              </p>

              <p>
                Meanwhile, I watched friends who run HVAC companies, plumbing businesses,
                and contracting firms lose thousands of dollars to missed calls and manual
                processes. They didn't need complicated enterprise software—they needed
                simple, affordable AI that just works.
              </p>

              <p>
                That's why I started True Signal Digital. We take powerful AI technology
                and make it accessible to the businesses that form the backbone of San
                Antonio's economy. No technical expertise required. No long-term
                contracts. Just results.
              </p>

              <p>
                Every day, I wake up excited to help another local business owner reclaim
                their time and stop leaving money on the table. If you're tired of
                missing calls and drowning in admin work, I'd love to show you what's
                possible.
              </p>
            </div>

            <div className="mt-8 border-l-4 border-violet-500 pl-6">
              <p className="text-lg font-medium text-navy-900">
                "Our mission is simple: give every local business the AI superpowers that
                used to be reserved for big corporations."
              </p>
              <p className="mt-2 text-navy-600">— Founder, True Signal Digital</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-navy-900">Our Values</h2>
            <p className="mt-4 text-lg text-navy-600">
              These principles guide everything we do.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-navy-200 bg-white p-8 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100">
                  <value.icon className="h-6 w-6 text-violet-600" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-navy-900">{value.title}</h3>
                <p className="mt-3 text-navy-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* San Antonio */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-navy-900 p-8 sm:p-12 lg:p-16">
            <div className="mx-auto max-w-2xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-navy-800 px-4 py-2 text-sm text-navy-300">
                <MapPin className="h-4 w-4 text-cta-500" />
                Proudly Based in San Antonio
              </div>
              <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
                Built for San Antonio, by San Antonio
              </h2>
              <p className="mt-6 text-lg text-navy-300">
                We're not a faceless tech company in Silicon Valley. We're your
                neighbors—and we understand the unique challenges facing service
                businesses in our community.
              </p>
              <Button
                asChild
                className="mt-8 bg-cta-500 hover:bg-cta-600 text-white font-semibold px-8"
              >
                <Link href="/contact">
                  Let's Talk
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
