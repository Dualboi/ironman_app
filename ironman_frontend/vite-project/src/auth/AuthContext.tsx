import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { apiFetch } from "../api/client";

type AuthContextType = {
    session: any;
    user: any;
    loading: boolean;
    needsConfirmation: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [session, setSession] = useState<any>(null);
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [needsConfirmation, setNeedsConfirmation] = useState(false);

    useEffect(() => {
        const init = async () => {
            try {
                const { data, error } = await supabase.auth.getSession();
                console.log("SESSION DATA:", data);
                console.log("SESSION ERROR:", error);


                const session = data.session;

                setSession(session);

                if (session) {
                    try {
                        const me = await apiFetch("/me", session.access_token, {
                            method: "POST",
                        });

                        console.log("ME:", me);
                        setUser(me);
                    } catch (err) {
                        console.error("ME FETCH FAILED:", err);
                        setUser(null);
                    }
                }
            } catch (err) {
                console.error("INIT ERROR:", err);
            } finally {
                setLoading(false);
                console.log("TOKEN:", session?.access_token);
            }
        };

        init();

        const { data: listener } = supabase.auth.onAuthStateChange(
            async (_event, session) => {
                setSession(session);

                if (session) {
                    try {
                        const me = await apiFetch("/me", session.access_token, {
                            method: "POST",
                        });

                        setUser(me);
                    } catch (err) {
                        console.error("ME FETCH FAILED:", err);
                        setUser(null);
                    }
                } else {
                    setUser(null);
                }
            }
        );

        return () => {
            listener.subscription.unsubscribe();
        };
    }, []);

    const login = async (email: string, password: string) => {
        const { data, error } =
            await supabase.auth.signInWithPassword({ email, password });

        if (error) throw error;

        setSession(data.session);
    };

    const register = async (email: string, password: string) => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) throw error;

        // no session here to prevent email validation bypass - user must confirm email before logging in
        console.log("Check email to confirm account");
        if (!data.session) {
            setNeedsConfirmation(true);
            return;
        }

        setSession(data.session);
    };

    const logout = async () => {
        await supabase.auth.signOut();
        setSession(null);
        setUser(null);
        setNeedsConfirmation(false);
    };

    return (
        <AuthContext.Provider
            value={{ session, user, loading, needsConfirmation, login, register, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within AuthProvider");
    return ctx;
};