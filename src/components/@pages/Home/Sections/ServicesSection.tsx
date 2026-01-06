"use client";

import { SERVICES } from "@/constants";
import SectionHeader from "@/components/@common/SectionHeader";
import CinematicBackground from "@/components/@common/CinematicBackground";

export default function ServicesSection() {
  return (
    <div
      id="services"
      className="relative min-h-screen text-white flex items-center px-6 md:px-12 lg:px-20 py-20"
    >
      {/* Cinematic Background with gym interior */}
      <CinematicBackground
        imageUrl="/gym_interior_main.jpg"
        brightness={0.6}
        contrast={1.3}
      />

      {/* Content overlay */}
      <div className="relative z-20 max-w-7xl mx-auto w-full">
        <SectionHeader
          tag="Our Services"
          title={
            <>
              EVERYTHING YOU
              <br />
              <span>NEED TO</span>
              <br />
              SUCCEED
            </>
          }
          description="From personalized training to expert guidance, we provide comprehensive services to support your fitness journey."
        />

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-white group-hover:text-brand-orange" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
