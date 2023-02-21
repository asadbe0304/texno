import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthRegister } from "./context/AuthResgister";
import { AuthProvider } from "./context/Auth";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthRegister>
      <AuthProvider>
        <App />
      </AuthProvider>
    </AuthRegister>
  </BrowserRouter>
);
