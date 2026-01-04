"use client";


export default function HeroSection() {
  return (
    <div className="relative">

      {/* Hero Content - Split Layout */}
      <div className="relative h-screen flex items-center px-6 md:px-12 lg:px-20 z-10">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Small tagline */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-px bg-orange-500"></div>
              <span className="text-orange-500 font-medium text-sm uppercase tracking-wider">
                Discover Every Rep
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
              FITNESS
              <br />
              <span className="text-orange-500">THAT FITS</span>
              <br />
              YOUR LIFE
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
              Discover a gym that feels like a second home. Your fitness journey starts here!
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
