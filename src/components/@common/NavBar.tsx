"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/constants";

// Reusable NavLink component
const NavLink = ({ nav, className, onClick }: {
  nav: { link: string; title: string };
  className: string;
  onClick?: () => void;
}) => (
  <a
    href={nav.link}
    onClick={onClick}
    className={className}
    target={nav.link.startsWith("http") ? "_blank" : undefined}
    rel={nav.link.startsWith("http") ? "noopener noreferrer" : undefined}
  >
    {nav.title}
  </a>
);

// Logo SVG Component
const HustleHouseLogo = () => (
  <div className="flex items-center space-x-3">
    <img
      src="/hustle_house_logo_white.png"
      alt="Hustle House Logo"
      className="h-10 w-auto"
    />
  </div>
);

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        // Scrolling up or near top
        setIsVisible(true);
      } else {
        // Scrolling down
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`flex flex-row justify-between items-center w-full px-8 py-4 fixed top-0 z-1000 transition-transform duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      {/* Logo */}
      <Link href="/">
        <HustleHouseLogo />
      </Link>

      {/* Centered Navigation Links in Pill Container */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
        <div className="bg-gray-50 rounded-full px-6 py-2 shadow-sm border border-gray-200">
          <ul className="flex space-x-6 items-center">
            {NAV_LINKS.map((nav) => (
              <li key={nav.link}>
                <NavLink
                  nav={nav}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 px-3 py-1"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Contact Us Button - Desktop Only */}
      <div className="hidden md:block">
        <a
          href="/contact"
          className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#f77f36] transition-colors duration-300"
        >
          Contact Us
        </a>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsMobileMenuOpen(!isMobileMenuOpen);
        }}
        className="md:hidden flex flex-col space-y-1.5 z-500 relative"
        aria-label="Toggle mobile menu"
      >
        <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Navigation Menu with Liquid Effect */}
      <div className={`fixed top-0 right-0 h-full bg-white/95 backdrop-blur-md md:hidden z-40 transition-all duration-500 ease-out transform ${
        isMobileMenuOpen ? 'w-80 opacity-100' : 'w-0 opacity-0'
      } overflow-hidden`}>
        {/* Liquid expansion effect */}
        <div className={`absolute inset-0 bg-gradient-to-l from-white via-gray-50 to-white transform transition-all duration-700 ease-out ${
          isMobileMenuOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        } origin-right`}></div>

        <div className={`relative h-full flex flex-col justify-center items-center space-y-8 p-8 transition-all duration-500 delay-200 ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}>
          {/* Navigation Links */}
          {NAV_LINKS.map((nav, index) => (
            <div
              key={nav.link}
              className={`transition-all duration-300 ease-out ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100 + 300}ms` }}
            >
              <NavLink
                nav={nav}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-medium text-gray-700 hover:text-[#f77f36] transition-colors duration-300 tracking-wide block px-4 py-2 rounded-lg hover:bg-gray-100/50"
              />
            </div>
          ))}

          {/* Contact Button */}
          <div
            className={`transition-all duration-300 ease-out ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: `${(NAV_LINKS.length + 1) * 100 + 300}ms` }}
          >
            <a
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-black text-white px-8 py-4 rounded-full text-xl font-medium hover:bg-[#f77f36] transition-all duration-300 mt-4 block text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
