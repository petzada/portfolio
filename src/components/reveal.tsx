"use client";

import { m, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
}

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 20,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const classes = ["motion-reveal", className].filter(Boolean).join(" ");

  if (reduceMotion) {
    return <div className={classes}>{children}</div>;
  }

  return (
    <m.div
      className={classes}
      initial={{ opacity: 0, y: distance }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.15 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </m.div>
  );
}
