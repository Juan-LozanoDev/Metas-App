import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Memory from "./memory/Memory.jsx";
import AuthMemory from "./memory/Auth.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthMemory>
      <Memory>
        <BrowserRouter basename="/Metas-App/">
          <App />
        </BrowserRouter>
      </Memory>
    </AuthMemory>
  </StrictMode>
);
