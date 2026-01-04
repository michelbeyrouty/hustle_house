"use client";

import { SERVICES } from "@/constants";

export default function ServicesSection() {

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-7xl mx-auto w-full">

        {/* Section Header */}
        <div className="mb-16 space-y-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-px bg-brand-orange"></div>
            <span className="text-brand-orange font-medium text-sm uppercase tracking-wider">
              Our Services
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            EVERYTHING YOU
            <br />
            <span className="text-brand-orange">NEED TO</span>
            <br />
            SUCCEED
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
            From personalized training to expert guidance, we provide comprehensive services to support your fitness journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
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
