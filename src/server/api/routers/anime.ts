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
    .input(z.object({ search: z.string() }))
    .query(async ({ input }) => {
      const results = await animeSource.search(input.search);
      return results;
    }),
});
