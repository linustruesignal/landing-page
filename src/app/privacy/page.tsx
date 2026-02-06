import { Metadata } from "next";
import { SectionDivider } from "@/components/ui/section-divider";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "SignalCrew privacy policy. Learn how we collect, use, and protect your information.",
  openGraph: {
    title: "Privacy Policy | SignalCrew",
    description:
      "Learn how SignalCrew collects, uses, and protects your information.",
  },
};

export default function PrivacyPage() {
  return (
    <div className="bg-warm-50 pt-32 pb-24 sm:pb-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionDivider className="mb-6" />
        <h1 className="font-display text-4xl font-bold text-ink-900">
          Privacy Policy
        </h1>
        <p className="mt-4 text-ink-500">Last updated: January 2025</p>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="font-display text-xl font-bold text-ink-900">
              1. Information We Collect
            </h2>
            <p className="mt-4 text-ink-500 leading-relaxed">
              We collect information you provide directly to us, such as when
              you fill out a contact form, request a demo, or communicate with
              us. This may include your name, email address, phone number,
              business name, and any other information you choose to provide.
            </p>
          </section>

          <div className="h-px bg-ink-300/30" />

          <section>
            <h2 className="font-display text-xl font-bold text-ink-900">
              2. How We Use Your Information
            </h2>
            <p className="mt-4 text-ink-500 leading-relaxed">
              We use the information we collect to provide, maintain, and
              improve our services, to communicate with you about our services,
              and to respond to your inquiries and requests.
            </p>
          </section>

          <div className="h-px bg-ink-300/30" />

          <section>
            <h2 className="font-display text-xl font-bold text-ink-900">
              3. Information Sharing
            </h2>
            <p className="mt-4 text-ink-500 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent, except as
              described in this policy or as required by law.
            </p>
          </section>

          <div className="h-px bg-ink-300/30" />

          <section>
            <h2 className="font-display text-xl font-bold text-ink-900">
              4. Data Security
            </h2>
            <p className="mt-4 text-ink-500 leading-relaxed">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction.
            </p>
          </section>

          <div className="h-px bg-ink-300/30" />

          <section>
            <h2 className="font-display text-xl font-bold text-ink-900">
              5. Contact Us
            </h2>
            <p className="mt-4 text-ink-500 leading-relaxed">
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
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
