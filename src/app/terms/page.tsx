import { Metadata } from "next";
import { SectionDivider } from "@/components/ui/section-divider";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "SignalCrew terms of service. Read our terms and conditions for using our AI automation services.",
  openGraph: {
    title: "Terms of Service | SignalCrew",
    description:
      "Read our terms and conditions for using SignalCrew AI automation services.",
  },
};

export default function TermsPage() {
  return (
    <div className="bg-warm-50 pt-32 pb-24 sm:pb-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionDivider className="mb-6" />
        <h1 className="font-display text-4xl font-bold text-ink-900">
          Terms of Service
        </h1>
        <p className="mt-4 text-ink-500">Last updated: January 2025</p>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="font-display text-xl font-bold text-ink-900">
              1. Acceptance of Terms
            </h2>
            <p className="mt-4 text-ink-500 leading-relaxed">
              By accessing or using SignalCrew&apos;s services (operated by
              TrueSignal Digital LLC), you agree to be bound by these Terms of
              Service. If you do not agree to these terms, please do not use our
              services.
            </p>
          </section>

          <div className="h-px bg-ink-300/30" />

          <section>
            <h2 className="font-display text-xl font-bold text-ink-900">
              2. Description of Services
            </h2>
            <p className="mt-4 text-ink-500 leading-relaxed">
              SignalCrew provides AI-powered phone answering, chatbot, review
              management, and business automation services for local service
              businesses. Services are provided on a subscription basis as
              described in your service agreement.
            </p>
          </section>

          <div className="h-px bg-ink-300/30" />

          <section>
            <h2 className="font-display text-xl font-bold text-ink-900">
              3. Payment Terms
            </h2>
            <p className="mt-4 text-ink-500 leading-relaxed">
              Services are billed monthly or annually as selected. Payment is
              due at the beginning of each billing period. We offer a 30-day
              money-back guarantee for new customers.
            </p>
          </section>

          <div className="h-px bg-ink-300/30" />

          <section>
            <h2 className="font-display text-xl font-bold text-ink-900">
              4. Cancellation
            </h2>
            <p className="mt-4 text-ink-500 leading-relaxed">
              You may cancel your subscription at any time. Cancellations take
              effect at the end of your current billing period. No refunds are
              provided for partial billing periods after the initial 30-day
              guarantee period.
            </p>
          </section>

          <div className="h-px bg-ink-300/30" />

          <section>
            <h2 className="font-display text-xl font-bold text-ink-900">
              5. Limitation of Liability
            </h2>
            <p className="mt-4 text-ink-500 leading-relaxed">
              TrueSignal Digital LLC (d/b/a SignalCrew) shall not be liable for
              any indirect, incidental, special, consequential, or punitive
              damages resulting from your use of or inability to use our
              services.
            </p>
          </section>

          <div className="h-px bg-ink-300/30" />

          <section>
            <h2 className="font-display text-xl font-bold text-ink-900">
              6. Contact
            </h2>
            <p className="mt-4 text-ink-500 leading-relaxed">
              For questions about these Terms of Service, please contact us
              at{" "}
              <a
                href="mailto:hello@signalcrew.ai"
                className="text-primary-600 hover:underline"
              >
                hello@signalcrew.ai
              </a>
              .
            </p>
            <p className="mt-2 text-sm text-ink-400">
              TrueSignal Digital LLC d/b/a SignalCrew
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
