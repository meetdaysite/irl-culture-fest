"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatIsIRL from "@/components/WhatIsIRL";
import StatsBar from "@/components/StatsBar";
import GallerySection from "@/components/GallerySection";
import ExperienceSection from "@/components/ExperienceSection";
import CitiesSection from "@/components/CitiesSection";
import TeamSection from "@/components/TeamSection";
import SplitCTA from "@/components/SplitCTA";
import Footer from "@/components/Footer";
// import ConfettiPop from "@/components/ConfettiPop";

function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: progress }}
    />
  );
}

export default function Home() {
  return (
    <>
      {/* <ConfettiPop /> */}
      <ScrollProgressBar />
      <Navbar />
      <main>
        <HeroSection />
        <WhatIsIRL />
        <StatsBar />
        <GallerySection />
        <ExperienceSection />
        <CitiesSection />
        <TeamSection />
        <SplitCTA />
      </main>
      <Footer />
    </>
  );
}
