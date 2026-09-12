"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2, Sparkles } from "lucide-react";
import ProjectModal, { projectDetailsMap, ProjectDetail } from "@/components/ProjectModal";
import ChurnSimulator from "@/components/ChurnSimulator";

// Inline Github Icon SVG
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
  topOffset: number;
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
    topOffset: 0,
  },
  {
    id: 2,
    title: "AI Document Intelligence System",
    year: "2025",
    category: "Full Stack / NLP",
    stack: ["Python", "FastAPI", "NLP", "LLM", "MySQL"],
    description:
      "FastAPI-based document analyzer supporting PDF/DOCX uploads across 8 document categories, with search, chat, and auto-summarization. Implements JWT authentication, semantic search, and Gemini-powered summarization across 11 API endpoints, backed by 37 tests.",
    liveDemo: "https://ai-document-intelligence-l4hg.onrender.com/",
    github: "https://github.com/nmit-1NT23CS105/AI-Document-Intelligence-System-",
    image: "/images/doc-intelligence.svg",
    topOffset: 30,
  },
  {
    id: 3,
    title: "Dual-Stream Dangerous Driving Detection",
    year: "2025–2026",
    category: "Computer Vision",
    stack: ["Python", "OpenCV", "YOLO", "FastAPI", "MediaPipe"],
    description:
      "Real-time driver safety system processing two video streams simultaneously — monitoring in-cabin driver behaviour and detecting vehicles on the road using YOLOv8 across 4 vehicle classes. Engineered a risk-scoring engine fusing 5+ safety signals into 4 risk levels (Low/Medium/High/Critical), using frame smoothing to cut false alerts.",
    github: "https://github.com/nmit-1NT23CS082/AI-Dangerous-Driving-Detection",
    image: "/images/driving-detection.svg",
    topOffset: 60,
  },
];

function ProjectCard({
  project,
  onOpenCaseStudy,
  onOpenChurnSimulator,
}: {
  project: Project;
  onOpenCaseStudy: (detail: ProjectDetail) => void;
  onOpenChurnSimulator?: () => void;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 8, y: y * -8 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      className="min-h-screen h-[100dvh] flex items-center justify-center sticky top-0 perspective-1000 px-3 sm:px-6"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: tilt.y,
          rotateY: tilt.x,
        }}
        transition={{ type: "spring", stiffness: 180, damping: 20 }}
        style={{
          top: `calc(${isMobile ? "0px" : "-2%"} + ${project.topOffset * (isMobile ? 0.35 : 1)}px)`,
        }}
        className="relative flex flex-col w-[96vw] sm:w-[94vw] max-w-[1400px] max-h-[90dvh] lg:h-[82vh] rounded-[24px] sm:rounded-[32px] md:rounded-[36px] p-5 sm:p-8 md:p-12 origin-top border border-white/10 bg-white/5 backdrop-blur-[40px] shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-y-auto lg:overflow-hidden no-scrollbar"
      >
        <div className="relative z-10 flex flex-col lg:flex-row h-full gap-5 sm:gap-8 lg:gap-14">
          {/* Left Column: Details */}
          <div className="lg:w-[46%] flex flex-col justify-between py-1 lg:py-2">
            <div className="space-y-3 sm:space-y-4 md:space-y-5">
              {/* Year & Category Pill */}
              <div className="flex items-center gap-2.5 text-white/50 text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-widest">
                <span>{project.year}</span>
                <span>•</span>
                <span className="text-[#22c55e]">{project.category}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-medium text-white leading-[1.02] tracking-tight">
                {project.title}
              </h3>

              {/* Stack Pills */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-0.5">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="text-[11px] sm:text-xs font-mono font-medium px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/10 text-white/80 border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-white/70 text-xs sm:text-sm md:text-base leading-relaxed font-sans-clean max-w-lg line-clamp-4 sm:line-clamp-none">
                {project.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-3">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white text-black text-xs sm:text-sm md:text-base font-semibold hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-lg"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              )}

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border border-white/20 text-white text-xs sm:text-sm md:text-base font-semibold hover:bg-white/10 transition-all hover:scale-105 active:scale-95 backdrop-blur-md"
              >
                <span>GitHub</span>
                <GithubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>

              {/* Deep Dive Case Study Modal Trigger */}
              <button
                onClick={() => onOpenCaseStudy(projectDetailsMap[project.id])}
                className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white/10 text-white text-xs sm:text-sm md:text-base font-semibold hover:bg-white/20 border border-white/15 transition-all hover:scale-105 active:scale-95 backdrop-blur-md cursor-pointer"
              >
                <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#38bdf8]" />
                <span>Deep Dive</span>
              </button>

              {/* Project 1 Exclusive: Live Churn Model Interactive Tester */}
              {project.id === 1 && onOpenChurnSimulator && (
                <button
                  onClick={onOpenChurnSimulator}
                  className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs sm:text-sm md:text-base font-semibold hover:bg-emerald-500/30 border border-emerald-500/40 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(34,197,94,0.15)] cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#22C55E]" />
                  <span>Test Model Live</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Interactive Image Preview */}
          <div
            onClick={() => onOpenCaseStudy(projectDetailsMap[project.id])}
            className="relative flex-1 w-full h-[180px] sm:h-[260px] lg:h-full rounded-[18px] sm:rounded-[20px] overflow-hidden border border-white/10 shadow-inner flex items-center justify-center bg-black/40 group cursor-pointer shrink-0"
          >
            <div className="w-full h-full relative transition-transform duration-700 ease-out group-hover:scale-105">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority={project.id === 1}
                className="object-contain opacity-95 group-hover:opacity-100 transition-opacity p-2 sm:p-4"
              />
            </div>
            {/* Hover/Tap hint */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
              <span className="px-4 py-2 rounded-full bg-white text-black text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 shadow-2xl">
                <Code2 size={13} /> Case Study &amp; Code
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function FeaturedProjects() {
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
    <section id="work" className="w-full bg-[#0F0F0F] relative pt-12 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 mb-12 flex flex-col items-center md:items-start">
        <span className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[#999999] mb-3">
          Selected Works
        </span>
        <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight text-white">
          Featured Projects
        </h2>
      </div>

      <div className="relative">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenCaseStudy={(detail) => setSelectedProject(detail)}
            onOpenChurnSimulator={project.id === 1 ? () => setIsChurnModalOpen(true) : undefined}
          />
        ))}
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
