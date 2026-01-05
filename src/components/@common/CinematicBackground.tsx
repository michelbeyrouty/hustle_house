"use client";

interface CinematicBackgroundProps {
  className?: string;
  imageUrl?: string;
  brightness?: number;
  contrast?: number;
}

export default function CinematicBackground({
  className = "",
  imageUrl = "/hero_background.png",
  brightness = 0.8,
  contrast = 1.1,
}: CinematicBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden z-0 ${className}`}>
      {/* Main background image with slow zoom animation */}
      <div
        className="absolute bg-image"
        style={{
          inset: "-5%",
          backgroundImage: `url("${imageUrl}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: `brightness(${brightness}) contrast(${contrast})`,
          animation: "slowZoom 30s ease-in-out infinite",
        }}
      >
        {/* Dark cinematic overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,10,20,0.6), rgba(5,10,20,0.85))",
          }}
        />
      </div>

      {/* Energy glow effects (matches ceiling lights) */}
      <div
        className="absolute inset-0 light-glow"
        style={{
          background: `
            radial-gradient(circle at 70% 20%, rgba(30,144,255,0.15), transparent 40%),
            radial-gradient(circle at 30% 80%, rgba(30,144,255,0.1), transparent 40%),
            radial-gradient(circle at 50% 40%, rgba(255,255,255,0.05), transparent 30%)
          `,
          animation: "pulse 6s ease-in-out infinite",
        }}
      />

      {/* Additional atmospheric lighting */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(45deg, transparent 30%, rgba(30,144,255,0.08) 50%, transparent 70%),
            linear-gradient(-45deg, transparent 30%, rgba(255,255,255,0.03) 50%, transparent 70%)
          `,
          animation: "atmosphericShift 20s ease-in-out infinite",
        }}
      />

      <style jsx>{`
        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes atmosphericShift {
          0%,
          100% {
            opacity: 0.3;
            transform: translateX(0%);
          }
          50% {
            opacity: 0.6;
            transform: translateX(2%);
          }
        }
      `}</style>
    </div>
  );
}
