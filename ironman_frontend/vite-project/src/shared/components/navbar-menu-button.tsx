// src/shared/components/navbar-menu-button.tsx
import React from "react";

type Props = {
    isOpen: boolean;
    toggle: () => void;
};

export const NavbarMenuButton: React.FC<Props> = ({
    isOpen,
    toggle,
}) => {
    return (
        <button
            className="group inline-flex w-12 h-12 text-cyan-500 items-center justify-center rounded transition cursor-pointer"
            aria-pressed={isOpen}
            onClick={toggle}
        >
            <span className="sr-only">Menu</span>

            <svg
                className="w-6 h-6 fill-current pointer-events-none"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    className="
                        origin-center
                        -translate-y-[5px]
                        translate-x-[7px]
                        transition-all duration-300
                        ease-[cubic-bezier(.5,.85,.25,1.1)]
                        -translate-y-[5px]
                        translate-x-[7px]
                    "
                    y="7"
                    width="9"
                    height="2"
                    rx="1"
                />

                <rect
                    className="
                        origin-center
                        transition-all duration-300
                        ease-[cubic-bezier(.5,.85,.25,1.8)]
                        group-aria-[pressed=true]:rotate-45
                    "
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                />

                <rect
                    className="
                        origin-center
                        translate-y-[5px]
                        transition-all duration-300
                        ease-[cubic-bezier(.5,.85,.25,1.1)]
                        group-aria-[pressed=true]:translate-y-0
                        group-aria-[pressed=true]:-rotate-225deg
                    "
                    y="7"
                    width="9"
                    height="2"
                    rx="1"
                />
            </svg>
        </button>
    );
};