import { Navbar } from "~/components/navbar";
import { api } from "~/lib/api";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import AnimeCard from "~/components/anime-card";
import { helpers } from "~/lib/helpers";
import { chooseTitle } from "~/lib/title";

export default function Search({
  search,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const searchQuery = api.anime.search.useQuery({ search: search });

  return (
    <>
      <Navbar initSearch={search} />
      <div className="mx-auto max-w-5xl">
        <h2 className="my-1 text-2xl">Search results for "{search}"</h2>
        <div className="margin-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {searchQuery.data?.results.map(({ id, title, cover, image }) => {
            return (
              <AnimeCard
                href={`/anime/${id}`}
                key={id}
                title={chooseTitle(title)}
                cover={cover ?? image ?? ""}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  search: string;
}> = async ({ query }) => {
  const search = (query.q as string) ?? "";
  await helpers.anime.search.prefetch({ search });
  return { props: { trpcState: helpers.dehydrate(), search } };
};
