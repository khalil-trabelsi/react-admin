import React from "react";
import ReactDOM from "react-dom";
import "./app.css";
import App from "./App";
import DarkModeContextProvider from "./context/AppThemeContext";

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
