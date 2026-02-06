import { Metadata } from "next";
import { Bell, Mail, Receipt, Calendar, Database, Workflow } from "lucide-react";
import { ServicePage } from "@/components/templates/service-page";

export const metadata: Metadata = {
  title: "Business Automation for Service Companies",
  description:
    "Eliminate 10+ hours of admin work every week. Automated scheduling, follow-ups, invoicing reminders, and custom workflows. Custom pricing based on needs.",
  openGraph: {
    title: "Business Automation for Service Companies | SignalCrew",
    description:
      "Eliminate 10+ hours of admin work every week with automated scheduling, follow-ups, and custom workflows.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Automation for Service Companies | SignalCrew",
    description:
      "Eliminate 10+ hours of admin work every week with automated scheduling, follow-ups, and custom workflows.",
  },
};

export default function BusinessAutomationPage() {
  return (
    <ServicePage
      hero={{
        title:
          "You started this business to do the work -- not drown in admin.",
        description:
          "Automate scheduling, follow-ups, invoice reminders, and more. Get 10+ hours back every week to spend on the work that actually makes you money.",
        ctaText: "Start Automating",
        ctaHref: "/contact",
        secondaryCtaText: "Get Custom Quote",
        secondaryCtaHref: "/contact",
      }}
      problem={{
        title: "15 hours a week on tasks that don\u2019t grow your business.",
        paragraphs: [
          "You started your business to do the work you love. But every day, hours vanish into sending reminders, following up on quotes, chasing invoices, and keeping customers in the loop. The admin never ends.",
          "<strong class=\"text-ink-900\">The average service business owner spends 15+ hours per week on administrative tasks.</strong> That&apos;s 750+ hours per year -- almost 19 full work weeks spent on things a machine could handle.",
          "Meanwhile, leads go cold because follow-ups slip. Customers forget appointments. Invoices sit unpaid for weeks. Every one of those is <span class=\"font-display font-bold text-signal-orange\">money left on the table</span>.",
        ],
      }}
      features={{
        title: "Automation that actually works.",
        subtitle:
          "Set it up once. It runs forever. No more manual busywork.",
        items: [
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
              "Automatic follow-ups after quotes, jobs, and inquiries. No lead goes cold. No opportunity falls through the cracks.",
          },
          {
            icon: Receipt,
            title: "Invoice & Payment Reminders",
            description:
              "Automated payment reminders that get you paid faster -- without the awkward \"just checking in\" conversations.",
          },
          {
            icon: Calendar,
            title: "Lead Nurturing Campaigns",
            description:
              "Keep past customers engaged with seasonal reminders, maintenance tips, and special offers. Stay top-of-mind automatically.",
          },
          {
            icon: Database,
            title: "CRM Integration",
            description:
              "Connects with your existing tools -- ServiceTitan, Housecall Pro, Jobber, and more. No ripping and replacing.",
          },
          {
            icon: Workflow,
            title: "Custom Workflow Automation",
            description:
              "If you can describe the process, we can automate it. Custom workflows built around how your business actually runs.",
          },
        ],
      }}
      useCases={{
        title: "Automation in action.",
        subtitle: "Real workflows that save hours every single week.",
        items: [
          {
            title: "Quote Follow-Up Automation",
            description:
              "Customer requests a quote but doesn't respond. Day 2: a friendly check-in. Day 5: a limited-time offer. Day 10: a final outreach. All automatic. All personalized.",
          },
          {
            title: "Appointment Confirmation Flow",
            description:
              "24 hours out: confirmation request. 2 hours out: reminder with technician info and arrival window. After the job: review request and satisfaction survey. Zero manual effort.",
          },
          {
            title: "Seasonal Campaign Automation",
            description:
              "Every spring, your HVAC customers automatically get AC tune-up reminders. Every fall, furnace maintenance. Your calendar fills itself -- year after year.",
          },
          {
            title: "Invoice Payment Chase",
            description:
              "Invoice sent. Day 7: friendly reminder. Day 14: payment link with one-click pay. Day 21: phone call auto-scheduled to your calendar. No more chasing money.",
          },
        ],
      }}
      testimonial={{
        quote:
          "Finally, I can focus on the job site instead of being glued to my phone chasing invoices and confirming appointments. Worth every penny.",
        author: "Carlos M.",
        company: "CM Contractors",
      }}
      pricing={{
        label: "Custom solutions for your business.",
        price: "Custom",
        subtitle:
          "Business automation is customized to your specific workflows and integrations. We build exactly what you need -- nothing more, nothing less.",
        ctaText: "Get Your Quote",
        ctaHref: "/contact",
        bullets: [
          "Free workflow consultation",
          "Custom integrations with your tools",
          "Ongoing optimization included",
        ],
      }}
    />
  );
}
