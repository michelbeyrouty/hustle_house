"use client";

import SectionHeader from "@/components/@common/SectionHeader";
import CinematicBackground from "@/components/@common/CinematicBackground";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export default function ContactSection() {
  const handleMapClick = () => {
    // Try to open in Google Maps first, then fallback to Apple Maps
    const location = "Sehaile, Keserwan, Lebanon";
    const encodedLocation = encodeURIComponent(location);

    // Google Maps URL
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;

    // Apple Maps URL (for iOS devices)
    const appleMapsUrl = `maps://maps.apple.com/?q=${encodedLocation}`;

    // Try to detect if on iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    if (isIOS) {
      window.open(appleMapsUrl, "_blank");
    } else {
      window.open(googleMapsUrl, "_blank");
    }
  };

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
          <div className="group bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-brand-orange/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-xl flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors duration-300">
                <Phone className="w-8 h-8 text-brand-orange" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-brand-orange transition-colors duration-300 mb-3">
                  Call Us
                </h3>
                <a
                  href="tel:+96170514564"
                  className="text-gray-300 hover:text-brand-orange transition-colors duration-300 text-lg"
                >
                  +961 70 514 564
                </a>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="group bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-brand-orange/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-xl flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors duration-300">
                <Mail className="w-8 h-8 text-brand-orange" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-brand-orange transition-colors duration-300 mb-3">
                  Email Us
                </h3>
                <a
                  href="mailto:Hustlehouselb@gmail.com"
                  className="text-gray-300 hover:text-brand-orange transition-colors duration-300 text-lg break-all"
                >
                  Hustlehouselb@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Location with Map */}
          <div className="group bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-brand-orange/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer md:col-span-2 lg:col-span-1">
            <div className="space-y-6" onClick={handleMapClick}>
              <div className="w-16 h-16 bg-brand-orange/10 rounded-xl flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors duration-300">
                <MapPin className="w-8 h-8 text-brand-orange" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-brand-orange transition-colors duration-300 mb-3 flex items-center gap-2">
                  Visit Us
                  <ExternalLink className="w-4 h-4 opacity-70" />
                </h3>
                <p className="text-gray-300 group-hover:text-brand-orange transition-colors duration-300 text-lg">
                  Sehaile - Keserwan
                </p>
                <p className="text-sm text-gray-400 group-hover:text-brand-orange/70 transition-colors duration-300 mt-2">
                  Click to open in maps
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
