import { type AppType } from "next/app";
import Head from "next/head";
import { api } from "~/lib/api";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>breadnime! - ad free anime</title>
        <meta name="description" content="Totally ad free anime" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className="container space-y-1">
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default api.withTRPC(MyApp);
