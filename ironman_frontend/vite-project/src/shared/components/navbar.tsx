// src/shared/components/navbar.tsx

import React, { useState } from "react";
import { NavbarMenuButton } from "./navbar-menu-button";
import { useAuth } from "../../features/auth/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleNavClick = () => setIsOpen(false);

    const handleLogout = () => {
        logout();
        setIsOpen(false);
        navigate("/login");
    };

    return (
        <>
            {/* place navbar below the header (responsive heights) */}
            <nav className="fixed top-12 md:top-14 left-0 z-50 w-full h-12 md:h-14 bg-zinc-900 border-b border-zinc-800">
                <div className="flex items-center justify-between h-full px-4">
                    <div className="font-display text-2xl font-semibold tracking-tight text-zinc-300" />
                    <NavbarMenuButton
                        isOpen={isOpen}
                        toggle={() => setIsOpen((v) => !v)}
                    />
                </div>
            </nav>

            {/* Backdrop starts below header + navbar (responsive) */}
            <div
                className={`fixed top-24 md:top-28 left-0 right-0 bottom-0 bg-black/50 transition-opacity duration-300 z-40 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onClick={() => setIsOpen(false)}
            />

            {/* Side Drawer starts below header + navbar (responsive) */}
            <aside
                className={`fixed top-24 md:top-28 right-0 z-50 h-[calc(100vh-96px)] md:h-[calc(100vh-7rem)] w-fit max-w-[calc(100vw-1rem)] bg-zinc-900/95 backdrop-blur-xl border-l border-zinc-800 shadow-2xl transform transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="h-12 md:h-14 border-b border-zinc-800" />
                <ul className="flex flex-col py-2">
                    <li>
                        <Link to="/dashboard" onClick={handleNavClick} className="block whitespace-nowrap px-5 py-3 text-cyan-400 hover:text-zinc-400 hover:bg-zinc-800 transition">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/workouts" onClick={handleNavClick} className="block whitespace-nowrap px-5 py-3 text-cyan-400 hover:text-zinc-400 hover:bg-zinc-800 transition">
                            Workouts
                        </Link>
                    </li>
                    <li>
                        <Link to="/schedule" onClick={handleNavClick} className="block whitespace-nowrap px-5 py-3 text-cyan-400 hover:text-zinc-400 hover:bg-zinc-800 transition">
                            Schedule
                        </Link>
                    </li>
                    <li>
                        <Link to="/stats" onClick={handleNavClick} className="block whitespace-nowrap px-5 py-3 text-cyan-400 hover:text-zinc-400 hover:bg-zinc-800 transition">
                            Progress
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings" onClick={handleNavClick} className="block whitespace-nowrap px-5 py-3 text-cyan-400 hover:text-zinc-400 hover:bg-zinc-800 transition">
                            Settings
                        </Link>
                    </li>
                    <li>
                        <button
                            type="button"
                            onClick={handleLogout}
                            className="block w-full text-left whitespace-nowrap px-5 py-3 text-cyan-400 hover:text-zinc-400 hover:bg-zinc-800 transition"
                        >
                            Logout
                        </button>
                    </li>
                </ul>
            </aside>
        </>
    );
};