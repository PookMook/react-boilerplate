import React from "react";
import type { AppProps } from "next/app";
import { useDarkMode } from "hooks/index";
import { css, reset, darkTheme } from "styled";
import { ToggleSwitch } from "components/toggle";

import { ApolloProvider } from "@apollo/client";
import { client } from "~/graphql/client";

css.global(reset);

function MyApp({ Component, pageProps }: AppProps) {
  const { isDarkMode, toggleDarkMode } = useDarkMode({
    lightModeClass: "light",
    darkModeClass: darkTheme,
    defaultValue: null,
  });

  return (
    <div>
      <header style={{ visibility: "initial" }}>
        <ToggleSwitch onClick={toggleDarkMode} checked={!!isDarkMode} />
      </header>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </div>
  );
}

export default MyApp;
