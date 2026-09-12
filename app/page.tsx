"use client";

import { useState } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedProjects from "@/components/FeaturedProjects";
import Services from "@/components/Services";
import Education from "@/components/Education";
import Playground from "@/components/Playground";
import Footer from "@/components/Footer";
import Terminal from "@/components/Terminal";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  const [loaderDone, setLoaderDone] = useState(false);

  return (
    <div id="main" className="min-h-screen bg-[#0F0F0F] text-white">
      {/* Smooth Inertial Scrolling */}
      <SmoothScroll />

      {/* Fluid Magnetic Cursor Follower */}
      <CustomCursor />

      {/* 1. Preloader Overlay */}
      <Loader onComplete={() => setLoaderDone(true)} />

      {/* 2. Floating Navbar */}
      <Navbar />

      {/* 3. Hero Section with 3D Card Fan */}
      <Hero />

      {/* 4. Bio Section with Word-by-word Scroll Reveal */}
      <About />

      {/* 5. Featured Projects with 3D Sticky Stacking Cards */}
      <FeaturedProjects />

      {/* 6. Skills & Services Grid with Interactive SQL Playground */}
      <Services />

      {/* 7. Education & Certifications Timeline */}
      <Education />

      {/* 8. Creative Lab & Archived Adventures */}
      <Playground />

      {/* 9. Contact & Footer */}
      <Footer />

      {/* 10. Interactive Floating Developer Terminal */}
      <Terminal />
    </div>
  );
}
