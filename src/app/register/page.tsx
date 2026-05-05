"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function Register() {
  const [formData, setFormData] = useState({
    schoolName: '',
    contactPerson: '',
    email: '',
    phone: '',
    studentCount: '',
    region: '',
    message: ''
  });

  const regions = [
    'Greater Accra',
    'Ashanti',
    'Central',
    'Eastern',
    'Western',
    'Volta',
    'Northern',
    'Upper East',
    'Upper West',
    'Brong-Ahafo',
    'Other'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('School Registration:', formData);
alert('Thank you! Your school registration for BBEKO 2026 has been submitted. We will contact you within 48 hours with details.');
    setFormData({
      schoolName: '',
      contactPerson: '',
      email: '',
      phone: '',
      studentCount: '',
      region: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-blue-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-emerald-800 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-8 leading-tight">
            Register Your School
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
Secure your spot for BBEKO 2026 - Best Brain Examinations Mock for Schools. Limited spots available!
          </p>
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-bold text-xl rounded-3xl shadow-2xl">
            <span>📚</span>
<span>BBEKO 2026 MOCK EXAM</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-emerald-100/50 mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">School Registration Form</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">School Name *</label>
                  <input
                    type="text"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleChange}
                    className="w-full p-5 border-2 border-emerald-200/50 rounded-2xl bg-emerald-50/50 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-200/50 transition-all text-lg font-medium focus:bg-white shadow-sm"
                    placeholder="e.g. Accra Academy"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">Contact Person *</label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    className="w-full p-5 border-2 border-emerald-200/50 rounded-2xl bg-emerald-50/50 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-200/50 transition-all text-lg font-medium focus:bg-white shadow-sm"
                    placeholder="e.g. Mr. Johnson Kofi"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-3">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-5 border-2 border-emerald-200/50 rounded-2xl bg-emerald-50/50 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-200/50 transition-all text-lg font-medium focus:bg-white shadow-sm"
                      placeholder="school@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-3">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-5 border-2 border-emerald-200/50 rounded-2xl bg-emerald-50/50 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-200/50 transition-all text-lg font-medium focus:bg-white shadow-sm"
                      placeholder="+233 123 456 789"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-3">Estimated # of Students</label>
                    <input
                      type="number"
                      name="studentCount"
                      value={formData.studentCount}
                      onChange={handleChange}
                      min="1"
                      className="w-full p-5 border-2 border-emerald-200/50 rounded-2xl bg-emerald-50/50 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-200/50 transition-all text-lg font-medium focus:bg-white shadow-sm"
                      placeholder="50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-3">Region</label>
                    <select
                      name="region"
                      value={formData.region}
                      onChange={handleChange}
                      className="w-full p-5 border-2 border-emerald-200/50 rounded-2xl bg-emerald-50/50 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-200/50 transition-all text-lg font-medium focus:bg-white shadow-sm"
                    >
                      <option value="">Select region</option>
                      {regions.map((region) => (
                        <option key={region} value={region}>{region}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">Additional Information</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-5 border-2 border-emerald-200/50 rounded-2xl bg-emerald-50/50 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-200/50 transition-all text-lg font-medium focus:bg-white resize-vertical shadow-sm"
                    placeholder="Any special requirements or notes..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full p-7 bg-gradient-to-r from-emerald-600 via-emerald-500 to-blue-600 text-white font-bold text-xl rounded-3xl hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 shadow-xl flex items-center justify-center space-x-3 group"
                >
                  <span>Register School for Mock Exam</span>
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
              <div className="bg-white/80 p-10 rounded-3xl border border-emerald-100 shadow-2xl hover:shadow-3xl transition-all duration-300 backdrop-blur-md">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto md:mx-0 mb-6 shadow-xl">
                  <span className="text-3xl">📅</span>
                </div>
                <h4 className="text-2xl font-bold text-emerald-900 mb-4">Mock Exam Date</h4>
<p className="text-lg text-gray-700 mb-4">BBEKO 2026</p>
                <p className="text-emerald-700 font-semibold text-xl">Coming Soon</p>
              </div>
              <div className="bg-white/80 p-10 rounded-3xl border border-emerald-100 shadow-2xl hover:shadow-3xl transition-all duration-300 backdrop-blur-md">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto md:mx-0 mb-6 shadow-xl">
                  <span className="text-3xl">🎯</span>
                </div>
                <h4 className="text-2xl font-bold text-emerald-900 mb-4">Benefits</h4>
                <ul className="text-left space-y-2 text-gray-700">
                  <li className="flex items-center"><span className="text-emerald-600 mr-3">✓</span> Free practice exam</li>
                  <li className="flex items-center"><span className="text-emerald-600 mr-3">✓</span> Performance analytics</li>
                  <li className="flex items-center"><span className="text-emerald-600 mr-3">✓</span> Priority main exam slots</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative lg:sticky lg:top-24 h-96 lg:h-[650px] rounded-3xl overflow-hidden shadow-3xl group">
            <Image 
              src="/images/students.jpg" 
              alt="School registration"
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-1000 brightness-75" 
              priority 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
            <div className="absolute bottom-12 left-8 right-8 text-white max-w-lg">
              <h3 className="text-3xl font-bold mb-6 drop-shadow-2xl">Join 1000+ Schools</h3>
              <p className="text-xl leading-relaxed drop-shadow-xl mb-8">Register now for the most comprehensive mock brain examination experience</p>
              <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30">
                <p className="font-bold text-lg">Limited spots available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
