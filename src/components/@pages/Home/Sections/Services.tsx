"use client";

import { HiUser, HiUserGroup, HiHeart, HiAcademicCap, HiBeaker, HiClipboardList, HiSparkles } from "react-icons/hi";

export default function Services() {
  const services = [
    {
      icon: HiUser,
      title: "Individualized Training Programs",
      description: "Personalized workout plans tailored to your specific goals and fitness level."
    },
    {
      icon: HiUserGroup,
      title: "Group Training",
      description: "Dynamic group sessions that combine motivation with effective workouts."
    },
    {
      icon: HiHeart,
      title: "Athlete Rehabilitation & Training",
      description: "Specialized programs for athlete recovery and performance enhancement."
    },
    {
      icon: HiAcademicCap,
      title: "Classes",
      description: "Structured fitness classes designed for all fitness levels and interests."
    },
    {
      icon: HiBeaker,
      title: "Physiotherapy",
      description: "Professional physiotherapy services to help you recover and prevent injuries."
    },
    {
      icon: HiClipboardList,
      title: "Dietitian",
      description: "Expert nutritional guidance to complement your fitness journey."
    },
    {
      icon: HiSparkles,
      title: "Pilates",
      description: "Core-strengthening Pilates sessions for improved flexibility and balance."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-7xl mx-auto w-full">

        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-px bg-brand-orange"></div>
            <span className="text-brand-orange font-medium text-sm uppercase tracking-wider">
              Our Services
            </span>
            <div className="w-8 h-px bg-brand-orange"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            EVERYTHING YOU
            <br />
            <span className="text-brand-orange">NEED TO</span>
            <br />
            SUCCEED
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            From personalized training to expert guidance, we provide comprehensive services to support your fitness journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
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
