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
        '/2018/09/07/foreword-of-the-greater-intention/': '/posts/foreword-of-the-greater-intention/',
        '/2018/09/16/how-did-i-automate-micrograph-analysis/': '/posts/how-did-i-automate-micrograph-analysis/',
        '/2018/09/30/is-modern-business-complicated-my-summary-of-the-world-business-experience-conference-in-warsaw/': '/posts/is-modern-business-complicated-my-summary-of-the-world-business-experience-conference-in-warsaw/',
        '/2018/11/09/aim-for-your-goals-the-right-way/': '/posts/aim-for-your-goals-the-right-way/',
        '/2018/12/28/my-2018-the-year-of-revolution/': '/posts/my-2018-the-year-of-revolution/',
        '/2019/02/18/learn-programming-the-powerful-way-or-anything-else/': '/posts/learn-programming-the-powerful-way-or-anything-else/',
        '/2019/03/25/is-data-science-the-inevitable-cultivation/': '/posts/is-data-science-the-inevitable-cultivation/',
        '/2019/05/01/data-hackathons-trackathon19/': '/posts/data-hackathons-trackathon19/',
        '/2019/06/02/perplexing-ethics-of-ai/': '/posts/perplexing-ethics-of-ai/',
        '/2019/07/28/the-potential-of-perspicuous-writing/': '/posts/the-potential-of-perspicuous-writing/',
        '/2020/03/12/recommendatory-interleaf/': '/posts/recommendatory-interleaf/',
        '/2020/07/10/optimising-our-learning-retention-rate-with-srs-anki/': '/posts/optimising-our-learning-retention-rate-with-srs-anki/',
        '/2021/11/14/my-vs-code-playground/': '/posts/my-vs-code-playground/',
        '/2023/07/31/2023-update/': '/posts/2023-update/',
        // Short URLs
        '/knowledge/espanso': '/knowledge/software/espanso/',
        '/knowledge/obsidian': '/knowledge/software/obsidian/',
        '/cv': '/Resume-PawelCislo.pdf',
        '/fb': 'https://www.facebook.com/pawelcislocom/',
        '/facebook': 'https://www.facebook.com/pawelcislocom/',
        '/github': 'https://github.com/pyxelr',
        '/goodreads': 'http://goodreads.com/pyxelr',
        '/hypothesis': 'https://hypothes.is/users/pyxelr',
        '/ig': 'https://www.instagram.com/pawel_cislo/',
        '/instagram': 'https://www.instagram.com/pawel_cislo/',
        '/linkedin': 'https://www.linkedin.com/in/pawelcislo/',
        '/newsletter': 'https://pawelcislo.substack.com',
        '/resume': '/Resume-PawelCislo.pdf',
        '/soundcloud': 'https://soundcloud.com/pyxelr',
        '/twitter': 'https://x.com/pawel_cislo',
        '/x': 'https://x.com/pawel_cislo',
        '/youtube': 'https://youtube.com/pyxelr',
        '/yt': 'https://youtube.com/pyxelr',
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
                attrs: { name: 'author', content: 'Paweł Cisło' },
            },
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
            {
                tag: 'script',
                attrs: { src: '/scripts/mobile-scroll-header.js', defer: true },
            },
        ],
        tableOfContents: { maxHeadingLevel: 6 },
        pagination: false,
        lastUpdated: true,
        editLink: {
            baseUrl: 'https://github.com/pyxelr/pawelcislo.com/edit/main/',
        },
        customCss: ['./src/styles/custom.css', 'katex/dist/katex.min.css'],
        expressiveCode: {
            themes: ['dracula'],
        },
        disable404Route: true,
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
            { label: '#About', link: '/' },
            {
                label: '#Profile',
                items: [
                    { label: 'Portfolio', slug: 'portfolio' },
                    { label: 'Uses', slug: 'uses' },
                    { label: 'FAQ', slug: 'faq' },
                    { label: 'Favourite Thoughts', slug: 'favourite-thoughts' },
                    { label: 'Contact', slug: 'contact' },
                ],
            },
            { label: '#tags', link: '/tags/' },
            { label: '#Recommendations', link: '/recommendations/' },
            {
                label: '#Knowledge',
                collapsed: true,
                items: [
                    {
                        label: 'Health',
                        items: [
                            { label: 'Biohacking', slug: 'knowledge/health/biohacking-not-only-for-programmers' },
                            { label: 'Triphasic Breathing', slug: 'knowledge/health/triphasic-breathing-meditation' },
                        ],
                    },
                    {
                        label: 'macOS',
                        items: [
                            { label: 'macOS', slug: 'knowledge/macos/macos' },
                        ],
                    },
                    {
                        label: 'Math',
                        items: [
                            { label: 'Statistics', slug: 'knowledge/math/statistics' },
                        ],
                    },
                    {
                        label: 'MLOps',
                        items: [
                            { label: 'CKAD study guide', slug: 'knowledge/mlops/ckad-study-guide' },
                            { label: 'Kubernetes', slug: 'knowledge/mlops/kubernetes' },
                            { label: 'My Docker commands', slug: 'knowledge/mlops/my-docker-commands' },
                        ],
                    },

                    {
                        label: 'Mobile',
                        items: [
                            { label: 'Android', slug: 'knowledge/mobile/android' },
                        ],
                    },
                    {
                        label: 'Music',
                        items: [
                            { label: 'FL Studio', slug: 'knowledge/music/fl-studio' },
                            { label: 'Music', slug: 'knowledge/music/music' },
                        ],
                    },
                    {
                        label: 'Software',
                        items: [
                            { label: 'Alfred', slug: 'knowledge/software/alfred' },
                            { label: 'BetterTouchTool', slug: 'knowledge/software/bettertouchtool' },
                            { label: 'Espanso', slug: 'knowledge/software/espanso' },
                            { label: 'Karabiner-Elements', slug: 'knowledge/software/karabiner-elements' },
                            { label: 'Obsidian', slug: 'knowledge/software/obsidian' },
                            { label: 'Raycast', slug: 'knowledge/software/raycast' },
                            { label: 'VS Code', slug: 'knowledge/software/vs-code' },
                            { label: 'Zed', slug: 'knowledge/software/zed' },
                        ],
                    },
                    {
                        label: 'Windows',
                        items: [
                            { label: 'Windows', slug: 'knowledge/windows/windows' },
                        ],
                    },

                ],
            },
            {
                label: '#Blog Posts',
                collapsed: true,
                items: [
                    { slug: 'posts/migrating-from-wordpress-to-astrojs-starlight' },
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
            {
                label: '#Archived',
                collapsed: true,
                items: [
                    { label: 'Three Goals', slug: 'three-goals' },
                ],
            },
        ],
		}), sitemap()],
});