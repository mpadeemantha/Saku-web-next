import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CulturalNews from "@/components/CulturalNews";
import StudentGallery from "@/components/StudentGallery";
import UpcomingClasses from "@/components/UpcomingClasses";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">

      <Navbar />
      <Hero />

      <ScrollReveal>
        <About />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <Stats />
      </ScrollReveal>

      <ScrollReveal>
        <Services />
      </ScrollReveal>

      <ScrollReveal>
        <UpcomingClasses />
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
  );
}





