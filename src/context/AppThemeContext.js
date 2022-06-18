import React, { createContext, useReducer } from "react";
import DarkModeReducer from "./AppThemeReducer";

const INITIAL_STATE = {
  darkMode: Boolean(localStorage.getItem("theme")),
};

export const DarkModeContext = createContext(INITIAL_STATE);

const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);
  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
