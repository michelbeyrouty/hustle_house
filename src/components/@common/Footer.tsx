"use client";

import { FaInstagram } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-white/60 text-sm">
          © {currentYear} Hustle House. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center space-x-6">
          <a
            href="mailto:Hustlehouselb@gmail.com"
            className="text-white/60 hover:text-brand-orange transition-colors duration-300"
            aria-label="Email"
          >
            <HiMail className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com/hustlehouselb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-brand-orange transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
