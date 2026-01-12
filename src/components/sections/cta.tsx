"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="bg-gradient-to-br from-navy-900 via-navy-900 to-violet-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Stop Losing Leads?
          </h2>
          <p className="mt-6 text-lg text-navy-300">
            Book a free 15-minute demo and see exactly how many calls you're missing. We'll
            show you the potential revenue you're leaving on the table.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-cta-500 hover:bg-cta-600 text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-cta-500/25 transition-all hover:shadow-xl hover:shadow-cta-500/30"
            >
              <Link href="/contact">
                Book My Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-navy-400">
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success-500" />
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success-500" />
              See results in your first week
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success-500" />
              Cancel anytime
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
