"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/resources', label: 'Resources' },
    { href: '/about', label: 'About' },
    { href: '/register', label: 'Register Mock' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
              <Image 
                src="/images/logo.jpeg" 
                alt="BBEK Logo" 
                width={48} 
                height={48} 
                className="rounded-xl shadow-md hover:shadow-lg transition-shadow" 
                priority 
              />
              <span className="text-xl font-bold text-gray-900 hidden lg:inline">BBEK</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="relative font-semibold text-gray-700 hover:text-blue-600 px-4 py-2 rounded-2xl transition-all duration-300 hover:bg-blue-50 hover:shadow-md group"
              >
                {link.label}
                <span className="absolute inset-0 bg-blue-100 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-100 group-hover:scale-110 origin-center"></span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 pt-4 pb-6 space-y-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block font-semibold text-gray-700 hover:text-blue-600 py-3 px-4 rounded-xl hover:bg-blue-50 transition-all duration-300"
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
