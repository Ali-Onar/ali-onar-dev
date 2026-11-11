import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import TechStack from "@/components/TechStack";
import WorkSection from "@/components/WorkSection";
import { homePath } from "@/lib/site";

export function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Metadata {
  return {
    alternates: {
      canonical: homePath(locale),
      languages: { en: "/", tr: "/tr", "x-default": "/" },
    },
  };
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TechStack />
        <WorkSection />
        <ServicesSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
