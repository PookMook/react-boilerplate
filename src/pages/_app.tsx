import React from "react";
import type { AppProps } from "next/app";
import { useDarkMode } from "hooks/index";
import { css, reset, darkTheme } from "styled";
import { ToggleSwitch } from "components/toggle";

css.global(reset);

function MyApp({ Component, pageProps }: AppProps) {
  const { isDarkMode, toggleDarkMode } = useDarkMode({
    lightModeClass: "light",
    darkModeClass: darkTheme,
    defaultValue: null,
  });

  if (isDarkMode === null) {
    return (
      <div style={{ visibility: "hidden" }}>
        <header>
          <ToggleSwitch onClick={toggleDarkMode} checked={!!isDarkMode} />
        </header>
        <Component {...pageProps} />
      </div>
    );
  }

  return (
    <>
      <header>
        <ToggleSwitch onClick={toggleDarkMode} checked={!!isDarkMode} />
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
