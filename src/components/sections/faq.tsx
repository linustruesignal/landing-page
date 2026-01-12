"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can I get started?",
    answer:
      "Most businesses are up and running within 24 hours. We handle all the setup—you just need to answer a few questions about your business and how you'd like calls handled.",
  },
  {
    question: "Will callers know they're talking to AI?",
    answer:
      "Our AI is trained to sound natural and professional. Most callers can't tell the difference—and they get faster service. The AI introduces itself honestly if asked directly, but focuses on helping the customer efficiently.",
  },
  {
    question: "What if the AI can't answer a question?",
    answer:
      "The AI seamlessly transfers complex calls to you or your team, with full context of the conversation. You'll receive a summary of what was discussed before you even say hello.",
  },
  {
    question: "Do I need technical skills to use this?",
    answer:
      "Not at all. We handle everything—setup, training, and ongoing optimization. You just review leads and booked appointments in a simple dashboard, or receive notifications via text and email.",
  },
  {
    question: "Is there a long-term contract?",
    answer:
      "No. All our plans are month-to-month, cancel anytime. We earn your business every month with results, not lock-in contracts.",
  },
  {
    question: "What's the ROI?",
    answer:
      "Most clients see positive ROI within the first week. Consider this: one captured emergency call (averaging $1,200+ for service businesses) typically pays for several months of service. Most clients capture multiple calls per week they would have otherwise missed.",
  },
];

export function FAQ() {
  return (
    <section className="bg-navy-50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-navy-600">
            Everything you need to know about getting started.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border border-navy-200 bg-white px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-navy-900 hover:text-violet-600 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-navy-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
