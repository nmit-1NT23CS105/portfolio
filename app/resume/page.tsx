"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
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
  Layers,
  FileText,
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

export default function ResumePage() {
  const { copyToClipboard } = useToast();
  const [viewMode, setViewMode] = useState<"visual" | "ats">("visual");

  const resumeDriveUrl =
    "https://drive.google.com/file/d/1qjs2OjaPOBqXzvPcmZdoJbPHgLXzPPoS/view?usp=sharing";

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={`min-h-screen ${viewMode === "visual" ? "bg-[#0F0F0F] text-white" : "bg-[#f8f9fa] text-[#111111]"}`}>
      {/* Top Floating Control Bar - Hidden during print */}
      <nav className="no-print sticky top-0 z-50 w-full bg-[#0F0F0F]/85 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono text-white/90 hover:text-white transition-all group"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            <span>Back to Portfolio</span>
          </Link>

          <span className="hidden sm:inline-block text-xs font-mono text-white/40">|</span>
          <span className="hidden sm:inline-block text-xs font-mono text-white/60">
            Kataru Rahul Reddy — Curriculum Vitae
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* View Mode Toggle */}
          <div className="flex items-center p-0.5 rounded-full bg-white/10 border border-white/10 text-xs font-mono">
            <button
              onClick={() => setViewMode("visual")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all cursor-pointer ${
                viewMode === "visual"
                  ? "bg-white text-black font-semibold shadow-xs"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Sparkles size={12} />
              <span>Modern</span>
            </button>
            <button
              onClick={() => setViewMode("ats")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all cursor-pointer ${
                viewMode === "ats"
                  ? "bg-white text-black font-semibold shadow-xs"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <FileText size={12} />
              <span>Clean ATS</span>
            </button>
          </div>

          {/* Print Clean ATS PDF */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-mono text-white transition-all cursor-pointer"
            title="Print or Save as Clean PDF"
          >
            <Printer size={13} />
            <span className="hidden sm:inline">Print / PDF</span>
          </button>

          {/* Download Original Google Drive PDF */}
          <a
            href={resumeDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#22C55E] text-black font-mono font-semibold text-xs hover:bg-[#22C55E]/90 transition-all hover:scale-105 shadow-md"
          >
            <Download size={13} />
            <span>Google Drive PDF</span>
          </a>
        </div>
      </nav>

      {/* Main Resume Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-14 print-page">
        {/* ATS Plain Paper Container vs Modern Visual Card */}
        <div
          className={`rounded-3xl transition-all ${
            viewMode === "visual"
              ? "bg-[#141414] border border-white/10 p-6 sm:p-12 shadow-2xl space-y-10"
              : "bg-white border border-gray-200 text-black p-6 sm:p-12 shadow-sm space-y-8"
          }`}
        >
          {/* Header Block */}
          <header className={`border-b pb-6 ${viewMode === "visual" ? "border-white/10" : "border-gray-300"}`}>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className={`font-display text-4xl sm:text-5xl uppercase font-bold tracking-tight ${viewMode === "visual" ? "text-white" : "text-gray-900"}`}>
                KATARU RAHUL REDDY
              </h1>
              <span className={`text-xs font-mono uppercase tracking-wider font-semibold ${viewMode === "visual" ? "text-[#22C55E]" : "text-green-700"}`}>
                Applied Machine Learning &amp; Backend Developer
              </span>
            </div>

            {/* Contact Information Bar */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 text-xs font-mono">
              <button
                onClick={() => copyToClipboard("katarurahul1014@gmail.com", "Email address")}
                className={`flex items-center gap-1.5 hover:underline cursor-pointer ${viewMode === "visual" ? "text-white/80" : "text-gray-700"}`}
              >
                <Mail size={13} className="text-[#22C55E]" />
                <span>katarurahul1014@gmail.com</span>
              </button>

              <button
                onClick={() => copyToClipboard("+91-7995263968", "Phone number")}
                className={`flex items-center gap-1.5 hover:underline cursor-pointer ${viewMode === "visual" ? "text-white/80" : "text-gray-700"}`}
              >
                <Phone size={13} className="text-[#22C55E]" />
                <span>+91-7995263968</span>
              </button>

              <span className={`flex items-center gap-1.5 ${viewMode === "visual" ? "text-white/70" : "text-gray-700"}`}>
                <MapPin size={13} className="text-[#22C55E]" />
                <span>Bangalore, India</span>
              </span>

              <a
                href="https://github.com/nmit-1NT23CS105"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 hover:underline ${viewMode === "visual" ? "text-white/80" : "text-blue-700"}`}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>github.com/nmit-1NT23CS105</span>
              </a>

              <a
                href="https://www.linkedin.com/in/kataru-rahul-95a5173a8/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 hover:underline ${viewMode === "visual" ? "text-white/80" : "text-blue-700"}`}
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>linkedin.com/in/kataru-rahul</span>
              </a>
            </div>
          </header>

          {/* Section 1: Professional Summary */}
          <section className="space-y-3">
            <h2 className={`font-display text-lg uppercase tracking-wider font-bold border-b pb-1 ${
              viewMode === "visual" ? "text-white border-white/10" : "text-gray-900 border-gray-400"
            }`}>
              Professional Summary
            </h2>
            <p className={`text-sm leading-relaxed ${viewMode === "visual" ? "text-white/80" : "text-gray-800"}`}>
              Computer Science undergraduate (B.E. 2023–2027, <strong>CGPA 8.55 / 10.0</strong>) at Nitte Meenakshi Institute of Technology, Bengaluru, with an engineering focus on <strong>Applied Machine Learning, data pipelines, and backend architectures</strong>. Hands-on experience architecting predictive modeling pipelines (Telco Customer Churn, 83.16% recall), high-throughput asynchronous REST APIs using FastAPI, and edge computer vision systems using OpenCV and YOLOv8. Strong foundation in Python, SQL query optimization, relational schema design, and test-driven development (Pytest).
            </p>
          </section>

          {/* Section 2: Education */}
          <section className="space-y-4">
            <h2 className={`font-display text-lg uppercase tracking-wider font-bold border-b pb-1 ${
              viewMode === "visual" ? "text-white border-white/10" : "text-gray-900 border-gray-400"
            }`}>
              Education
            </h2>

            <div className="space-y-3 text-sm">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <div>
                  <h3 className={`font-bold ${viewMode === "visual" ? "text-white" : "text-gray-900"}`}>
                    Nitte Meenakshi Institute of Technology, Bengaluru
                  </h3>
                  <p className={`${viewMode === "visual" ? "text-white/70" : "text-gray-700"}`}>
                    Bachelor of Engineering (B.E.) in Computer Science &amp; Engineering
                  </p>
                </div>
                <div className="text-right sm:text-right text-xs font-mono">
                  <span className={`font-bold block ${viewMode === "visual" ? "text-[#22C55E]" : "text-green-700"}`}>
                    CGPA: 8.55 / 10.0
                  </span>
                  <span className={`${viewMode === "visual" ? "text-white/50" : "text-gray-500"}`}>
                    2023 – 2027
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <div>
                  <h3 className={`font-bold ${viewMode === "visual" ? "text-white" : "text-gray-900"}`}>
                    Narayana Junior College, Vijayawada
                  </h3>
                  <p className={`${viewMode === "visual" ? "text-white/70" : "text-gray-700"}`}>
                    Class 12th (Senior Secondary / MPC — Mathematics, Physics, Chemistry)
                  </p>
                </div>
                <div className="text-right sm:text-right text-xs font-mono">
                  <span className={`font-bold block ${viewMode === "visual" ? "text-[#22C55E]" : "text-green-700"}`}>
                    Grade: 94.8%
                  </span>
                  <span className={`${viewMode === "visual" ? "text-white/50" : "text-gray-500"}`}>
                    2022 – 2023
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <div>
                  <h3 className={`font-bold ${viewMode === "visual" ? "text-white" : "text-gray-900"}`}>
                    Viswabharati English Medium High School, Gudivada
                  </h3>
                  <p className={`${viewMode === "visual" ? "text-white/70" : "text-gray-700"}`}>
                    Class 10th (Secondary School Examination)
                  </p>
                </div>
                <div className="text-right sm:text-right text-xs font-mono">
                  <span className={`font-bold block ${viewMode === "visual" ? "text-[#22C55E]" : "text-green-700"}`}>
                    Grade: 100% (10.0 GPA)
                  </span>
                  <span className={`${viewMode === "visual" ? "text-white/50" : "text-gray-500"}`}>
                    2020 – 2021
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Technical Skills */}
          <section className="space-y-3">
            <h2 className={`font-display text-lg uppercase tracking-wider font-bold border-b pb-1 ${
              viewMode === "visual" ? "text-white border-white/10" : "text-gray-900 border-gray-400"
            }`}>
              Technical Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div>
                <strong className={`block font-mono text-xs uppercase ${viewMode === "visual" ? "text-[#22C55E]" : "text-green-800"}`}>
                  Languages
                </strong>
                <span className={`${viewMode === "visual" ? "text-white/80" : "text-gray-800"}`}>
                  Python, Java, C, SQL (MySQL)
                </span>
              </div>

              <div>
                <strong className={`block font-mono text-xs uppercase ${viewMode === "visual" ? "text-[#22C55E]" : "text-green-800"}`}>
                  Machine Learning &amp; AI
                </strong>
                <span className={`${viewMode === "visual" ? "text-white/80" : "text-gray-800"}`}>
                  Scikit-learn, Regression, Classification, Clustering, NLP, TF-IDF, OpenCV, YOLOv8, MediaPipe
                </span>
              </div>

              <div>
                <strong className={`block font-mono text-xs uppercase ${viewMode === "visual" ? "text-[#22C55E]" : "text-green-800"}`}>
                  Backend &amp; Frameworks
                </strong>
                <span className={`${viewMode === "visual" ? "text-white/80" : "text-gray-800"}`}>
                  FastAPI, RESTful APIs, JWT Authentication, Microservices, Asynchronous Tasks, Pytest
                </span>
              </div>

              <div>
                <strong className={`block font-mono text-xs uppercase ${viewMode === "visual" ? "text-[#22C55E]" : "text-green-800"}`}>
                  Data Science &amp; Databases
                </strong>
                <span className={`${viewMode === "visual" ? "text-white/80" : "text-gray-800"}`}>
                  Pandas, NumPy, Matplotlib, Seaborn, Power BI, EDA, MySQL (Schema Design, Indexing, Joins)
                </span>
              </div>

              <div>
                <strong className={`block font-mono text-xs uppercase ${viewMode === "visual" ? "text-[#22C55E]" : "text-green-800"}`}>
                  Developer Tools &amp; Cloud
                </strong>
                <span className={`${viewMode === "visual" ? "text-white/80" : "text-gray-800"}`}>
                  Git, GitHub, Docker (Basics), VS Code, Linux / Bash, Render, Vercel
                </span>
              </div>

              <div>
                <strong className={`block font-mono text-xs uppercase ${viewMode === "visual" ? "text-[#22C55E]" : "text-green-800"}`}>
                  Spoken Languages
                </strong>
                <span className={`${viewMode === "visual" ? "text-white/80" : "text-gray-800"}`}>
                  English (Professional), Telugu (Native), Hindi, Kannada
                </span>
              </div>
            </div>
          </section>

          {/* Section 4: Projects */}
          <section className="space-y-6">
            <h2 className={`font-display text-lg uppercase tracking-wider font-bold border-b pb-1 ${
              viewMode === "visual" ? "text-white border-white/10" : "text-gray-900 border-gray-400"
            }`}>
              Featured Projects
            </h2>

            {/* Project 1 */}
            <div className="space-y-1.5 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <div className="flex items-center gap-2">
                  <h3 className={`font-bold ${viewMode === "visual" ? "text-white" : "text-gray-900"}`}>
                    Customer Churn Prediction Platform
                  </h3>
                  <a
                    href="https://github.com/nmit-1NT23CS105/coustomer-chrun-prediction"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#22C55E] hover:underline flex items-center gap-0.5 text-xs font-mono"
                  >
                    <span>[GitHub Repo]</span>
                    <ExternalLink size={10} />
                  </a>
                </div>
                <span className={`text-xs font-mono ${viewMode === "visual" ? "text-white/50" : "text-gray-500"}`}>
                  2025
                </span>
              </div>
              <p className={`text-xs font-mono font-medium ${viewMode === "visual" ? "text-[#22C55E]" : "text-green-700"}`}>
                Tech Stack: Python, Scikit-learn, FastAPI, Pandas, Matplotlib, Seaborn
              </p>
              <ul className={`list-disc list-inside space-y-1 ${viewMode === "visual" ? "text-white/75" : "text-gray-700"}`}>
                <li>
                  Engineered an end-to-end churn prediction system on the Telco Customer Churn dataset with complete exploratory analysis and SMOTE class imbalance rebalancing.
                </li>
                <li>
                  Benchmarked multiple classifiers (Logistic Regression, Random Forest, Gradient Boosting) achieving <strong>83.16% churn recall</strong> and <strong>0.8346 ROC-AUC</strong> through probability threshold tuning.
                </li>
                <li>
                  Architected production-ready FastAPI endpoints for real-time inference and batch CSV processing, paired with an interactive risk assessment dashboard.
                </li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="space-y-1.5 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <div className="flex items-center gap-2">
                  <h3 className={`font-bold ${viewMode === "visual" ? "text-white" : "text-gray-900"}`}>
                    AI Document Intelligence System
                  </h3>
                  <a
                    href="https://ai-document-intelligence-l4hg.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#38bdf8] hover:underline flex items-center gap-0.5 text-xs font-mono"
                  >
                    <span>[Live Demo]</span>
                    <ExternalLink size={10} />
                  </a>
                  <a
                    href="https://github.com/nmit-1NT23CS105/AI-Document-Intelligence-System-"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#22C55E] hover:underline flex items-center gap-0.5 text-xs font-mono"
                  >
                    <span>[GitHub Repo]</span>
                    <ExternalLink size={10} />
                  </a>
                </div>
                <span className={`text-xs font-mono ${viewMode === "visual" ? "text-white/50" : "text-gray-500"}`}>
                  2025
                </span>
              </div>
              <p className={`text-xs font-mono font-medium ${viewMode === "visual" ? "text-[#22C55E]" : "text-green-700"}`}>
                Tech Stack: Python, FastAPI, Gemini RAG, NLP, MySQL, JWT, Pytest
              </p>
              <ul className={`list-disc list-inside space-y-1 ${viewMode === "visual" ? "text-white/75" : "text-gray-700"}`}>
                <li>
                  Built a FastAPI workspace for PDF/DOCX document parsing, categorizing documents across <strong>8 types</strong> (Invoice, Contract, Policy, Report, Resume, Research Paper, Manual, Other).
                </li>
                <li>
                  Engineered text chunking and semantic search, combined with Gemini-powered RAG chat that delivers grounded responses with exact document citations.
                </li>
                <li>
                  Integrated JWT user authentication, MySQL metadata tracking, and 11 API endpoints verified with a <strong>37-case automated test suite</strong>.
                </li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="space-y-1.5 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <div className="flex items-center gap-2">
                  <h3 className={`font-bold ${viewMode === "visual" ? "text-white" : "text-gray-900"}`}>
                    Dual-Stream Dangerous Driving Detection
                  </h3>
                  <a
                    href="https://github.com/nmit-1NT23CS082/AI-Dangerous-Driving-Detection"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#22C55E] hover:underline flex items-center gap-0.5 text-xs font-mono"
                  >
                    <span>[GitHub Repo]</span>
                    <ExternalLink size={10} />
                  </a>
                </div>
                <span className={`text-xs font-mono ${viewMode === "visual" ? "text-white/50" : "text-gray-500"}`}>
                  2025–2026
                </span>
              </div>
              <p className={`text-xs font-mono font-medium ${viewMode === "visual" ? "text-[#22C55E]" : "text-green-700"}`}>
                Tech Stack: Python, OpenCV, YOLOv8, MediaPipe, FastAPI
              </p>
              <ul className={`list-disc list-inside space-y-1 ${viewMode === "visual" ? "text-white/75" : "text-gray-700"}`}>
                <li>
                  Implemented dual-camera edge vision pipeline processing in-cabin driver telemetry and external road vehicles concurrently at <strong>30+ FPS</strong>.
                </li>
                <li>
                  Trained YOLOv8 for 4 vehicle classes and utilized MediaPipe facial mesh for real-time eye aspect ratio (EAR) drowsiness and distraction tracking.
                </li>
                <li>
                  Engineered multi-signal risk fusion engine mapping telemetry into 4 severity tiers (Low/Medium/High/Critical) with 15-frame temporal smoothing to minimize false alarms.
                </li>
              </ul>
            </div>

            {/* Project 4 */}
            <div className="space-y-1.5 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <div className="flex items-center gap-2">
                  <h3 className={`font-bold ${viewMode === "visual" ? "text-white" : "text-gray-900"}`}>
                    AI Resume Analyzer (ATS Scoring Engine)
                  </h3>
                  <a
                    href="https://ai-resume-analyzer-hwsa.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#38bdf8] hover:underline flex items-center gap-0.5 text-xs font-mono"
                  >
                    <span>[Live Demo]</span>
                    <ExternalLink size={10} />
                  </a>
                  <a
                    href="https://github.com/nmit-1NT23CS105/Ai_resume_analyzer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#22C55E] hover:underline flex items-center gap-0.5 text-xs font-mono"
                  >
                    <span>[GitHub Repo]</span>
                    <ExternalLink size={10} />
                  </a>
                </div>
                <span className={`text-xs font-mono ${viewMode === "visual" ? "text-white/50" : "text-gray-500"}`}>
                  2026
                </span>
              </div>
              <p className={`text-xs font-mono font-medium ${viewMode === "visual" ? "text-[#22C55E]" : "text-green-700"}`}>
                Tech Stack: Python, FastAPI, Scikit-learn, TF-IDF, Cosine Similarity
              </p>
              <ul className={`list-disc list-inside space-y-1 ${viewMode === "visual" ? "text-white/75" : "text-gray-700"}`}>
                <li>
                  Built an automated ATS resume parser evaluating candidate CVs against target job descriptions using TF-IDF vectorization and cosine similarity scoring.
                </li>
                <li>
                  Highlights missing technical keywords, calculates match percentiles, and provides contextual feedback for resume optimization.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5: Certifications & Extra-Curricular */}
          <section className="space-y-4">
            <h2 className={`font-display text-lg uppercase tracking-wider font-bold border-b pb-1 ${
              viewMode === "visual" ? "text-white border-white/10" : "text-gray-900 border-gray-400"
            }`}>
              Certifications &amp; Leadership
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <strong className={`${viewMode === "visual" ? "text-white" : "text-gray-900"}`}>
                    Machine Learning Certification
                  </strong>
                  <span className={`text-xs font-mono ${viewMode === "visual" ? "text-[#22C55E]" : "text-green-700"}`}>
                    2026
                  </span>
                </div>
                <p className={`text-xs font-mono ${viewMode === "visual" ? "text-white/60" : "text-gray-600"}`}>
                  Infosys Springboard
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <strong className={`${viewMode === "visual" ? "text-white" : "text-gray-900"}`}>
                    Python Programming Certification
                  </strong>
                  <span className={`text-xs font-mono ${viewMode === "visual" ? "text-[#22C55E]" : "text-green-700"}`}>
                    2026
                  </span>
                </div>
                <p className={`text-xs font-mono ${viewMode === "visual" ? "text-white/60" : "text-gray-600"}`}>
                  Infosys Springboard
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <strong className={`${viewMode === "visual" ? "text-white" : "text-gray-900"}`}>
                    Java Foundation Certification
                  </strong>
                  <span className={`text-xs font-mono ${viewMode === "visual" ? "text-[#22C55E]" : "text-green-700"}`}>
                    2024
                  </span>
                </div>
                <p className={`text-xs font-mono ${viewMode === "visual" ? "text-white/60" : "text-gray-600"}`}>
                  Infosys Springboard
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <strong className={`${viewMode === "visual" ? "text-white" : "text-gray-900"}`}>
                    Production Team Member — Anaadyanata 2025
                  </strong>
                  <span className={`text-xs font-mono ${viewMode === "visual" ? "text-[#22C55E]" : "text-green-700"}`}>
                    NMIT
                  </span>
                </div>
                <p className={`text-xs ${viewMode === "visual" ? "text-white/70" : "text-gray-600"}`}>
                  Managed on-ground logistics, audio/visual coordination, and real-time operations.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

