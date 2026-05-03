"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function Resources() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const resources = [
    {
      title: 'BBEK Scheme of Work 2025',
      description: 'Complete curriculum guide and scheme of work for BBEK examinations.',
      icon: '📚',
      file: '/downloads/scheme-of-work.pdf',
      type: 'PDF (2.5MB)'
    },
    {
      title: 'Sample Question Paper',
      description: 'Practice questions from previous examinations.',
      icon: '📝',
      file: '/downloads/sample-questions.pdf',
      type: 'PDF (1.2MB)'
    },
    {
      title: 'Examination Guidelines',
      description: 'Detailed rules and guidelines for BBEK exams.',
      icon: '📋',
      file: '/downloads/guidelines.pdf',
      type: 'PDF (800KB)'
    },
    {
      title: 'Results Interpretation Guide',
      description: 'How to read and understand your examination results.',
      icon: '📊',
      file: '/downloads/results-guide.pdf',
      type: 'PDF (600KB)'
    }
  ];

  const handleDownload = (file) => {
    // Placeholder - in production use server action or external CDN
    console.log('Downloading:', file);
    alert('Download started! Check console. (Placeholder - add real PDF to public/downloads/)');
    window.open(file, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-emerald-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-indigo-800 to-blue-700 bg-clip-text text-transparent mb-8 leading-tight">
            Resources & Downloads
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Access our official scheme of work, sample papers, guidelines and all materials needed for BBEK examinations.
          </p>
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-bold text-xl rounded-3xl shadow-2xl">
            <span>📖</span>
            <span>Scheme of Work Available</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
          {resources.map((resource, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-md rounded-3xl p-10 shadow-2xl hover:shadow-3xl hover:-translate-y-3 transition-all duration-500 border border-indigo-100 hover:border-indigo-200 cursor-pointer h-full"
              onClick={() => handleDownload(resource.file)}
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform">
                  <span className="text-3xl">{resource.icon}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors">{resource.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{resource.description}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-indigo-600 group-hover:text-indigo-700">
                    <span>{resource.type}</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10l-5.5 5.5m0 0L8 19l5.5-5.5m0 0L19 8m-5.5 5.5v11m0 0l4.5-4.5m-4.5 4.5H9" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-500 to-blue-500 text-white p-12 rounded-4xl shadow-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 drop-shadow-2xl">Scheme of Work 2025</h2>
            <p className="text-xl leading-relaxed mb-8 opacity-95 drop-shadow-xl">
              Our comprehensive scheme of work covers all topics tested in BBEK examinations.
              All schools should download and review before mock and main exams.
            </p>
            <button 
              onClick={() => handleDownload('/downloads/scheme-of-work.pdf')}
              className="inline-flex items-center gap-4 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white font-bold px-12 py-6 text-xl rounded-3xl shadow-2xl hover:shadow-4xl hover:scale-105 transition-all duration-300 border-2 border-white/30 group"
            >
              <span>📥 Download Scheme of Work</span>
              <svg className="w-6 h-6 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10l-5.5 5.5m0 0L8 19l5.5-5.5m0 0L19 8m-5.5 5.5v11m0 0l4.5-4.5m-4.5 4.5H9" />
              </svg>
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/70 p-10 rounded-3xl border border-indigo-100 shadow-xl backdrop-blur-md">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-indigo-600">🧠</span>
              </div>
              <h4 className="text-2xl font-bold text-indigo-900 mb-4 text-center">Full Coverage</h4>
              <p className="text-gray-600 text-center leading-relaxed">Complete topic coverage for all exam levels</p>
            </div>
            <div className="bg-white/70 p-10 rounded-3xl border border-indigo-100 shadow-xl backdrop-blur-md">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-indigo-600">⏱️</span>
              </div>
              <h4 className="text-2xl font-bold text-indigo-900 mb-4 text-center">Timed Practice</h4>
              <p className="text-gray-600 text-center leading-relaxed">Exact exam timing and format</p>
            </div>
            <div className="bg-white/70 p-10 rounded-3xl border border-indigo-100 shadow-xl backdrop-blur-md">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-indigo-600">📈</span>
              </div>
              <h4 className="text-2xl font-bold text-indigo-900 mb-4 text-center">Progress Tracking</h4>
              <p className="text-gray-600 text-center leading-relaxed">Track student performance against scheme</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
