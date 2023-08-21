import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { ANIME } from "@consumet/extensions";

const animeSource = new ANIME.Gogoanime();
if (animeSource.isWorking) {
  console.log(`Anime Source ${animeSource.name} online`);
} else {
  console.warn(`WARNING! Anime Source ${animeSource.name} OFFLINE!`);
}

export const animeRouter = createTRPCRouter({
  search: publicProcedure
    .input(z.object({ search: z.string(), page: z.number().nullish() }))
    .query(({ input }) => {
      return animeSource.search(input.search, input.page ?? undefined);
    }),
  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input }) => {
      return animeSource.fetchAnimeInfo(input.id);
    }),
  streams: publicProcedure
    .input(z.object({ episodeId: z.string() }))
    .query(({ input }) => {
      return animeSource.fetchEpisodeSources(input.episodeId);
    }),
});
