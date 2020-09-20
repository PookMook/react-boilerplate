import React, { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { useDarkMode } from "hooks/index";
import { css, darkTheme } from "styled";

css.global({
  body: {
    backgroundColor: "$background",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode({
    lightModeClass: "light",
    darkModeClass: darkTheme,
  });

  // prevent showing anything before page is mounted (ie flash white/black screen)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div style={{ visibility: "hidden" }}>
        <header onClick={toggleDarkMode}>
          Test {isDarkMode ? "DarkMode" : "LightMode"}
        </header>
        <Component {...pageProps} />
      </div>
    );
  }

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `

          @media (prefers-color-scheme: light){
            margin:1rem;
          }
          body {
            margin: 0;
            color:var(--colors-main);
            background-color: var(--colors-background);
          }
          
          
          `,
        }}
      />
      <header onClick={toggleDarkMode}>
        Test {isDarkMode ? "DarkMode" : "LightMode"}
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
