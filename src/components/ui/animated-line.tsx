"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";

export function AnimatedLine() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  const rm = useReducedMotion();

  return (
    <div ref={ref} className="relative h-[2px] w-full overflow-hidden">
      <motion.div
        className="absolute inset-y-0 left-0 gradient-brand"
        initial={{ width: rm ? "100%" : "0%" }}
        animate={inView ? { width: "100%" } : { width: "0%" }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </div>
  );
}
