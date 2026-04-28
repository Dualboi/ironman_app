// src/features/dashboard/LoginCard.tsx
import { Card } from '../../shared/components/reusable-card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

type Props = {
    email: string;
    password: string;
    setEmail: (v: string) => void;
    setPassword: (v: string) => void;
    onLogin: () => void;
    onRegister: () => void;
};

export const LoginCard = ({
    email,
    password,
    setEmail,
    setPassword,
    onLogin,
    onRegister,
}: Props) => {
    return (
        <Card className="text-center">
            <div className="flex flex-col items-center gap-6">
                <div className="text-zinc-400 text-4xl"><FontAwesomeIcon
                    icon={faUser}
                    className="text-zinc-400 text-3xl mb-2"
                /></div>

                <p className="text-zinc-300 text-sm">
                    Login or create an account
                </p>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="
                    w-full px-4 py-3 rounded-lg
                    bg-zinc-800 text-white
                    border border-zinc-700
                    focus:border-cyan-500
                    focus:ring-2 focus:ring-cyan-500/30
                    transition
                    "
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="
                    w-full px-4 py-3 rounded-lg
                    bg-zinc-800 text-white
                    border border-zinc-700
                    focus:border-cyan-500
                    focus:ring-2 focus:ring-cyan-500/30
                    transition
                    "
                />

                <div className="flex gap-2 w-full">
                    <button
                        onClick={onLogin}
                        className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-black py-2 rounded-md"
                    >
                        Login
                    </button>

                    <button
                        onClick={onRegister}
                        className="flex-1 bg-cyan-500/80 hover:bg-cyan-600 text-black py-2 rounded-md"
                    >
                        Register
                    </button>
                </div>
            </div>
        </Card>
    );
};