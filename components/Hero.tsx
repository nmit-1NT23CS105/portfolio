"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import LiveStatus from "@/components/LiveStatus";

const posters = [
  "/images/churn-prediction.svg",
  "/images/doc-intelligence.svg",
  "/images/driving-detection.svg",
  "/images/ai-resume.svg",
  "/images/cinevizion.svg",
  "/images/cashpilot.svg",
  "/images/bharatkart.svg",
  "/images/telco-eda.svg",
  "/images/gemini-rag.svg",
  "/images/yolo-vision.svg",
  "/images/sql-schema.svg",
];

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0F0F0F] pt-20 sm:pt-24 pb-16 select-none"
    >
      {/* 1. Top Eyebrow Line above the Navbar */}
      <div className="absolute top-3 inset-x-0 flex justify-center z-40 pointer-events-none px-4">
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.3em] text-[#999999] text-center"
        >
          BUILDING DATA-DRIVEN SYSTEMS
        </motion.p>
      </div>

      {/* 2. Hero Name Block: Centered Giant Display Headline */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-[60%] select-none pointer-events-none flex flex-col items-center justify-center z-20 px-4">
        <motion.h1
          initial={{ opacity: 0, scale: 0.85, y: 60 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="hero-title text-white tracking-tighter uppercase flex flex-col items-center text-center leading-[0.9] mt-24 text-[12vw] font-display font-bold"
        >
          <span className="drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]">
            KATARU
          </span>
          <span className="drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] bg-gradient-to-b from-white via-white to-white/75 bg-clip-text text-transparent">
            RAHUL REDDY
          </span>
        </motion.h1>
      </div>

      {/* 3. Small label above the name: "Hello, I'm" Watermark */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[10vw] md:text-[12vw] leading-none bg-gradient-to-b from-white/30 to-[#0F0F0F] bg-clip-text text-transparent whitespace-nowrap mb-[32rem]"
        >
          Hello, I&apos;m
        </motion.span>
      </div>

      {/* 4. 11 Project Posters in 3D Fanned / Rotating Ring Layout */}
      <div className="relative w-full max-w-[1200px] h-[500px] md:h-[600px] flex items-center justify-center z-10 perspective-1000">
        <motion.div
          animate={{
            rotate: [0, 360],
            rotateX: mousePos.y * -14,
            rotateY: mousePos.x * 16,
          }}
          transition={{
            rotate: {
              duration: 26,
              repeat: Infinity,
              ease: "linear",
              delay: 1.5,
            },
            rotateX: { type: "spring", stiffness: 180, damping: 20 },
            rotateY: { type: "spring", stiffness: 180, damping: 20 },
          }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative w-[300px] h-[300px]"
        >
          {posters.map((src, i) => {
            const angle = (i / posters.length) * 360;
            const rad = (angle * Math.PI) / 180;
            const radius = 480;
            const xPos = radius * Math.cos(rad);
            const yPos = radius * Math.sin(rad);

            return (
              <motion.div
                key={i}
                initial={{ x: 0, y: 600, rotate: 0, scale: 0.8, opacity: 0 }}
                animate={{
                  x: [0, 0, 80 * Math.cos((36 * i * Math.PI) / 180), xPos],
                  y: [600, 2 * i, 80 * Math.sin((36 * i * Math.PI) / 180), yPos],
                  rotate: [0, 2 * i, 10 * i, angle - 90],
                  scale: [0.8, 1, 1, 1],
                  opacity: [0, 1, 1, 1],
                }}
                transition={{
                  delay: 0.2 + 0.08 * i,
                  duration: 3.2,
                  times: [0, 0.23, 0.4, 1],
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  scale: 1.2,
                  zIndex: 60,
                  rotate: 0,
                  transition: { duration: 0.3 },
                }}
                style={{ zIndex: i + 1, transformStyle: "preserve-3d" }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              >
                <div
                  className="relative w-28 h-40 md:w-36 md:h-52 rounded-[20px] overflow-hidden border border-white/15 bg-black/90 hover:border-green-400/80 hover:shadow-[0_0_35px_rgba(34,197,94,0.35)] transition-all duration-300"
                  style={{
                    boxShadow:
                      "0 20px 60px rgba(0, 0, 0, 0.6), 0 10px 30px rgba(0, 0, 0, 0.4)",
                  }}
                >
                  <Image
                    src={src}
                    alt={`Project Poster ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* 5. Subtitle & CTA Controls (exactly matching the reference layout) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative mt-28 md:mt-32 flex flex-col items-center max-w-[620px] text-center px-6 pointer-events-none z-30"
      >
        <h5 className="relative z-0 text-[#f2f2f2] text-lg md:text-xl font-medium leading-tight mb-10 md:mb-12 pointer-events-auto">
          Computer Science Undergraduate &amp; Backend/Data Developer
        </h5>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-30 flex flex-col md:flex-row items-center gap-6 md:gap-8 pointer-events-auto"
        >
          {/* Primary CTA button */}
          <a
            href="mailto:katarurahul1014@gmail.com"
            className="group relative flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-10 py-4 rounded-full text-xl font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] overflow-hidden"
          >
            <span className="relative z-10">Let&apos;s Connect</span>
            <div className="relative z-10 p-1 bg-white/20 rounded-full group-hover:bg-black/10 transition-colors">
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
          </a>

          {/* Real-Time Live Status & IST Clock */}
          <LiveStatus />
        </motion.div>
      </motion.div>

      {/* 6. Animated Scroll Cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.8 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-6 flex flex-col items-center gap-1 text-white/40 hover:text-white transition-colors cursor-pointer z-30"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4" />
      </motion.a>
    </section>
  );
}
