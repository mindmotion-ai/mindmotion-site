import rss from '@astrojs/rss';
import { SITE, INSIGHTS_ENABLED } from '../config.ts';
import { getPublishedInsightPosts } from '../lib/insights.ts';

export async function GET(context: { site: URL }) {
  const posts = INSIGHTS_ENABLED ? await getPublishedInsightPosts() : [];

  return rss({
    title: `${SITE.name} | Insights`,
    description:
      'Articles from MindMotion on runtime safety for AI-driven robots.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/insights/${post.id}/`,
    })),
  });
}
