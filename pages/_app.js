import "./../public/styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../src/components/Layout";
import ShoppingContextProvider from "../src/contexts/shoppingContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import createCache from "@emotion/cache";

// prepend: true moves MUI styles to the top of the <head> so they're loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
function createEmotionCache() {
  return createCache({ key: "css", prepend: true });
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ShoppingContextProvider>
        <Layout>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <ToastContainer />
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </Layout>
      </ShoppingContextProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
