"use client";

import { SERVICES } from "@/constants";
import SectionHeader from "@/components/@common/SectionHeader";

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-7xl mx-auto w-full">
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
                className="group bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-brand-orange/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-brand-orange/10 rounded-xl flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-brand-orange" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-orange transition-colors duration-300">
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

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-brand-orange/10 backdrop-blur-sm border border-brand-orange/20 rounded-full px-8 py-4">
            <span className="text-brand-orange font-medium">
              Ready to start your journey?
            </span>
            <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
