"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Bot, Star, Cog, ArrowRight } from "lucide-react";

const services = [
  {
    name: "AI Phone Answering",
    description: "24/7 call answering that books jobs while you sleep. Never miss another lead.",
    href: "/services/ai-phone-answering",
    icon: Phone,
    color: "from-violet-500 to-violet-600",
    bgLight: "bg-violet-50",
  },
  {
    name: "AI Chatbots",
    description:
      "Website visitors become booked appointments automatically. Instant engagement, zero wait.",
    href: "/services/ai-chatbots",
    icon: Bot,
    color: "from-blue-500 to-blue-600",
    bgLight: "bg-blue-50",
  },
  {
    name: "Review Management",
    description:
      "Get 5-star reviews on autopilot. Automated requests and AI-powered responses.",
    href: "/services/review-management",
    icon: Star,
    color: "from-cta-500 to-cta-600",
    bgLight: "bg-cta-50",
  },
  {
    name: "Business Automation",
    description:
      "Eliminate 10+ hours of admin work every week. Automate scheduling, follow-ups, and more.",
    href: "/services/business-automation",
    icon: Cog,
    color: "from-success-500 to-success-600",
    bgLight: "bg-success-50",
  },
];

export function ServicesOverview() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            AI Solutions That Drive Results
          </h2>
          <p className="mt-4 text-lg text-navy-600">
            From phone calls to reviews, we automate the parts of your business that steal
            your time and lose you money.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={service.href}
                className="group relative flex flex-col rounded-2xl border border-navy-200 bg-white p-8 shadow-sm transition-all hover:border-violet-300 hover:shadow-lg"
              >
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.color}`}
                >
                  <service.icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-navy-900 group-hover:text-violet-600 transition-colors">
                  {service.name}
                </h3>

                <p className="mt-3 flex-1 text-navy-600">{service.description}</p>

                <div className="mt-6 flex items-center text-sm font-semibold text-violet-600">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
