// src/shared/components/input.tsx
import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({
  className = "",
  ...props
}) => {
  return (
    <input
      {...props}
      className={`
        w-full px-4 py-3 rounded-xl
        bg-zinc-800/80 text-white
        border border-zinc-700/50
        placeholder:text-zinc-500
        focus:outline-none
        focus:border-cyan-400
        focus:ring-2 focus:ring-cyan-500/20
        transition-all duration-200
        ${className}
      `}
    />
  );
};