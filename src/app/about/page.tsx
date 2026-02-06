import { Metadata } from "next";
import Link from "next/link";
import { Target, Lightbulb, MapPin, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionDivider } from "@/components/ui/section-divider";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "SignalCrew brings enterprise-level AI automation to San Antonio's service businesses — without the enterprise complexity or price tag.",
  openGraph: {
    title: "About SignalCrew | AI Automation for Local Businesses",
    description: "Enterprise-level AI automation for San Antonio's service businesses.",
  },
};

const values = [
  {
    icon: Target,
    title: "Results over features",
    description:
      "We measure success by your revenue growth, not our feature list. If it doesn't put money in your pocket, we don't build it.",
  },
  {
    icon: Lightbulb,
    title: "Radical simplicity",
    description:
      "If it's complicated, we haven't done our job. Our tools work without manuals, training sessions, or IT departments.",
  },
  {
    icon: MapPin,
    title: "San Antonio first",
    description:
      "We're not a faceless tech company in Silicon Valley. We're your neighbors, and we're invested in this community.",
  },
  {
    icon: Heart,
    title: "Honest pricing",
    description:
      "Transparent pricing. No hidden fees. Month-to-month. We earn your business every month with results, not by trapping you in contracts.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-warm-50 pt-32 pb-20 sm:pb-28">
        <div className="swiss-watermark" aria-hidden="true">
          <span className="swiss-watermark-text text-[12vw]">ABOUT</span>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionDivider className="mb-4" />
            <h1 className="font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
              We build AI that picks up the phone so you don&apos;t have to.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-500 leading-relaxed">
              SignalCrew brings enterprise-level automation to San
              Antonio&apos;s service businesses — without the enterprise complexity
              or price tag.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <div className="swiss-watermark" aria-hidden="true">
          <span className="swiss-watermark-text text-[10vw]">STORY</span>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionDivider className="mb-4" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-400">
              Our Origin
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Why I started SignalCrew
            </h2>

            <div className="mt-10 space-y-6 text-lg text-ink-500 leading-relaxed">
              <p>
                I spent years building technology for companies that could afford
                anything. Meanwhile, I watched friends who run HVAC companies,
                plumbing shops, and contracting firms lose thousands to missed
                calls and manual busywork. They didn&apos;t need enterprise
                software. They needed something simple that just works.
              </p>

              <p>
                That gap is why SignalCrew exists. We take the same AI
                technology powering Fortune 500 call centers and make it
                accessible to the businesses that actually form the backbone of
                San Antonio&apos;s economy.
              </p>

              <p>
                No technical expertise required. No contracts. Just results you
                can measure in your bank account.
              </p>
            </div>

            {/* Blockquote */}
            <div className="mt-10 rounded-lg border-l-[3px] border-primary-600 pl-6">
              <p className="font-display text-lg font-semibold text-ink-900 leading-relaxed">
                &ldquo;Our mission is simple: give every local business the AI
                superpowers that used to be reserved for corporations with
                million-dollar budgets.&rdquo;
              </p>
              <p className="mt-3 text-sm text-ink-400">
                — Founder, TrueSignal Digital
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden border-y border-ink-300/30 bg-warm-50 py-20 sm:py-28">
        <div className="swiss-watermark" aria-hidden="true">
          <span className="swiss-watermark-text text-[10vw]">VALUES</span>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionDivider className="mb-4" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-400">
              Principles
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              What we stand for
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="group rounded-lg border border-ink-300/30 bg-white p-8 transition-colors hover:bg-primary-50/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-ink-300/30 bg-warm-50">
                  <value.icon className="h-5 w-5 text-primary-600" />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-ink-900">
                  {value.title}
                </h3>
                <p className="mt-3 text-ink-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink-900 py-20 sm:py-28">
        <div className="swiss-watermark" aria-hidden="true">
          <span className="swiss-watermark-text text-[12vw] !text-white !opacity-[0.02]">
            SIGNAL
          </span>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <SectionDivider className="mx-auto mb-4" />
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Built for San Antonio, by San Antonio
            </h2>
            <p className="mt-6 text-lg text-white/50 leading-relaxed">
              We&apos;re not a faceless tech company halfway across the country.
              We&apos;re your neighbors — and we understand the unique challenges
              facing service businesses in our community.
            </p>
            <Button asChild variant="brand" className="mt-8">
              <Link href="/contact">
                Let&apos;s Talk
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
