import Head from "next/head";
import Image from "next/image";
import breadImage from "~/assets/images/bread.png";
import { SearchBar } from "~/components/search-bar";

export default function Home() {
  return (
    <>
      <Head>
        <title>breadnime! - ad free anime</title>
        <meta name="description" content="Totally ad free anime" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="container">
          <h1 className="mb-2 text-center align-middle text-6xl font-bold text-indigo-500">
            <Image
              className="mb-1 mr-1 inline-block h-9 w-9"
              src={breadImage}
              alt="Bread logo"
            />
            breadnime!
          </h1>
          <h2 className="text-center text-5xl">Ad-free anime, really!</h2>
          <SearchBar />
        </div>
      </main>
    </>
  );
}
