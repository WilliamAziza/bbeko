'use client';

import Image from 'next/image';

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
    { icon: '🧠', title: 'Advanced MRI', desc: 'High-field MRI with AI-enhanced imaging for superior brain visualization.' },
    { icon: '⚡', title: 'EEG Monitoring', desc: 'Quantitative EEG analysis with source localization capabilities.' },
    { icon: '🔬', title: 'CT & PET Scans', desc: 'Multi-modal imaging including PET for metabolic brain assessment.' },
    { icon: '👥', title: 'Expert Consults', desc: 'Personalized neurology consultations with comprehensive reporting.' }
  ];

  const stats: Stat[] = [
    { label: 'Expert Team', value: '20+ certified neurologists' },
    { label: 'Technology', value: 'Latest 3T MRI & AI analysis' },
    { label: 'Results', value: '24-hour comprehensive reports' },
    { label: 'Care', value: 'Patient-centered approach' }
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log('Contact Form:', Object.fromEntries(formData));
    alert(`Thank you! Your inquiry has been received. We'll contact you soon. (Check browser console)`);
    e.currentTarget.reset();
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-card/95 backdrop-blur-md border-b border-accent/20 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Image src="/next.svg" alt="BEK Logo" width={32} height={32} className="dark:invert" priority />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">BEK</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-secondary hover:text-accent font-medium transition-colors py-2">Services</a>
              <a href="#about" className="text-secondary hover:text-accent font-medium transition-colors py-2">About</a>
              <a href="#contact" className="text-secondary hover:text-accent font-medium transition-colors py-2">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
<section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-32 bg-[url('/images/students.jpg')] bg-cover bg-center relative group cursor-pointer before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/20 before:to-black/60 before:z-[-1] before:transition-all before:duration-500 hover:before:from-black/40 hover:before:to-black/80">
        <div className="max-w-4xl mx-auto text-center fade-in-up">

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-br from-primary via-foreground to-accent bg-clip-text text-transparent mb-8 leading-tight">
            Best Brain Examinations
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-secondary">KOnsortium</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
            Pioneering advanced neurology diagnostics with cutting-edge technology and expert care for superior brain health outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="#contact" 
              className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-accent to-green-500 text-primary font-semibold text-lg rounded-2xl hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300 accent-hover"
            >
              Book Appointment Now
              <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="#services" 
              className="px-10 py-5 border-2 border-accent/50 bg-transparent text-accent font-semibold text-lg rounded-2xl hover:bg-accent/10 accent-hover hover:border-accent transition-all duration-300"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">Comprehensive Services</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              State-of-the-art brain imaging and analysis powered by leading experts.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title} 
                className="group bg-card p-10 rounded-3xl border border-accent/20 hover:shadow-2xl hover:-translate-y-4 hover:border-accent transition-all duration-500 overflow-hidden fade-in-up"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-accent/10 to-green-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-8 mx-auto shadow-lg">
                  <span className="text-3xl group-hover:text-accent transition-colors">{service.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-6 text-center group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-secondary text-center leading-relaxed group-hover:text-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 fade-in-up">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-8 uppercase tracking-wider">About KOnsortium</span>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent mb-8 leading-tight">Excellence in Neurology</h2>
            <p className="text-xl text-secondary mb-12 leading-relaxed max-w-lg">
              Our consortium brings together world-class neurologists, neuroradiologists, and cutting-edge technology to deliver unmatched brain examination services. 
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-start space-x-4 p-6 bg-accent/5 rounded-2xl border-l-4 border-accent">
                  <span className="text-2xl font-bold text-accent">✓</span>
                  <div>
                    <p className="font-semibold text-primary">{stat.label}</p>
                    <p className="text-secondary">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-8 py-4 bg-primary text-background font-semibold rounded-xl accent-hover transition-all hover:scale-105 shadow-lg">
                Schedule Consultation
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative fade-in-up">
            <div className="relative bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl p-12 shadow-2xl border border-accent/30 overflow-hidden">
              <Image 
                src="/window.svg" 
                alt="Advanced Technology" 
                width={500} 
                height={400} 
                className="w-full h-80 object-cover rounded-2xl mx-auto shadow-2xl relative z-10 dark:invert" 
              />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card to-primary/10">
        <div className="max-w-2xl mx-auto text-center fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">Ready for Precision Diagnosis?</h2>
          <p className="text-xl text-secondary mb-16 max-w-lg mx-auto leading-relaxed">
            Contact our team to schedule your advanced brain examination.
          </p>
          <form 
            className="space-y-6 w-full max-w-lg mx-auto bg-card/80 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-accent/20"
            onSubmit={handleSubmit}
          >
            <div>
              <input 
                type="text" 
                name="name" 
                placeholder="Full Name" 
                className="w-full p-5 border border-accent/30 rounded-2xl bg-transparent text-foreground placeholder-secondary/70 focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/20 transition-all text-lg font-medium" 
                required 
              />
            </div>
            <div>
              <input 
                type="email" 
                name="email" 
                placeholder="Email Address" 
                className="w-full p-5 border border-accent/30 rounded-2xl bg-transparent text-foreground placeholder-secondary/70 focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/20 transition-all text-lg font-medium" 
                required 
              />
            </div>
            <div>
              <input 
                type="tel" 
                name="phone" 
                placeholder="Phone (Optional)" 
                className="w-full p-5 border border-accent/30 rounded-2xl bg-transparent text-foreground placeholder-secondary/70 focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/20 transition-all text-lg font-medium" 
              />
            </div>
            <div>
              <textarea 
                name="message" 
                rows={5}
                placeholder="Tell us about your needs..." 
                className="w-full p-5 border border-accent/30 rounded-2xl bg-transparent text-foreground placeholder-secondary/70 focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/20 transition-all text-lg font-medium resize-vertical" 
                required 
              />
            </div>
            <button 
              type="submit" 
              className="w-full p-6 bg-gradient-to-r from-accent to-green-500 text-primary font-bold text-xl rounded-2xl hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 accent-hover"
            >
              Send Message
            </button>
          </form>
          <p className="mt-12 text-secondary text-lg opacity-75">
            Or call us directly: <span className="font-bold text-accent">(555) 123-BRAIN</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/10 border-t border-accent/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-6 mb-8 opacity-75">
            <Image src="/next.svg" alt="BEK" width={32} height={32} className="dark:invert" />
            <Image src="/vercel.svg" alt="Partner" width={24} height={24} className="dark:invert opacity-50" />
          </div>
          <p className="text-secondary mb-4">&copy; 2024 Best Brain Examinations KOnsortium. All rights reserved.</p>
          <div className="flex justify-center items-center space-x-8 text-sm text-secondary opacity-60">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
            <a href="#" className="hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}

