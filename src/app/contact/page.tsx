import { Metadata } from "next";
import { ContactForm } from "@/components/forms";
import { Phone, Mail, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with True Signal Digital. Book a free demo or ask us anything about AI phone answering and business automation.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Let's Talk About Your Business
            </h1>
            <p className="mt-6 text-lg text-navy-300">
              Book a free 15-minute call or reach out directly. No pressure, no sales
              pitch—just answers.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <div className="rounded-2xl border border-navy-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-navy-900">Send Us a Message</h2>
              <p className="mt-2 text-navy-600">
                Fill out the form below and we'll get back to you shortly.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Book a Call */}
              <div className="rounded-2xl border border-navy-200 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100">
                    <Calendar className="h-6 w-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900">Book a Call</h3>
                    <p className="text-sm text-navy-600">
                      Schedule a free 15-minute demo
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  {/* Calendly Placeholder */}
                  <div className="rounded-lg border-2 border-dashed border-navy-200 bg-navy-50 p-8 text-center">
                    <p className="text-sm text-navy-500">
                      Calendly widget will be embedded here
                    </p>
                    <a
                      href={process.env.NEXT_PUBLIC_CALENDLY_URL || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block rounded-lg bg-cta-500 px-6 py-3 font-semibold text-white hover:bg-cta-600 transition-colors"
                    >
                      Open Calendar
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Contact */}
              <div className="rounded-2xl border border-navy-200 bg-white p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-navy-900">Direct Contact</h3>
                <ul className="mt-6 space-y-4">
                  <li>
                    <a
                      href="tel:+12105551234"
                      className="flex items-center gap-4 text-navy-700 hover:text-violet-600 transition-colors"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-100">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Call or Text</p>
                        <p className="text-sm text-navy-500">(210) 555-1234</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:hello@truesignaldigital.com"
                      className="flex items-center gap-4 text-navy-700 hover:text-violet-600 transition-colors"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-100">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-navy-500">
                          hello@truesignaldigital.com
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Response Time */}
              <div className="rounded-2xl border border-success-200 bg-success-50 p-6">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-success-600" />
                  <div>
                    <p className="font-medium text-success-800">Fast Response</p>
                    <p className="text-sm text-success-700">
                      We respond to all inquiries within 2 hours during business hours.
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
