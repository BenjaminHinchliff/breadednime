import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { ANIME } from "@consumet/extensions";

const nineanime = new ANIME.Gogoanime();

export const searchRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ query: z.string() }))
    .query(async ({ input }) => {
      const results = await nineanime.search(input.query);
      return results;
    }),
});
