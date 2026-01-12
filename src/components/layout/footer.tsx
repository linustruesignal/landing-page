import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const services = [
  { name: "AI Phone Answering", href: "/services/ai-phone-answering" },
  { name: "AI Chatbots", href: "/services/ai-chatbots" },
  { name: "Review Management", href: "/services/review-management" },
  { name: "Business Automation", href: "/services/business-automation" },
];

const company = [
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-violet-600">
                <span className="text-lg font-bold text-white">T</span>
              </div>
              <span className="text-xl font-bold">
                True Signal <span className="text-violet-400">Digital</span>
              </span>
            </Link>
            <p className="text-sm text-navy-300">
              AI automation for San Antonio service businesses. Never miss another lead—day
              or night.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-400">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-navy-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-400">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-navy-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-400">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="tel:+12105551234"
                  className="flex items-center gap-2 text-sm text-navy-300 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  (210) 555-1234
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@truesignaldigital.com"
                  className="flex items-center gap-2 text-sm text-navy-300 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  hello@truesignaldigital.com
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-sm text-navy-300">
                  <MapPin className="h-4 w-4" />
                  San Antonio, TX
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-navy-800 pt-8">
          <p className="text-center text-sm text-navy-400">
            © {new Date().getFullYear()} True Signal Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
