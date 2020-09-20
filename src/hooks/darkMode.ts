import { useState, useEffect } from "react";

export function useDarkMode({
  darkModeClass,
  lightModeClass,
  storageKey = "isDarkMode",
  defaultValue = true,
}: {
  darkModeClass: string;
  lightModeClass: string;
  storageKey?: string;
  defaultValue?: boolean | null;
}) {
  const defaultMode =
    typeof localStorage !== "object"
      ? defaultValue
      : localStorage.getItem(storageKey) === "yes"
      ? true
      : localStorage.getItem(storageKey) === "no"
      ? false
      : defaultValue;
  const [isDarkMode, setDarkMode] = useState(defaultMode);

  useEffect(() => {
    // Affect the body display of the page
    document.body.classList.remove(darkModeClass, lightModeClass);
    document.body.classList.add(isDarkMode ? darkModeClass : lightModeClass);
    // save inbetween sessions
    localStorage.setItem(storageKey, isDarkMode ? "yes" : "no");
  }, [isDarkMode]);

  return {
    isDarkMode,
    toggleDarkMode: () => setDarkMode(!isDarkMode),
    activateDarkMode: () => setDarkMode(true),
    disableDarkMode: () => setDarkMode(false),
  };
}
