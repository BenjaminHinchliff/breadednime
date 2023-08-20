import Head from "next/head";
import { api } from "~/utils/api";
import Image from "next/image";
import violetImage from "~/assets/images/violet.png";
import Link from "next/link";
import { Navbar } from "~/components/navbar";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  let dummys = [];
  for (let i = 0; i < 40; i++) {
    dummys.push(
      <Link href="" className="m-1">
        <Image
          className="rounded-md"
          src={violetImage}
          alt="Violet Evergarden Cover Image"
        />
        <p className="text-center text-xl">Violet Evergarden</p>
      </Link>
    );
  }

  return (
    <>
      <Head>
        <title>breadnime! - ad free anime</title>
        <meta name="description" content="Totally ad free anime" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <Navbar />
        <div className="margin-auto mx-auto grid max-w-5xl grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {dummys}
        </div>
      </main>
    </>
  );
}
