import HeroSection from "@/components/@pages/Home/Sections/HeroSection";
import AboutSection from "@/components/@pages/Home/Sections/AboutSection";
import ServicesSection from "@/components/@pages/Home/Sections/ServicesSection";
import TrainersSection from "@/components/@pages/Home/Sections/TrainersSection";
import ContactSection from "@/components/@pages/Home/Sections/ContactSection";

export default function HomePage() {
  return (
    <div className="text-white">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TrainersSection />
      <ContactSection />
    </div>
  );
}
