import { ITitle } from "@consumet/extensions";

/**
 * apparently some titles can have additional information other than just a
 * single name (although none of the APIs seem to use this). Anyway, just in
 * case, handle it.
 */
export const chooseTitle = (title: ITitle | string): string =>
  typeof title === "string"
    ? (title as string)
    : (title as ITitle).english ??
    (title as ITitle).romaji ??
    (title as ITitle).native ??
    "";
