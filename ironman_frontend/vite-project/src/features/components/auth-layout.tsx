// src/features/components/AuthLayout.tsx
export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex flex-col">
            {/* hero/header (above the fixed navbar) */}
            <header className="h-[56px] flex items-center justify-center font-display text-2xl font-semibold tracking-tight w-full text-zinc-300 border-b border-zinc-800">
                IronMan Buddy
            </header>

            <main className="flex flex-1 items-center justify-center w-full px-4">
                {children}
            </main>
        </div>
    );
};