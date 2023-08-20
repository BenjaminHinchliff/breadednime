import Head from "next/head";
import { api } from "~/utils/api";
import Image from "next/image";
import breadImage from "~/assets/images/bread.png";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

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
          <div className="my-4 flex flex-row justify-center">
            <Input
              className="mr-2 max-w-md focus-visible:ring-primary"
              type="search"
              placeholder="Search"
            />
            <Button className="font-extrabold">GO!</Button>
          </div>
        </div>
      </main>
    </>
  );
}
