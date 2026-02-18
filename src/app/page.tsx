"use client";

import { useState } from "react";
import GridOverlay from "@/components/landing/GridOverlay";
import ScrollProgress from "@/components/landing/ScrollProgress";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Outcomes from "@/components/landing/Outcomes";
import ValueSurface from "@/components/landing/ValueSurface";
import Process from "@/components/landing/Process";
import WhoItsFor from "@/components/landing/WhoItsFor";

import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import AssessmentModal from "@/components/landing/AssessmentModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <GridOverlay show={false} />
      <ScrollProgress />
      <Header onRequestAssessment={openModal} />
      <main>
        <Hero />
        <ValueSurface />
        <Problem />
        <Outcomes />
        <Process />
        <WhoItsFor />
        <Pricing onRequestAssessment={openModal} />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <AssessmentModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}
