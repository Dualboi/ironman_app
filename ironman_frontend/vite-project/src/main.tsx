import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { AuthProvider } from "./features/auth/AuthContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
      <div className="bg-green-500 text-white p-4">
        Tailwind is working
      </div>
    </AuthProvider>
  </React.StrictMode>
);