"use client";

import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <span className="inline-block px-6 py-3 bg-blue-100 text-blue-700 text-sm font-bold rounded-full mb-12 uppercase tracking-wide">About Us</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent mb-8 leading-tight">
            Best Brain Examinations KOnsortium
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            World-class consortium of neurologists and neuroradiologists delivering unmatched brain examination services with cutting-edge technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-12">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              To revolutionize neurological diagnostics through advanced imaging technology, AI-powered analysis, and world-class medical expertise. We combine the latest medical technology with compassionate patient care to deliver precise, actionable insights for better health outcomes.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl text-white">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Precision Diagnostics</h3>
                <p className="text-gray-600">AI-enhanced imaging for early detection</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl text-white">⚕️</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Expert Team</h3>
                <p className="text-gray-600">20+ board-certified neurologists</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl text-white">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Latest Technology</h3>
                <p className="text-gray-600">3T MRI, 256ch EEG, PET scanners</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl text-white">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Fast Results</h3>
                <p className="text-gray-600">24-hour comprehensive reports</p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-16 shadow-2xl border-4 border-white/50 overflow-hidden group-hover:scale-[1.02] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 blur-3xl animate-pulse"></div>
              <Image 
                src="/images/students.jpg" 
                alt="Medical team" 
                width={600} 
                height={400} 
                className="w-full h-80 object-cover rounded-2xl shadow-2xl relative z-10 mx-auto block" 
              />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-200/30 rounded-full blur-xl animate-bounce"></div>
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-white/20 rounded-full blur-xl animate-ping"></div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl font-bold text-blue-900 mb-8">Why Choose KOnsortium?</h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              When precision matters most, experience the difference of our integrated approach combining human expertise with cutting-edge technology. Your brain health deserves nothing less than excellence.
            </p>
          </div>
          <a href="/contact" className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-xl rounded-2xl hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 shadow-xl">
            Get Started Today
            <svg className="ml-4 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

