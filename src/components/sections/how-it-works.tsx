"use client";

import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Tell us about your business",
    description:
      "Forward your line. We set up your AI receptionist with your services, pricing, and calendar. Takes one conversation and 24 hours.",
  },
  {
    step: "02",
    title: "AI answers your phone",
    description:
      "Every call picked up in under 1 second. The AI asks the right questions, qualifies the lead, and books the job straight into your calendar.",
  },
  {
    step: "03",
    title: "You see more jobs on your schedule",
    description:
      "Open your calendar and see new appointments. Check your dashboard for leads captured, revenue earned, and exactly what every call cost you versus what it brought in.",
  },
];

export function HowItWorks() {
  const shouldReduceMotion = useReducedMotion();
  const fade = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
      };

  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-20 overflow-hidden bg-ink-900 py-24 sm:py-32"
    >
      {/* Oversized watermark */}
      <div className="swiss-watermark" aria-hidden="true">
        <span className="swiss-watermark-text text-[12rem] !text-white sm:text-[18rem] lg:text-[22rem] !opacity-[0.02]">
          HOW
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div {...fade} transition={{ duration: 0.5 }}>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/30">
            Process
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Live in 24 hours. Three steps.
          </h2>
          {/* Accent divider */}
          <div
            className="mt-6 h-[3px] w-16 gradient-brand"
            aria-hidden="true"
          />
        </motion.div>

        {/* 3-column grid with gap-px dividers */}
        <div className="mt-16 grid grid-cols-1 gap-px bg-white/5 sm:mt-20 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              {...fade}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative bg-ink-900 p-8 transition-colors duration-300 hover:bg-ink-800 hover-line-accent sm:p-10"
            >
              {/* Oversized step number watermark */}
              <span
                className="pointer-events-none absolute right-6 top-6 select-none font-display text-[8rem] font-bold leading-none text-white/[0.04] sm:text-[10rem]"
                aria-hidden="true"
              >
                {step.step}
              </span>

              {/* Step label */}
              <div className="relative">
                <span className="font-display text-sm font-medium tabular-nums tracking-wider text-white/30">
                  Step {step.step}
                </span>

                <h3 className="mt-6 font-display text-xl font-semibold leading-tight text-white sm:text-2xl">
                  {step.title}
                </h3>

                <p className="mt-4 leading-relaxed text-white/50">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
