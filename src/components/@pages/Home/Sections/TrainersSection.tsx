"use client";

import { useState } from "react";
import SectionHeader from "@/components/@common/SectionHeader";
import CinematicBackground from "@/components/@common/CinematicBackground";
import { TRAINERS } from "@/constants";

export default function TrainersSection() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const handleCardClick = (trainerId: number) => {
    setFlippedCard(flippedCard === trainerId ? null : trainerId);
  };

  return (
    <div
      id="trainers"
      className="relative min-h-screen text-white flex items-center px-6 md:px-12 lg:px-20 py-20"
    >
      {/* Cinematic Background with motivational imagery */}
      <CinematicBackground
        imageUrl="/gym_interior_lifting.jpg"
        brightness={0.5}
        contrast={1.4}
      />

      {/* Content overlay */}
      <div className="relative z-20 max-w-7xl mx-auto w-full">
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
        <div className="relative max-h-[700px] overflow-hidden">
          <div className="overflow-x-auto overflow-y-hidden pb-6">
            <div className="flex space-x-6 min-w-max px-2">
              {TRAINERS.map((trainer) => (
                <div
                  key={trainer.id}
                  className="relative w-80 h-[28rem] cursor-pointer group flex-shrink-0"
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
                      <div className="relative h-2/3 bg-gray-800 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                        {/* Placeholder for trainer image */}
                        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                          <div className="w-20 h-20 bg-brand-orange/20 rounded-full flex items-center justify-center">
                            <span className="text-brand-orange font-bold text-2xl">
                              {trainer.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Front Content */}
                      <div className="p-6 h-1/3 flex flex-col justify-center">
                        <div className="space-y-3">
                          <h3 className="text-xl font-bold text-white group-hover:text-brand-orange transition-colors duration-300">
                            {trainer.name}
                          </h3>

                          <div className="flex flex-wrap gap-2">
                            {trainer.specialties &&
                              trainer.specialties
                                .slice(0, 2)
                                .map((specialty, index) => (
                                  <span
                                    key={index}
                                    className="text-sm px-3 py-1 bg-white/20 text-white rounded-full border border-white/20"
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
                      <div className="text-center mb-4">
                        <div className="w-16 h-16 bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-brand-orange font-bold text-lg">
                            {trainer.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-brand-orange mb-2">
                          {trainer.name}
                        </h3>
                      </div>

                      <div className="flex-1 space-y-4">
                        <div className="space-y-3">
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {trainer.description}
                          </p>
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-white font-semibold text-sm border-b border-brand-orange/20 pb-1">
                            Specialties:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {trainer.specialties &&
                              trainer.specialties.map((specialty, index) => (
                                <span
                                  key={index}
                                  className="text-sm px-3 py-1 bg-brand-orange/30 text-brand-orange rounded-full border border-brand-orange/50"
                                >
                                  {specialty}
                                </span>
                              ))}
                          </div>
                        </div>
                      </div>

                      <div className="text-center mt-4 pt-4 border-t border-white/10">
                        <span className="text-xs text-gray-400">
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
      </div>
    </div>
  );
}
