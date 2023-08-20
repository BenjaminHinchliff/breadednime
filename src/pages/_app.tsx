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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container space-y-1">
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default api.withTRPC(MyApp);
