import { Metadata } from "next";
import { Bot, Zap, Brain, Calendar, UserCheck, Globe } from "lucide-react";
import { ServicePage } from "@/components/templates/service-page";

export const metadata: Metadata = {
  title: "AI Chatbots for Business Websites",
  description:
    "Turn website visitors into booked appointments with AI chatbots. Instant engagement, 24/7 availability, and automatic scheduling. Starting at $197/month.",
  openGraph: {
    title: "AI Chatbots for Business Websites | SignalCrew",
    description:
      "Turn website visitors into booked appointments with AI chatbots. Starting at $197/month.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Chatbots for Business Websites | SignalCrew",
    description:
      "Turn website visitors into booked appointments with AI chatbots. Starting at $197/month.",
  },
};

export default function AIChatbotsPage() {
  return (
    <ServicePage
      hero={{
        title: "Your website visitors have questions. Give them answers at 11pm.",
        description:
          "AI chatbots engage visitors instantly, answer their questions, and schedule appointments -- no forms, no waiting. Your website finally works while you don\u2019t.",
        ctaText: "Get Started",
        ctaHref: "/contact",
        secondaryCtaText: "View Pricing",
        secondaryCtaHref: "/pricing",
      }}
      problem={{
        title: "They land. They see a form. They leave.",
        paragraphs: [
          "Visitors land on your website with questions. They see a contact form and bounce. They don&apos;t want to fill out fields and wait for a callback. They want answers now.",
          "<strong class=\"text-ink-900\">53% of website visitors leave within the first 15 seconds</strong> if they don&apos;t find what they need. Every visitor who bounces is potential revenue walking out the door.",
          "Traditional contact forms convert at just 2-3%. Live chat requires staff to be constantly available. You need something that&apos;s always on, always helpful, and actually <span class=\"font-display font-bold text-primary-600\">converts</span>.",
        ],
      }}
      features={{
        title: "Intelligent conversations that convert.",
        subtitle:
          "More than a chatbot -- it\u2019s a 24/7 sales assistant for your website.",
        items: [
          {
            icon: Zap,
            title: "Instant Response to Every Visitor",
            description:
              "Engage visitors the second they land. No waiting, no forms sitting in limbo. Conversations start immediately.",
          },
          {
            icon: Brain,
            title: "Trained on Your Business",
            description:
              "AI knows your services, pricing, service area, and FAQs. It answers like a knowledgeable team member -- because we trained it to be one.",
          },
          {
            icon: Calendar,
            title: "Books Appointments Automatically",
            description:
              "Checks your calendar availability and schedules appointments on the spot. No back-and-forth needed.",
          },
          {
            icon: UserCheck,
            title: "Captures Lead Information",
            description:
              "Collects name, email, phone, and service needed -- all through natural conversation, not clunky forms.",
          },
          {
            icon: Globe,
            title: "Works on Any Website",
            description:
              "Simple embed code works with WordPress, Wix, Squarespace, or any custom website. Install in under 5 minutes.",
          },
          {
            icon: Bot,
            title: "Seamless Human Handoff",
            description:
              "Complex questions get routed to your team with full conversation context. Nothing falls through the cracks.",
          },
        ],
      }}
      useCases={{
        title: "Real-world scenarios.",
        subtitle:
          "See how AI chatbots turn visitors into booked appointments.",
        items: [
          {
            title: "After-Hours Lead Capture",
            description:
              "A homeowner browses your site at 10PM looking for an HVAC quote. The chatbot engages them, answers their questions, and books a morning estimate -- while you sleep.",
          },
          {
            title: "Instant Quote Requests",
            description:
              "Visitors want a ballpark before picking up the phone. AI gathers project details, provides rough estimates, and schedules a detailed quote visit if they're interested.",
          },
          {
            title: "Service Area Questions",
            description:
              "\"Do you service my area?\" AI confirms instantly based on zip code. No more fielding the same repetitive question 15 times a day.",
          },
          {
            title: "FAQ Deflection",
            description:
              "What are your hours? Do you offer financing? What's your warranty? AI handles common questions 24/7, freeing you up for revenue-generating calls.",
          },
        ],
      }}
      testimonial={{
        quote:
          "We added the chatbot on Friday and had 3 new appointments booked by Monday morning. The ROI was instant.",
        author: "Jason T.",
        company: "Premier Electric",
      }}
      pricing={{
        label: "Start converting visitors today.",
        price: "$197",
        suffix: "/mo",
        subtitle:
          "AI Chatbot starts at just $197/month. Installs in minutes on any website.",
        ctaText: "Book Your Demo",
        ctaHref: "/contact",
        bullets: [
          "5-minute installation",
          "Works on any website platform",
          "Customized for your business",
        ],
      }}
    />
  );
}
