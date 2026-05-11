// src/features/components/AuthLayout.tsx
export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex flex-col">
            {/* hero/header (responsive height) */}
            <header className="h-12 md:h-[56px] flex items-center justify-center font-display text-lg sm:text-xl md:text-2xl font-semibold tracking-tight w-full text-zinc-300 border-b border-zinc-800">
                IronMan Buddy
            </header>
            <main className="flex flex-1 w-full px-4 pt-12 md:pt-[56px]">
                <div className="w-full max-w-7xl mx-auto flex items-center justify-center">
                    {children}
                </div>
            </main>
        </div>
    );
};