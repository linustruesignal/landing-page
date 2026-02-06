"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionDivider } from "@/components/ui/section-divider";

const featured = {
  metric: "$27K+",
  label: "new revenue first month",
  quote:
    "23 extra jobs showed up on our calendar the first month. That\u2019s $27,000 in revenue that used to ring through to voicemail and disappear.",
  author: "Mike Davidson",
  company: "Premier Plumbing",
};

const secondary = [
  {
    metric: "100%",
    label: "calls answered",
    quote:
      "We used to miss every call after 5pm. Now those after-hours calls turn into morning appointments. We went from 60% answered to 100% overnight.",
    author: "Sarah Kim",
    company: "Comfort Air HVAC",
  },
  {
    metric: "15+",
    label: "hrs back/wk",
    quote:
      "I used to pull my phone out between every job. Now I just check my calendar at lunch and see three new bookings I didn\u2019t have to touch.",
    author: "Carlos Martinez",
    company: "CM Contractors",
  },
];

export function Testimonials() {
  const shouldReduceMotion = useReducedMotion();
  const fade = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
      };

  return (
    <section className="bg-warm-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div {...fade} transition={{ duration: 0.6 }}>
          <SectionDivider className="mb-4" />
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Real numbers from real businesses.
          </h2>
        </motion.div>

        {/* Featured testimonial — full width */}
        <motion.article
          {...fade}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hover-line-accent group relative mt-14 rounded-lg border-l-[3px] border-primary-600 bg-white p-8 transition-colors hover:bg-white/80 sm:p-10 lg:p-12"
        >
          {/* Decorative quote mark */}
          <span
            className="pointer-events-none absolute right-6 top-4 select-none font-display text-[8rem] font-bold leading-none text-ink-900/[0.03] sm:right-10 sm:top-6 sm:text-[12rem]"
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <div className="relative grid items-start gap-8 lg:grid-cols-12">
            {/* Metric */}
            <div className="lg:col-span-3">
              <p className="font-display text-5xl font-bold tabular-nums text-accent-500 sm:text-6xl">
                {featured.metric}
              </p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-400">
                {featured.label}
              </p>
            </div>

            {/* Quote + Author */}
            <div className="lg:col-span-9">
              <blockquote className="text-xl leading-relaxed text-ink-500 sm:text-2xl">
                &ldquo;{featured.quote}&rdquo;
              </blockquote>
              <footer className="mt-8 border-t border-ink-300/30 pt-6">
                <cite className="block text-sm font-semibold not-italic text-ink-900">
                  {featured.author}
                </cite>
                <p className="text-xs text-ink-400">{featured.company}</p>
              </footer>
            </div>
          </div>
        </motion.article>

        {/* Secondary testimonials — 2-column grid */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {secondary.map((t, i) => (
            <motion.article
              key={t.author}
              {...fade}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="hover-line-accent group relative flex flex-col rounded-lg bg-white p-8 transition-colors hover:bg-white/80 sm:p-10"
            >
              {/* Metric */}
              <div className="mb-6">
                <p className="font-display text-4xl font-bold tabular-nums text-accent-500 sm:text-5xl">
                  {t.metric}
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-400">
                  {t.label}
                </p>
              </div>

              {/* Quote */}
              <blockquote className="flex-1 text-ink-500 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author footer */}
              <footer className="mt-8 border-t border-ink-300/30 pt-6">
                <cite className="block text-sm font-semibold not-italic text-ink-900">
                  {t.author}
                </cite>
                <p className="text-xs text-ink-400">{t.company}</p>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
