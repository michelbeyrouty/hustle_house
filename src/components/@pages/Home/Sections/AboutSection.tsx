"use client";

export default function AboutSection() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Tag */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-px bg-brand-orange"></div>
              <span className="text-brand-orange font-medium text-sm uppercase tracking-wider">
                About Us
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              YOUR FITNESS
              <br />
              <span className="text-white">JOURNEY</span>
              <br />
              STARTS HERE
            </h2>

            {/* Description */}
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                <span className="text-brand-orange font-semibold">Hustle House</span> was founded in <span className="text-white font-medium">2020</span> in <span className="text-white font-medium">Sehaile-Keserwan</span>, with a vision to create more than just a gym.
              </p>

              <p>
                We're known for our <span className="text-white font-medium">friendly atmosphere</span>, where we take care of every member through <span className="text-white font-semibold">science-based programs</span> and daily care and follow-up.
              </p>

              <p>
                At Hustle House, you're not just a member – you're part of our family.
              </p>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-black text-brand-orange">2020</div>
              <div className="text-sm uppercase tracking-wider text-gray-400">Founded</div>
            </div>

            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-black text-white">100%</div>
              <div className="text-sm uppercase tracking-wider text-gray-400">Science Based</div>
            </div>

            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-black text-white">24/7</div>
              <div className="text-sm uppercase tracking-wider text-gray-400">Care & Follow-up</div>
            </div>

            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-black text-white">Family</div>
              <div className="text-sm uppercase tracking-wider text-gray-400">Atmosphere</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
