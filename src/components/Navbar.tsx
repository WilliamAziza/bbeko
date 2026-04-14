"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <a href="/" className="flex items-center space-x-2">
                <Image 
                  src="/images/logo.jpeg" 
                  alt="BBEK Logo" 
                  width={40} 
                  height={40} 
                  className="rounded-lg h-auto w-auto object-contain" 
                  priority 
                />

              </a>
            </div>
            
            <div className="flex items-center">
              <button 
                className="md:hidden p-1 -mr-1 rounded-full hover:bg-gray-200 focus:outline-none focus:shadow-outline transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              
              <div className="hidden md:flex items-center space-x-8">
                <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 px-3">Home</a>
                <a href="/services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 px-3">Services</a>
                <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 px-3">About</a>
                <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 px-3">Contact</a>
              </div>
            </div>
          </div>
          
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-4 pt-4 pb-6 space-y-4">
                <a href="/" className="block text-gray-700 hover:text-blue-600 font-medium py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors">Home</a>
                <a href="/services" className="block text-gray-700 hover:text-blue-600 font-medium py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors">Services</a>
                <a href="/about" className="block text-gray-700 hover:text-blue-600 font-medium py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors">About</a>
                <a href="/contact" className="block text-gray-700 hover:text-blue-600 font-medium py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

