"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignalCrewWordmark } from "@/components/brand/signal-crew-logo";
import { services } from "@/lib/constants";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-ink-300/50 bg-warm-50/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      {/* Brand accent line at top */}
      <div className="h-[3px] w-full gradient-brand" aria-hidden="true" />

      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="group">
          <SignalCrewWordmark className="transition-transform duration-300 group-hover:scale-105" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
              className="flex items-center gap-1 text-sm font-medium text-ink-500 transition-colors hover:text-primary-600"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>

            {servicesOpen && (
              <div
                className="absolute left-0 top-full mt-2 w-80 rounded-lg border border-ink-300/50 bg-white p-2 shadow-xl"
                role="menu"
              >
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex items-start gap-3 rounded-md p-3 transition-colors hover:bg-primary-50"
                    role="menuitem"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-ink-300/30 bg-primary-50">
                      <service.icon className="h-5 w-5 text-primary-600" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-display text-sm font-semibold text-ink-900">{service.name}</p>
                      <p className="text-xs text-ink-500">{service.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/pricing"
            className="text-sm font-medium text-ink-500 transition-colors hover:text-primary-600"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-ink-500 transition-colors hover:text-primary-600"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-ink-500 transition-colors hover:text-primary-600"
          >
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button asChild size="sm" variant="brand">
            <Link href="/contact">See Your Lost Revenue</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-ink-900 lg:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-ink-300/30 bg-warm-50 lg:hidden">
          <div className="space-y-4 px-4 py-4">
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-600/50">
                Services
              </p>
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 rounded-md p-2 hover:bg-primary-50 transition-colors"
                >
                  <service.icon className="h-5 w-5 text-primary-600" aria-hidden="true" />
                  <span className="font-display text-sm font-medium text-ink-900">
                    {service.name}
                  </span>
                </Link>
              ))}
            </div>

            <div className="h-px bg-ink-300/30" />

            <div className="space-y-2">
              <Link
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="block p-2 font-display text-sm font-medium text-ink-900"
              >
                Pricing
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block p-2 font-display text-sm font-medium text-ink-900"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block p-2 font-display text-sm font-medium text-ink-900"
              >
                Contact
              </Link>
            </div>

            <Button asChild className="w-full" variant="brand">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                See Your Lost Revenue
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
