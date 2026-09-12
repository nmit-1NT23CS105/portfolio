"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  BarChart3,
  Server,
  Database,
  Code2,
  ArrowRight,
} from "lucide-react";
import SqlPlayground from "@/components/SqlPlayground";

interface SkillService {
  id: string;
  category: string;
  skills: string;
  highlight: string;
  icon: React.ReactNode;
}

const services: SkillService[] = [
  {
    id: "ai-ml",
    category: "AI & Machine Learning",
    skills:
      "Scikit-learn · Regression · Classification · Clustering · NLP · TF-IDF · Cosine Similarity · Computer Vision · OpenCV · YOLO · MediaPipe",
    highlight:
      "Developing production ML models with feature engineering, threshold optimization, class imbalance handling, and low-latency computer vision inference.",
    icon: <BrainCircuit className="w-16 h-16 md:w-20 md:h-20 text-[#0f0f0f]" />,
  },
  {
    id: "data-science",
    category: "Data Science & Analytics",
    skills:
      "Pandas · NumPy · Matplotlib · Seaborn · Power BI · Exploratory Data Analysis (EDA) · Statistical Modeling",
    highlight:
      "Transforming complex datasets into actionable business intelligence through rigorous data cleaning, statistical hypothesis testing, and interactive reporting dashboards.",
    icon: <BarChart3 className="w-16 h-16 md:w-20 md:h-20 text-[#0f0f0f]" />,
  },
  {
    id: "backend",
    category: "Backend & Frameworks",
    skills:
      "FastAPI · RESTful APIs · JWT Authentication · Asynchronous Processing · Microservices · API Testing",
    highlight:
      "Architecting scalable, authenticated backend services with automatic API documentation, robust error boundaries, and end-to-end automated test suites.",
    icon: <Server className="w-16 h-16 md:w-20 md:h-20 text-[#0f0f0f]" />,
  },
  {
    id: "databases",
    category: "Databases & SQL",
    skills:
      "MySQL (Queries, Joins, Normalization) · Relational Database Design · Indexing · SQL Optimization",
    highlight:
      "Designing normalized, high-performance database architectures with optimized query execution plans, transactions, and reliable data integrity.",
    icon: <Database className="w-16 h-16 md:w-20 md:h-20 text-[#0f0f0f]" />,
  },
  {
    id: "languages-tools",
    category: "Languages & Tools",
    skills:
      "Python · Java · C · SQL · Git · GitHub · VS Code · Linux / Bash",
    highlight:
      "Writing clean, maintainable code across multiple paradigms, backed by modern version control workflows, automated CI testing, and solid algorithmic foundations.",
    icon: <Code2 className="w-16 h-16 md:w-20 md:h-20 text-[#0f0f0f]" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#0f0f0f] py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#999999] mb-4"
          >
            Where I Can Help
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl uppercase text-white max-w-4xl tracking-tight leading-[0.95]"
          >
            From discovery to delivery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg sm:text-xl md:text-2xl text-[#999999] mt-3"
          >
            ...and everything in between, to move your data systems forward.
          </motion.p>
        </div>

        {/* High-Contrast White Cards Grid */}
        <div className="flex flex-col gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative flex w-full flex-col md:flex-row items-start md:items-center justify-between bg-white px-8 py-10 md:px-12 md:py-14 rounded-xl md:rounded-[4px] shadow-2xl cursor-pointer transition-all duration-300 border border-transparent hover:border-black/10"
            >
              <div className="flex flex-col max-w-3xl">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#22c55e] bg-black/5 px-2.5 py-1 rounded">
                    0{index + 1}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.05] text-[#0f0f0f] uppercase tracking-[-0.02em] font-semibold">
                    {service.category}
                  </h3>
                </div>

                <p className="font-sans text-sm md:text-base font-semibold text-[#0f0f0f]/80 mt-2 mb-3">
                  {service.skills}
                </p>

                <p className="font-sans text-xs md:text-sm leading-relaxed text-[#666666]">
                  {service.highlight}
                </p>
              </div>

              {/* Right Side Graphic / Icon */}
              <div className="mt-8 md:mt-0 flex items-center gap-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 self-end md:self-center">
                <div className="p-3 rounded-full bg-black/5 group-hover:bg-black/10 transition-colors">
                  {service.icon}
                </div>
                <ArrowRight className="w-6 h-6 text-[#0f0f0f] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 hidden md:block" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* In-Browser Interactive SQL Playground */}
        <div className="mt-16 w-full">
          <SqlPlayground />
        </div>
      </div>
    </section>
  );
}

