"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import OpportunitySection from "@/components/OpportunitySection";
import SolutionSection from "@/components/SolutionSection";
import ExperienceSection from "@/components/ExperienceSection";
import AudienceSection from "@/components/AudienceSection";
import CitiesSection from "@/components/CitiesSection";
import ValueSection from "@/components/ValueSection";
import TeamSection from "@/components/TeamSection";
import PartnerCTA from "@/components/PartnerCTA";
import Footer from "@/components/Footer";

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
      <ScrollProgressBar />
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <OpportunitySection />
        <SolutionSection />
        <ExperienceSection />
        <AudienceSection />
        <CitiesSection />
        <ValueSection />
        <TeamSection />
        <PartnerCTA />
      </main>
      <Footer />
    </>
  );
}
