"use client";

import { motion } from "framer-motion";
import { Plug, Target, TrendingUp } from "lucide-react";

const steps = [
  {
    step: "01",
    name: "Connect",
    description:
      "We set up your AI phone system in less than 24 hours. No technical skills required—we handle everything.",
    icon: Plug,
    color: "from-violet-500 to-violet-600",
  },
  {
    step: "02",
    name: "Capture",
    description:
      "AI answers every call, qualifies leads, and books appointments directly into your calendar. 24/7/365.",
    icon: Target,
    color: "from-cta-500 to-cta-600",
  },
  {
    step: "03",
    name: "Grow",
    description:
      "You focus on the job while leads flow automatically. Review captured opportunities and watch your business grow.",
    icon: TrendingUp,
    color: "from-success-500 to-success-600",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-navy-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-navy-600">
            Get up and running in three simple steps. No complicated setup, no lengthy
            onboarding—just results.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-navy-200 lg:block" />
              )}

              <div className="relative flex flex-col items-center text-center">
                {/* Step Number & Icon */}
                <div className="relative">
                  <div
                    className={`flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} shadow-lg`}
                  >
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-bold text-navy-900 shadow-md">
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-6 text-xl font-bold text-navy-900">{step.name}</h3>
                <p className="mt-3 text-navy-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
