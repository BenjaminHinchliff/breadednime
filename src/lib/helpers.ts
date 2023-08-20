import { createServerSideHelpers } from "@trpc/react-query/server";
import { appRouter } from "~/server/api/root";
import superjson from "superjson";

export const helpers = createServerSideHelpers({
  router: appRouter,
  ctx: {},
  transformer: superjson,
});
