// src/features/components/AuthLayout.tsx
export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className=" min-h-screen bg-gradient-to-br  from-black via-zinc-900 to-black flex flex-col items-center">
            {/* Navbar */}
            <header className=" font-display text-2xl font-semibold tracking-tight w-full p-4 text-center text-zinc-300 border-b border-zinc-800">
                IronMan Buddy
            </header>

            {/* Center Content */}
            <main className="flex flex-1 items-center justify-center w-full px-4">
                {/* spacer matching the fixed navbar height */}
                <div className="h-[56px] w-full" />
                {children}
            </main>
        </div>
    );
};