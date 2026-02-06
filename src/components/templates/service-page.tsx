import Link from "next/link";
import { ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionDivider } from "@/components/ui/section-divider";
import type { LucideIcon } from "lucide-react";

/* ── Types ── */

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface UseCase {
  title: string;
  description: string;
}

interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

interface Pricing {
  label: string;
  price: string;
  suffix?: string;
  subtitle?: string;
  ctaText: string;
  ctaHref: string;
  bullets: string[];
}

interface ServicePageProps {
  hero: {
    title: string;
    description: string;
    ctaText: string;
    ctaHref: string;
    secondaryCtaText?: string;
    secondaryCtaHref?: string;
  };
  problem: {
    title: string;
    paragraphs: string[];
    highlight?: { text: string };
  };
  features: {
    title: string;
    subtitle: string;
    items: Feature[];
  };
  useCases: {
    title: string;
    subtitle: string;
    items: UseCase[];
  };
  testimonial?: Testimonial;
  stats?: { stat: string; label: string }[];
  pricing: Pricing;
}

/* ── Template ── */

export function ServicePage({ hero, problem, features, useCases, testimonial, stats, pricing }: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-warm-50 pt-32 pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SectionDivider />
            <h1 className="mt-8 font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-500">
              {hero.description}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" variant="brand">
                <Link href={hero.ctaHref}>
                  {hero.ctaText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              {hero.secondaryCtaText && hero.secondaryCtaHref && (
                <Button asChild variant="brand-outline" size="lg">
                  <Link href={hero.secondaryCtaHref}>{hero.secondaryCtaText}</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SectionDivider />
            <h2 className="mt-6 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
              {problem.title}
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink-500">
              {problem.paragraphs.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-warm-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <SectionDivider className="mx-auto" />
            <h2 className="mt-6 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
              {features.title}
            </h2>
            <p className="mt-4 text-lg text-ink-500">{features.subtitle}</p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-px bg-ink-300/50 sm:grid-cols-2 lg:grid-cols-3">
            {features.items.map((feature) => (
              <div key={feature.title} className="border border-ink-300/50 bg-white p-8">
                <feature.icon className="h-6 w-6 text-primary-600" />
                <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">
                  {feature.title}
                </h3>
                <p className="mt-2 leading-relaxed text-ink-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <SectionDivider className="mx-auto" />
            <h2 className="mt-6 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
              {useCases.title}
            </h2>
            <p className="mt-4 text-lg text-ink-500">{useCases.subtitle}</p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-px bg-ink-300/50 sm:grid-cols-2">
            {useCases.items.map((useCase) => (
              <div key={useCase.title} className="border border-ink-300/30 bg-white p-8">
                <h3 className="font-display text-xl font-semibold text-ink-900">
                  {useCase.title}
                </h3>
                <p className="mt-4 leading-relaxed text-ink-500">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial or Stats */}
      {testimonial && (
        <section className="bg-ink-900 py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent-500 text-accent-500" />
              ))}
            </div>
            <blockquote className="mt-8 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div className="mt-8">
              <p className="font-semibold text-white">{testimonial.author}</p>
              <p className="text-sm text-white/40">{testimonial.company}</p>
            </div>
          </div>
        </section>
      )}

      {stats && (
        <section className="bg-ink-900 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <SectionDivider className="mx-auto" />
              <h2 className="mt-6 font-display text-3xl font-bold text-white sm:text-4xl">
                The impact of reviews.
              </h2>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.stat} className="bg-ink-900 p-8 text-center sm:p-10">
                  <p className="font-display text-5xl font-bold tracking-tight text-accent-500">
                    {item.stat}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/40">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing Preview */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border border-ink-300/50 bg-white p-8 sm:p-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <SectionDivider />
                <h2 className="mt-6 font-display text-3xl font-bold text-ink-900">
                  {pricing.label}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-500">
                  {pricing.subtitle}
                </p>
                <ul className="mt-6 space-y-3">
                  {pricing.bullets.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-ink-700">
                      <Check className="h-4 w-4 text-primary-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center lg:text-right">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-500">
                  {pricing.price === "Custom" ? "Pricing" : "Starting at"}
                </p>
                <p className="mt-1 font-display text-5xl font-bold tracking-tight text-ink-900">
                  {pricing.price}
                  {pricing.suffix && (
                    <span className="text-xl font-normal text-ink-500">{pricing.suffix}</span>
                  )}
                </p>
                <Button asChild size="lg" variant="brand" className="mt-8">
                  <Link href={pricing.ctaHref}>
                    {pricing.ctaText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
