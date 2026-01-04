import HeroSection from "@/components/@pages/Home/Sections/HeroSection";
import AboutSection from "@/components/@pages/Home/Sections/AboutSection";
import CinematicBackground from '@/components/@common/CinematicBackground';

export default function HomePage() {
  return (
    <div className="text-white">
      <CinematicBackground />

      <HeroSection />
      <AboutSection />
    </div>
  );
}
