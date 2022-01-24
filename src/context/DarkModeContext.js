import React, { useState, createContext } from 'react';

const defaultState = {
  dark: false,
};

export const DarkModeContext = createContext(defaultState);

export const DarkModeProvider = ({ children }) => {
  const [dark, setDark] = useState(defaultState.dark);

  const toggleDark = () => {
    setDark(!dark);
  };

  return (
    <DarkModeContext.Provider value={{ dark, toggleDark }}>{children}</DarkModeContext.Provider>
  );
};
