"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Download,
  Printer,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Award,
  Code2,
  FolderGit2,
  Copy,
  Check,
  Sparkles,
  Maximize2,
} from "lucide-react";
import { useToast } from "@/components/Toast";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
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

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const { copyToClipboard } = useToast();
  const [activeTab, setActiveTab] = useState<"all" | "projects" | "skills" | "education">("all");

  const resumeDriveUrl =
    "https://drive.google.com/file/d/1qjs2OjaPOBqXzvPcmZdoJbPHgLXzPPoS/view?usp=sharing";

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            data-lenis-prevent
            className="relative w-full max-w-4xl max-h-[92vh] bg-[#121212] border border-white/15 rounded-2xl sm:rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden text-white z-10"
          >
            {/* Top Modal Header Bar */}
            <div className="px-5 sm:px-8 py-4 border-b border-white/10 flex items-center justify-between bg-[#161616]/90 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-pulse" />
                <span className="font-display text-lg sm:text-xl uppercase tracking-wider font-bold">
                  Kataru Rahul Reddy <span className="text-white/40">— Resume</span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/* Fullscreen Dedicated Route Button */}
                <Link
                  href="/resume"
                  onClick={onClose}
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white/80 hover:text-white transition-all"
                  title="Open dedicated /resume page"
                >
                  <Maximize2 size={13} />
                  <span>Full Page</span>
                </Link>

                {/* Print ATS Resume */}
                <button
                  onClick={handlePrint}
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white/80 hover:text-white transition-all cursor-pointer"
                  title="Print / Save Clean ATS PDF"
                >
                  <Printer size={13} />
                  <span>Print</span>
                </button>

                {/* Download Google Drive PDF */}
                <a
                  href={resumeDriveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-black hover:bg-white/90 text-xs font-semibold font-mono transition-all hover:scale-105"
                >
                  <Download size={13} />
                  <span>Download PDF</span>
                </a>

                {/* Close Modal */}
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer ml-1"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Filter Tabs Bar */}
            <div className="px-5 sm:px-8 py-2.5 bg-[#141414] border-b border-white/5 flex items-center gap-2 overflow-x-auto no-scrollbar">
              <span className="text-[11px] font-mono uppercase tracking-wider text-white/40 mr-1 shrink-0">
                Filter:
              </span>
              {[
                { id: "all", label: "Full Resume" },
                { id: "projects", label: "Featured Projects" },
                { id: "skills", label: "Technical Skills" },
                { id: "education", label: "Education & Certifications" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3 py-1 rounded-full text-xs font-mono whitespace-nowrap transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-[#22C55E]/15 text-[#22C55E] border border-[#22C55E]/40 font-semibold"
                      : "bg-white/5 text-white/60 hover:text-white border border-transparent"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Modal Body - Scrollable */}
            <div
              data-lenis-prevent
              className="flex-1 overflow-y-auto px-5 sm:px-8 py-6 space-y-8 no-scrollbar text-white/90 selection:bg-white selection:text-black"
            >
              {/* Header Profile Block */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h1 className="font-display text-3xl sm:text-4xl uppercase font-bold tracking-tight text-white mb-1">
                    Kataru Rahul Reddy
                  </h1>
                  <p className="text-sm sm:text-base text-[#22C55E] font-mono font-medium">
                    Backend &amp; Applied Machine Learning Developer
                  </p>
                  <p className="text-xs sm:text-sm text-white/60 mt-1">
                    B.E. Computer Science &amp; Engineering • NMIT Bengaluru (2023–2027)
                  </p>
                </div>

                {/* Contact Chips with 1-click Copy */}
                <div className="flex flex-col gap-2 shrink-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() =>
                        copyToClipboard("katarurahul1014@gmail.com", "Email address")
                      }
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 hover:bg-black/60 border border-white/10 text-xs font-mono text-white/80 hover:text-white transition-all cursor-pointer group"
                    >
                      <Mail size={12} className="text-[#22C55E]" />
                      <span>katarurahul1014@gmail.com</span>
                      <Copy size={11} className="text-white/30 group-hover:text-white" />
                    </button>

                    <button
                      onClick={() =>
                        copyToClipboard("+91-7995263968", "Phone number")
                      }
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 hover:bg-black/60 border border-white/10 text-xs font-mono text-white/80 hover:text-white transition-all cursor-pointer group"
                    >
                      <Phone size={12} className="text-[#22C55E]" />
                      <span>+91-7995263968</span>
                      <Copy size={11} className="text-white/30 group-hover:text-white" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-white/70">
                      <MapPin size={12} className="text-[#22C55E]" />
                      <span>Bangalore, India</span>
                    </span>

                    <a
                      href="https://github.com/nmit-1NT23CS105"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 hover:bg-black/60 border border-white/10 text-xs font-mono text-white/80 hover:text-white transition-all"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/kataru-rahul-95a5173a8/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 hover:bg-black/60 border border-white/10 text-xs font-mono text-white/80 hover:text-white transition-all"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Professional Summary */}
              {(activeTab === "all" || activeTab === "skills") && (
                <div>
                  <div className="flex items-center gap-2 pb-2 mb-3 border-b border-white/10">
                    <Sparkles size={16} className="text-[#22C55E]" />
                    <h2 className="font-display text-lg uppercase tracking-wider text-white font-semibold">
                      Professional Summary
                    </h2>
                  </div>
                  <p className="text-sm leading-relaxed text-white/80 font-normal">
                    Computer Science undergraduate (B.E. 2023–2027, <strong>CGPA 8.55 / 10.0</strong>) at Nitte Meenakshi Institute of Technology, Bengaluru, specializing in <strong>Applied Machine Learning, data pipelines, and backend architectures</strong>. Hands-on experience developing end-to-end predictive systems (Telco Customer Churn, 83.16% recall), high-throughput asynchronous REST APIs using FastAPI, and computer vision safety systems using OpenCV and YOLOv8. Strong foundations in Python, SQL optimization, relational database design, and automated test-driven development.
                  </p>
                </div>
              )}

              {/* Technical Skills Matrix */}
              {(activeTab === "all" || activeTab === "skills") && (
                <div>
                  <div className="flex items-center gap-2 pb-2 mb-3 border-b border-white/10">
                    <Code2 size={16} className="text-[#22C55E]" />
                    <h2 className="font-display text-lg uppercase tracking-wider text-white font-semibold">
                      Technical Skills Matrix
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                      <span className="font-mono font-bold text-[#22C55E] uppercase tracking-wider block mb-1.5">
                        Programming Languages
                      </span>
                      <p className="text-white/80 leading-relaxed font-mono">
                        Python (Advanced), Java, C, SQL (MySQL)
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                      <span className="font-mono font-bold text-[#22C55E] uppercase tracking-wider block mb-1.5">
                        Machine Learning &amp; AI
                      </span>
                      <p className="text-white/80 leading-relaxed font-mono">
                        Scikit-learn, Regression, Classification, Clustering, NLP, TF-IDF, Cosine Similarity, OpenCV, YOLOv8, MediaPipe
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                      <span className="font-mono font-bold text-[#22C55E] uppercase tracking-wider block mb-1.5">
                        Backend &amp; Frameworks
                      </span>
                      <p className="text-white/80 leading-relaxed font-mono">
                        FastAPI, RESTful APIs, JWT Authentication, Microservices, Asynchronous Processing, Pytest (37+ tests)
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                      <span className="font-mono font-bold text-[#22C55E] uppercase tracking-wider block mb-1.5">
                        Data Science &amp; Databases
                      </span>
                      <p className="text-white/80 leading-relaxed font-mono">
                        Pandas, NumPy, Matplotlib, Seaborn, Power BI, EDA, MySQL (Schema Design, Indexing, Transactions)
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                      <span className="font-mono font-bold text-[#22C55E] uppercase tracking-wider block mb-1.5">
                        Tools, Cloud &amp; Platforms
                      </span>
                      <p className="text-white/80 leading-relaxed font-mono">
                        Git, GitHub, Docker (Basics), VS Code, Linux / Bash, Render, Vercel
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                      <span className="font-mono font-bold text-[#22C55E] uppercase tracking-wider block mb-1.5">
                        Spoken Languages
                      </span>
                      <p className="text-white/80 leading-relaxed font-mono">
                        English (Professional), Telugu (Native), Hindi, Kannada
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Featured Projects */}
              {(activeTab === "all" || activeTab === "projects") && (
                <div>
                  <div className="flex items-center gap-2 pb-2 mb-3 border-b border-white/10">
                    <FolderGit2 size={16} className="text-[#22C55E]" />
                    <h2 className="font-display text-lg uppercase tracking-wider text-white font-semibold">
                      Featured Engineering Projects
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {/* Project 1 */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <div>
                          <h3 className="font-display text-lg uppercase font-bold text-white">
                            Customer Churn Prediction Platform
                          </h3>
                          <span className="text-xs text-[#22C55E] font-mono">
                            Python • Scikit-learn • FastAPI • Pandas • Matplotlib
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-white/70">
                            2025
                          </span>
                          <a
                            href="https://github.com/nmit-1NT23CS105/coustomer-chrun-prediction"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs font-mono text-[#22C55E] hover:underline"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                            <span>Repo</span>
                          </a>
                        </div>
                      </div>

                      <ul className="text-xs sm:text-sm text-white/75 space-y-1.5 list-disc list-inside">
                        <li>
                          Engineered an end-to-end churn prediction pipeline on the Telco Customer Churn dataset with comprehensive EDA, handling class imbalance via SMOTE.
                        </li>
                        <li>
                          Benchmarked Logistic Regression, Random Forest, and Gradient Boosting; achieved <strong>83.16% churn recall</strong> and <strong>0.8346 ROC-AUC</strong> via threshold tuning.
                        </li>
                        <li>
                          Developed asynchronous FastAPI inference endpoints with batch prediction support and an interactive model testing UI.
                        </li>
                      </ul>
                    </div>

                    {/* Project 2 */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <div>
                          <h3 className="font-display text-lg uppercase font-bold text-white">
                            AI Document Intelligence System
                          </h3>
                          <span className="text-xs text-[#22C55E] font-mono">
                            FastAPI • Gemini RAG • NLP • MySQL • JWT • Pytest
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-white/70">
                            2025
                          </span>
                          <a
                            href="https://ai-document-intelligence-l4hg.onrender.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs font-mono text-[#38bdf8] hover:underline"
                          >
                            <ExternalLink size={12} />
                            <span>Live Demo</span>
                          </a>
                          <a
                            href="https://github.com/nmit-1NT23CS105/AI-Document-Intelligence-System-"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs font-mono text-[#22C55E] hover:underline"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                            <span>Repo</span>
                          </a>
                        </div>
                      </div>

                      <ul className="text-xs sm:text-sm text-white/75 space-y-1.5 list-disc list-inside">
                        <li>
                          Built a FastAPI document intelligence workspace supporting PDF/DOCX parsing across <strong>8 document categories</strong> (Invoice, Contract, Policy, Report, Resume, etc.).
                        </li>
                        <li>
                          Implemented text chunking, local semantic search, and Gemini-powered RAG chat with grounded source citations and automated summarization.
                        </li>
                        <li>
                          Enforced JWT authentication, rate limiting, and 11 production API endpoints backed by a <strong>37-case automated test suite</strong>.
                        </li>
                      </ul>
                    </div>

                    {/* Project 3 */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <div>
                          <h3 className="font-display text-lg uppercase font-bold text-white">
                            Dual-Stream Dangerous Driving Detection
                          </h3>
                          <span className="text-xs text-[#22C55E] font-mono">
                            Python • OpenCV • YOLOv8 • MediaPipe • FastAPI
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-white/70">
                            2025–2026
                          </span>
                          <a
                            href="https://github.com/nmit-1NT23CS082/AI-Dangerous-Driving-Detection"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs font-mono text-[#22C55E] hover:underline"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                            <span>Repo</span>
                          </a>
                        </div>
                      </div>

                      <ul className="text-xs sm:text-sm text-white/75 space-y-1.5 list-disc list-inside">
                        <li>
                          Engineered real-time edge computer vision pipeline concurrently processing dual camera feeds (in-cabin driver behavior + external traffic).
                        </li>
                        <li>
                          Integrated YOLOv8 for vehicle classification across 4 classes and MediaPipe for facial landmark / drowsiness detection at <strong>30+ FPS</strong>.
                        </li>
                        <li>
                          Designed multi-signal risk fusion engine mapping telemetry into 4 severity tiers (Low, Medium, High, Critical) with 15-frame temporal smoothing to mitigate false alerts.
                        </li>
                      </ul>
                    </div>

                    {/* Project 4 */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <div>
                          <h3 className="font-display text-lg uppercase font-bold text-white">
                            AI Resume Analyzer (ATS Optimization)
                          </h3>
                          <span className="text-xs text-[#22C55E] font-mono">
                            Python • FastAPI • NLP • TF-IDF • Cosine Similarity
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-white/70">
                            2026
                          </span>
                          <a
                            href="https://ai-resume-analyzer-hwsa.onrender.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs font-mono text-[#38bdf8] hover:underline"
                          >
                            <ExternalLink size={12} />
                            <span>Live Demo</span>
                          </a>
                          <a
                            href="https://github.com/nmit-1NT23CS105/Ai_resume_analyzer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs font-mono text-[#22C55E] hover:underline"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                            <span>Repo</span>
                          </a>
                        </div>
                      </div>

                      <ul className="text-xs sm:text-sm text-white/75 space-y-1.5 list-disc list-inside">
                        <li>
                          Developed an automated ATS resume parser evaluating applicant resumes against targeted job descriptions using TF-IDF vectorization and cosine similarity.
                        </li>
                        <li>
                          Extracts missing technical keywords, calculates ATS compatibility score benchmarks, and outputs actionable improvement recommendations.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Education & Certifications */}
              {(activeTab === "all" || activeTab === "education") && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Education */}
                  <div>
                    <div className="flex items-center gap-2 pb-2 mb-3 border-b border-white/10">
                      <GraduationCap size={16} className="text-[#22C55E]" />
                      <h2 className="font-display text-lg uppercase tracking-wider text-white font-semibold">
                        Education
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                        <span className="text-xs font-mono font-bold text-[#22C55E]">
                          2023 – 2027
                        </span>
                        <h4 className="font-display text-base uppercase font-semibold text-white">
                          Nitte Meenakshi Institute of Technology, Bengaluru
                        </h4>
                        <p className="text-xs text-white/70 font-medium">
                          B.E. in Computer Science &amp; Engineering
                        </p>
                        <span className="inline-block mt-1 px-2 py-0.5 rounded bg-[#22C55E]/15 text-[#22C55E] text-xs font-mono font-bold">
                          CGPA: 8.55 / 10.0
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                        <span className="text-xs font-mono font-bold text-[#22C55E]">
                          2022 – 2023
                        </span>
                        <h4 className="font-display text-base uppercase font-semibold text-white">
                          Narayana Junior College, Vijayawada
                        </h4>
                        <p className="text-xs text-white/70 font-medium">
                          Class 12th (Senior Secondary / MPC)
                        </p>
                        <span className="inline-block mt-1 px-2 py-0.5 rounded bg-white/10 text-white text-xs font-mono font-bold">
                          Grade: 94.8%
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                        <span className="text-xs font-mono font-bold text-[#22C55E]">
                          2020 – 2021
                        </span>
                        <h4 className="font-display text-base uppercase font-semibold text-white">
                          Viswabharati English Medium High School, Gudivada
                        </h4>
                        <p className="text-xs text-white/70 font-medium">
                          Class 10th (Secondary School Examination)
                        </p>
                        <span className="inline-block mt-1 px-2 py-0.5 rounded bg-white/10 text-white text-xs font-mono font-bold">
                          Grade: 100% (10.0 GPA)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Certifications & Leadership */}
                  <div>
                    <div className="flex items-center gap-2 pb-2 mb-3 border-b border-white/10">
                      <Award size={16} className="text-[#22C55E]" />
                      <h2 className="font-display text-lg uppercase tracking-wider text-white font-semibold">
                        Certifications &amp; Leadership
                      </h2>
                    </div>

                    <div className="space-y-3">
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                        <div className="flex justify-between items-start">
                          <h4 className="font-display text-sm uppercase font-semibold text-white">
                            Machine Learning Certification
                          </h4>
                          <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-white/80">
                            2026
                          </span>
                        </div>
                        <p className="text-xs text-[#22C55E] font-mono mt-0.5">
                          Infosys Springboard
                        </p>
                        <p className="text-xs text-white/60 mt-1">
                          Supervised ML, classification, regression, model validation, and metric tuning.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                        <div className="flex justify-between items-start">
                          <h4 className="font-display text-sm uppercase font-semibold text-white">
                            Python Programming Certification
                          </h4>
                          <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-white/80">
                            2026
                          </span>
                        </div>
                        <p className="text-xs text-[#22C55E] font-mono mt-0.5">
                          Infosys Springboard
                        </p>
                        <p className="text-xs text-white/60 mt-1">
                          OOP concepts, advanced data structures, functional paradigms, and data analysis packages.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                        <div className="flex justify-between items-start">
                          <h4 className="font-display text-sm uppercase font-semibold text-white">
                            Java Foundation Certification
                          </h4>
                          <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-white/80">
                            2024
                          </span>
                        </div>
                        <p className="text-xs text-[#22C55E] font-mono mt-0.5">
                          Infosys Springboard
                        </p>
                        <p className="text-xs text-white/60 mt-1">
                          JVM architecture, collections framework, exception handling, and multithreading.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                        <h4 className="font-display text-sm uppercase font-semibold text-white">
                          Production Team Member — Anaadyanata 2025
                        </h4>
                        <p className="text-xs text-white/70 mt-1">
                          Managed on-ground technical operations, stage audio/visual synchronization, and event scheduling for NMIT&apos;s national cultural festival.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions Footer */}
            <div className="px-5 sm:px-8 py-3.5 bg-[#141414] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-white/60">
              <div className="flex items-center gap-2">
                <span>© {new Date().getFullYear()} Kataru Rahul Reddy</span>
                <span>•</span>
                <span className="text-[#22C55E]">Verified Student &amp; Developer</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrint}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                >
                  <Printer size={13} />
                  <span>Print ATS Version</span>
                </button>
                <span>•</span>
                <a
                  href={resumeDriveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1 text-[#22C55E]"
                >
                  <span>Google Drive PDF ↗</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
