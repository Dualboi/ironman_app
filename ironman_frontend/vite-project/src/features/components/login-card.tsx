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
            <div className="flex flex-col items-center gap-6 w-full">
                <div className="text-zinc-400 text-4xl"><FontAwesomeIcon
                    icon={faUser}
                    className="
                        text-cyan-400 
                        text-4xl 
                        mb-2 
                        drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]
  "
                /></div>

                <p className="text-zinc-400 text-sm tracking-wide">
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
                     w-full px-4 py-3 rounded-xl
                    bg-zinc-800/80 text-white
                    border border-zinc-700/50
                    placeholder:text-zinc-500
                    focus:outline-none
                    focus:border-cyan-400
                    focus:ring-2 focus:ring-cyan-500/20
                    transition-all duration-200
                    "
                />

                <div className="flex gap-2 w-full">
                    <button
                        onClick={onLogin}
                        className="flex-1 py-3 rounded-xl
                        bg-cyan-500 text-black font-medium
                        hover:bg-cyan-400
                        active:scale-[0.98]
                        transition-all duration-150"
                    >
                        Login
                    </button>

                    <button
                        onClick={onRegister}
                        className="flex-1 py-3 rounded-xl
                        bg-cyan-500 text-black font-medium
                        hover:bg-cyan-400
                        active:scale-[0.98]
                        transition-all duration-150"
                    >
                        Register
                    </button>
                </div>
            </div>
        </Card>
    );
};