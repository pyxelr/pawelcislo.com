import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
	const docs = await getCollection('docs');
	const posts = docs
		.filter((doc) => doc.id.startsWith('posts/'))
		.sort((a, b) => {
			const dateA = a.data.date ? new Date(a.data.date).getTime() : 0;
			const dateB = b.data.date ? new Date(b.data.date).getTime() : 0;
			return dateB - dateA;
		});

	return rss({
		title: 'Paweł Cisło',
		description:
			'Personal website and blog of Paweł Cisło - MLOps Engineer, Data Scientist, and tech enthusiast',
		site: context.site!.toString(),
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.date ?? new Date(),
			link: `/${post.data.slug ?? post.id}/`,
			description: post.data.description ?? '',
		})),
	});
}
