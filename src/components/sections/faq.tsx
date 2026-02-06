"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionDivider } from "@/components/ui/section-divider";

const faqs = [
  {
    question: "How quickly can I get started?",
    answer:
      "Most businesses are answering calls with AI within 24 hours. You give us a 15-minute conversation about your services and pricing. We do the rest. No technical work on your end.",
  },
  {
    question: "Will callers know they\u2019re talking to AI?",
    answer:
      "They almost never do. The AI speaks naturally, uses your business name, and knows your services. Callers think they reached a friendly, knowledgeable receptionist. If someone does ask, the AI is honest about it.",
  },
  {
    question: "What if the AI can\u2019t handle a call?",
    answer:
      "It transfers the call to you or your team with full context \u2014 who called, what they need, and what was already discussed. You pick up mid-conversation, not starting from scratch.",
  },
  {
    question: "Am I locked into a contract?",
    answer:
      "No. Month-to-month. If it stops making you money, cancel with a click. We keep clients by earning revenue for them, not by trapping them in paperwork.",
  },
  {
    question: "How do I know if it\u2019s actually making me money?",
    answer:
      "Your dashboard shows every call, every lead, and every booked job. Most clients see the math clearly within the first week. One emergency plumbing call ($1,200+) covers several months of service.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full border-b border-ink-300/30 py-6 text-left transition-colors hover:bg-primary-50/30 rounded-md px-2"
      aria-expanded={open}
    >
      <div className="flex items-center justify-between gap-8">
        <h3 className="font-display text-base font-semibold text-ink-900">
          {question}
        </h3>
        {open ? (
          <Minus
            className="h-5 w-5 shrink-0 text-primary-600"
            aria-hidden="true"
          />
        ) : (
          <Plus
            className="h-5 w-5 shrink-0 text-ink-300"
            aria-hidden="true"
          />
        )}
      </div>
      {open && (
        <p className="mt-4 max-w-xl text-ink-500 leading-relaxed">
          {answer}
        </p>
      )}
    </button>
  );
}

export function FAQ() {
  const shouldReduceMotion = useReducedMotion();
  const fade = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
      };

  return (
    <section className="border-t border-ink-300/50 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div {...fade} transition={{ duration: 0.6 }}>
          <SectionDivider className="mb-4" />
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Questions we hear on every call.
          </h2>
        </motion.div>

        {/* FAQ accordion */}
        <motion.div
          {...fade}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12"
        >
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
