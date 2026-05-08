// src/features/components/AuthLayout.tsx
export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex flex-col items-center">
            <main className="w-full px-4">
                {children}
            </main>

            <header className="font-display text-2xl font-semibold tracking-tight w-full p-4 text-center text-zinc-300 border-t border-zinc-800">
                IronMan Buddy
            </header>
        </div>
    );
};