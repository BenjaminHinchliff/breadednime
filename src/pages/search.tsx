import Head from "next/head";
import Image from "next/image";
import violetImage from "~/assets/images/violet.png";
import Link from "next/link";
import { Navbar } from "~/components/navbar";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function Search({
  search,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
        <Navbar initSearch={search} />
        <div className="mx-auto max-w-5xl">
          <h2 className="my-1 text-2xl">Search results for "{search}"</h2>
          <div className="margin-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {dummys}
          </div>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  search: string;
}> = async ({ query }) => {
  const search = (query.q as string) ?? "";
  return { props: { search } };
};
