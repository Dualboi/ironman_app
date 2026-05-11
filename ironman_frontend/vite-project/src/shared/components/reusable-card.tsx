// src/shared/components/card.tsx
import React from "react";

type CardProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> = ({
  title,
  children,
  className = "",
}) => {
  return (
    <div
      className={`
        bg-zinc-900/70 backdrop-blur-xl
        border border-zinc-800/50
        rounded-2xl
        shadow-[0_10px_40px_rgba(0,0,0,0.6)]
        p-6 sm:p-8 md:p-10 w-full max-w-lg
        ${className}
      `}
    >
      {title && (
        <h2 className="text-lg font-semibold text-zinc-200 mb-4">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};