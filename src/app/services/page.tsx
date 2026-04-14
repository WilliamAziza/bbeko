 "use client";

import Image from "next/image";

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-900 mb-8">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive brain examination services with state-of-the-art technology</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-lg">
              <span className="text-4xl text-white">🧠</span>
            </div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Advanced MRI</h2>
            <p className="text-gray-700 text-lg leading-relaxed text-center mb-8">High-field 3T MRI with AI-enhanced imaging for superior brain structure visualization and early detection capabilities.</p>
            <ul className="text-left space-y-3 text-gray-600">
              <li>• 3T high-resolution imaging</li>
              <li>• AI-powered lesion detection</li>
              <li>• Functional MRI capabilities</li>
              <li>• 24-hour preliminary reports</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-lg">
              <span className="text-4xl text-white">⚡</span>
            </div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">EEG Monitoring</h2>
            <p className="text-gray-700 text-lg leading-relaxed text-center mb-8">Quantitative EEG analysis with source localization for precise diagnosis of neurological conditions.</p>
            <ul className="text-left space-y-3 text-gray-600">
              <li>• 256-channel EEG systems</li>
              <li>• Source localization</li>
              <li>• Quantitative analysis</li>
              <li>• Sleep studies</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-lg">
              <span className="text-4xl text-white">🔬</span>
            </div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">CT & PET Scans</h2>
            <p className="text-gray-700 text-lg leading-relaxed text-center mb-8">Multi-modal imaging including PET for comprehensive metabolic brain assessment.</p>
            <ul className="text-left space-y-3 text-gray-600">
              <li>• Low-dose CT imaging</li>
              <li>• PET metabolic analysis</li>
              <li>• SPECT perfusion studies</li>
              <li>• Hybrid imaging protocols</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-lg">
              <span className="text-4xl text-white">👥</span>
            </div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Expert Consultations</h2>
            <p className="text-gray-700 text-lg leading-relaxed text-center mb-8">Personalized neurology consultations with immediate comprehensive reporting.</p>
            <ul className="text-left space-y-3 text-gray-600">
              <li>• Board-certified neurologists</li>
              <li>• Same-day consultations</li>
              <li>• Comprehensive reporting</li>
              <li>• Treatment recommendations</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <a href="/contact" className="inline-flex items-center px-12 py-6 bg-blue-600 text-white font-bold text-xl rounded-2xl hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 shadow-lg">
            Schedule Your Examination
            <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

