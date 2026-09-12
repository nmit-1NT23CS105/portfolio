"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, CheckCircle2 } from "lucide-react";

export default function Education() {
  return (
    <section className="py-28 md:py-36 bg-white text-[#0f0f0f] overflow-hidden selection:bg-[#0f0f0f] selection:text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#999999] mb-4"
          >
            Milestones &amp; Credentials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl uppercase leading-[0.9] tracking-tighter"
          >
            Education <br />
            <span className="text-[#999999]">&amp; Certifications</span>
          </motion.h2>
        </div>

        {/* 2-Column Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto">
          {/* Left: Academic Background Timeline */}
          <div className="space-y-10">
            <div className="flex items-center gap-3 border-b border-[#0f0f0f]/10 pb-4 mb-8">
              <GraduationCap className="w-6 h-6 text-[#0f0f0f]" />
              <h3 className="text-xl sm:text-2xl font-display uppercase tracking-wider text-[#0f0f0f] font-semibold">
                Academic Background
              </h3>
            </div>

            {/* Academic Item 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative pl-8 border-l-2 border-[#0f0f0f]/15 hover:border-[#22C55E] transition-colors duration-300"
            >
              <div className="flex flex-col gap-2">
                <span className="text-sm font-bold text-[#22C55E] font-mono tracking-wide">
                  2023 – 2027
                </span>
                <h4 className="text-xl md:text-2xl font-display uppercase leading-tight font-semibold text-[#0f0f0f]">
                  Nitte Meenakshi Institute of Technology, Bengaluru
                </h4>
                <p className="text-base sm:text-lg text-[#666666] font-medium">
                  B.E. in Computer Science &amp; Engineering
                </p>
                <div className="inline-flex items-center gap-2 mt-1">
                  <span className="text-xs uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-[#0f0f0f]/5 text-[#0f0f0f] font-mono">
                    CGPA: 8.55 / 10.0
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Academic Item 2 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative pl-8 border-l-2 border-[#0f0f0f]/15 hover:border-[#22C55E] transition-colors duration-300"
            >
              <div className="flex flex-col gap-2">
                <span className="text-sm font-bold text-[#22C55E] font-mono tracking-wide">
                  2022 – 2023
                </span>
                <h4 className="text-xl md:text-2xl font-display uppercase leading-tight font-semibold text-[#0f0f0f]">
                  Narayana Junior College, Vijayawada
                </h4>
                <p className="text-base sm:text-lg text-[#666666] font-medium">
                  Class 12th (Senior Secondary / MPC)
                </p>
                <div className="inline-flex items-center gap-2 mt-1">
                  <span className="text-xs uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-[#0f0f0f]/5 text-[#0f0f0f] font-mono">
                    Grade: 94.8%
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Academic Item 3 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative pl-8 border-l-2 border-[#0f0f0f]/15 hover:border-[#22C55E] transition-colors duration-300"
            >
              <div className="flex flex-col gap-2">
                <span className="text-sm font-bold text-[#22C55E] font-mono tracking-wide">
                  2020 – 2021
                </span>
                <h4 className="text-xl md:text-2xl font-display uppercase leading-tight font-semibold text-[#0f0f0f]">
                  Viswabharati English Medium High School, Gudivada
                </h4>
                <p className="text-base sm:text-lg text-[#666666] font-medium">
                  Class 10th (Secondary School Examination)
                </p>
                <div className="inline-flex items-center gap-2 mt-1">
                  <span className="text-xs uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-[#0f0f0f]/5 text-[#0f0f0f] font-mono">
                    Grade: 100% (10.0 GPA)
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Certifications & Extra-Curricular */}
          <div className="space-y-10">
            <div className="flex items-center gap-3 border-b border-[#0f0f0f]/10 pb-4 mb-8">
              <Award className="w-6 h-6 text-[#0f0f0f]" />
              <h3 className="text-xl sm:text-2xl font-display uppercase tracking-wider text-[#0f0f0f] font-semibold">
                Certifications &amp; Activities
              </h3>
            </div>

            {/* Cert Cards Stack */}
            <div className="space-y-4">
              {/* Cert 1 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[#f5f5f5] p-6 rounded-lg border border-transparent hover:border-[#0f0f0f]/15 transition-all hover:shadow-md"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg md:text-xl font-display uppercase font-semibold text-[#0f0f0f]">
                    Machine Learning Certification
                  </h4>
                  <span className="text-xs bg-[#0f0f0f] text-white font-mono px-2.5 py-1 rounded">
                    Infosys Springboard
                  </span>
                </div>
                <p className="text-[#666666] text-sm leading-relaxed mb-2">
                  In-depth mastery of statistical machine learning, supervised classification, regression models, cross-validation, and performance metrics.
                </p>
                <span className="text-xs text-[#22C55E] font-mono font-semibold">
                  Certified: 2026
                </span>
              </motion.div>

              {/* Cert 2 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-[#f5f5f5] p-6 rounded-lg border border-transparent hover:border-[#0f0f0f]/15 transition-all hover:shadow-md"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg md:text-xl font-display uppercase font-semibold text-[#0f0f0f]">
                    Python Programming Certification
                  </h4>
                  <span className="text-xs bg-[#0f0f0f] text-white font-mono px-2.5 py-1 rounded">
                    Infosys Springboard
                  </span>
                </div>
                <p className="text-[#666666] text-sm leading-relaxed mb-2">
                  Rigorous foundation in object-oriented programming, data structures, decorators, generators, and data analysis packages.
                </p>
                <span className="text-xs text-[#22C55E] font-mono font-semibold">
                  Certified: 2026
                </span>
              </motion.div>

              {/* Cert 3 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#f5f5f5] p-6 rounded-lg border border-transparent hover:border-[#0f0f0f]/15 transition-all hover:shadow-md"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg md:text-xl font-display uppercase font-semibold text-[#0f0f0f]">
                    Java Foundation Certification
                  </h4>
                  <span className="text-xs bg-[#0f0f0f] text-white font-mono px-2.5 py-1 rounded">
                    Infosys Springboard
                  </span>
                </div>
                <p className="text-[#666666] text-sm leading-relaxed mb-2">
                  Core Java development covering JVM architecture, collections framework, exception handling, and multithreading fundamentals.
                </p>
                <span className="text-xs text-[#22C55E] font-mono font-semibold">
                  Certified: 2024
                </span>
              </motion.div>
            </div>

            {/* Extra-Curricular Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#0f0f0f] text-white p-6 rounded-lg shadow-xl"
            >
              <h4 className="text-lg font-display uppercase tracking-wider mb-3 text-white font-bold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                Event Leadership &amp; Operations
              </h4>
              <p className="text-white/80 text-sm leading-relaxed">
                <strong>Member of the Production Team, Anaadyanata 2025:</strong> Managed on-ground technical execution, stage logistics, audio/visual coordination, and real-time operations for one of South India&apos;s largest collegiate cultural festivals.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

