"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { AnimatedLine } from "@/components/ui/animated-line";
import { SectionDivider } from "@/components/ui/section-divider";

export function Problem() {
  const rm = useReducedMotion();
  const fade = rm
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
      };

  return (
    <section
      id="problem"
      className="relative scroll-mt-20 overflow-hidden bg-warm-50 py-24 sm:py-32"
    >
      {/* Oversized watermark "62%" */}
      <div className="swiss-watermark" aria-hidden="true">
        <span className="swiss-watermark-text text-[clamp(12rem,30vw,28rem)]">
          62%
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left column: copy (7 cols) */}
          <motion.div
            {...fade}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <SectionDivider className="mb-6" />

            {/* Animated line */}
            <div className="mb-8 max-w-xs">
              <AnimatedLine />
            </div>

            {/* Headline */}
            <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tighter text-ink-900">
              You&apos;re knee-deep in a repair.{" "}
              <span className="text-signal-orange">Your phone buzzes.</span>
            </h2>

            {/* Body */}
            <p className="mt-6 max-w-lg text-ink-500 leading-relaxed">
              By the time you check it, they&apos;ve already called someone
              else. 62% of calls to service businesses go unanswered. 85% of
              those callers never leave a voicemail. They just move on.
            </p>
          </motion.div>

          {/* Right column: cost breakdown table (5 cols) */}
          <motion.div
            {...fade}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="rounded-lg border border-ink-300/50 bg-white p-8 shadow-sm sm:p-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-400">
                The real cost of missed calls
              </p>

              <div className="mt-8 space-y-6">
                {/* ~5 missed calls/week */}
                <div className="flex items-center justify-between border-b border-ink-300/30 pb-6">
                  <span className="text-ink-500">
                    Missed calls / week
                  </span>
                  <span className="font-display text-xl font-bold tabular-nums text-ink-900">
                    ~<AnimatedCounter target={5} />
                  </span>
                </div>

                {/* $1,200 per job */}
                <div className="flex items-center justify-between border-b border-ink-300/30 pb-6">
                  <span className="text-ink-500">
                    Average job value
                  </span>
                  <span className="font-display text-xl font-bold tabular-nums text-ink-900">
                    $<AnimatedCounter target={1200} suffix="" />
                  </span>
                </div>

                {/* 40% conversion */}
                <div className="flex items-center justify-between border-b border-ink-300/30 pb-6">
                  <span className="text-ink-500">
                    Conversion rate
                  </span>
                  <span className="font-display text-xl font-bold tabular-nums text-ink-900">
                    <AnimatedCounter target={40} suffix="%" />
                  </span>
                </div>

                {/* = $126,000+ annual loss */}
                <div className="pt-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-400">
                    Annual loss
                  </p>
                  <p className="mt-1 font-display text-5xl font-bold tracking-tight tabular-nums text-signal-orange sm:text-6xl">
                    $<AnimatedCounter target={126000} suffix="+" />
                  </p>
                </div>
              </div>
            </div>

            {/* Stat pills */}
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-ink-300/50 bg-white p-6 shadow-sm">
                <p className="font-display text-4xl font-bold tabular-nums text-signal-orange">
                  <AnimatedCounter target={62} suffix="%" />
                </p>
                <p className="mt-2 text-sm text-ink-500">
                  of calls go unanswered
                </p>
              </div>
              <div className="rounded-lg border border-ink-300/50 bg-white p-6 shadow-sm">
                <p className="font-display text-4xl font-bold tabular-nums text-signal-orange">
                  <AnimatedCounter target={85} suffix="%" />
                </p>
                <p className="mt-2 text-sm text-ink-500">
                  won&apos;t leave a voicemail
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
