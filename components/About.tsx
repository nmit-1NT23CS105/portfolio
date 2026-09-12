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
  const y = useTransform(progress, range, [6, 0]);
  const color = useTransform(
    progress,
    range,
    ["rgba(255, 255, 255, 0.15)", accentColor || "#ffffff"]
  );

  return (
    <span className="relative inline-block mr-[0.28em] last:mr-0 will-change-transform">
      <motion.span
        style={{ opacity, y, color }}
        className="inline-block transition-colors font-sans-clean font-medium"
      >
        {word}
      </motion.span>{" "}
    </span>
  );
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.45"],
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
      className="relative w-full bg-[#0F0F0F] flex flex-col items-center justify-center py-32 md:py-44 px-6 sm:px-10 md:px-16 overflow-hidden"
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
            <div className="text-white text-[22px] sm:text-[30px] md:text-[38px] lg:text-[44px] leading-[1.38] md:leading-[1.42] tracking-tight flex flex-wrap justify-center text-center">
              {BIO_SEGMENTS.map((seg, sIdx) => {
                const words = seg.text.split(" ").filter((w) => w.length > 0);
                const highlight = seg.highlightKey ? HIGHLIGHTS[seg.highlightKey] : undefined;

                if (highlight) {
                  return (
                    <span
                      key={sIdx}
                      onMouseEnter={() => setActiveTooltip(highlight)}
                      onMouseLeave={() => setActiveTooltip(null)}
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

                      {/* Interactive Floating Micro-Preview Badge */}
                      <AnimatePresence>
                        {activeTooltip?.id === highlight.id && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.92 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 6, scale: 0.92 }}
                            transition={{ duration: 0.18, ease: "easeOut" }}
                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-30 pointer-events-auto min-w-[220px] max-w-xs"
                          >
                            <a
                              href={highlight.linkHref || "#work"}
                              className="block p-3 rounded-2xl bg-[#1a1a1a]/95 backdrop-blur-xl border border-white/20 shadow-[0_15px_35px_rgba(0,0,0,0.8)] text-left"
                            >
                              <div className="flex items-center justify-between text-xs font-mono font-bold text-white mb-1">
                                <span style={{ color: highlight.accent }}>{highlight.title}</span>
                                <ExternalLink size={12} className="text-white/40" />
                              </div>
                              <p className="text-[11px] font-mono text-white/70 leading-snug">
                                {highlight.subtitle}
                              </p>
                            </a>
                            {/* Down arrow indicator */}
                            <div className="w-2.5 h-2.5 bg-[#1a1a1a] border-r border-b border-white/20 rotate-45 mx-auto -mt-1.5" />
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
                      key={wIdx}
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

        {/* Mode 2: Interactive Dev / Code View */}
        {viewMode === "dev" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-3xl mx-auto rounded-2xl bg-[#0c0c0c] border border-white/15 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] font-mono"
          >
            {/* Editor Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#161616] border-b border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-white/60 ml-2 font-medium">rahul_reddy.py</span>
              </div>

              <button
                onClick={() => copyToClipboard(DEV_CODE_SNIPPET, "Python snippet")}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer text-xs"
              >
                <Copy size={12} />
                <span>Copy</span>
              </button>
            </div>

            {/* Code Body */}
            <pre className="p-5 sm:p-7 overflow-x-auto text-xs sm:text-sm text-white/90 leading-relaxed no-scrollbar">
              <code>
                <span className="text-purple-400">from</span> dataclasses <span className="text-purple-400">import</span> dataclass{"\n"}
                <span className="text-purple-400">from</span> typing <span className="text-purple-400">import</span> List{"\n\n"}
                <span className="text-amber-400">@dataclass</span>{"\n"}
                <span className="text-blue-400">class</span> <span className="text-green-400 font-bold">KataruRahulReddy</span>:{"\n"}
                {"    "}role: <span className="text-blue-400">str</span> = <span className="text-emerald-300">&quot;Backend &amp; Applied ML Developer&quot;</span>{"\n"}
                {"    "}location: <span className="text-blue-400">str</span> = <span className="text-emerald-300">&quot;Bengaluru, Karnataka (IST)&quot;</span>{"\n"}
                {"    "}education: <span className="text-blue-400">str</span> = <span className="text-emerald-300">&quot;NMIT Bengaluru (B.E. CSE, CGPA 8.55)&quot;</span>{"\n"}
                {"    "}core_stack: <span className="text-blue-400">tuple</span> = (<span className="text-emerald-300">&quot;Python&quot;</span>, <span className="text-emerald-300">&quot;SQL&quot;</span>, <span className="text-emerald-300">&quot;FastAPI&quot;</span>, <span className="text-emerald-300">&quot;OpenCV&quot;</span>, <span className="text-emerald-300">&quot;MySQL&quot;</span>){"\n\n"}
                {"    "}<span className="text-blue-400">def</span> <span className="text-yellow-400">core_philosophy</span>(<span className="text-rose-400">self</span>) -&gt; <span className="text-blue-400">str</span>:{"\n"}
                {"        "}<span className="text-purple-400">return</span> <span className="text-emerald-300">&quot;Build end-to-end: from raw data to verified production APIs.&quot;</span>{"\n\n"}
                {"    "}<span className="text-purple-400">async def</span> <span className="text-yellow-400">build_pipeline</span>(<span className="text-rose-400">self</span>, raw_data, requirement):{"\n"}
                {"        "}<span className="text-white/40"># 1. Feature Engineering &amp; Schema Design</span>{"\n"}
                {"        "}normalized = <span className="text-purple-400">await</span> <span className="text-rose-400">self</span>.transform(raw_data){"\n\n"}
                {"        "}<span className="text-white/40"># 2. Predictive Intelligence &amp; Edge Vision</span>{"\n"}
                {"        "}model_output = <span className="text-rose-400">self</span>.models[<span className="text-emerald-300">&quot;churn_or_vision&quot;</span>].predict(normalized){"\n\n"}
                {"        "}<span className="text-white/40"># 3. High-Throughput Delivery Layer</span>{"\n"}
                {"        "}<span className="text-purple-400">return</span> FastAPI.response(&#123;&quot;data&quot;: model_output, &quot;tests&quot;: <span className="text-amber-400">37</span>&#125;)
              </code>
            </pre>
          </motion.div>
        )}

        {/* Current Focus & Philosophy Bottom Ribbon */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
            <span>Exploring: Low-Latency RAG &amp; Quantized Edge Vision</span>
          </div>

          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 backdrop-blur-sm">
            <span>📍 Bengaluru, India</span>
          </div>

          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 backdrop-blur-sm">
            <span>⚡ Mindset: End-to-End Ownership</span>
          </div>
        </div>
      </div>
    </section>
  );
}
