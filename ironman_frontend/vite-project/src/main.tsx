import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { AuthProvider } from "./features/auth/AuthContext";
import "./index.css";
import { BrowserRouter as BrouserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrouserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrouserRouter>
  </React.StrictMode>
);