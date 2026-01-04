import HeroSection from "@/components/@pages/Home/Sections/HeroSection";
import CinematicBackground from '@/components/@common/CinematicBackground';

export default function HomePage() {
  return (
    <div className="text-white">
      <CinematicBackground />

      <HeroSection />
      <HeroSection />
      <HeroSection />
    </div>
  );
}
