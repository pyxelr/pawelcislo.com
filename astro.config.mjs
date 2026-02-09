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
			customCss: ['./src/styles/custom.css'],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/pyxelr' },
				{ icon: 'x.com', label: 'X', href: 'https://x.com/pawel_cislo' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/pawelcislo/' },
				{ icon: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/pawelcislocom/' },
				{ icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/pawel_cislo/' },
				// Note: Goodreads and Hypothes.is don't have built-in icons in Starlight
				// TODO: Add them later with custom SVG icons if needed
				{ icon: 'open-book', label: 'Goodreads', href: 'https://goodreads.com/pyxelr/' },
				{ icon: 'document', label: 'Hypothes.is', href: 'https://hypothes.is/users/pyxelr' },
			],
			sidebar: [
				{ label: 'About', link: '/' },
				{
					label: 'Profile',
					items: [
						{ label: 'Portfolio', slug: 'pages/portfolio' },
						{ label: 'Uses', slug: 'pages/uses' },
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
					items: [
						{ slug: 'posts/2023-07-31-2023-update' },
						{ slug: 'posts/2021-11-14-my-vs-code-playground' },
						{ slug: 'posts/2020-07-10-optimising-our-learning-retention-rate-with-srs-anki' },
						{ slug: 'posts/2020-03-12-recommendatory-interleaf' },
						{ slug: 'posts/2019-07-28-the-potential-of-perspicuous-writing' },
						{ slug: 'posts/2019-06-02-perplexing-ethics-of-ai' },
						{ slug: 'posts/2019-05-01-data-hackathons-trackathon19' },
						{ slug: 'posts/2019-03-25-is-data-science-the-inevitable-cultivation' },
						{ slug: 'posts/2019-02-18-learn-programming-the-powerful-way-or-anything-else' },
						{ slug: 'posts/2018-12-28-my-2018-the-year-of-revolution' },
						{ slug: 'posts/2018-11-09-aim-for-your-goals-the-right-way' },
						{ slug: 'posts/2018-09-30-is-modern-business-complicated-my-summary-of-the-world-business-experience-conference-in-warsaw' },
						{ slug: 'posts/2018-09-16-how-did-i-automate-micrograph-analysis' },
						{ slug: 'posts/2018-09-07-foreword-of-the-greater-intention' },
					],
				},
			],
		}),
	],
});
