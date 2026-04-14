"use client";

import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-bold rounded-full mb-8 uppercase tracking-wider shadow-lg">
            About US
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6 leading-none">
            BEST BRAIN EXAMINATIONS
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-gray-700 mb-12 max-w-4xl mx-auto leading-tight">
            KONSORTIUM (BBEKO)
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-12">
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-12 border border-white/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                BBEKO is an <span className="font-bold text-blue-600">educational consultancy which is one of a kind</span> in branding and reputation. 
                Since <span className="font-bold text-2xl text-indigo-600">2004</span>, our name has been associated with the <span className="font-bold text-blue-600">most prestigious examinations for schools in Ghana</span>.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Thousands of dynamic and ambitious private and public schools nationwide have benefitted from our value-laden services. With a team of <span className="font-bold text-green-600">giant independent private examiners</span>, we offer you a <span className="font-bold text-indigo-600">one-stop shop for all your examination needs</span>.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-black text-gray-900 mb-8">Our Journey</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-6 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border-l-6 border-blue-500">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">2004</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Founded</h3>
                    <p className="text-gray-600">BBEKO established as premier examination consultancy in Ghana</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6 p-8 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl border-l-6 border-indigo-500">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xl">20+</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Years</h3>
                    <p className="text-gray-600">Serving thousands of schools nationwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-3xl p-12 shadow-2xl border-4 border-white/30 overflow-hidden group hover:scale-[1.02] transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-radial from-blue-200/30 via-transparent to-indigo-200/30"></div>
              <Image 
                src="/file.svg" 
                alt="BBEKO Excellence" 
                width={600} 
                height={500} 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl relative z-10 mx-auto" 
                priority
              />
              <div className="absolute top-8 right-8 w-24 h-24 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-xl opacity-60 animate-pulse"></div>
              <div className="absolute bottom-8 left-8 w-20 h-20 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-xl opacity-50 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-24">
          <div className="text-center p-12 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3">
            <div className="text-4xl font-black text-blue-600 mb-4">2004</div>
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Established</p>
          </div>
          <div className="text-center p-12 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3">
            <div className="text-4xl font-black text-green-600 mb-4">1000+</div>
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Schools Served</p>
          </div>
          <div className="text-center p-12 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3">
            <div className="text-4xl font-black text-indigo-600 mb-4">50+</div>
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Examiners</p>
          </div>
          <div className="text-center p-12 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3">
            <div className="text-4xl font-black text-purple-600 mb-4">20+</div>
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Years</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-5xl font-black text-gray-900 mb-6">Ready to Experience Excellence?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of schools that trust BBEKO for their examination needs.
          </p>
          <a href="/contact" className="inline-flex items-center px-16 py-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-2xl rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 group">
            Partner With BBEKO Today
            <svg className="ml-6 w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export {};
