// src/shared/components/navbar.tsx

import React, { useState } from "react";
import { NavbarMenuButton } from "./navbar-menu-button";

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative w-screen bg-zinc-900 border-b border-zinc-800">
            <div className="flex items-center justify-between min-h-[56px] px-4">

                {/* Logo / Brand */}
                <div className="font-display text-2xl font-semibold tracking-tight text-zinc-300">

                </div>

                {/* Menu Button */}
                <NavbarMenuButton
                    isOpen={isOpen}
                    toggle={() => setIsOpen(!isOpen)}
                />
            </div>

            {/* Dropdown */}
            <div
                className={`
                    absolute top-full right-4 mt-2
                    w-52
                    bg-zinc-900/95 backdrop-blur-xl
                    border border-zinc-800
                    rounded-xl
                    shadow-2xl
                    overflow-hidden
                    transition-all duration-300 ease-out
                    ${isOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }
                `}
            >
                <ul className="flex flex-col py-2">

                    <li>
                        <a
                            href="#"
                            className="block px-5 py-3 text-cyan-400 hover:bg-zinc-800 transition"
                        >
                            Home
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="block px-5 py-3 text-cyan-400 hover:bg-zinc-800 transition"
                        >
                            Workouts
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="block px-5 py-3 text-cyan-400 hover:bg-zinc-800 transition"
                        >
                            Schedule
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="block px-5 py-3 text-cyan-400 hover:bg-zinc-800 transition"
                        >
                            Progress
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="block px-5 py-3 text-cyan-400 hover:bg-zinc-800 transition"
                        >
                            Settings
                        </a>
                    </li>

                </ul>
            </div>
        </nav>
    );
};