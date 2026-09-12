"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ExternalLink } from "lucide-react";

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

interface LabItem {
  id: string;
  title: string;
  tag: string;
  image: string;
  link?: string;
  github?: string;
}

const labItems: LabItem[] = [
  {
    id: "resume-ats",
    title: "AI Resume Analyzer",
    tag: "NLP & TF-IDF",
    image: "/images/ai-resume.svg",
    link: "https://ai-resume-analyzer-hwsa.onrender.com",
    github: "https://github.com/nmit-1NT23CS105/Ai_resume_analyzer",
  },
  {
    id: "cinevizion",
    title: "CineVizion Analytics",
    tag: "Data Science & Recs",
    image: "/images/cinevizion.svg",
    github: "https://github.com/nmit-1NT23CS105/cinevizion",
  },
  {
    id: "cashpilot",
    title: "Cashpilot FinTech",
    tag: "TypeScript & SQL",
    image: "/images/cashpilot.svg",
    github: "https://github.com/nmit-1NT23CS105/Cashpilot",
  },
  {
    id: "bharatkart",
    title: "BharatKart Store",
    tag: "Full Stack Commerce",
    image: "/images/bharatkart.svg",
    github: "https://github.com/nmit-1NT23CS105/BharatKart",
  },
  {
    id: "churn-exp",
    title: "Churn ML Heatmaps",
    tag: "Feature Engineering",
    image: "/images/churn-prediction.svg",
    github: "https://github.com/nmit-1NT23CS105/coustomer-chrun-prediction",
  },
  {
    id: "cv-driving",
    title: "Driver Safety Vision",
    tag: "YOLOv8 & MediaPipe",
    image: "/images/driving-detection.svg",
    github: "https://github.com/nmit-1NT23CS082/AI-Dangerous-Driving-Detection",
  },
];

interface ArchivedItem {
  year: string;
  domain: string;
  title: string;
  description: string;
  github: string;
}

const archiveItems: ArchivedItem[] = [
  {
    year: "2026",
    domain: "NLP / Fast API",
    title: "AI Resume Analyzer",
    description:
      "Automated ATS resume parser using TF-IDF matching, keyword extraction, and score benchmarks.",
    github: "https://github.com/nmit-1NT23CS105/Ai_resume_analyzer",
  },
  {
    year: "2026",
    domain: "Data Analytics",
    title: "CineVizion",
    description:
      "Recommendation engine utilizing vector cosine similarity and box-office statistical trends.",
    github: "https://github.com/nmit-1NT23CS105/cinevizion",
  },
  {
    year: "2026",
    domain: "FinTech Platform",
    title: "Cashpilot",
    description:
      "Personal finance budgeting and net-worth tracking engine with recurring transaction analytics.",
    github: "https://github.com/nmit-1NT23CS105/Cashpilot",
  },
  {
    year: "2026",
    domain: "E-Commerce",
    title: "BharatKart",
    description:
      "Full-stack multi-vendor shopping platform with relational catalog schemas and order tracking.",
    github: "https://github.com/nmit-1NT23CS105/BharatKart",
  },
  {
    year: "2025",
    domain: "Sustainability ML",
    title: "EcoFind",
    description:
      "Carbon estimation and eco-friendly product locator built with Python analytics.",
    github: "https://github.com/nmit-1NT23CS105/ecofind",
  },
  {
    year: "2025",
    domain: "Predictive Analytics",
    title: "IPL Auction Analytics",
    description:
      "Supervised regression models predicting player bid valuations from historical match performance.",
    github: "https://github.com/nmit-1NT23CS105/ipl-auction-ap",
  },
];

export default function Playground() {
  return (
    <section id="playground" className="bg-[#0f0f0f] text-white w-full overflow-hidden">
      {/* 1. Creative Lab Section */}
      <div className="container mx-auto min-h-screen py-24 md:py-36 flex flex-col items-center justify-center w-full px-6">
        {/* Lab Header */}
        <div className="text-center mb-16 z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[12px] font-semibold tracking-[0.25em] text-[#999999] uppercase mb-3 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            Creative Lab
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.92] uppercase mb-4"
          >
            Pixels at Play
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl md:text-2xl font-medium text-white/60"
          >
            Explorations, Experiments, and Escapades
          </motion.p>
        </div>

        {/* Infinite Auto-Scrolling Project Marquee */}
        <div className="w-full relative group">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F]/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#0F0F0F] via-[#0F0F0F]/80 to-transparent z-20 pointer-events-none" />

          {/* Marquee Track */}
          <div className="overflow-hidden py-6">
            <div className="animate-marquee flex gap-8 sm:gap-12 w-max">
              {/* Double set of cards for seamless infinite loop */}
              {[...labItems, ...labItems].map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="flex flex-col items-center gap-4 flex-shrink-0 group/card cursor-pointer"
                >
                  <div className="relative w-64 sm:w-80 h-[380px] sm:h-[460px] rounded-2xl overflow-hidden border border-white/10 bg-black/60 transition-all duration-500 hover:border-purple-500/50 hover:shadow-[0_0_50px_rgba(168,85,247,0.25)] hover:scale-[1.02]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/card:scale-105"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider mb-1">
                        {item.tag}
                      </span>
                      <h4 className="text-white font-display text-xl font-bold uppercase mb-4">
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-3">
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-full bg-white text-black hover:bg-white/90 transition-colors"
                            aria-label={`Live demo of ${item.title}`}
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                        {item.github && (
                          <a
                            href={item.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                            aria-label={`GitHub repo of ${item.title}`}
                          >
                            <GithubIcon className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Subtle caption */}
                  <h3 className="text-white font-mono text-xs opacity-40 group-hover/card:opacity-100 transition-opacity uppercase tracking-[0.25em]">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Archived Adventures Vault Section */}
      <div className="container mx-auto py-24 md:py-36 border-t border-white/10 px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-[0.25em] text-[#999999] uppercase mb-3"
          >
            Repository Vault
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-[clamp(2.2rem,6vw,4.5rem)] uppercase leading-[0.92] mb-5 text-white"
          >
            Archived Adventures
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-[#999999] leading-relaxed"
          >
            A vault of prototypes, machine learning notebooks, and software experiments that have shaped the journey over time.
          </motion.p>
        </div>

        {/* Stack of interactive vault cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {archiveItems.map((item, idx) => (
            <motion.a
              key={item.title}
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-[#f2f2f2] text-black p-6 rounded-2xl shadow-2xl flex flex-col justify-between border-4 border-black/5 hover:border-black/20 transition-all group"
            >
              <div>
                <div className="flex justify-between items-center opacity-50 mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-black">
                    {item.year}
                  </span>
                  <div className="w-8 h-8 rounded-full border-2 border-black/20 flex items-center justify-center group-hover:border-black transition-colors">
                    <div className="w-2 h-2 rounded-full bg-black/50 group-hover:bg-[#22C55E]" />
                  </div>
                </div>

                <div className="py-2">
                  <span className="text-[11px] uppercase tracking-widest text-black/50 font-bold block mb-1">
                    {item.domain}
                  </span>
                  <h4 className="text-xl font-display uppercase tracking-tight leading-tight text-black font-bold group-hover:text-neutral-800 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-black/70 font-sans-clean mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-black/10 flex items-center justify-between text-black/70 group-hover:text-black">
                <span className="text-xs font-mono font-semibold">Inspect Code</span>
                <GithubIcon className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

