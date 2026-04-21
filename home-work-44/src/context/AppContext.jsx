import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [users] = useState([
    { id: 1, name: "John", email: "john@mail.com" },
    { id: 2, name: "Anna", email: "anna@mail.com" },
    { id: 3, name: "Mike", email: "mike@mail.com" },
  ]);

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <AppContext.Provider value={{ users, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}
