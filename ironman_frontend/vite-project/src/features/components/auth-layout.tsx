// src/features/components/AuthLayout.tsx
export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 flex flex-col items-center">
            {/* Navbar */}
            <header className="w-full p-4 text-center text-zinc-300 border-b border-zinc-800">
                Ironman Buddy
            </header>

            {/* Center Content */}
            <main className="flex flex-1 items-center justify-center w-full px-4">
                {children}
            </main>
        </div>
    );
};