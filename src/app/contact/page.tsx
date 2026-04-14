 "use client";

import { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form:', formData);
    alert('Thank you! Your message has been sent. We will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-slate-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent mb-8 leading-tight">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Ready to schedule your advanced brain examination? Get in touch with our team.
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center text-lg font-semibold text-blue-700 mb-16">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📞</span>
              <span>(555) 123-BRAIN</span>
            </div>
            <div className="w-px h-8 bg-blue-200"></div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">✉️</span>
              <span>info@bbkonsortium.com</span>
            </div>
            <div className="w-px h-8 bg-blue-200 md:hidden"></div>
            <div className="flex items-center space-x-3 md:ml-0">
              <span className="text-2xl">📍</span>
              <span>Medical District, Downtown</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="bg-white rounded-3xl p-12 shadow-2xl border border-blue-100 mb-12">
              <h3 className="text-3xl font-bold text-blue-900 mb-8">Get In Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-blue-900 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-5 border-2 border-blue-200/50 rounded-2xl bg-blue-50/50 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-200/50 transition-all text-lg font-medium focus:bg-white"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-blue-900 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-5 border-2 border-blue-200/50 rounded-2xl bg-blue-50/50 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-200/50 transition-all text-lg font-medium focus:bg-white"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-blue-900 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-5 border-2 border-blue-200/50 rounded-2xl bg-blue-50/50 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-200/50 transition-all text-lg font-medium focus:bg-white"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-blue-900 mb-2">Message *</label>
                  <textarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-5 border-2 border-blue-200/50 rounded-2xl bg-blue-50/50 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-200/50 transition-all text-lg font-medium focus:bg-white resize-vertical"
                    placeholder="Tell us about your examination needs..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-xl rounded-2xl hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 shadow-xl flex items-center justify-center space-x-3"
                >
                  <span>Send Message</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-center md:text-left">
              <div className="bg-white p-8 rounded-2xl border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-4">
                  <span className="text-2xl text-blue-600">📅</span>
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-2">Business Hours</h4>
                <p className="text-gray-600">Mon-Fri: 8AM-8PM<br/>Sat: 9AM-5PM<br/>Sun: Closed</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-4">
                  <span className="text-2xl text-blue-600">🚗</span>
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-2">Free Parking</h4>
                <p className="text-gray-600">Ample parking available<br/>Handicap accessible<br/>Valet service available</p>
              </div>
            </div>
          </div>

          <div className="relative lg:sticky lg:top-24 h-96 lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
            <Image 
              src="/images/students.jpg" 
              alt="Contact us map"
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-1000" 
              priority 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Visit Us</h3>
              <p className="text-lg leading-relaxed">Medical District Downtown<br/>State-of-the-art facility<br/>Easily accessible location</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

