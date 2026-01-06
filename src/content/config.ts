/* ===========================================
   Content Collections Configuration
   ===========================================

   Defines the schema for blog posts.
   Using content collections provides:
   - Type safety for frontmatter
   - Automatic type inference
   - Validation on build

   Future collections to add:
   - projects: For case studies or project details
   - notes: For quick thoughts or snippets
*/

import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content', // v2.5.0+ requires 'content' or 'data'
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()).optional(),
    // Future fields:
    // featured: z.boolean().default(false),
    // draft: z.boolean().default(false),
  })
});

export const collections = {
  blog: blogCollection,
};
