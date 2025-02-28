import { getCollection } from "astro:content";
import type { CollectionKey } from "astro:content";

export const getLocaleCollection = async <T extends CollectionKey>(
  collection: T,
  lang?: string,
) => {
  const data = await getCollection(collection);
  return data.find((u) => u.id.includes(lang ?? "en"))!;
};
