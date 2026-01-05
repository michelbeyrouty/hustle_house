"use client";

import { useState } from "react";
import SectionHeader from "@/components/@common/SectionHeader";
import { TRAINERS } from "@/constants";

export default function TrainersSection() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const handleCardClick = (trainerId: number) => {
    setFlippedCard(flippedCard === trainerId ? null : trainerId);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <SectionHeader
          tag="Meet Our Team"
          title={
            <>
              EXPERT TRAINERS
              <br />
              <span>DEDICATED</span>
              <br />
              TO YOUR SUCCESS
            </>
          }
          description="Our certified trainers bring years of experience and passion to help you achieve your fitness goals with personalized guidance and support."
        />

        {/* Horizontal Scrolling Container */}
        <div className="relative">
          <div className="overflow-x-auto pb-6">
            <div className="flex space-x-6 min-w-max px-2">
              {TRAINERS.map((trainer) => (
                <div
                  key={trainer.id}
                  className="relative w-80 h-96 cursor-pointer group"
                  onClick={() => handleCardClick(trainer.id)}
                  style={{ perspective: "1000px" }}
                >
                  {/* Card Container */}
                  <div
                    className={`relative w-full h-full transition-transform duration-700 ${
                      flippedCard === trainer.id ? "" : ""
                    }`}
                    style={{
                      transformStyle: "preserve-3d",
                      transform:
                        flippedCard === trainer.id
                          ? "rotateY(180deg)"
                          : "rotateY(0deg)",
                    }}
                  >
                    {/* Front Side */}
                    <div
                      className="absolute inset-0 bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300"
                      style={{
                        backfaceVisibility: "hidden",
                      }}
                    >
                      {/* Image */}
                      <div className="relative h-3/5 bg-gray-800 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                        {/* Placeholder for trainer image */}
                        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                          <div className="w-24 h-24 bg-brand-orange/20 rounded-full flex items-center justify-center">
                            <span className="text-brand-orange font-bold text-3xl">
                              {trainer.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Front Content */}
                      <div className="p-6 h-2/5 flex flex-col justify-between">
                        <div className="space-y-3">
                          <h3 className="text-xl font-bold text-white group-hover:text-brand-orange transition-colors duration-300">
                            {trainer.name}
                          </h3>

                          <div className="flex flex-wrap gap-2">
                            {trainer.specialties
                              .slice(0, 2)
                              .map((specialty, index) => (
                                <span
                                  key={index}
                                  className="text-xs px-2 py-1 bg-white/10 text-gray-300 rounded-full"
                                >
                                  {specialty}
                                </span>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Back Side */}
                    <div
                      className="absolute inset-0 bg-black/40 backdrop-blur-sm border border-brand-orange/30 rounded-2xl p-6 flex flex-col"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <div className="text-center mb-6">
                        <div className="w-20 h-20 bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-brand-orange font-bold text-2xl">
                            {trainer.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-brand-orange mb-2">
                          {trainer.name}
                        </h3>
                      </div>

                      <div className="flex-1 space-y-4">
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {trainer.description}
                        </p>

                        <div className="space-y-2">
                          <h4 className="text-white font-semibold text-sm">
                            Specialties:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {trainer.specialties.map((specialty, index) => (
                              <span
                                key={index}
                                className="text-xs px-3 py-1 bg-brand-orange/20 text-brand-orange rounded-full border border-brand-orange/30"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="text-center mt-4">
                        <span className="text-sm text-gray-400">
                          Click to flip back
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-6">
            <div className="flex space-x-2">
              {TRAINERS.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 bg-white/20 rounded-full"
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 border border-white/20 rounded-full px-8 py-4">
            <span className="text-white font-medium">
              Ready to meet your perfect trainer?
            </span>
            <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
