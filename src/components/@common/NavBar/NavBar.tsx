"use client";

import { useState, useEffect } from "react";
import HustleHouseLogo from "@/components/@common/NavBar/Logo";
import { HiMenu, HiX } from "react-icons/hi";
import { NAV_LINKS } from "@/constants";

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
    <nav className={`flex flex-row justify-between items-center w-full px-4 md:px-8 py-3 md:py-4 fixed top-0 z-50 transition-transform duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <HustleHouseLogo />


    {/* Desktop */}

      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bg-gray-50 rounded-full px-6 py-2 shadow-sm border border-gray-200">
        <ul className="flex space-x-6 items-center">
          {NAV_LINKS.slice(0, -1).map((nav) => (
            <li key={nav.link}>
              <a
                href={nav.link}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 px-3 py-1"
                target={nav.link.startsWith("http") ? "_blank" : undefined}
                rel={nav.link.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:block">
        <a
          href={NAV_LINKS[NAV_LINKS.length - 1].link}
          className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-brand-orange transition-colors duration-300"
          target={NAV_LINKS[NAV_LINKS.length - 1].link.startsWith("http") ? "_blank" : undefined}
          rel={NAV_LINKS[NAV_LINKS.length - 1].link.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {NAV_LINKS[NAV_LINKS.length - 1].title}
        </a>
      </div>

      {/* Mobile */}

      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsMobileMenuOpen(!isMobileMenuOpen);
        }}
        className={`md:hidden text-white/60 transition-colors duration-300 z-1000 ${
          isMobileMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        aria-label="Toggle mobile menu"
      >
        <HiMenu className="w-6 h-6" />
      </button>

      {/* Mobile Navigation Menu - Fullscreen Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/95 md:hidden h-screen"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center justify-center h-screen">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white/60 transition-colors duration-300"
              aria-label="Close mobile menu"
            >
              <HiX className="w-8 h-8" />
            </button>

            <ul className="flex flex-col items-center justify-center space-y-8">
              {NAV_LINKS.map((nav, index) => (
                <li key={nav.link} className="animate-fadeInUp text-center">
                  <a
                    href={nav.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-2xl font-medium transition-colors duration-300 py-3 px-6 rounded-lg text-center ${
                      index === NAV_LINKS.length - 1
                        ? "text-brand-orange hover:text-brand-orange/80"
                        : "text-white/80 hover:text-white"
                    }`}
                    target={nav.link.startsWith("http") ? "_blank" : undefined}
                    rel={
                      nav.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
