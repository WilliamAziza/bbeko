"use client";

import Image from "next/image";

interface TeamMember {
  icon: string;
  name: string;
  title: string;
  role: string;
  specialty: string[];
  facebook?: string;
  instagram?: string;
}

export default function About() {
  const teamMembers: TeamMember[] = [
    { 
      icon: "👨‍⚕️", 
      name: "Dr. Kwame Nkrumah", 
      title: "Chief Examiner & CEO", 
      role: "25+ years leading national examinations across STEM subjects",
      specialty: ["Mathematics", "Physics", "Leadership"],
      facebook: "https://facebook.com/drkwamenkrumah",
      instagram: "https://instagram.com/drkwamenkrumah"
    },
    { 
      icon: "👩‍⚕️", 
      name: "Prof. Ama Serwah", 
      title: "Lead Consultant", 
      role: "Mathematics & Science specialist with 20 years curriculum development",
      specialty: ["Mathematics", "Science", "Curriculum Design"],
      facebook: "https://facebook.com/amaserwah",
      instagram: "https://instagram.com/amaserwah"
    },
    { 
      icon: "👨‍🏫", 
      name: "Mr. Kofi Annan", 
      title: "Senior Examiner", 
      role: "English & Social Studies expert with WAEC examiner certification",
      specialty: ["English", "Social Studies", "Literature"],
      facebook: "https://facebook.com/kofiannan",
      instagram: "https://instagram.com/kofiannan"
    },
    { 
      icon: "👩‍💼", 
      name: "Mrs. Abena Boateng", 
      title: "Operations Director", 
      role: "Logistics & school coordination - serving 500+ institutions yearly",
      specialty: ["Operations", "Logistics", "School Relations"],
      facebook: "https://facebook.com/abenaboateng",
      instagram: "https://instagram.com/abenaboateng"
    },
    { 
      icon: "🧑‍🎓", 
      name: "Dr. Yaa Asantewaa", 
      title: "Examinations Director", 
      role: "Quality assurance & standardization across all subjects",
      specialty: ["Quality Control", "Standardization", "Assessment"],
      facebook: "https://facebook.com/yaaasantewaa",
      instagram: "https://instagram.com/yaaasantewaa"
    },
    { 
      icon: "👨‍🔬", 
      name: "Prof. Kwabena Mensah", 
      title: "Technical Director", 
      role: "ICT & examination technology implementation specialist",
      specialty: ["ICT", "Technology", "Examination Systems"],
      facebook: "https://facebook.com/kwabenamensah",
      instagram: "https://instagram.com/kwabenamensah"
    }
  ];

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

{/* Team Section */}
        <div className="mb-28">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold rounded-full mb-4 uppercase tracking-widest">
              Our Experts
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Meet Our Elite Team
            </h2>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-medium">
              World-class examination experts with decades of combined experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={member.name} className={`group relative p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 border-transparent hover:border-indigo-200 bg-white ${index % 2 === 0 ? 'hover:border-blue-300' : 'hover:border-emerald-300'}`}>
                <div className="text-center">
                  <div className={`w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg ${index % 2 === 0 ? 'bg-gradient-to-br from-blue-500 to-indigo-600' : 'bg-gradient-to-br from-emerald-500 to-teal-600'}`}>
                    <span className="text-5xl">{member.icon}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm md:text-base font-semibold text-indigo-600 mb-2">{member.title}</p>
                  <p className="text-sm text-gray-500 mb-3 line-clamp-2">{member.role}</p>
                  <div className="flex flex-wrap justify-center gap-1 mb-3">
                    {member.specialty.map((skill) => (
                      <span key={skill} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                  {(member.facebook || member.instagram) && (
                    <div className="flex justify-center gap-3 pt-3 border-t border-gray-100">
                      {member.facebook && (
                        <a
                          href={member.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                          aria-label="Facebook"
                        >
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85L18.77,7.46Z" />
                          </svg>
                        </a>
                      )}
                      {member.instagram && (
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                          aria-label="Instagram"
                        >
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12,2.16c3.2,0,3.58,0,4.85.07,1.17.07,2.45.32,3.57.63a6.08,6.08,0,0,1,3.77,1.52,6.08,6.08,0,0,1,1.52,3.77c.31,1.12.56,2.4.63,3.57.07,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.07,1.17-.32,2.45-.63,3.57a6.08,6.08,0,0,1-1.52,3.77,6.08,6.08,0,0,1-3.77,1.52c-1.12.31-2.4.56-3.57.63-1.27.07-1.65.07-4.85.07s-3.58,0-4.85-.07c-1.17-.07-2.45-.32-3.57-.63a6.08,6.08,0,0,1-3.77-1.52,6.08,6.08,0,0,1-1.52-3.77c-.31-1.12-.56-2.4-.63-3.57C2.53,16.79,2.53,16.41,2.53,13.21s0-3.58.07-4.85c.07-1.17.32-2.45.63-3.57a6.08,6.08,0,0,1,1.52-3.77A6.08,6.08,0,0,1,5.95,3.78c1.12-.31,2.4-.56,3.57-.63C8.42,2.53,8.8,2.53,12,2.16M12,0C8.74,0,8.33,0,7.05.07c-1.35.07-2.57.32-3.73.64a8.14,8.14,0,0,0-2.89,2.09,8.14,8.14,0,0,0-2.09,2.89C.39,5.41.14,6.63.07,8c0,.28,0,.65.07,1.93V20.07c0,.28,0,.65-.07,1.93c.07,1.37.32,2.59.64,3.75a8.14,8.14,0,0,0,2.09,2.89,8.14,8.14,0,0,0,2.89,2.09c1.16.32,2.38.57,3.75.64,1.28.07,1.65.07,1.93.07s.65,0,1.93-.07c1.37-.07,2.59-.32,3.75-.64a8.14,8.14,0,0,0,2.89-2.09,8.14,8.14,0,0,0,2.09-2.89c.32-1.16.57-2.38.64-3.75.07-1.28.07-1.65.07-1.93s0-.65-.07-1.93c-.07-1.37-.32-2.59-.64-3.75a8.14,8.14,0,0,0-2.09-2.89,8.14,8.14,0,0,0-2.89-2.09C16.28.39,15.06.14,13.7.07,12.42,0,12.05,0,11.77,0H12ZM12,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
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
