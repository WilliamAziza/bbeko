"use client";

import Image from 'next/image';

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
    { icon: '⚡', image: '/images/francis.jpeg', title: 'Francis (Operations)', desc: 'Operations Manager ensuring seamless coordination and quality service delivery across all departments.', facebook: 'https://facebook.com/francisops', instagram: 'https://instagram.com/francisops' },
    { icon: '🔬', image: '/images/adika.jpeg', title: 'Adika (Technical)', desc: 'Technical Manager overseeing all technical operations, equipment maintenance, and innovative solutions.', facebook: 'https://facebook.com/adikatech', instagram: 'https://instagram.com/adikatech' },
    { icon: '👥', image: '/images/boss.jpeg', title: 'Expert Consults', desc: 'Personalized neurology consultations with comprehensive reporting and patient-centered care.', facebook: 'https://facebook.com/expertconsults', instagram: 'https://instagram.com/expertconsults' }
  ];

  const stats: Stat[] = [
    { label: 'Expert Team', value: '20+ certified neurologists' },
    { label: 'Technology', value: 'Latest 3T MRI & AI analysis' },
    { label: 'Results', value: '24-hour comprehensive reports' },
    { label: 'Care', value: 'Patient-centered approach' }
  ];

const handleSubmit = function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log('Contact Form:', Object.fromEntries(formData));
    alert('Thank you for your inquiry. Check browser console.');
    e.currentTarget.reset();
  };

  return (
    <>
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

      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-8 uppercase tracking-wider">About KOnsortium</span>
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 leading-tight">Excellence in Neurology</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-lg">
              Our Konsortium brings together world-class neurologists, neuroradiologists, and cutting-edge technology to deliver unmatched brain examination services. 
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-start space-x-4 p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-400">
                  <span className="text-2xl font-bold text-blue-600 flex-shrink-0 mt-1">✓</span>
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
            <div className="relative bg-gradient-to-br from-blue-50 to-slate-50 rounded-3xl p-12 shadow-2xl border border-blue-200/50 overflow-hidden">
              <Image src="/window.svg" alt="Advanced Technology" width={500} height={400} className="w-full h-80 object-cover rounded-2xl mx-auto shadow-2xl relative z-10" />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-300/30 rounded-full blur-xl animate-pulse"></div>
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
              <input type="text" name="name" placeholder="Full Name" className="w-full p-5 border border-gray-300/50 rounded-2xl bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-200/50 transition-all text-lg font-medium" required />
            </div>
            <div>
              <input type="email" name="email" placeholder="Email Address" className="w-full p-5 border border-gray-300/50 rounded-2xl bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-200/50 transition-all text-lg font-medium" required />
            </div>
            <div>
              <input type="tel" name="phone" placeholder="Phone (Optional)" className="w-full p-5 border border-gray-300/50 rounded-2xl bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-200/50 transition-all text-lg font-medium" />
            </div>
            <div>
              <textarea name="message" rows={5} placeholder="Tell us about your needs..." className="w-full p-5 border border-gray-300/50 rounded-2xl bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-200/50 transition-all text-lg font-medium resize-vertical" required />
            </div>
            <button type="submit" className="w-full p-6 bg-blue-600 text-white font-bold text-xl rounded-2xl hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300">
              Send Message
            </button>
          </form>
          <p className="mt-12 text-gray-600 text-lg">
            Or call us directly: <span className="font-bold text-blue-600">(555) 123-BRAIN</span>
          </p>
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
