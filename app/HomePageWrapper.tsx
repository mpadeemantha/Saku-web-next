"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CulturalNews from "@/components/CulturalNews";
import StudentGallery from "@/components/StudentGallery";
import UpcomingClasses from "@/components/UpcomingClasses";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import LandingPageClient from "@/components/LandingPageClient";

export default function HomePageWrapper() {
  const [showLanding, setShowLanding] = useState(true);

  return (
    <>
      {showLanding && (
        <LandingPageClient onStart={() => setShowLanding(false)} />
      )}
      
      <main className="min-h-screen relative overflow-x-hidden">
        <Navbar />
        <Hero />

        <ScrollReveal>
          <About />
        </ScrollReveal>

        <ScrollReveal>
          <Services />
        </ScrollReveal>

        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>

        <ScrollReveal>
          <StudentGallery />
        </ScrollReveal>

        <ScrollReveal>
          <Contact />
        </ScrollReveal>

        <ScrollReveal>
          <CulturalNews />
        </ScrollReveal>

        <Footer />
      </main>
    </>
  );
}
