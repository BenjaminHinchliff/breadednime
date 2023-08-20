import Head from "next/head";
import { Navbar } from "~/components/navbar";
import { api } from "~/lib/api";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ITitle } from "@consumet/extensions";
import AnimeCard from "~/components/anime-card";
import { helpers } from "~/lib/helpers";

export default function Search({
  search,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const searchQuery = api.anime.search.useQuery({ search: search });

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
            {searchQuery.data?.results.map((r) => {
              const { id, title, cover, image } = r;
              const engTitle =
                typeof title === "string"
                  ? (title as string)
                  : (title as ITitle).english ??
                  (title as ITitle).romaji ??
                  (title as ITitle).native ??
                  "";

              return (
                <AnimeCard
                  key={id}
                  title={engTitle}
                  cover={cover ?? image ?? ""}
                />
              );
            })}
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
  helpers.anime.search.prefetch({ search });
  return { props: { trpcState: helpers.dehydrate(), search } };
};
