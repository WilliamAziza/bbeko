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

export default function TeamPage() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-28">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-blue-900 via-indigo-900 to-emerald-900 bg-clip-text text-transparent mb-8 drop-shadow-4xl tracking-tight">MEET OUR ELITE TEAM</h1>
          <p className="text-2xl md:text-3xl font-light text-gray-700 max-w-3xl mx-auto leading-relaxed bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text drop-shadow-2xl">
            World-class examination experts with decades of combined experience serving Ghana's educational excellence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
          {teamMembers.map((member, index) => (
            <div key={member.name} className={`group p-12 rounded-3xl shadow-2xl hover:shadow-4xl hover:-translate-y-4 transition-all duration-700 overflow-hidden border-4 border-white/20 relative cursor-pointer ${index % 2 === 0 ? 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50' : 'bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50'}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700 backdrop-blur-sm" />
              <div className={`w-32 h-32 ${index % 2 === 0 ? 'bg-gradient-to-br from-blue-500 to-indigo-600' : 'bg-gradient-to-br from-emerald-500 to-teal-600'} rounded-3xl flex items-center justify-center mx-auto mb-12 shadow-3xl group-hover:scale-125 group-hover:shadow-5xl transition-all duration-500 relative z-10 border-8 border-white/30`}>
                <span className="text-5xl group-hover:scale-125 transition-all duration-300 drop-shadow-3xl">{member.icon}</span>
              </div>
              <h2 className="text-4xl font-black bg-gradient-to-r from-gray-900 via-slate-900 to-black bg-clip-text text-transparent mb-8 text-center relative z-10 drop-shadow-3xl tracking-tight leading-tight">{member.name}</h2>
              <p className="text-2xl font-bold text-gray-800 mb-6 text-center relative z-10 font-mono bg-gradient-to-r from-gray-700 to-slate-700 bg-clip-text">{member.title}</p>
              <p className="text-xl text-gray-600 leading-relaxed text-center relative z-10 opacity-95 mb-8">{member.role}</p>
<div className="flex flex-wrap justify-center gap-2 mb-10">
                {member.specialty.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white/70 text-gray-800 text-sm font-bold rounded-full shadow-md hover:scale-105 transition-all duration-200 relative z-10">
                    {skill}
                  </span>
                ))}
              </div>
{(member.facebook || member.instagram) && (
                <div className="flex justify-center gap-4 mt-6">
                  {member.facebook && (
                    <a
                      href={member.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg hover:scale-125 hover:shadow-2xl hover:rotate-12 transition-all duration-300 animate-pulse hover:animate-bounce"
                      aria-label="Facebook"
                    >
                      <svg className="w-5 h-5 text-white animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85L18.77,7.46Z" />
                      </svg>
                    </a>
                  )}
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-full flex items-center justify-center shadow-lg hover:scale-125 hover:shadow-2xl hover:-rotate-12 transition-all duration-300 animate-pulse hover:animate-bounce"
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5 text-white animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,2.16c3.2,0,3.58,0,4.85.07,1.17.07,2.45.32,3.57.63a6.08,6.08,0,0,1,3.77,1.52,6.08,6.08,0,0,1,1.52,3.77c.31,1.12.56,2.4.63,3.57.07,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.07,1.17-.32,2.45-.63,3.57a6.08,6.08,0,0,1-1.52,3.77,6.08,6.08,0,0,1-3.77,1.52c-1.12.31-2.4.56-3.57.63-1.27.07-1.65.07-4.85.07s-3.58,0-4.85-.07c-1.17-.07-2.45-.32-3.57-.63a6.08,6.08,0,0,1-3.77-1.52,6.08,6.08,0,0,1-1.52-3.77c-.31-1.12-.56-2.4-.63-3.57C2.53,16.79,2.53,16.41,2.53,13.21s0-3.58.07-4.85c.07-1.17.32-2.45.63-3.57a6.08,6.08,0,0,1,1.52-3.77A6.08,6.08,0,0,1,5.95,3.78c1.12-.31,2.4-.56,3.57-.63C8.42,2.53,8.8,2.53,12,2.16M12,0C8.74,0,8.33,0,7.05.07c-1.35.07-2.57.32-3.73.64a8.14,8.14,0,0,0-2.89,2.09,8.14,8.14,0,0,0-2.09,2.89C.39,5.41.14,6.63.07,8c0,.28,0,.65.07,1.93V20.07c0,.28,0,.65-.07,1.93c.07,1.37.32,2.59.64,3.75a8.14,8.14,0,0,0,2.09,2.89,8.14,8.14,0,0,0,2.89,2.09c1.16.32,2.38.57,3.75.64,1.28.07,1.65.07,1.93.07s.65,0,1.93-.07c1.37-.07,2.59-.32,3.75-.64a8.14,8.14,0,0,0,2.89-2.09,8.14,8.14,0,0,0,2.09-2.89c.32-1.16.57-2.38.64-3.75.07-1.28.07-1.65.07-1.93s0-.65-.07-1.93c-.07-1.37-.32-2.59-.64-3.75a8.14,8.14,0,0,0-2.09-2.89,8.14,8.14,0,0,0-2.89-2.09C16.28.39,15.06.14,13.7.07,12.42,0,12.05,0,11.77,0H12ZM12,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z" />
                      </svg>
                    </a>
                  )}
                </div>
              )}
              <div className="mt-12 pt-10 border-t-4 border-white/30 relative z-10">
                <div className="flex justify-center space-x-6 opacity-0 group-hover:opacity-100 transition-all duration-800 delay-400">
                  <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-ping shadow-xl"></div>
                  <div className="w-5 h-5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-ping shadow-xl delay-200"></div>
                  <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-ping shadow-xl delay-400"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="/contact" className="inline-flex items-center px-16 py-8 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold text-2xl rounded-3xl hover:scale-110 hover:shadow-4xl hover:shadow-blue-500/30 transition-all duration-500 shadow-3xl letter-spacing-1 tracking-wider">
            Work With Our Experts
            <svg className="ml-4 w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

