import { getCollection, type CollectionEntry } from 'astro:content';

export type InsightPost = CollectionEntry<'insights'>;

// Average adult reading speed used for the "N min read" label.
const WORDS_PER_MINUTE = 200;

const newestFirst = (a: InsightPost, b: InsightPost) =>
  b.data.date.getTime() - a.data.date.getTime();

// Posts for the Insights pages, newest first. Drafts (draft: true) are
// included while running the dev server, so they can be previewed at their
// real URLs, and left out of production builds.
export async function getInsightPosts(): Promise<InsightPost[]> {
  const posts = await getCollection('insights', ({ data }) =>
    import.meta.env.PROD ? !data.draft : true,
  );
  return posts.sort(newestFirst);
}

// Posts for the RSS feed, newest first. Drafts are never included, even in
// development, because feed readers may cache what they fetch.
export async function getPublishedInsightPosts(): Promise<InsightPost[]> {
  const posts = await getCollection('insights', ({ data }) => !data.draft);
  return posts.sort(newestFirst);
}

// "N min read" label for a post body (at least 1 minute).
export function readingTime(body: string | undefined): string {
  const words = (body ?? '').trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / WORDS_PER_MINUTE));
  return `${minutes} min read`;
}
