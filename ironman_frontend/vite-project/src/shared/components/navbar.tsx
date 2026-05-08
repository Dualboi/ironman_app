// src/shared/components/navbar.tsx

import React, { useState } from "react";
import { NavbarMenuButton } from "./navbar-menu-button";

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* place navbar below the header (header height = 56px) */}
            <nav className="fixed top-[56px] left-0 z-50 w-screen h-[56px] bg-zinc-900 border-b border-zinc-800">
                <div className="flex items-center justify-between h-full px-4">
                    <div className="font-display text-2xl font-semibold tracking-tight text-zinc-300" />
                    <NavbarMenuButton
                        isOpen={isOpen}
                        toggle={() => setIsOpen((v) => !v)}
                    />
                </div>
            </nav>

            {/* Backdrop starts below header + navbar = 112px */}
            <div
                className={`fixed top-[112px] left-0 right-0 bottom-0 bg-black/50 transition-opacity duration-300 z-40 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onClick={() => setIsOpen(false)}
            />

            {/* Side Drawer starts below header + navbar = 112px */}
            <aside
                className={`fixed top-[112px] right-0 z-50 h-[calc(100vh-112px)] w-72 bg-zinc-900/95 backdrop-blur-xl border-l border-zinc-800 shadow-2xl transform transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="h-[56px] border-b border-zinc-800" />
                <ul className="flex flex-col py-2">
                    <li><a href="#" className="block px-5 py-3 text-cyan-400 hover:text-zinc-400 hover:bg-zinc-800 transition">Home</a></li>
                    <li><a href="#" className="block px-5 py-3 text-cyan-400 hover:text-zinc-400 hover:bg-zinc-800 transition">Workouts</a></li>
                    <li><a href="#" className="block px-5 py-3 text-cyan-400 hover:text-zinc-400 hover:bg-zinc-800 transition">Schedule</a></li>
                    <li><a href="#" className="block px-5 py-3 text-cyan-400 hover:text-zinc-400 hover:bg-zinc-800 transition">Progress</a></li>
                    <li><a href="#" className="block px-5 py-3 text-cyan-400 hover:text-zinc-400 hover:bg-zinc-800 transition">Settings</a></li>
                </ul>
            </aside>
        </>
    );
};