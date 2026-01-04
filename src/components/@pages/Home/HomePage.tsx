import HeroSection from "@/components/@pages/Home/Sections/HeroSection";
import AboutSection from "@/components/@pages/Home/Sections/AboutSection";
import ServicesSection from "@/components/@pages/Home/Sections/ServicesSection";
import CinematicBackground from '@/components/@common/CinematicBackground';

export default function HomePage() {
  return (
    <div className="text-white">
      <CinematicBackground />

      <HeroSection />
      <AboutSection />
      <ServicesSection />
    </div>
  );
}
