"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion, useInView } from "framer-motion";

export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const rm = useReducedMotion();
  const [count, setCount] = useState(rm ? target : 0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || rm) return;
    let cur = 0;
    const inc = target / 30;
    const timer = setInterval(() => {
      cur += inc;
      if (cur >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(cur));
      }
    }, 40);
    return () => clearInterval(timer);
  }, [inView, target, rm]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {(rm ? target : count).toLocaleString()}
      {suffix}
    </span>
  );
}
