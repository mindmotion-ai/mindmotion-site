import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
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
    image: z.string().optional(),
  }),
});

export const collections = { insights };
