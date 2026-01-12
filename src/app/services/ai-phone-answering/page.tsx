import { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Clock,
  Users,
  MessageSquare,
  Bell,
  Calendar,
  FileText,
  ArrowRight,
  Check,
  Star,
  PhoneOff,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "AI Phone Answering Service for Small Business",
  description:
    "24/7 AI phone answering that books appointments automatically. Perfect for HVAC, plumbers, and contractors who can't afford to miss calls. Starting at $297/month.",
};

const features = [
  {
    icon: Clock,
    title: "24/7/365 Call Answering",
    description: "Never miss another call—even at 3AM on Christmas. AI handles every call instantly.",
  },
  {
    icon: Users,
    title: "Unlimited Simultaneous Calls",
    description: "Unlike a human receptionist, AI can handle 10, 50, or 100 calls at once.",
  },
  {
    icon: MessageSquare,
    title: "Custom Scripts for Your Business",
    description: "AI is trained on your services, pricing, and processes. It sounds like your team.",
  },
  {
    icon: Bell,
    title: "Instant Lead Notifications",
    description: "Get SMS and email alerts for every call with full conversation details.",
  },
  {
    icon: Calendar,
    title: "Appointment Booking Integration",
    description: "AI checks your calendar and books appointments directly—no back and forth.",
  },
  {
    icon: FileText,
    title: "Call Transcripts & Recordings",
    description: "Review every conversation. Never wonder what was said to a customer.",
  },
];

const useCases = [
  {
    title: "After-Hours Emergency Calls",
    description:
      "A pipe bursts at 2AM. Your AI answers, qualifies the emergency, and gets you the info to decide if it's worth the callout—before you even wake up.",
  },
  {
    title: "Busy Season Overflow",
    description:
      "During peak season, calls stack up. AI handles the overflow, books jobs, and ensures every lead is captured while you're on the job site.",
  },
  {
    title: "Professional First Impression",
    description:
      "Every caller gets a professional, consistent experience. No more rushed answers from the field or calls going to voicemail.",
  },
  {
    title: "Qualifying Tire-Kickers",
    description:
      "AI asks the right questions to filter out price-shoppers from serious customers. Your time goes to qualified leads only.",
  },
];

export default function AIPhoneAnsweringPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-navy-800 px-4 py-2 text-sm text-navy-300">
              <Phone className="h-4 w-4 text-violet-400" />
              AI Phone Answering
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Answer Every Call—Even at 3AM
            </h1>
            <p className="mt-6 text-lg text-navy-300">
              AI voice agents handle unlimited calls simultaneously, qualify leads, and
              book appointments while you focus on the work. 24/7/365.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-cta-500 hover:bg-cta-600 text-white font-semibold px-8"
              >
                <Link href="/contact">
                  Start Capturing Leads
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
              <PhoneOff className="h-8 w-8 text-red-500" />
              <h2 className="text-3xl font-bold text-navy-900">The Problem</h2>
            </div>
            <div className="mt-8 space-y-6 text-lg text-navy-600">
              <p>
                You're on a job site when your phone rings. You can't answer. By the time
                you call back, they've already booked with your competitor.
              </p>
              <p>
                <strong className="text-navy-900">62% of calls to small businesses go unanswered.</strong>{" "}
                And 85% of those callers won't leave a voicemail—they'll just move on.
              </p>
              <p>
                For a service business averaging $1,200 per job, missing just 2 calls a
                week means losing over <strong className="text-red-600">$120,000 per year</strong>.
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
              Everything You Need to Capture Every Call
            </h2>
            <p className="mt-4 text-lg text-navy-600">
              Professional call handling that works while you sleep.
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
            <h2 className="text-3xl font-bold text-navy-900">How Businesses Use It</h2>
            <p className="mt-4 text-lg text-navy-600">
              Real scenarios where AI phone answering delivers value.
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
            "I was skeptical about AI answering my phones, but customers can't tell the
            difference. Game changer for after-hours calls."
          </blockquote>
          <div className="mt-8">
            <p className="font-semibold text-white">Sarah K.</p>
            <p className="text-navy-400">Comfort Air HVAC, San Antonio</p>
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
                  Start Capturing Leads Today
                </h2>
                <p className="mt-4 text-lg text-navy-600">
                  AI Phone Answering starts at just $297/month. Most clients see positive
                  ROI within the first week.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-3 text-navy-700">
                    <Check className="h-5 w-5 text-success-600" />
                    24-hour setup
                  </li>
                  <li className="flex items-center gap-3 text-navy-700">
                    <Check className="h-5 w-5 text-success-600" />
                    No long-term contract
                  </li>
                  <li className="flex items-center gap-3 text-navy-700">
                    <Check className="h-5 w-5 text-success-600" />
                    30-day money-back guarantee
                  </li>
                </ul>
              </div>
              <div className="text-center lg:text-right">
                <p className="text-sm text-navy-500">Starting at</p>
                <p className="text-5xl font-bold text-navy-900">
                  $297<span className="text-xl font-normal text-navy-500">/mo</span>
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
