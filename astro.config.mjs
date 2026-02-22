// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import remarkResponsiveIframes from './plugins/remark-responsive-iframes.mjs';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://pawelcislo.com',
    redirects: {
        '/about': '/',
    },
    markdown: {
        remarkPlugins: [remarkMath, remarkResponsiveIframes],
        rehypePlugins: [rehypeKatex],
    },
    integrations: [starlight({
        title: 'Paweł Cisło',
        logo: {
            src: './src/assets/favicon.svg',
        },
        description: 'Digital garden of an MLOps Engineer — a place for curiosity-driven writing on diverse topics',
        head: [
            {
                tag: 'meta',
                attrs: { property: 'og:image', content: 'https://pawelcislo.com/og-image.png' },
            },
            {
                tag: 'meta',
                attrs: { property: 'og:image:width', content: '1200' },
            },
            {
                tag: 'meta',
                attrs: { property: 'og:image:height', content: '630' },
            },
        ],
        pagination: false,
        lastUpdated: true,
        editLink: {
            baseUrl: 'https://github.com/pyxelr/pawelcislo.com/edit/main/',
        },
        customCss: ['./src/styles/custom.css', 'katex/dist/katex.min.css'],
        components: {
            ThemeSelect: './src/components/ThemeSelect.astro',
            EditLink: './src/components/EditLink.astro',
            PageTitle: './src/components/PageTitle.astro',
            Footer: './src/components/Footer.astro',
        },
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
                    { label: 'Portfolio', slug: 'portfolio' },
                    { label: 'Uses', slug: 'uses' },
                    { label: 'Contact', slug: 'contact' },
                ],
            },
            {
                label: 'Resources',
                items: [
                    { label: 'Recommendations', slug: 'recommendations' },
                    { label: 'Favourite Thoughts', slug: 'favourite-thoughts' },
                    { label: 'Three Goals', slug: 'three-goals' },
                    { label: 'FAQ', slug: 'faq' },
                ],
            },
            {
                label: 'Blog Posts',
                items: [
                    { slug: 'posts/2023-update' },
                    { slug: 'posts/my-vs-code-playground' },
                    { slug: 'posts/optimising-our-learning-retention-rate-with-srs-anki' },
                    { slug: 'posts/recommendatory-interleaf' },
                    { slug: 'posts/the-potential-of-perspicuous-writing' },
                    { slug: 'posts/perplexing-ethics-of-ai' },
                    { slug: 'posts/data-hackathons-trackathon19' },
                    { slug: 'posts/is-data-science-the-inevitable-cultivation' },
                    { slug: 'posts/learn-programming-the-powerful-way-or-anything-else' },
                    { slug: 'posts/my-2018-the-year-of-revolution' },
                    { slug: 'posts/aim-for-your-goals-the-right-way' },
                    { slug: 'posts/is-modern-business-complicated-my-summary-of-the-world-business-experience-conference-in-warsaw' },
                    { slug: 'posts/how-did-i-automate-micrograph-analysis' },
                    { slug: 'posts/foreword-of-the-greater-intention' },
                ],
            },
        ],
		}), sitemap()],
});