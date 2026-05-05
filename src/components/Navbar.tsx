"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/resources', label: 'Resources' },
    { href: '/about', label: 'About' },
    { href: '/register', label: 'Register Mock' },
    { href: '/contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm' 
        : 'bg-[rgba(0,0,0,0.4)] backdrop-blur-md border-b border-white/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Image src="/images/logo.jpeg" alt="BBEK" width={64} height={64} className="mr-4 rounded-lg shadow-md" />
            </a>
          </div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} className={`text-lg font-medium py-2 transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-gray-900' 
                  : 'text-white/90 hover:text-white'
              }`}>
                {link.label}
              </a>
            ))}
          </div>

          <button
            className={`md:hidden transition-colors p-3 rounded-xl ${
              isScrolled 
                ? 'text-gray-900 hover:bg-gray-100 focus:ring-gray-500' 
                : 'text-white hover:bg-white/20 focus:ring-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden pb-4 border-t transition-colors ${
            isScrolled ? 'border-gray-200 bg-white' : 'border-white/20 bg-black/20'
          }`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`block px-3 py-2 text-lg font-medium rounded-lg transition-colors ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100' 
                      : 'text-white hover:text-gray-100 hover:bg-white/10'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
