"use client";

import Image from 'next/image';
import React from 'react';

interface Service {
  icon: string;
  image?: string;
  title: string;
  desc: string;
  facebook?: string;
  instagram?: string;
}

interface Stat {
  label: string;
  value: string;
}

export default function Home() {
const team: Service[] = [
    { icon: '🧠', image: '/images/boss.jpeg', title: 'Boss (CEO)', desc: 'Managing Director with over 15 years of experience in healthcare leadership and strategic planning.', facebook: 'https://facebook.com/bossceo', instagram: 'https://instagram.com/bossceo' },
    { icon: '⚡', image: '/images/francis.jpeg', title: 'Francis (<Operati>p</Operati>ons)', desc: 'Operations Manager ensuring seamless coordination and quality service delivery across all departments.', facebook: 'https://facebook.com/francisops', instagram: 'https://instagram.com/francisops' },
    { icon: '🔬', image: '/images/adika.jpeg', title: 'Adika (Technical)', desc: 'Technical Manager overseeing all technical operations, equipment maintenance, and innovative solutions.', facebook: 'https://facebook.com/adikatech', instagram: 'https://instagram.com/adikatech' },
{ icon: '👥', image: '/images/mawuli.jpg', title: 'Expert Consults', desc: 'Personalized neurology consultations with comprehensive reporting and patient-centered care.', facebook: 'https://facebook.com/expertconsults', instagram: 'https://instagram.com/expertconsults' }
  ];

  const stats: Stat[] = [
    { label: 'Expert Team', value: '20+ certified neurologists' },
    { label: 'Technology', value: 'Latest 3T MRI & AI analysis' },
    { label: 'Results', value: '24-hour comprehensive reports' },
    { label: 'Care', value: 'Patient-centered approach' }
  ];

const [selectedLocation, setSelectedLocation] = React.useState<any>(null);
const [isMapOpen, setIsMapOpen] = React.useState(false);

const handleSubmit = function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log('Contact Form:', Object.fromEntries(formData));
    alert('Thank you for your inquiry. Check browser console.');
    e.currentTarget.reset();
  };

const locations = [
  { name: 'Apenkwa Tesano', region: 'Accra Region', embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.984!2d-0.234!3d5.612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNqLDM2JzQxLjQiTiAwwrDE0JzE0LjQiVw!5e0!3m2!1sen!2sgh!4v1699999999999!5m2!1sen!2sgh' },
  { name: 'Kasoa Nyanyanyo', region: 'Central Region', embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10552.85!2d-0.405!3d5.512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNqLCMwJzQwLjciTiAwwrAyNCcxMi4yIlc!5e0!3m2!1sen!2sgh!4v1699999999999!5m2!1sen!2sgh' },
  { name: 'Kumasi Odoom', region: 'Ashanti Region', embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10552.85!2d-1.623!3d6.688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDEnMTYuMiJOIDHCsDM3JzM2LjciVw!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh' }
];

  return (
    <>
      {isMapOpen && selectedLocation && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setIsMapOpen(false)}>
          <div className="bg-white rounded-3xl p-6 max-w-4xl w-full max-h-[90vh] overflow-hidden relative shadow-2xl" onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold" onClick={() => setIsMapOpen(false)}>
              ×
            </button>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedLocation.name}</h2>
              <p className="text-lg text-gray-600">{selectedLocation.region}</p>
            </div>
            <iframe
              src={selectedLocation.embed}
              width="100%"
              height="500"
              style={{border:0}}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full rounded-2xl"
            />
            <div className="mt-6 text-center">
              <a href={`https://maps.google.com/?q=${encodeURIComponent(selectedLocation.name)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-2xl hover:bg-blue-700 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.243 0z"/>
                </svg>
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      )}

      <section className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-[url('/images/students.jpg')] bg-cover bg-center relative opacity-80 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/30 before:to-black/70 before:z-[-1]">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
            Best Brain Examinations
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white">KONSORTIUM</span>
          </h2>
          <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto leading-relaxed">
            We are poised to make a most resounding impact on quality education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#services" className="px-10 py-5 border-2 border-white/50 bg-transparent text-white font-semibold text-lg rounded-2xl hover:bg-white/10 hover:border-white transition-all duration-300">
              View Services
            </a>
</div>
        </div>
      </section>

      <section id="why-choose" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-white/10 text-white text-sm font-bold rounded-full mb-6 uppercase tracking-wider border border-white/20">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">Excellence in Every Examination</h2>
              <p className="text-lg text-blue-100 mb-10 leading-relaxed">
                We are committed to providing the most comprehensive and reliable brain examinations in Ghana, backed by years of expertise and cutting-edge technology.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Trusted Excellence</h4>
                    <p className="text-blue-200 text-sm">Over 20 years of proven track record in Ghana's education sector</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Expert Team</h4>
                    <p className="text-blue-200 text-sm">Certified examiners with years of academic experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">National Reach</h4>
                    <p className="text-blue-200 text-sm">Serving 1000+ schools across all regions of Ghana</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Fast Results</h4>
                    <p className="text-blue-200 text-sm">Quick turnaround time for all examination results</p>
                  </div>
                </div>
              </div>
            </div>
<div className="relative">
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 shadow-2xl border border-white/10 backdrop-blur-sm">
<Image 
                  src="/images/banner.jpeg" 
                  alt="Our Team Leader" 
                  width={600} 
                  height={500}
                  className="w-full h-auto rounded-2xl shadow-lg" 
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 px-6 py-3 rounded-2xl shadow-xl cursor-pointer group hover:scale-105 transition-all duration-300 border-2 border-white/20" onClick={() => window.location.href='/register'}>
                  <p className="text-sm font-bold text-white group-hover:translate-x-1 transition-transform">Next Mock Registration</p>
                  <p className="text-xs text-white/90">BBEKO 2025 - Register Now</p>
                </div>
                <div className="absolute top-4 left-4 bg-blue-600 px-4 py-2 rounded-xl shadow-lg">
                  <p className="text-white font-bold text-sm">BBEKO 2025</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-serif font-black italic text-slate-800 mb-6 tracking-wide drop-shadow-md">MEET OUR TEAM</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              State-of-the-art brain imaging and analysis powered by leading experts.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
{team.map((service) => (
              <div key={service.title} className="group bg-white p-10 rounded-3xl border border-gray-200 hover:shadow-2xl hover:-translate-y-4 hover:border-blue-400 transition-all duration-500 overflow-hidden shadow-lg">
<div className="mb-8 mx-auto">
                  <Image 
                    src={service.image || '/images/francis.jpeg'} 
                    alt={service.title} 
                    width={300} 
                    height={300} 
                    className="w-72 h-72 object-cover mx-auto" 
                  />
                </div>
<h3 className="text-2xl font-bold text-black mb-6 text-center group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed group-hover:text-black">{service.desc}</p>
                {(service.facebook || service.instagram) && (
                  <div className="flex justify-center gap-4 mt-6">
                    {service.facebook && (
                      <a
                        href={service.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
                        aria-label="Facebook"
                      >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85L18.77,7.46Z" />
                        </svg>
                      </a>
                    )}
                    {service.instagram && (
                      <a
                        href={service.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
                        aria-label="Instagram"
                      >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12,2.16c3.2,0,3.58,0,4.85.07,1.17.07,2.45.32,3.57.63a6.08,6.08,0,0,1,3.77,1.52,6.08,6.08,0,0,1,1.52,3.77c.31,1.12.56,2.4.63,3.57.07,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.07,1.17-.32,2.45-.63,3.57a6.08,6.08,0,0,1-1.52,3.77,6.08,6.08,0,0,1-3.77,1.52c-1.12.31-2.4.56-3.57.63-1.27.07-1.65.07-4.85.07s-3.58,0-4.85-.07c-1.17-.07-2.45-.32-3.57-.63a6.08,6.08,0,0,1-3.77-1.52,6.08,6.08,0,0,1-1.52-3.77c-.31-1.12-.56-2.4-.63-3.57C2.53,16.79,2.53,16.41,2.53,13.21s0-3.58.07-4.85c.07-1.17.32-2.45.63-3.57a6.08,6.08,0,0,1,1.52-3.77A6.08,6.08,0,0,1,5.95,3.78c1.12-.31,2.4-.56,3.57-.63C8.42,2.53,8.8,2.53,12,2.16M12,0C8.74,0,8.33,0,7.05.07c-1.35.07-2.57.32-3.73.64a8.14,8.14,0,0,0-2.89,2.09,8.14,8.14,0,0,0-2.09,2.89C.39,5.41.14,6.63.07,8c0,.28,0,.65.07,1.93V20.07c0,.28,0,.65-.07,1.93c.07,1.37.32,2.59.64,3.75a8.14,8.14,0,0,0,2.09,2.89,8.14,8.14,0,0,0,2.89,2.09c1.16.32,2.38.57,3.75.64,1.28.07,1.65.07,1.93.07s.65,0,1.93-.07c1.37-.07,2.59-.32,3.75-.64a8.14,8.14,0,0,0,2.89-2.09,8.14,8.14,0,0,0,2.09-2.89c.32-1.16.57-2.38.64-3.75.07-1.28.07-1.65.07-1.93s0-.65-.07-1.93c-.07-1.37-.32-2.59-.64-3.75a8.14,8.14,0,0,0-2.09-2.89,8.14,8.14,0,0,0-2.89-2.09C16.28.39,15.06.14,13.7.07,12.42,0,12.05,0,11.77,0H12ZM12,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
</div>
        </div>
      </section>

<section id="location" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4">Our Branches</h3>
          <p className="text-lg text-gray-600 mb-12">Serving all of Ghana with premium examination services</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-3xl p-8 shadow-2xl hover:shadow-4xl hover:-translate-y-4 transition-all duration-500 border-4 border-transparent hover:border-blue-400 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243A8 8 0 1117.657 16.657z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Apenkwa Tesano</h4>
              <p className="text-gray-500 font-medium mb-4">Accra Region</p>
<button onClick={() => { setSelectedLocation(locations[0]); setIsMapOpen(true); }} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                View Map
              </button>
            </div>
            <div className="group bg-white rounded-3xl p-8 shadow-2xl hover:shadow-4xl hover:-translate-y-4 transition-all duration-500 border-4 border-transparent hover:border-emerald-400 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243A8 8 0 1117.657 16.657z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">Kasoa Nyanyanyo</h4>
              <p className="text-gray-500 font-medium mb-4">Central Region</p>
<button onClick={() => { setSelectedLocation(locations[1]); setIsMapOpen(true); }} className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                View Map
              </button>
            </div>
            <div className="group bg-white rounded-3xl p-8 shadow-2xl hover:shadow-4xl hover:-translate-y-4 transition-all duration-500 border-4 border-transparent hover:border-purple-400 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243A8 8 0 1117.657 16.657z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">Kumasi Odoom</h4>
              <p className="text-gray-500 font-medium mb-4">Ashanti Region</p>
              <a href="https://maps.google.com/?q=Kumasi+Odoom+Ghana" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-colors text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>



      <footer className="bg-gray-50 border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-6 mb-8 opacity-75">
            <Image src="/images/logo.jpeg" alt="BEK" width={32} height={32} className="h-auto w-auto" />
          </div>
          <p className="text-gray-600 mb-4">© 2024 Best Brain Examinations KOnsortium. All rights reserved.</p>
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-500 opacity-60">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
