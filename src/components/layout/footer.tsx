import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { SignalCrewWordmark } from "@/components/brand/signal-crew-logo";
import { services, companyLinks } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-900 text-white">
      {/* Brand accent line */}
      <div className="h-[3px] w-full gradient-brand" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="group inline-block">
              <SignalCrewWordmark className="transition-transform duration-300 group-hover:scale-105 [&_span]:!text-white [&_.text-primary-600]:!text-primary-400 [&_.text-accent-500]:!text-accent-400" />
            </Link>
            <p className="mt-4 text-sm text-white/40 leading-relaxed">
              Your AI crew. Every call answered. Serving local service businesses from San Antonio, TX.
            </p>
            <p className="mt-3 text-xs text-white/20">
              SignalCrew is a TrueSignal Digital product.
            </p>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-400/60">
              Services
            </p>
            <ul className="mt-4 space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/40 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-400/60">
              Company
            </p>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/40 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-400/60">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/40">
              <li>
                <a href="mailto:hello@signalcrew.ai" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="h-3 w-3" aria-hidden="true" />
                  hello@signalcrew.ai
                </a>
              </li>
              <li>
                <a href="tel:+12105551234" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="h-3 w-3" aria-hidden="true" />
                  (210) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3 w-3" aria-hidden="true" />
                San Antonio, TX
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} TrueSignal Digital LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
