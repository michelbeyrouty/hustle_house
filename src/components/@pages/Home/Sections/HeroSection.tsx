"use client";

export default function HeroSection() {
  return (
    <div className="relative">
      {/* Single Ceiling Background for Everything */}
      <div className="absolute inset-0 bg-gray-900">
        {/* Ceiling Grid Pattern */}
        <div className="absolute inset-0 opacity-20"
             style={{
               backgroundImage: `
                 linear-gradient(0deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
               `,
               backgroundSize: '40px 40px'
             }}>
        </div>


      </div>

      {/* Hero Section */}
      <div className="relative h-screen flex flex-col justify-center items-center overflow-hidden text-white text-center px-4">
        {/* Hero Content */}
        <div className="relative z-10">
          <h1 className="text-6xl font-bold mb-4">Hustle House</h1>
          <p className="text-xl opacity-80">Where innovation meets determination</p>
        </div>
      </div>

    </div>
  );
}
