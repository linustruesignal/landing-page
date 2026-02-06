"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { AnimatedLine } from "@/components/ui/animated-line";

export function Hero() {
  const rm = useReducedMotion();
  const fade = rm
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
      };

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-warm-50">
      {/* Oversized watermark "$126K" */}
      <div className="swiss-watermark" aria-hidden="true">
        <span className="swiss-watermark-text text-[clamp(12rem,30vw,28rem)]">
          $126K
        </span>
      </div>

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        {/* Asymmetric grid: 7 / 5 */}
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left column (7 cols) */}
          <div className="lg:col-span-7">
            {/* Badge with pulsing dot */}
            <motion.div {...fade} transition={{ duration: 0.5 }}>
              <div className="mb-8 inline-flex items-center gap-2.5 rounded-full bg-primary-50 px-4 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-600" />
                </span>
                <span className="text-xs font-medium text-primary-700">
                  47 calls answered for businesses like yours today
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fade}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display max-w-5xl text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[0.92] tracking-tighter text-ink-900"
            >
              Never lose a<br />
              customer to<br />
              <span className="text-primary-600">voicemail</span> again.
            </motion.h1>

            {/* Animated line */}
            <motion.div
              {...fade}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 max-w-md"
            >
              <AnimatedLine />
            </motion.div>

            {/* Subtext */}
            <motion.p
              {...fade}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 max-w-lg text-ink-500 leading-relaxed"
            >
              Customers call. AI answers in under 1 second. Leads get qualified.
              Jobs get booked to your calendar. You never miss a dollar.
            </motion.p>

            {/* CTA */}
            <motion.div
              {...fade}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10"
            >
              <Button
                asChild
                size="lg"
                variant="brand"
                className="group px-8 py-6 font-display text-sm"
              >
                <Link href="/contact">
                  Get a Free Call Audit
                  <ArrowRight
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </Button>
              <span className="ml-4 text-xs text-ink-400 hidden sm:inline">
                No credit card &bull; 24h setup
              </span>
            </motion.div>
          </div>

          {/* Right column (5 cols) — floating stat card */}
          <motion.div
            {...fade}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-end lg:col-span-5"
          >
            <div className="w-full rounded-lg border border-ink-300/50 bg-white p-8 shadow-sm sm:p-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-400">
                Average client results
              </p>

              <div className="mt-8 space-y-6">
                {/* 23+ jobs/mo */}
                <div className="flex items-end justify-between border-b border-ink-300/30 pb-6">
                  <span className="text-ink-500">Jobs booked / month</span>
                  <span className="font-display text-3xl font-bold tabular-nums text-ink-900 sm:text-4xl">
                    <AnimatedCounter target={23} suffix="+" />
                  </span>
                </div>

                {/* <1s pickup */}
                <div className="flex items-end justify-between border-b border-ink-300/30 pb-6">
                  <span className="text-ink-500">Pickup speed</span>
                  <span className="font-display text-3xl font-bold tabular-nums text-ink-900 sm:text-4xl">
                    &lt;1s
                  </span>
                </div>

                {/* 100% calls answered */}
                <div className="flex items-end justify-between">
                  <span className="text-ink-500">Calls answered</span>
                  <span className="font-display text-3xl font-bold tabular-nums text-accent-500 sm:text-4xl">
                    <AnimatedCounter target={100} suffix="%" />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats strip below hero */}
      <div className="relative border-y border-ink-300/50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-ink-300/50 sm:grid-cols-4">
          {[
            { val: 24, suffix: "/7", label: "Always on" },
            { val: 1, suffix: "s", prefix: "<", label: "Response" },
            { val: 23, suffix: "+", label: "Jobs/month" },
            { val: 100, suffix: "%", label: "Captured" },
          ].map((s) => (
            <div key={s.label} className="px-6 py-10 text-center">
              <p className="font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
                <AnimatedCounter target={s.val} suffix={s.suffix} prefix={s.prefix || ""} />
              </p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-400">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
