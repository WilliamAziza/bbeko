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
    <nav className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Image src="/images/logo.jpeg" alt="BBEK" width={64} height={64} className="mr-4 rounded-lg shadow-md" />
            </a>
          </div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} className="text-gray-700 hover:text-gray-900 font-medium py-2">
                {link.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium rounded-lg hover:bg-gray-100"
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
