import { useState } from "react";
import { useAuth } from "../auth/AuthContext";

export default function Login() {
  const { login, register } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <h2>Auth Test</h2>

      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div style={{ marginTop: 10 }}>
        <button onClick={() => login(email, password)}>Login</button>
        <button onClick={() => register(email, password)}>Register</button>
      </div>
    </div>
  );
}