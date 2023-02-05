import { useState, useEffect } from "react";

type ThemeOptions = "dark" | "light";

const useSystemTheme = (): ThemeOptions => {
  // set up detection of system dark mode
  const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

  // perform an initial detection of system theme
  const [theme, setTheme] = useState<ThemeOptions>(
    darkModeQuery.matches ? "dark" : "light"
  );

  // set up a listener to respond to future changes of system theme
  useEffect(() => {
    darkModeQuery.addListener((event) => {
      setTheme(event.matches ? "dark" : "light");
    });
  });

  return theme;
};

export default useSystemTheme;
