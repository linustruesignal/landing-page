"use client";

import { motion } from "framer-motion";
import { PhoneOff, VoicemailIcon, DollarSign, TrendingDown } from "lucide-react";

const stats = [
  {
    icon: PhoneOff,
    stat: "62%",
    label: "of calls to small businesses go unanswered",
    color: "text-red-500",
    bgColor: "bg-red-100",
  },
  {
    icon: VoicemailIcon,
    stat: "85%",
    label: "of callers won't leave a voicemail—they call your competitor",
    color: "text-cta-500",
    bgColor: "bg-cta-100",
  },
  {
    icon: DollarSign,
    stat: "$1,200",
    label: "average service call value",
    color: "text-success-600",
    bgColor: "bg-success-100",
  },
  {
    icon: TrendingDown,
    stat: "$126,000+",
    label: "potential annual loss from missed calls",
    color: "text-violet-600",
    bgColor: "bg-violet-100",
  },
];

export function Problem() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Every Missed Call Is Money Walking Out the Door
          </h2>
          <p className="mt-4 text-lg text-navy-600">
            While you're on a job site, potential customers are calling. Most won't wait—
            they'll call your competitor instead.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.stat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl border border-navy-200 bg-white p-6 shadow-sm"
            >
              <div className={`inline-flex rounded-lg p-3 ${item.bgColor}`}>
                <item.icon className={`h-6 w-6 ${item.color}`} />
              </div>
              <p className={`mt-4 text-3xl font-bold ${item.color}`}>{item.stat}</p>
              <p className="mt-2 text-sm text-navy-600">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
