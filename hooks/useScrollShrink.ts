"use client";

import { useScroll, useTransform } from "framer-motion";
import { RefObject } from "react";

export function useScrollShrink(targetRef: RefObject<HTMLDivElement>, minScale: number = 0.85) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  return useTransform(scrollYProgress, [0, 1], [1, minScale]);
}
