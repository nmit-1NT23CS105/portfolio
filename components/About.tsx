"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, MotionValue, AnimatePresence } from "framer-motion";
import { Sparkles, Code2, Copy, Check, Terminal, ExternalLink, Compass } from "lucide-react";
import { useToast } from "@/components/Toast";

interface HighlightBadge {
  id: string;
  phrase: string;
  accent: string;
  title: string;
  subtitle: string;
  linkHref?: string;
}

const HIGHLIGHTS: Record<string, HighlightBadge> = {
  churn: {
    id: "churn",
    phrase: "churn predictions",
    accent: "#22c55e",
    title: "⚡ Customer Churn Platform",
    subtitle: "83.16% Recall • FastAPI • Threshold Tuned",
    linkHref: "#work",
  },
  document: {
    id: "document",
    phrase: "document intelligence",
    accent: "#38bdf8",
    title: "📄 AI Document Intelligence",
    subtitle: "Gemini RAG • 11 Endpoints • 37 Tests",
    linkHref: "#work",
  },
  safety: {
    id: "safety",
    phrase: "safety detection",
    accent: "#f59e0b",
    title: "🚗 Dual-Stream Driver Safety",
    subtitle: "YOLOv8 + MediaPipe • 30+ FPS Edge Vision",
    linkHref: "#work",
  },
  python_sql: {
    id: "python_sql",
    phrase: "Python and SQL",
    accent: "#a855f7",
    title: "💻 Core Language Engine",
    subtitle: "FastAPI • Scikit-learn • MySQL Normalization",
  },
};

interface TextSegment {
  text: string;
  highlightKey?: string;
}

const BIO_SEGMENTS: TextSegment[] = [
  {
    text: "So, why am I here? Honestly, I just like knowing how things work under the hood. Not using an app — building the pipeline behind it, the API, the model that's quietly doing the work. What do I actually do? I take raw data and half-formed ideas and turn them into systems that run — ",
  },
  {
    text: "churn predictions",
    highlightKey: "churn",
  },
  {
    text: ", ",
  },
  {
    text: "document intelligence",
    highlightKey: "document",
  },
  {
    text: ", ",
  },
  {
    text: "safety detection",
    highlightKey: "safety",
  },
  {
    text: ", that kind of thing. ",
  },
  {
    text: "Python and SQL",
    highlightKey: "python_sql",
  },
  {
    text: " are basically how I think at this point. And building the whole thing end-to-end? That's how I actually learn.",
  },
];

const DEV_CODE_SNIPPET = `@dataclass
class KataruRahulReddy:
    role: str = "Backend & Applied ML Developer"
    location: str = "Bengaluru, Karnataka (IST)"
    education: str = "NMIT Bengaluru (B.E. CSE, CGPA 8.55)"
    core_stack: tuple = ("Python", "SQL", "FastAPI", "OpenCV", "MySQL")

    def core_philosophy(self) -> str:
        return "Build end-to-end: from raw data to verified production APIs."

    async def build_pipeline(self, raw_data, requirement):
        # 1. Feature Engineering & Schema Design
        normalized = await self.transform(raw_data)
        
        # 2. Predictive Intelligence & Edge Vision
        model_output = self.models["churn_or_vision"].predict(normalized)
        
        # 3. High-Throughput Delivery Layer
        return FastAPI.response(
            status="success",
            data=model_output,
            verified_by="pytest (37 suites passed)"
        )`;

function Word({
  word,
  range,
  progress,
  accentColor,
}: {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
  accentColor?: string;
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [8, 0]);
  const color = useTransform(
    progress,
    range,
    ["rgba(255, 255, 255, 0.2)", accentColor || "#ffffff"]
  );

  return (
    <span className="relative inline-block mr-[0.26em] last:mr-0 will-change-transform">
      <motion.span
        style={{ opacity, y, color }}
        className="inline-block transition-colors font-sans-clean font-medium select-text"
      >
        {word}
      </motion.span>{" "}
    </span>
  );
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Reference-exact scroll offset: start illuminating when section enters viewport, complete at 60%
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end 0.6"],
  });

  const [viewMode, setViewMode] = useState<"story" | "dev">("story");
  const [activeTooltip, setActiveTooltip] = useState<HighlightBadge | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { copyToClipboard } = useToast();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Flatten words with their highlights to calculate linear scroll ranges
  let totalWordCount = 0;
  BIO_SEGMENTS.forEach((seg) => {
    totalWordCount += seg.text.trim().split(/\s+/).length;
  });

  let wordIndex = 0;

  return (
    <section
      id="about"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full bg-[#0F0F0F] flex flex-col items-center justify-center py-32 md:py-48 px-6 sm:px-10 md:px-16 overflow-hidden"
    >
      {/* Ambient Spotlight Radial Glow following cursor */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-700"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(34, 197, 94, 0.08), rgba(56, 189, 248, 0.05), transparent 70%)`,
        }}
      />

      <div className="max-w-[1100px] w-full mx-auto relative z-10">
        <h2 className="sr-only">About Kataru Rahul Reddy</h2>

        {/* Section Header Controls: Pill & View Switcher */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          {/* Subtle Section Pill */}
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-white/60 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            <Compass size={13} className="text-[#22c55e]" />
            <span>Engineering Narrative</span>
          </div>

          {/* Dual View Mode Switcher */}
          <div className="flex items-center bg-[#181818] border border-white/10 p-1 rounded-full text-xs font-mono select-none shadow-lg">
            <button
              onClick={() => setViewMode("story")}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                viewMode === "story"
                  ? "bg-white text-black font-semibold shadow-md"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Sparkles size={12} />
              <span>Story Mode</span>
            </button>

            <button
              onClick={() => setViewMode("dev")}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                viewMode === "dev"
                  ? "bg-white text-black font-semibold shadow-md"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Code2 size={12} />
              <span>Dev Mode</span>
            </button>
          </div>
        </div>

        {/* Mode 1: Interactive Story View */}
        {viewMode === "story" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="text-white text-[20px] sm:text-[28px] md:text-[36px] lg:text-[44px] leading-[1.32] md:leading-[1.4] tracking-tight flex flex-wrap justify-center text-center">
              {BIO_SEGMENTS.map((seg, sIdx) => {
                const words = seg.text.split(" ").filter((w) => w.length > 0);
                const highlight = seg.highlightKey ? HIGHLIGHTS[seg.highlightKey] : undefined;

                if (highlight) {
                  return (
                    <span
                      key={sIdx}
                      onMouseEnter={() => setActiveTooltip(highlight)}
                      onMouseLeave={() => setActiveTooltip(null)}
                      onClick={() =>
                        setActiveTooltip((prev) => (prev?.id === highlight.id ? null : highlight))
                      }
                      className="relative inline-flex items-center mx-[0.1em] group cursor-pointer"
                    >
                      {/* Highlighted Words with Accent Blooming */}
                      {words.map((word, wIdx) => {
                        const start = wordIndex / totalWordCount;
                        const end = start + 1 / totalWordCount;
                        wordIndex++;
                        return (
                          <Word
                            key={wIdx}
                            word={word}
                            range={[start, end]}
                            progress={scrollYProgress}
                            accentColor={highlight.accent}
                          />
                        );
                      })}

                      {/* Floating Micro-Preview Tooltip Badge */}
                      <AnimatePresence>
                        {activeTooltip?.id === highlight.id && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.95 }}
                            transition={{ duration: 0.18 }}
                            className="absolute -top-16 left-1/2 -translate-x-1/2 z-50 pointer-events-auto min-w-[240px] max-w-[280px]"
                          >
                            <a
                              href={highlight.linkHref || "#work"}
                              className="block p-3 rounded-2xl bg-[#1a1a1a]/95 backdrop-blur-xl border border-white/15 shadow-2xl text-left"
                            >
                              <div className="flex items-center justify-between text-xs font-mono font-bold mb-0.5">
                                <span style={{ color: highlight.accent }}>{highlight.title}</span>
                                <ExternalLink size={12} className="text-white/40" />
                              </div>
                              <p className="text-[11px] font-sans text-white/70 leading-snug">
                                {highlight.subtitle}
                              </p>
                            </a>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </span>
                  );
                }

                return words.map((word, wIdx) => {
                  const start = wordIndex / totalWordCount;
                  const end = start + 1 / totalWordCount;
                  wordIndex++;
                  return (
                    <Word
                      key={`${sIdx}-${wIdx}`}
                      word={word}
                      range={[start, end]}
                      progress={scrollYProgress}
                    />
                  );
                });
              })}
            </div>
          </motion.div>
        )}

        {/* Mode 2: Interactive Dev Editor View */}
        {viewMode === "dev" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-white/15 bg-[#121212] overflow-hidden shadow-2xl"
          >
            {/* Editor Top Bar */}
            <div className="px-5 py-3 bg-[#181818] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="ml-3 text-xs font-mono text-white/60">rahul_reddy.py</span>
              </div>

              <button
                onClick={() => copyToClipboard(DEV_CODE_SNIPPET, "Python snippet")}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white/80 hover:text-white transition-all cursor-pointer"
              >
                <Copy size={12} />
                <span>Copy Code</span>
              </button>
            </div>

            {/* Code Body */}
            <div className="p-6 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed bg-[#0e0e0e] text-white/90">
              <pre>
                <code>{DEV_CODE_SNIPPET}</code>
              </pre>
            </div>
          </motion.div>
        )}

        {/* Current Focus & Philosophy Bottom Ribbon */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center md:justify-between gap-4 text-xs font-mono text-white/60">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-ping" />
            <span>Currently: Building high-throughput ML APIs &amp; edge vision</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">📍 Bangalore, India</span>
            <span>⚡ End-to-End Ownership</span>
          </div>
        </div>
      </div>
    </section>
  );
}
