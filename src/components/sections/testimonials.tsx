"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Captured 15 additional jobs in my first month alone. The AI handles calls better than my previous receptionist.",
    author: "Mike D.",
    company: "Premier Plumbing",
    location: "San Antonio",
    rating: 5,
  },
  {
    quote:
      "I was skeptical about AI answering my phones, but customers can't tell the difference. Game changer for after-hours calls.",
    author: "Sarah K.",
    company: "Comfort Air HVAC",
    location: "San Antonio",
    rating: 5,
  },
  {
    quote:
      "Finally, I can focus on the job site instead of being glued to my phone. Worth every penny.",
    author: "Carlos M.",
    company: "CM Contractors",
    location: "San Antonio",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="bg-navy-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted by San Antonio Businesses
          </h2>
          <p className="mt-4 text-lg text-navy-300">
            Real results from real local business owners who stopped missing calls.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl bg-navy-800 p-8"
            >
              {/* Quote Icon */}
              <Quote className="absolute right-6 top-6 h-10 w-10 text-navy-700" />

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-cta-400 text-cta-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mt-6 text-lg text-navy-200">"{testimonial.quote}"</p>

              {/* Author */}
              <div className="mt-6 border-t border-navy-700 pt-6">
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-sm text-navy-400">
                  {testimonial.company}, {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
