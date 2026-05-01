// src/components/ui/Button.tsx
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className = "",
  ...props
}) => {
  const base =
    "flex-1 py-3 rounded-xl font-medium transition-all duration-150 active:scale-[0.98]";

  const variants = {
    primary: "bg-cyan-500 text-black hover:bg-cyan-400",
    secondary:
      "bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-700",
  };

  return (
    <button
      {...props}
      className={`${base} ${variants[variant]} ${className}`}
    />
  );
};