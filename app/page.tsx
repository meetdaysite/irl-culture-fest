"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import GallerySection from "@/components/GallerySection";
import ManifestoSection from "@/components/ManifestoSection";
import SolutionSection from "@/components/SolutionSection";
import ExperienceSection from "@/components/ExperienceSection";
import SubculturesMatrix from "@/components/SubculturesMatrix";
import SponsorImpact from "@/components/SponsorImpact";
import TeamSection from "@/components/TeamSection";
import PartnersCollaborators from "@/components/PartnersCollaborators";
import PassesSection from "@/components/PassesSection";
import ContactFormSection from "@/components/ContactFormSection";
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
        <StatsBar />
        {/* <GallerySection /> */}
        <ManifestoSection />
        <SolutionSection />
        <ExperienceSection />
        {/* <CitiesSection /> */}
        <SubculturesMatrix />
        <SponsorImpact />
        <TeamSection />
        <PartnersCollaborators />
        <PassesSection />
        <ContactFormSection />
      </main>
      <Footer />
    </>
  );
}
