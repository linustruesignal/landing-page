"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  const shouldReduceMotion = useReducedMotion();
  const fade = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
      };

  return (
    <section className="relative overflow-hidden bg-ink-900 py-24 text-white sm:py-32">
      {/* Oversized "START" watermark */}
      <div className="swiss-watermark" aria-hidden="true">
        <span className="swiss-watermark-text text-[20vw] text-white opacity-[0.02]">
          START
        </span>
      </div>

      {/* Accent line at top */}
      <div
        className="mx-auto mb-16 h-[3px] max-w-7xl gradient-brand"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fade} transition={{ duration: 0.7 }}>
          {/* Headline */}
          <h2 className="font-display text-[clamp(2rem,5vw,5rem)] font-bold leading-[1.05] tracking-tighter">
            Your next customer is
            <br />
            calling right now.
            <br />
            <span className="text-primary-400">Who answers?</span>
          </h2>

          {/* CTA button + subtext */}
          <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              variant="brand"
              className="cta-pulse group px-10 py-7 font-display text-base"
            >
              <Link href="/contact">
                Start Capturing Every Call
                <ArrowRight
                  className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Button>
            <span className="text-sm text-white/30">
              No credit card &bull; Live in 24 hours &bull; Cancel anytime
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
