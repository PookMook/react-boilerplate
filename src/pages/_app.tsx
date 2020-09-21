import React from "react";
import type { AppProps } from "next/app";
import { css, reset, darkTheme } from "styled";
import { ToggleSwitch } from "components/toggle";
import useDarkMode from "use-dark-mode";
import { ApolloProvider } from "@apollo/client";
import { client } from "~/graphql/client";

css.global(reset);

function MyApp({ Component, pageProps }: AppProps) {
  const darkMode = useDarkMode(true, { classNameDark: darkTheme });

  return (
    <ApolloProvider client={client}>
      <div>
        <header style={{ visibility: "initial" }}>
          <ToggleSwitch onClick={darkMode.toggle} checked={!!darkMode.value} />
        </header>
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}

export default MyApp;
