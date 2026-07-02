"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Local Subcomponents
import PartnerHero from "./components/PartnerHero";
import OpportunitySection from "./components/OpportunitySection";
import WhoYoullMeet from "./components/WhoYoullMeet";
import WhatYouGet from "./components/WhatYouGet";
import PartnershipTiers from "./components/PartnershipTiers";
import PartnerTeam from "./components/PartnerTeam";
import PartnerForm from "./components/PartnerForm";

function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: progress }}
    />
  );
}

export default function PartnerPage() {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      <main>
        <PartnerHero />
        <OpportunitySection />
        <WhoYoullMeet />
        <WhatYouGet />
        <PartnershipTiers />
        <PartnerTeam />
        <PartnerForm />
      </main>
      <Footer />
    </>
  );
}
