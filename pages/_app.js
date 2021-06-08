import Head from "next/head";
import { SWRConfig } from "swr";

import axios from "axios";

import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource) => axios.get(resource).then((res) => res.data),
      }}
    >
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
