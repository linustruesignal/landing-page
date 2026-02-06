"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    name: "AI Phone Answering",
    description:
      "Customers call. AI answers. Jobs get booked. You never know a call came in until the appointment hits your calendar.",
    href: "/services/ai-phone-answering",
    stat: "23+",
    unit: "jobs/mo",
  },
  {
    name: "AI Chatbots",
    description:
      "A visitor lands on your site at 11pm. Instead of bouncing, they chat with your AI and book a Tuesday appointment before bed.",
    href: "/services/ai-chatbots",
    stat: "40%",
    unit: "more leads",
  },
  {
    name: "Review Management",
    description:
      "Happy customers get a gentle nudge to leave a review. Unhappy ones get routed to you privately before they post. Your rating climbs on its own.",
    href: "/services/review-management",
    stat: "4.8\u2605",
    unit: "avg rating",
  },
  {
    name: "Business Automation",
    description:
      "Stop copying info between apps. Invoices, follow-ups, and reminders run themselves while you run your crew.",
    href: "/services/business-automation",
    stat: "10+",
    unit: "hrs saved/wk",
  },
];

export function ServicesOverview() {
  const shouldReduceMotion = useReducedMotion();
  const fade = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
      };

  return (
    <section className="relative overflow-hidden bg-warm-50 py-24 sm:py-32">
      {/* Oversized watermark */}
      <div className="swiss-watermark" aria-hidden="true">
        <span className="swiss-watermark-text text-[10rem] sm:text-[16rem] lg:text-[20rem]">
          TOOLS
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div {...fade} transition={{ duration: 0.5 }}>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-ink-400">
            Services
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            Tools that put money back in your pocket.
          </h2>
          {/* Accent divider */}
          <div
            className="mt-6 h-[3px] w-16 gradient-brand"
            aria-hidden="true"
          />
        </motion.div>

        {/* 2x2 grid with gap-px dividers */}
        <div className="mt-16 grid grid-cols-1 gap-px bg-ink-300/30 sm:mt-20 sm:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              {...fade}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={service.href}
                className="service-card group relative flex h-full flex-col bg-warm-50 p-8 transition-colors duration-300 hover:bg-white sm:p-10"
              >
                {/* Oversized stat watermark */}
                <span
                  className="pointer-events-none absolute bottom-4 right-6 select-none font-display text-[7rem] font-bold leading-none text-ink-900/[0.03] sm:text-[9rem]"
                  aria-hidden="true"
                >
                  {service.stat}
                </span>

                {/* Card content */}
                <div className="relative flex flex-1 flex-col">
                  {/* Title row with arrow */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-semibold text-ink-900 sm:text-2xl">
                      {service.name}
                    </h3>
                    <ArrowUpRight
                      className="h-5 w-5 shrink-0 text-ink-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-600"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Description */}
                  <p className="mt-4 leading-relaxed text-ink-500">
                    {service.description}
                  </p>

                  {/* Stat + unit */}
                  <div className="mt-auto flex items-baseline gap-2 pt-8">
                    <span className="font-display text-2xl font-bold tabular-nums text-primary-600">
                      {service.stat}
                    </span>
                    <span className="text-sm font-medium text-ink-400">
                      {service.unit}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
