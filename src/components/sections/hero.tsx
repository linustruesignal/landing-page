"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900/95 to-violet-900/20" />
      
      {/* Accent Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cta-500/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-navy-700 bg-navy-800/50 px-4 py-2 text-sm text-navy-300 backdrop-blur">
              <Shield className="h-4 w-4 text-success-500" />
              Helping San Antonio businesses capture more leads 24/7
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Never Miss Another Lead—
            <span className="bg-gradient-to-r from-violet-400 to-violet-300 bg-clip-text text-transparent">
              Day or Night
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-navy-300 sm:text-xl"
          >
            AI-powered voice agents answer every call, qualify leads, and book appointments
            automatically. San Antonio service businesses capture thousands in revenue they
            used to lose.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-cta-500 hover:bg-cta-600 text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-cta-500/25 transition-all hover:shadow-xl hover:shadow-cta-500/30"
            >
              <Link href="/contact">
                Book Your Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-navy-600 bg-transparent text-white hover:bg-navy-800 hover:text-white px-8 py-6 text-lg"
            >
              <Link href="#how-it-works">
                <Play className="mr-2 h-5 w-5" />
                See How It Works
              </Link>
            </Button>
          </motion.div>

          {/* Social Proof Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3"
          >
            <div>
              <p className="text-3xl font-bold text-white sm:text-4xl">24/7</p>
              <p className="mt-1 text-sm text-navy-400">Always Available</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white sm:text-4xl">&lt;1s</p>
              <p className="mt-1 text-sm text-navy-400">Answer Time</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-3xl font-bold text-white sm:text-4xl">100%</p>
              <p className="mt-1 text-sm text-navy-400">Calls Captured</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
