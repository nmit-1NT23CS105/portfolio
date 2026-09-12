"use client";

import { motion } from "framer-motion";
import { ArrowRight, MoveUp, Mail, Phone, MapPin, Copy } from "lucide-react";
import { useToast } from "@/components/Toast";

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

function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
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

export default function Footer() {
  const { copyToClipboard } = useToast();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const emailPresets = [
    {
      label: "💼 Discuss Internship",
      subject: "Internship Opportunity for Kataru Rahul Reddy",
      body: "Hi Rahul,\n\nI was reviewing your portfolio and impressed by your machine learning and backend work. I would love to discuss an internship opportunity at our company.\n\nBest regards,",
    },
    {
      label: "🚀 Project Collaboration",
      subject: "Project Collaboration with Kataru Rahul Reddy",
      body: "Hi Rahul,\n\nI saw your work on AI Document Intelligence and Churn Prediction. We are building a project and would like to explore working together.\n\nBest,",
    },
    {
      label: "☕ Tech Chat / Coffee",
      subject: "Hey Rahul — Let's connect!",
      body: "Hi Rahul,\n\nCame across your developer portfolio and wanted to reach out and connect about data systems and backend architecture.\n\nCheers,",
    },
  ];

  return (
    <footer
      id="footer"
      className="footer-section w-full bg-[#f5f5f5] text-[#0f0f0f] selection:bg-[#0f0f0f] selection:text-white"
    >
      <div className="container mx-auto px-6 sm:px-10 md:px-16 pt-28 md:pt-40 pb-20 md:pb-28 flex flex-col items-center text-center">
        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-base sm:text-lg md:text-xl font-sans mb-4 text-[#0f0f0f]/60 font-medium"
        >
          That&apos;s a wrap? Maybe not.
        </motion.p>

        {/* Huge Callout Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[130px] leading-[0.88] mb-8 tracking-tighter uppercase font-black max-w-5xl"
        >
          Great things start <br />
          with &apos;Hello&apos;! 🚀
        </motion.h2>

        {/* Contact Invitation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-[720px] mb-8"
        >
          <p className="text-lg sm:text-xl md:text-2xl font-sans-clean leading-relaxed font-medium text-[#0f0f0f]/80">
            Open to 👁️ conversations, 🤝 backend &amp; ML internships, 🧠 data challenges, or just trading engineering notes.
          </p>

          {/* Quick Copy Contact Chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6 text-xs sm:text-sm font-mono font-semibold">
            <button
              onClick={() => copyToClipboard("katarurahul1014@gmail.com", "Email address")}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 hover:bg-black/10 border border-black/10 transition-all hover:scale-105 active:scale-95 group text-[#0f0f0f]"
              title="Click to copy email address"
            >
              <Mail size={15} className="text-[#22C55E]" />
              <span>katarurahul1014@gmail.com</span>
              <Copy size={13} className="text-black/30 group-hover:text-black transition-colors" />
            </button>

            <button
              onClick={() => copyToClipboard("+91-7995263968", "Phone number")}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 hover:bg-black/10 border border-black/10 transition-all hover:scale-105 active:scale-95 group text-[#0f0f0f]"
              title="Click to copy phone number"
            >
              <Phone size={15} className="text-[#22C55E]" />
              <span>+91-7995263968</span>
              <Copy size={13} className="text-black/30 group-hover:text-black transition-colors" />
            </button>

            <span className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/5 border border-black/10 text-[#0f0f0f]/70">
              <MapPin size={15} className="text-[#22C55E]" />
              <span>Bangalore, India</span>
            </span>
          </div>
        </motion.div>

        {/* Primary CTA Button & Quick Email Presets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-6"
        >
          <a
            href="mailto:katarurahul1014@gmail.com"
            className="group relative flex items-center justify-center bg-[#0f0f0f] text-white px-9 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-black"
          >
            <span>Let&apos;s Connect</span>
            <ArrowRight className="ml-2.5 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>

          {/* Quick Email Templates */}
          <div className="flex flex-col items-center gap-2.5">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#0f0f0f]/50 font-bold">
              Or pick a quick draft:
            </span>
            <div className="flex flex-wrap justify-center gap-2 max-w-xl">
              {emailPresets.map((preset) => (
                <a
                  key={preset.label}
                  href={`mailto:katarurahul1014@gmail.com?subject=${encodeURIComponent(
                    preset.subject
                  )}&body=${encodeURIComponent(preset.body)}`}
                  className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-white hover:bg-black hover:text-white text-black/80 border border-black/10 shadow-xs transition-all hover:scale-105 active:scale-95"
                >
                  {preset.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Icon Pills */}
          <div className="flex flex-col items-center gap-4 mt-4">
            <span className="text-xs sm:text-sm text-[#0f0f0f]/50 font-mono uppercase tracking-widest">
              or connect through...
            </span>

            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/kataru-rahul-95a5173a8/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3.5 bg-white rounded-2xl border border-black/10 shadow-sm hover:shadow-md hover:scale-110 transition-all text-[#0f0f0f]"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <a
                href="https://github.com/nmit-1NT23CS105"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3.5 bg-white rounded-2xl border border-black/10 shadow-sm hover:shadow-md hover:scale-110 transition-all text-[#0f0f0f]"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href="mailto:katarurahul1014@gmail.com"
                aria-label="Email"
                className="p-3.5 bg-white rounded-2xl border border-black/10 shadow-sm hover:shadow-md hover:scale-110 transition-all text-[#0f0f0f]"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href="tel:+917995263968"
                aria-label="Phone"
                className="p-3.5 bg-white rounded-2xl border border-black/10 shadow-sm hover:shadow-md hover:scale-110 transition-all text-[#0f0f0f]"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="container mx-auto px-6 sm:px-10 md:px-16 pb-12">
        <div className="w-full h-[1px] bg-[#0f0f0f]/10 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="order-2 md:order-1 flex-1 text-center md:text-left">
            <p className="text-xs sm:text-sm font-medium text-[#0f0f0f]/60 font-mono">
              © {new Date().getFullYear()} Kataru Rahul Reddy.
            </p>
          </div>

          <div className="order-1 md:order-2 flex-[2] text-center max-w-md mx-auto">
            <p className="text-xs sm:text-sm leading-relaxed font-medium text-[#0f0f0f]/75">
              Engineered with 💡 curiosity, ☕ coffee, and 💻 clean code.
              Thanks for stopping by!
            </p>
          </div>

          <div className="order-3 flex-1 flex justify-center md:justify-end w-full md:w-auto">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0f0f0f] hover:opacity-70 transition-opacity"
            >
              <span>Back to top</span>
              <MoveUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
