"use client";

import SectionHeader from "@/components/@common/SectionHeader";
import CinematicBackground from "@/components/@common/CinematicBackground";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export default function ContactSection() {
  return (
    <div
      id="contact"
      className="relative min-h-screen text-white flex items-center px-6 md:px-12 lg:px-20 py-20"
    >
      {/* Cinematic Background */}
      <CinematicBackground
        imageUrl="/gym_exterior.jpg"
        brightness={0.6}
        contrast={1.2}
      />

      {/* Content overlay */}
      <div className="relative z-20 max-w-7xl mx-auto w-full">
        <SectionHeader
          tag="Get In Touch"
          title={
            <>
              READY TO START
              <br />
              <span className="text-brand-orange">YOUR</span>
              <br />
              FITNESS JOURNEY?
            </>
          }
          description="Contact us today to begin your transformation. We're here to help you every step of the way."
        />

        {/* Contact Information Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {/* Phone */}
          <a
            href="tel:+96170514564"
            className="group bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-brand-orange/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer block"
          >
            <div className="space-y-6">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-xl flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors duration-300">
                <Phone className="w-8 h-8 text-brand-orange" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-brand-orange transition-colors duration-300 mb-3">
                  Call Us
                </h3>
                <p className="text-gray-300 group-hover:text-brand-orange transition-colors duration-300 text-lg">
                  +961 70 514 564
                </p>
              </div>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:Hustlehouselb@gmail.com"
            className="group bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-brand-orange/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer block"
          >
            <div className="space-y-6">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-xl flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors duration-300">
                <Mail className="w-8 h-8 text-brand-orange" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-brand-orange transition-colors duration-300 mb-3">
                  Email Us
                </h3>
                <p className="text-gray-300 group-hover:text-brand-orange transition-colors duration-300 text-lg break-all">
                  Hustlehouselb@gmail.com
                </p>
              </div>
            </div>
          </a>

          {/* Location with Map */}
          <a
            href="https://maps.app.goo.gl/wxwg7csdSUwv6QTMA"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-brand-orange/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer block md:col-span-2 lg:col-span-1"
          >
            <div className="space-y-6">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-xl flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors duration-300">
                <MapPin className="w-8 h-8 text-brand-orange" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-brand-orange transition-colors duration-300 mb-3 flex items-center gap-2">
                  Visit Us
                  <ExternalLink className="w-4 h-4 opacity-70" />
                </h3>
                <p className="text-gray-300 group-hover:text-brand-orange transition-colors duration-300 text-lg">
                  Sehayleh - Keserwan
                </p>
                <p className="text-sm text-gray-400 group-hover:text-brand-orange/70 transition-colors duration-300 mt-2">
                  Click to open in maps
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
