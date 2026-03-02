import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { defineCollection, z } from 'astro:content';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				date: z.coerce.date().optional(),
				categories: z.array(z.string()).optional(),
				tags: z.array(z.string()).optional(),
				discuss: z
					.array(
						z.object({
							platform: z.string(),
							url: z.string().url(),
						}),
					)
					.optional(),
			}),
		}),
	}),
	i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
