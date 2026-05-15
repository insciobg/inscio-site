import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Inscio Team'),
    category: z.string().default('NetSuite'),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    subheading: z.string(),
    intro: z.string(),
    industries: z.array(z.string()),
    softwareReplaced: z.array(z.string()),
    modules: z.array(z.string()),
    stat1Value: z.string(),
    stat1Label: z.string(),
    stat1Sub: z.string(),
    stat2Value: z.string(),
    stat2Label: z.string(),
    stat2Sub: z.string(),
    ctaHeadline: z.string(),
    ctaBody: z.string(),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, 'case-studies': caseStudies };
