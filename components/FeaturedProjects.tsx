"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2, Sparkles } from "lucide-react";
import ProjectModal, { projectDetailsMap, ProjectDetail } from "@/components/ProjectModal";
import ChurnSimulator from "@/components/ChurnSimulator";

function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

interface Project {
  id: number;
  title: string;
  year: string;
  category: string;
  stack: string[];
  description: string;
  liveDemo?: string;
  github: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Customer Churn Prediction Platform",
    year: "2025",
    category: "Machine Learning",
    stack: ["Python", "Scikit-learn", "FastAPI", "Pandas"],
    description:
      "End-to-end churn prediction system built on the Telco Customer Churn dataset, featuring FastAPI APIs, batch prediction, and an interactive analytics UI. Compared multiple ML models and achieved 83.16% churn recall and 0.8346 ROC-AUC through feature engineering, class imbalance handling, and threshold optimization.",
    github: "https://github.com/nmit-1NT23CS105/coustomer-chrun-prediction",
    image: "/images/churn-prediction.svg",
  },
  {
    id: 2,
    title: "AI Document Intelligence System",
    year: "2025",
    category: "Full Stack / NLP",
    stack: ["Python", "FastAPI", "Gemini RAG", "MySQL", "JWT"],
    description:
      "FastAPI-based document analyzer supporting PDF/DOCX uploads across 8 document categories, with search, chat, and auto-summarization. Implements JWT authentication, semantic search, and Gemini-powered summarization across 11 API endpoints, backed by 37 tests.",
    liveDemo: "https://ai-document-intelligence-l4hg.onrender.com/",
    github: "https://github.com/nmit-1NT23CS105/AI-Document-Intelligence-System-",
    image: "/images/doc-intelligence.svg",
  },
  {
    id: 3,
    title: "Dual-Stream Dangerous Driving Detection",
    year: "2025–2026",
    category: "Computer Vision",
    stack: ["Python", "OpenCV", "YOLOv8", "FastAPI", "MediaPipe"],
    description:
      "Real-time driver safety system processing two video streams simultaneously — monitoring in-cabin driver behaviour and detecting vehicles on the road using YOLOv8 across 4 vehicle classes. Engineered a risk-scoring engine fusing 5+ safety signals into 4 risk levels (Low/Medium/High/Critical), using frame smoothing to cut false alerts.",
    github: "https://github.com/nmit-1NT23CS082/AI-Dangerous-Driving-Detection",
    image: "/images/driving-detection.svg",
  },
  {
    id: 4,
    title: "AI Resume Analyzer",
    year: "2026",
    category: "Full Stack / NLP",
    stack: ["Python", "FastAPI", "NLP", "TF-IDF", "Scikit-learn"],
    description:
      "Automated ATS resume parser evaluating applicant resumes against targeted job descriptions using TF-IDF vectorization and cosine similarity. Extracts missing technical keywords, calculates ATS compatibility score benchmarks, and outputs actionable improvement recommendations.",
    liveDemo: "https://ai-resume-analyzer-hwsa.onrender.com",
    github: "https://github.com/nmit-1NT23CS105/Ai_resume_analyzer",
    image: "/images/ai-resume.svg",
  },
];

function Card({
  i,
  project,
  progress,
  range,
  targetScale,
  onOpenCaseStudy,
  onOpenChurnSimulator,
}: {
  i: number;
  project: Project;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  onOpenCaseStudy: (detail: ProjectDetail) => void;
  onOpenChurnSimulator?: () => void;
}) {
  const cardContainer = useRef<HTMLDivElement>(null);
  const { scrollYProgress: cardProgress } = useScroll({
    target: cardContainer,
    offset: ["start end", "start start"],
  });

  // Smooth parallax image zoom on card arrival
  const imageScale = useTransform(cardProgress, [0, 1], [1.1, 1]);

  // Buttery scaling down as subsequent cards scroll on top
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={cardContainer}
      className="h-screen flex items-center justify-center sticky top-0 perspective-1000 px-3 sm:px-6"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5% + ${i * 25}px)`,
        }}
        className="relative flex flex-col w-[95vw] max-w-[1400px] h-[82vh] md:h-[80vh] rounded-[32px] p-6 sm:p-8 md:p-14 origin-top border border-white/10 bg-white/5 backdrop-blur-[40px] shadow-2xl overflow-hidden will-change-transform transform-gpu"
      >
        <div className="relative z-10 flex flex-col md:flex-row h-full gap-6 sm:gap-10 md:gap-14">
          {/* Left Column: Details */}
          <div className="md:w-[38%] flex flex-col justify-between py-2 md:py-4">
            <div className="space-y-4 md:space-y-6">
              {/* Year & Category Pill */}
              <div className="flex items-center gap-3 text-white/50 text-xs md:text-sm font-bold uppercase tracking-widest">
                <span>{project.year}</span>
                <span>•</span>
                <span className="text-[#22c55e]">{project.category}</span>
              </div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white leading-[0.98] uppercase tracking-tight"
              >
                {project.title}
              </motion.h2>

              {/* Stack Pills */}
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="text-[11px] md:text-xs font-mono font-medium px-2.5 py-0.5 md:px-3 md:py-1 rounded-full bg-white/10 text-white/80 border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-white/70 text-xs sm:text-sm md:text-base leading-relaxed font-sans max-w-md line-clamp-4 sm:line-clamp-none"
              >
                {project.description}
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 md:mt-0 flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-white text-black text-xs sm:text-sm md:text-base font-semibold hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-lg"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={16} />
                </a>
              )}

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full border border-white/20 text-white text-xs sm:text-sm md:text-base font-semibold hover:bg-white/10 transition-all hover:scale-105 active:scale-95 backdrop-blur-md"
              >
                <span>GitHub</span>
                <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>

              {/* Deep Dive Case Study Trigger */}
              <button
                onClick={() => onOpenCaseStudy(projectDetailsMap[project.id])}
                className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/10 text-white text-xs sm:text-sm md:text-base font-semibold hover:bg-white/20 border border-white/15 transition-all hover:scale-105 active:scale-95 backdrop-blur-md cursor-pointer"
              >
                <Code2 className="w-4 h-4 text-[#38bdf8]" />
                <span>Deep Dive</span>
              </button>

              {/* Exclusive Interactive Churn Simulator Trigger */}
              {project.id === 1 && onOpenChurnSimulator && (
                <button
                  onClick={onOpenChurnSimulator}
                  className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-emerald-500/20 text-emerald-300 text-xs sm:text-sm md:text-base font-semibold hover:bg-emerald-500/30 border border-emerald-500/40 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(34,197,94,0.15)] cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#22C55E]" />
                  <span>Test Model Live</span>
                </button>
              )}
            </motion.div>
          </div>

          {/* Right Column: Preview with subtle zoom */}
          <div
            onClick={() => onOpenCaseStudy(projectDetailsMap[project.id])}
            className="relative flex-1 w-full h-[200px] sm:h-[280px] md:h-full rounded-[20px] overflow-hidden border border-white/10 shadow-inner flex items-center justify-center bg-black/40 group cursor-pointer"
          >
            <motion.div style={{ scale: imageScale }} className="w-full h-full relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority={i === 0}
                className="object-contain opacity-90 transition-opacity group-hover:opacity-100 p-3 sm:p-6"
              />
            </motion.div>
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
              <span className="px-4 py-2 rounded-full bg-white text-black text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 shadow-2xl">
                <Code2 size={14} /> Case Study &amp; Code
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function FeaturedProjects() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [isChurnModalOpen, setIsChurnModalOpen] = useState(false);

  useEffect(() => {
    if (isChurnModalOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isChurnModalOpen]);

  return (
    <section id="work" className="w-full bg-[#0F0F0F] relative">
      {/* Sticky Deck Stacking Container with useScroll */}
      <div ref={container} className="relative mt-[10vh] mb-[10vh]">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={project.id}
              i={i}
              project={project}
              progress={scrollYProgress}
              range={[0.1 * i, 1]}
              targetScale={targetScale}
              onOpenCaseStudy={(detail) => setSelectedProject(detail)}
              onOpenChurnSimulator={project.id === 1 ? () => setIsChurnModalOpen(true) : undefined}
            />
          );
        })}
      </div>

      {/* Deep Dive Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive ML Churn Simulator Modal */}
      <AnimatePresence>
        {isChurnModalOpen && (
          <div
            data-lenis-prevent
            className="fixed inset-0 z-[160] flex items-center justify-center p-3 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsChurnModalOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-xl"
            />
            <motion.div
              data-lenis-prevent
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto overscroll-contain"
            >
              <ChurnSimulator onClose={() => setIsChurnModalOpen(false)} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
