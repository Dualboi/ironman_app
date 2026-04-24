import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { apiFetch } from "../api/client";

type AuthContextType = {
  session: any;
  user: any;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Load session on refresh
  useEffect(() => {
    const init = async () => {
      const { data } = await supabase.auth.getSession();
      const session = data.session;

      setSession(session);

      if (session) {
        const me = await apiFetch("/me", session.access_token, {
          method: "POST",
        });

        setUser(me);
      }

      setLoading(false);
    };

    init();

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session);

        if (session) {
          const me = await apiFetch("/me", session.access_token, {
            method: "POST",
          });

          setUser(me);
        } else {
          setUser(null);
        }
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    const { data, error } =
      await supabase.auth.signInWithPassword({ email, password });

    if (error) throw error;

    setSession(data.session);
  };

  const register = async (email: string, password: string) => {
    const { data, error } =
      await supabase.auth.signUp({ email, password });

    if (error) throw error;

    setSession(data.session);
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ session, user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};