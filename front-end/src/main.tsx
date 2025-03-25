import React from "react";
import { StrictMode } from "react";
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import { App } from "./components";
import "./index.module.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter> {/* Adicione aqui */}
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </React.StrictMode>
);