"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SquareArrowOutUpRight, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Playground", href: "#playground" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#footer" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileMenuOpen]);

  const resumeUrl =
    "https://drive.google.com/file/d/1qjs2OjaPOBqXzvPcmZdoJbPHgLXzPPoS/view?usp=sharing";

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-full max-w-fit px-4 pointer-events-none"
      >
        <div
          className={`flex items-center justify-between gap-4 md:gap-6 px-2 py-1.5 rounded-full shadow-2xl pointer-events-auto transition-all duration-300 ${
            isScrolled
              ? "bg-[#141414]/90 backdrop-blur-2xl border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
              : "bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
          }`}
        >
          {/* Left Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-1 pl-3">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative h-10 px-4 flex items-center overflow-hidden"
              >
                <div className="relative flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                  <span className="text-[14px] font-medium text-white/70 h-10 flex items-center">
                    {link.name}
                  </span>
                  <span className="text-[14px] font-medium text-white h-10 flex items-center absolute top-full">
                    {link.name}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Center Brand Monogram Logo */}
          <a
            href="#hero"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 p-1 group"
            aria-label="Home"
          >
            <div className="w-7 h-7 relative rounded-full overflow-hidden flex items-center justify-center">
              <Image
                src="/logo.svg"
                alt="Kataru Rahul Reddy"
                width={28}
                height={28}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </a>

          {/* Right Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-1 pr-1.5">
            {navLinks.slice(3).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative h-10 px-4 flex items-center overflow-hidden"
              >
                <div className="relative flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                  <span className="text-[14px] font-medium text-white/70 h-10 flex items-center">
                    {link.name}
                  </span>
                  <span className="text-[14px] font-medium text-white h-10 flex items-center absolute top-full">
                    {link.name}
                  </span>
                </div>
              </a>
            ))}

            {/* Resume Button with Inverted Rollover Animation */}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-10 pl-5 pr-4 flex items-center overflow-hidden bg-white/5 border border-white/10 rounded-full hover:border-white transition-colors"
            >
              <div className="relative flex items-center gap-2 transition-all duration-500 ease-in-out group-hover:-translate-y-full">
                <span className="text-[14px] font-medium text-white/90">Resume</span>
                <SquareArrowOutUpRight
                  size={14}
                  className="text-white/60 transition-colors group-hover:text-white"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center gap-2 translate-y-full transition-all duration-500 ease-in-out group-hover:translate-y-0 bg-white rounded-full">
                <span className="text-[14px] font-medium text-black">Resume</span>
                <SquareArrowOutUpRight size={14} className="text-black" />
              </div>
            </a>
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="lg:hidden flex items-center pr-2 pl-1">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 relative w-8 h-8 flex flex-col justify-center items-center"
              aria-label="Toggle navigation menu"
            >
              <span
                className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-0" : "translate-y-1"
                }`}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark blur backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-[98] bg-black/70 backdrop-blur-xs lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-4 top-24 z-[99] lg:hidden bg-[#141414]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-2xl flex flex-col gap-4 text-center max-h-[calc(100dvh-120px)] overflow-y-auto"
            >
            <div className="flex justify-between items-center pb-3 border-b border-white/10">
              <span className="text-sm font-semibold tracking-wider text-white/70 uppercase">
                Menu
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/70 hover:text-white p-1"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-3 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/80 hover:text-white py-2 hover:bg-white/5 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-white text-black font-semibold text-base hover:bg-white/90 transition-colors mt-2"
            >
              <span>View Resume</span>
              <SquareArrowOutUpRight size={16} />
            </a>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

