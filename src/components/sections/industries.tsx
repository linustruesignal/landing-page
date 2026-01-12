"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Thermometer,
  Droplets,
  Zap,
  Hammer,
  UtensilsCrossed,
  Heart,
} from "lucide-react";

const industries = [
  {
    name: "HVAC",
    description: "Never miss an emergency AC call again",
    href: "/industries/hvac",
    icon: Thermometer,
    color: "bg-blue-500",
  },
  {
    name: "Plumbing",
    description: "Capture every leak and emergency call",
    href: "/industries/plumbers",
    icon: Droplets,
    color: "bg-cyan-500",
  },
  {
    name: "Electrical",
    description: "24/7 coverage for electrical emergencies",
    href: "/industries/electrical",
    icon: Zap,
    color: "bg-yellow-500",
  },
  {
    name: "General Contractors",
    description: "Focus on the build, we'll handle the calls",
    href: "/industries/contractors",
    icon: Hammer,
    color: "bg-orange-500",
  },
  {
    name: "Restaurants",
    description: "Never miss a reservation or catering inquiry",
    href: "/industries/restaurants",
    icon: UtensilsCrossed,
    color: "bg-red-500",
  },
  {
    name: "Wedding & Events",
    description: "Capture every booking opportunity",
    href: "/industries/wedding-events",
    icon: Heart,
    color: "bg-pink-500",
  },
];

export function Industries() {
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
            Built for San Antonio Service Businesses
          </h2>
          <p className="mt-4 text-lg text-navy-600">
            Industry-specific AI solutions that understand your customers and speak their
            language.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={industry.href}
                className="group flex flex-col items-center rounded-xl border border-navy-200 bg-white p-6 text-center shadow-sm transition-all hover:border-violet-300 hover:shadow-md"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full ${industry.color}`}
                >
                  <industry.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-4 font-semibold text-navy-900 group-hover:text-violet-600 transition-colors">
                  {industry.name}
                </h3>
                <p className="mt-2 text-sm text-navy-500">{industry.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
