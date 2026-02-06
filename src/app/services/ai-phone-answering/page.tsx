import { Metadata } from "next";
import { Clock, Users, MessageSquare, Bell, Calendar, FileText } from "lucide-react";
import { ServicePage } from "@/components/templates/service-page";

export const metadata: Metadata = {
  title: "AI Phone Answering Service for Small Business",
  description:
    "24/7 AI phone answering that books appointments automatically. Perfect for HVAC, plumbers, and contractors who can't afford to miss calls. Starting at $297/month.",
  openGraph: {
    title: "AI Phone Answering Service for Small Business | SignalCrew",
    description: "24/7 AI phone answering that books appointments automatically. Starting at $297/month.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Phone Answering Service | SignalCrew",
    description: "24/7 AI phone answering that books appointments automatically.",
  },
};

export default function AIPhoneAnsweringPage() {
  return (
    <ServicePage
      hero={{
        title: "Your phone rings. AI picks up. Jobs get booked.",
        description:
          "AI voice agents handle unlimited calls simultaneously, qualify leads, and book appointments while you're on the job site. 24/7/365.",
        ctaText: "Start Capturing Leads",
        ctaHref: "/contact",
        secondaryCtaText: "View Pricing",
        secondaryCtaHref: "/pricing",
      }}
      problem={{
        title: "The call you can\u2019t answer is the job you can\u2019t bill.",
        paragraphs: [
          "You&apos;re elbow-deep in a repair when your phone buzzes. Can&apos;t answer. By the time you call back, they&apos;ve already called your competitor and booked with them instead.",
          "<strong class=\"text-ink-900\">62% of calls to service businesses go unanswered.</strong> 85% of those callers won&apos;t leave a voicemail -- they just move on to the next company in the search results.",
          "For a business averaging $1,200 per job, missing just 2 calls a week means losing over <span class=\"font-display font-bold text-signal-orange\">$120,000+ per year</span>.",
        ],
      }}
      features={{
        title: "Everything you need to capture every call.",
        subtitle: "Professional call handling that works while you sleep.",
        items: [
          { icon: Clock, title: "24/7/365 Call Answering", description: "Never miss another call -- even at 3AM on Christmas. AI picks up instantly, every single time." },
          { icon: Users, title: "Unlimited Simultaneous Calls", description: "Unlike a receptionist, AI handles 10, 50, or 100 calls at once. Busy season? No problem." },
          { icon: MessageSquare, title: "Custom Scripts for Your Business", description: "Trained on your services, pricing, and processes. Callers think they're talking to your team." },
          { icon: Bell, title: "Instant Lead Notifications", description: "SMS and email alerts for every call with full conversation details. Know who called and why -- instantly." },
          { icon: Calendar, title: "Appointment Booking Integration", description: "AI checks your calendar and books appointments directly. No back-and-forth, no double-booking." },
          { icon: FileText, title: "Call Transcripts & Recordings", description: "Full transcripts and recordings of every conversation. Never wonder what was said to a customer." },
        ],
      }}
      useCases={{
        title: "How businesses use it.",
        subtitle: "Real scenarios where AI phone answering pays for itself.",
        items: [
          { title: "After-Hours Emergency Calls", description: "A pipe bursts at 2AM. Your AI answers, qualifies the emergency, collects the address, and sends you the details -- so you can decide if it's worth the callout before you even get out of bed." },
          { title: "Busy Season Overflow", description: "Peak season hits and calls stack up faster than you can answer. AI handles the overflow seamlessly -- booking jobs, capturing leads, and keeping every caller happy while you're on the job site." },
          { title: "Professional First Impression", description: "Every caller gets a polished, consistent experience. No more rushed answers from a loud job site, no more calls dumped to a generic voicemail that nobody checks." },
          { title: "Qualifying Tire-Kickers", description: "AI asks the right screening questions upfront -- budget, timeline, service needed. Price-shoppers get filtered out. Your callback list has only serious, qualified leads." },
        ],
      }}
      testimonial={{
        quote: "I was skeptical about AI answering my phones, but customers genuinely can't tell the difference. We went from missing 40% of calls to capturing every single one.",
        author: "Sarah K.",
        company: "Comfort Air HVAC",
      }}
      pricing={{
        label: "Start capturing leads today.",
        price: "$297",
        suffix: "/mo",
        subtitle: "AI Phone Answering starts at just $297/month. Most clients see positive ROI within the first week.",
        ctaText: "Book Your Demo",
        ctaHref: "/contact",
        bullets: ["24-hour setup", "No long-term contract", "30-day money-back guarantee"],
      }}
    />
  );
}
