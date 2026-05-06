// src/shared/components/navbar.tsx
import React from "react";
import { NavbarMenuButton } from "./navbar-menu-button";

export const Navbar: React.FC = () => {
    return (
        <nav className="w-screen bg-zinc-900 border-b border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 py-3 justify-between min-h-[48px]">
                <div className="font-display text-2xl font-semibold tracking-tight text-zinc-300" />

                <div className="flex items-right space-x-2">
                    <NavbarMenuButton />
                </div>
            </div>
        </nav>
    );
};
