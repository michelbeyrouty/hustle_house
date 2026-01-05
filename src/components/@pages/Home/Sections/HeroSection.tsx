"use client";

import SectionHeader from "@/components/@common/SectionHeader";

export default function HeroSection() {
  return (
    <div className="relative">
      {/* Hero Content - Split Layout */}
      <div className="relative h-screen flex items-center px-6 md:px-12 lg:px-20 z-10">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 items-center">
          <SectionHeader
            tag=""
            title={
              <>
                FITNESS
                <br />
                <span className="text-brand-orange">THAT FITS</span>
                <br />
                YOUR LIFE
              </>
            }
            description="Discover a gym that feels like a second home. Your fitness journey starts here!"
          />
        </div>
      </div>
    </div>
  );
}
