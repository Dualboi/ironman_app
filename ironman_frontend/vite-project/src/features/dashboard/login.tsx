import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { AuthLayout } from "../../features/components/auth-layout";
import { LoginCard } from "../../features/components/login-card";

export default function Login() {
    const { login, register, needsConfirmation, needsProfileCompletion } = useAuth();
    if (needsProfileCompletion) {
        return (
            <AuthLayout>
                <div className="text-zinc-300 text-center">
                    Redirecting to profile completion...
                </div>
            </AuthLayout>
        );
    }



    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    if (needsConfirmation) {
        return (
            <AuthLayout>
                <div className="text-zinc-300 text-center">
                    Please check your email to confirm your account.
                </div>
            </AuthLayout>
        );
    }

    return (
        <AuthLayout>
            <LoginCard
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                onLogin={() => login(email, password)}
                onRegister={() => register(email, password)}
            />
        </AuthLayout>
    );
}