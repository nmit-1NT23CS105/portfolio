"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onComplete }: { onComplete?: () => void }) {
  const [count, setCount] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // 0 to 100 counter with realistic easing
    const duration = 1800;
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // easeOutCubic curve for realistic counter deceleration
      const ease = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(ease * 100);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(100);
        setTimeout(() => {
          setIsDone(true);
          onComplete?.();
        }, 300);
      }
    };

    const animFrame = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animFrame);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#0F0F0F] text-white select-none overflow-hidden"
        >
          {/* Subtle background ambient mesh */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.06),transparent_60%)] pointer-events-none" />

          <div className="relative flex flex-col items-center gap-8 px-6 text-center z-10">
            {/* Split-line masked title */}
            <div className="flex flex-col items-center font-display uppercase tracking-tighter leading-[0.92] text-center text-[clamp(2.5rem,7.5vw,5rem)] font-bold">
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  WELCOME TO
                </motion.div>
              </div>

              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="bg-gradient-to-r from-white via-white/95 to-white/60 bg-clip-text text-transparent"
                >
                  MY WORLD
                </motion.div>
              </div>
            </div>

            {/* Wand with spring bounce and glow pulse */}
            <motion.div
              initial={{ scale: 0, rotate: -60 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                delay: 0.35,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="text-4xl md:text-5xl select-none filter drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
            >
              🪄
            </motion.div>
          </div>

          {/* Bottom Modern Progress Area: Monospace Counter + Minimalist Bar */}
          <div className="absolute bottom-16 md:bottom-20 flex flex-col items-center gap-3 w-64 md:w-80">
            {/* Counter display */}
            <div className="flex items-baseline justify-between w-full font-mono text-xs text-white/60 uppercase tracking-widest px-1">
              <span>INITIALIZING</span>
              <span className="text-white font-bold text-sm">
                {count.toString().padStart(2, "0")}%
              </span>
            </div>

            {/* Progress line */}
            <div className="w-full h-[2px] bg-white/15 overflow-hidden rounded-full relative">
              <motion.div
                style={{ width: `${count}%` }}
                className="h-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)] transition-all duration-75 ease-out"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
