"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  className,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const rm = useReducedMotion();

  return (
    <motion.div
      {...(rm
        ? {}
        : {
            initial: { opacity: 0, y: 12 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
          })}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
