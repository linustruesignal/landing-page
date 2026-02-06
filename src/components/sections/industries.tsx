"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Thermometer,
  Droplets,
  Zap,
  Hammer,
  UtensilsCrossed,
  Heart,
} from "lucide-react";
import { SectionDivider } from "@/components/ui/section-divider";

const industries = [
  {
    name: "HVAC",
    description: "Emergency AC calls at 2am? Answered and booked.",
    icon: Thermometer,
  },
  {
    name: "Plumbing",
    description: "Burst pipe on a Sunday? AI picks up instantly.",
    icon: Droplets,
  },
  {
    name: "Electrical",
    description: "24/7 coverage for every flickering light call.",
    icon: Zap,
  },
  {
    name: "General Contractors",
    description: "You build. We handle the phones.",
    icon: Hammer,
  },
  {
    name: "Restaurants",
    description: "Reservations and catering — never missed.",
    icon: UtensilsCrossed,
  },
  {
    name: "Wedding & Events",
    description: "Every inquiry answered, every booking captured.",
    icon: Heart,
  },
];

export function Industries() {
  const rm = useReducedMotion();
  const fade = rm ? {} : { initial: { opacity: 0, y: 12 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fade} transition={{ duration: 0.6 }}>
          <SectionDivider className="mb-4" />
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Built for businesses like yours.
          </h2>
          <p className="mt-4 max-w-lg text-ink-500">
            Industry-specific AI that understands your customers and speaks their language.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-px bg-ink-300/30 sm:grid-cols-3">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              {...fade}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex flex-col items-center bg-warm-50 p-8 text-center transition-colors hover:bg-white"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-ink-300/30 bg-white transition-colors group-hover:border-primary-300 group-hover:bg-primary-50">
                <industry.icon className="h-6 w-6 text-ink-400 transition-colors group-hover:text-primary-600" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-sm font-semibold text-ink-900 group-hover:text-primary-600 transition-colors">
                {industry.name}
              </h3>
              <p className="mt-2 text-xs text-ink-500">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
