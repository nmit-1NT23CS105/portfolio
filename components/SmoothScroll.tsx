"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // On touch devices / mobile, prioritize native 120Hz hardware momentum scrolling
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const lenis = new Lenis({
      duration: 0.85,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1.0,
      wheelMultiplier: 1.05,
      prevent: (node) => {
        return (
          node.hasAttribute("data-lenis-prevent") ||
          Boolean(node.closest?.("[data-lenis-prevent]")) ||
          Boolean(node.closest?.(".overflow-y-auto")) ||
          Boolean(node.closest?.("[role='dialog']"))
        );
      },
    });

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return null;
}
