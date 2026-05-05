"use client"

export default function About() {
  return (
    <div className="h-screen bg-[url('/images/about.jpg')] bg-cover bg-center flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
      <div className="relative z-20 max-w-4xl mx-auto text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-blue-400 via-white to-indigo-400 bg-clip-text drop-shadow-3xl mb-6 leading-tight">
          ABOUT BBEKO
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
          Excellence in Examinations Since 2004 - Serving Ghana's Schools Nationwide
        </p>
      </div>
    </div>
  );
}
