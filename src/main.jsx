import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Memory from "./Services/Memory.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Memory>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Memory>
  </StrictMode>
);
