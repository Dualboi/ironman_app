// src/shared/components/navbar.tsx
import React from "react";

export const Navbar: React.FC = () => {
    return (
        <nav className="w-full bg-zinc-900 border-b border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between min-h-[48px]">
                <div className="font-display text-2xl font-semibold tracking-tight text-zinc-300" />

                <div>{/* Future nav items can go here */}</div>
            </div>
        </nav>
    );
};
