import { Metadata } from "next";
import { ContactForm } from "@/components/forms";
import { Phone, Mail, Clock, Calendar } from "lucide-react";
import { SectionDivider } from "@/components/ui/section-divider";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with SignalCrew. Book a free 15-minute call or drop us a line — no pressure, no pitch.",
  openGraph: {
    title: "Contact SignalCrew | AI Automation for Local Businesses",
    description: "Book a free 15-minute call or drop us a line — no pressure, no pitch.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-warm-50 pt-32 pb-20 sm:pb-28">
        <div className="swiss-watermark" aria-hidden="true">
          <span className="swiss-watermark-text text-[12vw]">CONTACT</span>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionDivider className="mb-4" />
            <h1 className="font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
              Let&apos;s figure out how much revenue you&apos;re leaving on the
              table.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-500 leading-relaxed">
              Book a free 15-minute call or drop us a line. No pressure, no
              pitch — just a conversation about your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <div className="swiss-watermark" aria-hidden="true">
          <span className="swiss-watermark-text text-[10vw]">HELLO</span>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Contact Form */}
            <div className="rounded-lg border border-ink-300/50 bg-white p-8 sm:p-10">
              <SectionDivider className="mb-4" />
              <h2 className="font-display text-2xl font-bold text-ink-900">
                Send us a message
              </h2>
              <p className="mt-2 text-ink-500 leading-relaxed">
                Tell us what&apos;s keeping you up at night. We&apos;ll get back
                to you within 2 hours.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Right: Info Cards */}
            <div className="space-y-6">
              {/* Book a Call */}
              <div className="rounded-lg border border-ink-300/50 bg-white p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-ink-300/30 bg-primary-50">
                    <Calendar className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink-900">
                      Book a call
                    </h3>
                    <p className="mt-2 text-ink-500 leading-relaxed">
                      Fill out the form and we&apos;ll send you a scheduling
                      link. Typical response: under 2 hours.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Contact */}
              <div className="rounded-lg border border-ink-300/50 bg-white p-8">
                <h3 className="font-display text-lg font-semibold text-ink-900">
                  Direct contact
                </h3>
                <ul className="mt-6 space-y-5">
                  <li>
                    <a
                      href="tel:+12105551234"
                      className="group flex items-center gap-4 text-ink-500 transition-colors hover:text-primary-600"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-300/30 bg-warm-50 transition-colors group-hover:border-primary-300 group-hover:bg-primary-50">
                        <Phone className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-display text-sm font-semibold text-ink-900">
                          Call or Text
                        </p>
                        <p className="text-sm">(210) 555-1234</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:hello@signalcrew.ai"
                      className="group flex items-center gap-4 text-ink-500 transition-colors hover:text-primary-600"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-300/30 bg-warm-50 transition-colors group-hover:border-primary-300 group-hover:bg-primary-50">
                        <Mail className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-display text-sm font-semibold text-ink-900">
                          Email
                        </p>
                        <p className="text-sm">hello@signalcrew.ai</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Fast Response */}
              <div className="rounded-lg border border-accent-200 bg-accent-50 p-6">
                <div className="flex items-center gap-4">
                  <Clock className="h-5 w-5 shrink-0 text-accent-500" />
                  <div>
                    <p className="font-display text-sm font-semibold text-ink-900">
                      Fast response
                    </p>
                    <p className="mt-1 text-sm text-ink-500 leading-relaxed">
                      We respond to all inquiries within 2 hours during business
                      hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
