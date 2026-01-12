"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, Phone, Bot, Star, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    name: "AI Phone Answering",
    href: "/services/ai-phone-answering",
    description: "24/7 call answering that books jobs",
    icon: Phone,
  },
  {
    name: "AI Chatbots",
    href: "/services/ai-chatbots",
    description: "Website visitors become appointments",
    icon: Bot,
  },
  {
    name: "Review Management",
    href: "/services/review-management",
    description: "5-star reviews on autopilot",
    icon: Star,
  },
  {
    name: "Business Automation",
    href: "/services/business-automation",
    description: "Eliminate manual admin work",
    icon: Cog,
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-violet-600">
            <span className="text-lg font-bold text-white">T</span>
          </div>
          <span className="text-xl font-bold text-navy-900">
            True Signal <span className="text-violet-600">Digital</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
              className="flex items-center gap-1 text-sm font-medium text-navy-700 hover:text-violet-600 transition-colors"
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-full mt-2 w-80 rounded-xl border border-navy-200 bg-white p-2 shadow-lg">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex items-start gap-3 rounded-lg p-3 hover:bg-navy-50 transition-colors"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-100">
                      <service.icon className="h-5 w-5 text-violet-600" />
                    </div>
                    <div>
                      <p className="font-medium text-navy-900">{service.name}</p>
                      <p className="text-sm text-navy-500">{service.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/pricing"
            className="text-sm font-medium text-navy-700 hover:text-violet-600 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-navy-700 hover:text-violet-600 transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-navy-700 hover:text-violet-600 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden lg:block">
          <Button
            asChild
            className="bg-cta-500 hover:bg-cta-600 text-white font-semibold px-5"
          >
            <Link href="/contact">Book a Demo</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-navy-700"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-navy-200 bg-white">
          <div className="px-4 py-4 space-y-4">
            {/* Services Section */}
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-navy-400">
                Services
              </p>
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 rounded-lg p-2 hover:bg-navy-50"
                >
                  <service.icon className="h-5 w-5 text-violet-600" />
                  <span className="font-medium text-navy-900">{service.name}</span>
                </Link>
              ))}
            </div>

            <hr className="border-navy-200" />

            {/* Other Links */}
            <div className="space-y-2">
              <Link
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg p-2 font-medium text-navy-900 hover:bg-navy-50"
              >
                Pricing
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg p-2 font-medium text-navy-900 hover:bg-navy-50"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg p-2 font-medium text-navy-900 hover:bg-navy-50"
              >
                Contact
              </Link>
            </div>

            {/* Mobile CTA */}
            <Button
              asChild
              className="w-full bg-cta-500 hover:bg-cta-600 text-white font-semibold"
            >
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Book a Demo
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
