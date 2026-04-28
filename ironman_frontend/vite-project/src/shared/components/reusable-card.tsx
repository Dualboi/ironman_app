// src/components/reusable-card.tsx
import React from "react";

type CardProps = {
    title?: string;
    children: React.ReactNode;
    className?: string;
};

export const Card: React.FC<CardProps> = ({ title, children, className }) => {
    return (
        <div
            className={`
                bg-zinc-900/80 backdrop-blur-md
                border border-zinc-800
                rounded-2xl shadow-lg
                p-6 w-full max-w-md
                ${className}
                `}
        >
            {title && (
                <h2 className="text-lg font-semibold text-zinc-200 mb-4">{title}</h2>
            )}

            {children}
        </div>
    );
};