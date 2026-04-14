"use client";

import Image from "next/image";

interface TeamMember {
  icon: string;
  name: string;
  title: string;
  role: string;
  specialty: string[];
}

export default function TeamPage() {
  const teamMembers: TeamMember[] = [
    { 
      icon: "👨‍⚕️", 
      name: "Dr. Kwame Nkrumah", 
      title: "Chief Examiner & CEO", 
      role: "25+ years leading national examinations across STEM subjects",
      specialty: ["Mathematics", "Physics", "Leadership"]
    },
    { 
      icon: "👩‍⚕️", 
      name: "Prof. Ama Serwah", 
      title: "Lead Consultant", 
      role: "Mathematics & Science specialist with 20 years curriculum development",
      specialty: ["Mathematics", "Science", "Curriculum Design"]
    },
    { 
      icon: "👨‍🏫", 
      name: "Mr. Kofi Annan", 
      title: "Senior Examiner", 
      role: "English & Social Studies expert with WAEC examiner certification",
      specialty: ["English", "Social Studies", "Literature"]
    },
    { 
      icon: "👩‍💼", 
      name: "Mrs. Abena Boateng", 
      title: "Operations Director", 
      role: "Logistics & school coordination - serving 500+ institutions yearly",
      specialty: ["Operations", "Logistics", "School Relations"]
    },
    { 
      icon: "🧑‍🎓", 
      name: "Dr. Yaa Asantewaa", 
      title: "Examinations Director", 
      role: "Quality assurance & standardization across all subjects",
      specialty: ["Quality Control", "Standardization", "Assessment"]
    },
    { 
      icon: "👨‍🔬", 
      name: "Prof. Kwabena Mensah", 
      title: "Technical Director", 
      role: "ICT & examination technology implementation specialist",
      specialty: ["ICT", "Technology", "Examination Systems"]
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

