import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "text" | "brand";
  href?: string;
  onClick?: () => void;
  className?: string;
  animate?: any;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  animate,
  target,
  rel,
  ...props
}: ButtonProps) {
  const baseClasses =
    variant === "text"
      ? "transition-colors font-medium"
      : "px-6 py-3 rounded-full transition-colors font-medium text-sm";

  const variantClasses = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "border border-blue-400 hover:bg-blue-400/20 text-white",
    text: "text-gray-300 hover:text-blue-400 bg-transparent border-none p-0 m-0",
    brand: "bg-black text-white hover:bg-brand-orange transition-colors duration-300",
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={buttonClasses}
        animate={animate}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={buttonClasses}
      animate={animate}
      {...props}
    >
      {children}
    </motion.button>
  );
}
