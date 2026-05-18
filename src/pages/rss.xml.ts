import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE, INSIGHTS_ENABLED } from '../config.ts';

export async function GET(context: { site: URL }) {
  const posts = INSIGHTS_ENABLED
    ? await getCollection('insights', ({ data }) => !data.draft)
    : [];

  const sorted = posts.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  return rss({
    title: `${SITE.name} | Insights`,
    description:
      'Articles from MindMotion on runtime safety for AI-driven robots.',
    site: context.site,
    items: sorted.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/insights/${post.id}/`,
    })),
  });
}
