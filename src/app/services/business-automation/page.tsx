import { Metadata } from "next";
import Link from "next/link";
import {
  Cog,
  Bell,
  Calendar,
  Receipt,
  Mail,
  Database,
  Workflow,
  ArrowRight,
  Check,
  Star,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Business Automation for Service Companies",
  description:
    "Eliminate 10+ hours of admin work every week. Automated scheduling, follow-ups, invoicing reminders, and custom workflows. Custom pricing based on needs.",
};

const features = [
  {
    icon: Bell,
    title: "Automated Appointment Reminders",
    description:
      "SMS and email reminders sent automatically before appointments. Reduce no-shows by up to 80%.",
  },
  {
    icon: Mail,
    title: "Follow-Up Sequences",
    description:
      "Automatic follow-ups after quotes, jobs, and inquiries. Never let a lead go cold again.",
  },
  {
    icon: Receipt,
    title: "Invoice & Payment Reminders",
    description:
      "Automated payment reminders that get you paid faster without awkward conversations.",
  },
  {
    icon: Calendar,
    title: "Lead Nurturing Campaigns",
    description:
      "Keep past customers engaged with seasonal reminders, maintenance tips, and special offers.",
  },
  {
    icon: Database,
    title: "CRM Integration",
    description:
      "Connect with your existing tools—ServiceTitan, Housecall Pro, Jobber, and more.",
  },
  {
    icon: Workflow,
    title: "Custom Workflow Automation",
    description:
      "Build custom automations for your specific business processes. If you can describe it, we can automate it.",
  },
];

const useCases = [
  {
    title: "Quote Follow-Up Automation",
    description:
      "Customer requests a quote but doesn't respond. Instead of manual follow-up, they automatically receive a check-in after 2 days, a special offer after 5 days, and a final outreach after 10 days.",
  },
  {
    title: "Appointment Confirmation Flow",
    description:
      "24 hours before an appointment: confirmation request. 2 hours before: reminder with technician info. After the job: review request and follow-up survey.",
  },
  {
    title: "Seasonal Campaign Automation",
    description:
      "Every spring, your HVAC customers automatically receive AC tune-up reminders. Every fall, furnace maintenance. Zero manual effort.",
  },
  {
    title: "Invoice Payment Chase",
    description:
      "Invoice sent. Day 7: friendly reminder. Day 14: payment link. Day 21: phone call scheduled to your calendar. All automatic.",
  },
];

export default function BusinessAutomationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-navy-800 px-4 py-2 text-sm text-navy-300">
              <Cog className="h-4 w-4 text-success-400" />
              Business Automation
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Eliminate 10+ Hours of Admin Work Every Week
            </h1>
            <p className="mt-6 text-lg text-navy-300">
              Automate scheduling, follow-ups, invoicing reminders, and more—so you can
              focus on what you do best: running your business and serving customers.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-cta-500 hover:bg-cta-600 text-white font-semibold px-8"
              >
                <Link href="/contact">
                  Start Automating
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-navy-600 text-white hover:bg-navy-800"
              >
                <Link href="/contact">Get Custom Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-red-500" />
              <h2 className="text-3xl font-bold text-navy-900">The Problem</h2>
            </div>
            <div className="mt-8 space-y-6 text-lg text-navy-600">
              <p>
                You started your business to do the work you love—not to drown in admin
                tasks. But every day, hours disappear into sending reminders, following up
                on quotes, chasing invoices, and keeping customers engaged.
              </p>
              <p>
                <strong className="text-navy-900">
                  The average service business owner spends 15+ hours per week on
                  administrative tasks
                </strong>{" "}
                that could be automated. That's 750+ hours per year—almost 19 full work
                weeks.
              </p>
              <p>
                Meanwhile, leads go cold because follow-ups fall through the cracks.
                Customers forget appointments. Invoices sit unpaid. It doesn't have to be
                this way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-navy-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-navy-900">
              Automation That Actually Works
            </h2>
            <p className="mt-4 text-lg text-navy-600">
              Set it up once, and it runs forever. No more manual busywork.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-xl bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success-100">
                  <feature.icon className="h-6 w-6 text-success-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-navy-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-navy-900">
              Automation in Action
            </h2>
            <p className="mt-4 text-lg text-navy-600">
              Real workflows that save hours every week.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="rounded-xl border border-navy-200 bg-white p-8"
              >
                <h3 className="text-xl font-semibold text-navy-900">{useCase.title}</h3>
                <p className="mt-4 text-navy-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-navy-900 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-cta-400 text-cta-400" />
            ))}
          </div>
          <blockquote className="mt-8 text-2xl font-medium text-white sm:text-3xl">
            "Finally, I can focus on the job site instead of being glued to my phone.
            Worth every penny."
          </blockquote>
          <div className="mt-8">
            <p className="font-semibold text-white">Carlos M.</p>
            <p className="text-navy-400">CM Contractors, San Antonio</p>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-navy-200 bg-white p-8 sm:p-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold text-navy-900">
                  Custom Solutions for Your Business
                </h2>
                <p className="mt-4 text-lg text-navy-600">
                  Business automation is customized to your specific workflows and
                  integrations. We'll build exactly what you need—nothing more, nothing
                  less.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-3 text-navy-700">
                    <Check className="h-5 w-5 text-success-600" />
                    Free workflow consultation
                  </li>
                  <li className="flex items-center gap-3 text-navy-700">
                    <Check className="h-5 w-5 text-success-600" />
                    Custom integrations with your tools
                  </li>
                  <li className="flex items-center gap-3 text-navy-700">
                    <Check className="h-5 w-5 text-success-600" />
                    Ongoing optimization included
                  </li>
                </ul>
              </div>
              <div className="text-center lg:text-right">
                <p className="text-sm text-navy-500">Pricing</p>
                <p className="text-3xl font-bold text-navy-900">Custom</p>
                <p className="text-navy-600">Based on your specific needs</p>
                <Button
                  asChild
                  size="lg"
                  className="mt-6 bg-cta-500 hover:bg-cta-600 text-white font-semibold px-8"
                >
                  <Link href="/contact">
                    Get Your Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
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
