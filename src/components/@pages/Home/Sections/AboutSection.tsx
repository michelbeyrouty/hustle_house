"use client";

import SectionHeader from "@/components/@common/SectionHeader";


export default function AboutSection() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
        <SectionHeader
          tag="About Us"
          title={
            <>
              YOUR FITNESS
              <br />
              <span>JOURNEY</span>
              <br />
              STARTS HERE
            </>
          }
          description="Hustle House was founded in 2020 in Sehaile-Keserwan, with a vision to create more than just a gym. We're known for our friendly atmosphere, where we take care of every member through science-based programs and daily care and follow-up. At Hustle House, you're not just a member – you're part of our family."
        />

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-black text-brand-orange">2020</div>
              <div className="text-sm uppercase tracking-wider text-gray-400">Founded</div>
            </div>

            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-black text-white">100%</div>
              <div className="text-sm uppercase tracking-wider text-gray-400">Science Based</div>
            </div>

            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-black text-white">24/7</div>
              <div className="text-sm uppercase tracking-wider text-gray-400">Care & Follow-up</div>
            </div>

            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-black text-white">Family</div>
              <div className="text-sm uppercase tracking-wider text-gray-400">Atmosphere</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
