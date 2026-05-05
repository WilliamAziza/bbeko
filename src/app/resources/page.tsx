"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function Resources() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const schemes = [
    { title: 'Nursery Scheme - 3rd Term', file: '/files/NURSERY- THIRD TERM (1).pdf', icon: '📄' },
    { title: 'KG 1 Scheme - 3rd Term', file: '/files/KG 1- THIRD TERM (1).pdf', icon: '📄' },
    { title: 'KG 2 Scheme - 3rd Term', file: '/files/KG 2- THIRD TERM (1).pdf', icon: '📄' },
    { title: 'Basic 1 Scheme - 3rd Term', file: '/files/BASIC 1 SCHEME - 3RD TERM (1).pdf', icon: '📄' },
    { title: 'Basic 2 Scheme - 3rd Term', file: '/files/BASIC 2 SCHEME - 3RD TERM (1).pdf', icon: '📄' },
    { title: 'Basic 3 Scheme - 3rd Term', file: '/files/BASIC 3 SCHEME - 3RD TERM (1).pdf', icon: '📄' },
    { title: 'Basic 4 Scheme - 3rd Term', file: '/files/BASIC 4 SCHEME - 3RD TERM (1).pdf', icon: '📄' },
    { title: 'Basic 5 Scheme - 3rd Term', file: '/files/BASIC 5 SCHEME - 3RD TERM (1).pdf', icon: '📄' },
    { title: 'Basic 6 Scheme - 3rd Term', file: '/files/BASIC 6  SCHEME - 3RD TERM (1).pdf', icon: '📄' },
    { title: 'Basic 7 Scheme - 3rd Term', file: '/files/BASIC 7  SCEHEME - 3RD TERM (1).pdf', icon: '📄' },
    { title: 'Basic 8 Scheme - 3rd Term (1)', file: '/files/BASIC 8 SCHEME - 3RD TERM (1).pdf', icon: '📄' },
    { title: 'Basic 8 Scheme - 3rd Term (2)', file: '/files/BASIC 8 SCHEME - 3RD TERM (2).pdf', icon: '📄' }
  ];

  interface Scheme {
    title: string;
    file: string;
    icon: string;
  }

  const handleDownload = (file: string) => {
    console.log('Downloading:', file);
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {schemes.map((scheme, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 border border-indigo-100 hover:border-indigo-300 cursor-pointer h-full flex flex-col"
              onClick={() => handleDownload(scheme.file)}
            >

              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl mb-4 shadow-xl group-hover:scale-110 transition-transform mx-auto flex-shrink-0">
                <Image src="/images/scheme.png" alt="Scheme" width={48} height={48} className="w-12 h-12 object-contain" priority />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-indigo-700 transition-colors line-clamp-2">{scheme.title}</h3>
              <button className="mt-auto bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full text-sm sm:text-base">
                📥 Download PDF
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-500 to-blue-500 text-white p-12 rounded-4xl shadow-3xl mb-16">
<h2 className="text-4xl md:text-5xl font-black mb-6 drop-shadow-2xl">Scheme of Work 2026</h2>
            <p className="text-xl leading-relaxed mb-8 opacity-95 drop-shadow-xl">
              Our comprehensive scheme of work covers all topics tested in BBEK examinations.
              All schools should download and review before mock and main exams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/files/NURSERY- THIRD TERM (1).pdf" className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold px-12 py-6 text-xl rounded-3xl shadow-2xl hover:shadow-4xl hover:scale-105 transition-all duration-300 border-2 border-white/30 inline-flex items-center gap-3" download>
                <span>📥 All Schemes (Folder)</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10l-5.5 5.5m0 0L8 19l5.5-5.5m0 0L19 8m-5.5 5.5v11m0 0l4.5-4.5m-4.5 4.5H9" />
                </svg>
              </a>
            </div>
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
