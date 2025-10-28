import { z } from 'zod';
import { TSeo } from './type';

export const seoSchema = z.object({
  metaTitle: z.string().nullable(),
  metaDescription: z.string().nullable(),
  metaKeywords: z.string().nullable(),
  metaImage: z.any(),
  metaRobots: z.string().nullable(),
  metaAuthor: z.string().nullable(),
  metaCanonical: z.string().nullable(),
  metaRating: z.string().nullable(),
  metaCopyright: z.string().nullable(),
  metaRevisit: z.string().nullable(),
  twitterCard: z.string().nullable(),
  twitterSite: z.string().nullable(),
  schema: z.string().nullable(),
});

export const activitySchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  slug: z.string().min(1, 'Slug is required'),
  image: z.any(),
  imageAlt: z.any().optional(),
  seo: seoSchema,
});
export const destinationSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  slug: z.string().min(1, 'Slug is required'),
  image: z.any(),
  imageAlt: z.any().optional(),
  activityId: z.number(),
  seo: seoSchema,
});

export const packageSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  slug: z.string().min(1, 'Slug is required'),
  image: z.any(),
  destinationId: z.number(),
  seo: seoSchema,
});
export const authorSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1, 'Name is required'),
  username: z.string().min(1, 'Username is required'),
  email: z.string().min(1, 'Email is required'),
  bio: z.string().optional(),
  profilePicture: z.any().optional(),
  socialLinks: z.object({
    facebook: z.string().optional(),
    twitter: z.string().optional(),
    instagram: z.string().optional(),
    linkedin: z.string().optional(),
  }),
  website: z.string().optional(),
  role: z.string().optional(),
  status: z.string().optional(),
});

export type TDestination = z.infer<typeof destinationSchema>;
export type Activity = z.infer<typeof activitySchema>;
export type TAuthor= z.infer<typeof authorSchema>;
