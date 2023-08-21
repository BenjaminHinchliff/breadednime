import Link from "next/link";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import AnimeCover from "~/components/anime-cover";
import { Navbar } from "~/components/navbar";
import { api } from "~/lib/api";
import { helpers } from "~/lib/helpers";
import { chooseTitle } from "~/lib/title";
import { VideoSkeleton } from "~/components/skeletons/video-skeleton";
import { VideoPlayer } from "~/components/video-player";

export default function Anime({
  id,
  episode,
  episodeId,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const infoQuery = api.anime.byId.useQuery({ id });
  const streamQuery = api.anime.streams.useQuery({ episodeId });

  const {
    title,
    otherName,
    genres,
    cover,
    image,
    description,
    episodes,
    releaseDate,
  } = infoQuery.data!;

  return (
    <>
      <Navbar />
      {streamQuery.data ? (
        <VideoPlayer
          name={`${title} Episode ${episode}`}
          sources={streamQuery.data.sources}
        />
      ) : (
        <VideoSkeleton />
      )}
      <div className="flex basis-1 flex-col justify-start sm:flex-row">
        <AnimeCover
          className="h-96 w-64 flex-none self-center sm:self-auto"
          cover={cover ?? image ?? ""}
        />

        <div className="sm:ml-4">
          <div>
            <h1 className="text-4xl">{chooseTitle(title)}</h1>
            {otherName && (
              <h2 className="text-md text-muted-foreground">{otherName}</h2>
            )}
          </div>
          <div>
            <p className="mx-0.5 inline-block rounded-full bg-primary px-2 py-0.5 text-primary-foreground">
              {releaseDate}
            </p>
            <p className="mr-1 inline-block">Genres: </p>
            {genres?.map((g) => (
              <p className="mx-0.5 inline-block rounded-full bg-primary px-2 py-0.5 text-primary-foreground">
                {g}
              </p>
            ))}
          </div>
          <p className="min-w-sm flex-initial">{description}</p>
        </div>
      </div>
      <div>
        <p className="text-2xl">Episodes</p>
        <div className="mt-1">
          {episodes?.map(({ number }) => (
            <Link
              href={`/anime/${id}/${number}`}
              key={number}
              className="mx-0.5 inline-block w-9 rounded-md bg-primary p-1 text-center text-lg text-primary-foreground"
            >
              {number}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<
  {
    id: string;
    episode: number;
    episodeId: string;
  },
  { id: string; ep: string }
> = async ({ params }) => {
  const { id, ep: epS } = params!;
  const info = await helpers.anime.byId.fetch({ id });
  const ep = parseInt(epS);
  if (isNaN(ep)) {
    return {
      notFound: true,
    };
  }
  const episodeId = info.episodes![ep - 1]!.id;
  return {
    props: { trpcState: helpers.dehydrate(), id, episode: ep, episodeId },
  };
};
