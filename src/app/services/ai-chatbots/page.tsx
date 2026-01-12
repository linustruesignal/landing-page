import { Metadata } from "next";
import Link from "next/link";
import {
  Bot,
  Zap,
  Brain,
  Calendar,
  UserCheck,
  Globe,
  ArrowRight,
  Check,
  Star,
  MousePointer,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "AI Chatbots for Business Websites",
  description:
    "Turn website visitors into booked appointments with AI chatbots. Instant engagement, 24/7 availability, and automatic scheduling. Starting at $197/month.",
};

const features = [
  {
    icon: Zap,
    title: "Instant Response to Every Visitor",
    description:
      "Engage visitors the moment they land. No waiting, no contact forms sitting in limbo.",
  },
  {
    icon: Brain,
    title: "Trained on Your Business",
    description:
      "AI knows your services, pricing, service area, and FAQs. Answers like a knowledgeable team member.",
  },
  {
    icon: Calendar,
    title: "Books Appointments Automatically",
    description:
      "Checks your calendar availability and schedules appointments without any back-and-forth.",
  },
  {
    icon: UserCheck,
    title: "Captures Lead Information",
    description:
      "Collects name, email, phone, and service needed—all through natural conversation.",
  },
  {
    icon: Globe,
    title: "Works on Any Website",
    description:
      "Simple embed code works with WordPress, Wix, Squarespace, or any custom website.",
  },
  {
    icon: Bot,
    title: "Seamless Human Handoff",
    description:
      "Complex questions get routed to your team with full conversation context.",
  },
];

const useCases = [
  {
    title: "After-Hours Lead Capture",
    description:
      "A homeowner browses your site at 10PM looking for an HVAC quote. The chatbot engages them, answers questions, and books a morning estimate—while you sleep.",
  },
  {
    title: "Instant Quote Requests",
    description:
      "Visitors often want a ballpark before calling. AI gathers project details and provides estimates or schedules a detailed quote visit.",
  },
  {
    title: "Service Area Questions",
    description:
      "Do you service my area? AI instantly confirms service areas, saving you from fielding repetitive questions.",
  },
  {
    title: "FAQ Deflection",
    description:
      "What are your hours? Do you offer financing? AI handles common questions 24/7, freeing you for revenue-generating calls.",
  },
];

export default function AIChatbotsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-navy-800 px-4 py-2 text-sm text-navy-300">
              <Bot className="h-4 w-4 text-violet-400" />
              AI Chatbots
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Turn Website Visitors Into Booked Jobs
            </h1>
            <p className="mt-6 text-lg text-navy-300">
              AI chatbots engage visitors instantly, answer questions, and schedule
              appointments—no forms, no waiting. Your website works for you 24/7.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-cta-500 hover:bg-cta-600 text-white font-semibold px-8"
              >
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-navy-600 text-white hover:bg-navy-800"
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3">
              <MousePointer className="h-8 w-8 text-red-500" />
              <h2 className="text-3xl font-bold text-navy-900">The Problem</h2>
            </div>
            <div className="mt-8 space-y-6 text-lg text-navy-600">
              <p>
                Visitors land on your website with questions. They see a contact form...
                and bounce. They don't want to wait for a callback. They want answers
                now.
              </p>
              <p>
                <strong className="text-navy-900">
                  53% of website visitors leave within the first 15 seconds
                </strong>{" "}
                if they don't find what they need. Every visitor who bounces is potential
                revenue lost.
              </p>
              <p>
                Traditional contact forms convert at just 2-3%. Live chat requires staff
                to be constantly available. You need something that's always on, always
                helpful, and actually converts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-navy-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-navy-900">
              Intelligent Conversations That Convert
            </h2>
            <p className="mt-4 text-lg text-navy-600">
              More than a chatbot—it's a 24/7 sales assistant for your website.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-xl bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100">
                  <feature.icon className="h-6 w-6 text-violet-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-navy-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-navy-900">Real-World Scenarios</h2>
            <p className="mt-4 text-lg text-navy-600">
              See how AI chatbots convert visitors into customers.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="rounded-xl border border-navy-200 bg-white p-8"
              >
                <h3 className="text-xl font-semibold text-navy-900">{useCase.title}</h3>
                <p className="mt-4 text-navy-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-navy-900 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-cta-400 text-cta-400" />
            ))}
          </div>
          <blockquote className="mt-8 text-2xl font-medium text-white sm:text-3xl">
            "We added the chatbot on Friday and had 3 new appointments booked by Monday
            morning. The ROI was instant."
          </blockquote>
          <div className="mt-8">
            <p className="font-semibold text-white">Jason T.</p>
            <p className="text-navy-400">Premier Electric, San Antonio</p>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-navy-200 bg-white p-8 sm:p-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold text-navy-900">
                  Start Converting Visitors Today
                </h2>
                <p className="mt-4 text-lg text-navy-600">
                  AI Chatbot starts at just $197/month. Installs in minutes on any
                  website.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-3 text-navy-700">
                    <Check className="h-5 w-5 text-success-600" />
                    5-minute installation
                  </li>
                  <li className="flex items-center gap-3 text-navy-700">
                    <Check className="h-5 w-5 text-success-600" />
                    Works on any website platform
                  </li>
                  <li className="flex items-center gap-3 text-navy-700">
                    <Check className="h-5 w-5 text-success-600" />
                    Customized for your business
                  </li>
                </ul>
              </div>
              <div className="text-center lg:text-right">
                <p className="text-sm text-navy-500">Starting at</p>
                <p className="text-5xl font-bold text-navy-900">
                  $197<span className="text-xl font-normal text-navy-500">/mo</span>
                </p>
                <Button
                  asChild
                  size="lg"
                  className="mt-6 bg-cta-500 hover:bg-cta-600 text-white font-semibold px-8"
                >
                  <Link href="/contact">
                    Book Your Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
