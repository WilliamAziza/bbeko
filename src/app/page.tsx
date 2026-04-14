"use client";

import Image from "next/image";

interface Service {
  icon: string;
  title: string;
  desc: string;
}

interface Stat {
  label: string;
  value: string;
}

export default function Home() {
  const services: Service[] = [
    { icon: "🧠", title: "Advanced MRI", desc: "High-field MRI with AI-enhanced imaging for superior brain visualization." },
    { icon: "⚡", title: "EEG Monitoring", desc: "Quantitative EEG analysis with source localization capabilities." },
    { icon: "🔬", title: "CT & PET Scans", desc: "Multi-modal imaging including PET for metabolic brain assessment." },
    { icon: "👥", title: "Expert Consults", desc: "Personalized neurology consultations with comprehensive reporting." }
  ];

  const stats: Stat[] = [
    { label: "Expert Team", value: "20+ certified neurologists" },
    { label: "Technology", value: "Latest 3T MRI & AI analysis" },
    { label: "Results", value: "24-hour comprehensive reports" },
    { label: "Care", value: "Patient-centered approach" }
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log("Contact Form:", Object.fromEntries(formData));
    alert("Thank you! Your inquiry has been received. We'll contact you soon. (Check browser console)");
    e.currentTarget.reset();
  };

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Image src="/images/logo.jpeg" alt="BEK Logo" width={40} height={40} className="rounded-lg h-auto w-auto object-contain" priority />
              
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-[url('/images/students.jpg')] bg-cover bg-center relative opacity-80 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/30 before:to-black/70 before:z-[-1]">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
            Best Brain Examinations
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white">Konsortium</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto leading-relaxed">
            Pioneering advanced neurology diagnostics with cutting-edge technology and expert care for superior brain health outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact" className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold text-lg rounded-2xl hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300">
              Book Appointment Now
              <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#services" className="px-10 py-5 border-2 border-white/50 bg-transparent text-white font-semibold text-lg rounded-2xl hover:bg-white/10 hover:border-white transition-all duration-300">
              View Services
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">Comprehensive Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              State-of-the-art brain imaging and analysis powered by leading experts.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.title} className="group bg-white p-10 rounded-3xl border border-gray-200 hover:shadow-2xl hover:-translate-y-4 hover:border-emerald-400 transition-all duration-500 overflow-hidden shadow-lg">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-8 mx-auto shadow-lg">
                  <span className="text-3xl group-hover:text-emerald-600 transition-colors">{service.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-black mb-6 text-center group-hover:text-emerald-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed group-hover:text-black">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full mb-8 uppercase tracking-wider">About KOnsortium</span>
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 leading-tight">Excellence in Neurology</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-lg">
              Our consortium brings together world-class neurologists, neuroradiologists, and cutting-edge technology to deliver unmatched brain examination services. 
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-start space-x-4 p-6 bg-emerald-50 rounded-2xl border-l-4 border-emerald-400">
                  <span className="text-2xl font-bold text-emerald-600 flex-shrink-0 mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-black">{stat.label}</p>
                    <p className="text-gray-600">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                Schedule Consultation
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative bg-gradient-to-br from-emerald-50 to-blue-50 rounded-3xl p-12 shadow-2xl border border-emerald-200/50 overflow-hidden">
              <Image src="/window.svg" alt="Advanced Technology" width={500} height={400} className="w-full h-80 object-cover rounded-2xl mx-auto shadow-2xl relative z-10 dark:invert" />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-emerald-200/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">Ready for Precision Diagnosis?</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-lg mx-auto leading-relaxed">
            Contact our team to schedule your advanced brain examination.
          </p>
          <form className="space-y-6 w-full max-w-lg mx-auto bg-white/80 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-gray-200/50" onSubmit={handleSubmit}>
            <div>
              <input type="text" name="name" placeholder="Full Name" className="w-full p-5 border border-gray-300/50 rounded-2xl bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-200/50 transition-all text-lg font-medium" required />
            </div>
            <div>
              <input type="email" name="email" placeholder="Email Address" className="w-full p-5 border border-gray-300/50 rounded-2xl bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-200/50 transition-all text-lg font-medium" required />
            </div>
            <div>
              <input type="tel" name="phone" placeholder="Phone (Optional)" className="w-full p-5 border border-gray-300/50 rounded-2xl bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-200/50 transition-all text-lg font-medium" />
            </div>
            <div>
              <textarea name="message" rows={5} placeholder="Tell us about your needs..." className="w-full p-5 border border-gray-300/50 rounded-2xl bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-200/50 transition-all text-lg font-medium resize-vertical" required />
            </div>
            <button type="submit" className="w-full p-6 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-xl rounded-2xl hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300">
              Send Message
            </button>
          </form>
          <p className="mt-12 text-gray-600 text-lg">
            Or call us directly: <span className="font-bold text-emerald-600">(555) 123-BRAIN</span>
          </p>
        </div>
      </section>

      <footer className="bg-gray-50 border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-6 mb-8 opacity-75">
            <Image src="/next.svg" alt="BEK" width={32} height={32} className="dark:invert h-auto w-auto" />
            <Image src="/vercel.svg" alt="Partner" width={24} height={24} className="dark:invert h-auto w-auto opacity-50" />
          </div>
          <p className="text-gray-600 mb-4">© 2024 Best Brain Examinations KOnsortium. All rights reserved.</p>
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-500 opacity-60">
            <a href="#" className="hover:text-emerald-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}

