import React from "react";

interface SectionHeaderProps {
  tag: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
}

export default function SectionHeader({
  tag,
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 space-y-8 ${className}`}>
      <div className="flex items-center space-x-2">
        <div className="w-8 h-px bg-brand-orange"></div>
        <span className="text-brand-orange font-medium text-sm uppercase tracking-wider">
          {tag}
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
        {title}
      </h2>

      {description && (
        <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
