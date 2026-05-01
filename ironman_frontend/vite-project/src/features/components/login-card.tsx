// src/features/dashboard/LoginCard.tsx
import { Card } from '../../shared/components/reusable-card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Input } from "../../shared/components/input";
import { Button } from "../../shared/components/button";


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

        <FontAwesomeIcon
          icon={faUser}
          className="text-cyan-400 text-4xl mb-2"
        />

        <p className="text-zinc-400 text-sm tracking-wide">
          Login or create an account
        </p>

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex gap-2 w-full">
          <Button onClick={onLogin}>Login</Button>
          <Button variant="secondary" onClick={onRegister}>
            Register
          </Button>
        </div>

      </div>
    </Card>
  );
};