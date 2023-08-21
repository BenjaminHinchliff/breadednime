import { Navbar } from "~/components/navbar";
import { api } from "~/lib/api";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import AnimeCard from "~/components/anime-card";
import { helpers } from "~/lib/helpers";
import { chooseTitle } from "~/lib/title";
import { z } from "zod";
import Link from "next/link";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/cn";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "~/components/ui/button";

export default function Search({
  search,
  page,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const searchQuery = api.anime.search.useQuery({ search, page });

  return (
    <>
      <Navbar initSearch={search} />
      <div className="mx-auto max-w-6xl">
        <h2 className="my-1 text-2xl">Search results for "{search}"</h2>
        {searchQuery.data && (
          <>
            <div className="margin-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {searchQuery.data.results.map(({ id, title, cover, image }) => {
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
            <div className="flex justify-center space-x-2">
              {page <= 1 ? (
                <Button className="text-lg" disabled>
                  <ChevronLeft />
                  Prev Page
                </Button>
              ) : (
                <Link
                  className={cn(buttonVariants(), "text-lg")}
                  href={`/search?${new URLSearchParams({
                    q: search,
                    page: (page - 1).toString(),
                  })}`}
                >
                  <ChevronLeft />
                  Prev Page
                </Link>
              )}
              {!searchQuery.data?.hasNextPage ? (
                <Button className="text-lg" disabled>
                  Next Page
                  <ChevronRight />
                </Button>
              ) : (
                <Link
                  className={cn(buttonVariants(), "text-lg")}
                  href={`/search?${new URLSearchParams({
                    q: search,
                    page: (page + 1).toString(),
                  })}`}
                >
                  Next Page
                  <ChevronRight />
                </Link>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

const searchSchema = z.object({
  q: z.string(),
  page: z.coerce.number().nullish(),
});

export const getServerSideProps: GetServerSideProps<{
  search: string;
  page: number;
}> = async ({ query }) => {
  try {
    const { q: search, page } = searchSchema.parse(query);
    await helpers.anime.search.prefetch({ search, page });
    return {
      props: { trpcState: helpers.dehydrate(), search, page: page ?? 1 },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
