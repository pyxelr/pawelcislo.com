// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://pawelcislo.com',
	integrations: [
		starlight({
			title: 'Paweł Cisło',
			description: 'Personal website and blog of Paweł Cisło - MLOps Engineer, Data Scientist, and tech enthusiast',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/pyxelr' },
				{ icon: 'x.com', label: 'X', href: 'https://x.com/pawel_cislo' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/pawelcislo/' },
				{ icon: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/pawelcislocom/' },
				{ icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/pawel_cislo/' },
				{ icon: 'pinterest', label: 'Pinterest', href: 'https://pinterest.com/pyxelrr/' },
				// Note: Goodreads and Hypothes.is don't have built-in icons in Starlight
				// TODO: Add them later with custom SVG icons if needed
				// { icon: 'goodreads', label: 'Goodreads', href: 'https://goodreads.com/pyxelr/' },
				// { icon: 'hypothes.is', label: 'Hypothes.is', href: 'https://hypothes.is/users/pyxelr' },
			],
			sidebar: [
				{
					label: 'About',
					items: [
						{ label: 'About Me', slug: 'pages/about' },
						{ label: 'Portfolio', slug: 'pages/portfolio' },
						{ label: 'Contact', slug: 'pages/contact' },
					],
				},
				{
					label: 'Resources',
					items: [
						{ label: 'Recommendations', slug: 'pages/recommendations' },
						{ label: 'Favourite Thoughts', slug: 'pages/favourite-thoughts' },
						{ label: 'Three Goals', slug: 'pages/three-goals' },
						{ label: 'FAQ', slug: 'pages/faq' },
					],
				},
				{
					label: 'Blog Posts',
					autogenerate: { directory: 'posts' },
				},
			],
		}),
	],
});
