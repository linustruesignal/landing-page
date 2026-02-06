"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const badges = [
  "Full refund if no ROI in 30 days",
  "Answering calls within 24 hours",
  "99.9% uptime — your line never goes down",
  "Month-to-month, cancel anytime",
];

export function TrustBadges() {
  const shouldReduceMotion = useReducedMotion();
  const fade = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
      };

  return (
    <section className="border-y border-ink-300/50">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <motion.div
          {...fade}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {badges.map((badge, i) => (
            <motion.span
              key={badge}
              {...(shouldReduceMotion
                ? {}
                : {
                    initial: { opacity: 0, scale: 0.95 },
                    whileInView: { opacity: 1, scale: 1 },
                    viewport: { once: true },
                  })}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-4 py-2 text-xs font-medium text-ink-900 transition-all hover:border-primary-400 hover:bg-primary-50 sm:text-sm"
            >
              <CheckCircle
                className="h-3.5 w-3.5 shrink-0 text-primary-600 transition-transform group-hover:scale-110"
                aria-hidden="true"
              />
              {badge}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
