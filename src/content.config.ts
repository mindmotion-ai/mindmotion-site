import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const insights = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string().default('MindMotion'),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).optional(),
    series: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { insights };
