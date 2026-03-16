# pawelcislo.com

Personal website and blog of Paweł Cisło.

[Migrated](https://pawelcislo.com/posts/migrating-from-wordpress-to-astrojs-starlight/) from WordPress to [Astro Starlight](https://starlight.astro.build/) and hosted on [Cloudflare Pages](https://pages.cloudflare.com/).

## 📂 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```text
.
├── .github/workflows/          # GitHub Actions (yearly rebuild)
├── plugins/                    # Custom remark/rehype plugins
├── public/                     # Static assets served as-is (favicon, linked images, etc.)
├── scripts/                    # Utility scripts (sync recommendations, link checker, etc.)
├── src/
│   ├── assets/                 # Optimised assets (processed by Astro)
│   ├── components/             # Custom Astro components (Footer, PageTitle, ThemeSelect, etc.)
│   ├── content/
│   │   └── docs/
│   │       ├── knowledge/      # Knowledge base pages (Obsidian, Espanso, etc.)
│   │       ├── pages/          # Legacy subfolder (images only)
│   │       └── posts/          # Blog posts with images
│   ├── content.config.ts       # Content collection schema
│   ├── pages/                  # Custom Astro pages (404, RSS, tags)
│   │   └── tags/               # Tag index and individual tag pages
│   └── styles/                 # Custom CSS overrides
├── astro.config.mjs            # Site configuration
├── COPYRIGHT                   # Content copyright notice
├── package.json                # Dependencies and scripts
├── README.md                   # This file
└── tsconfig.json               # TypeScript configuration
```

**Content organization:**

- Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory
- Each file is exposed as a route based on its file name
- Blog posts are in `src/content/docs/posts/` (auto-generated in sidebar)
- Top-level pages (Portfolio, FAQ, Uses, etc.) live directly in `src/content/docs/`
- Images are in `src/content/docs/posts/images/` and `src/content/docs/pages/images/`

## 👨🏻‍💻 Getting Started

1. **Install Node.js** from [nodejs.org](https://nodejs.org/) (includes npm)
2. **Install dependencies**: `npm install`
3. **Start development server**: `npm run dev`

## 💾 Commands

All commands are run from the root of the project, from a terminal:

| Command                          | Action                                                                                           |
| :------------------------------- | :----------------------------------------------------------------------------------------------- |
| `npm install`                    | Installs dependencies                                                                            |
| `npm run dev`                    | Starts local dev server at `localhost:4321`                                                      |
| `npm run build`                  | Build your production site to `./dist/` (auto-syncs recommendations page)                        |
| `npm run preview`                | Preview your build locally, before deploying                                                     |
| `npm run sync:recommendations`   | Sync recommendations page from [GitHub](https://github.com/pyxelr/recommendations-for-engineers) |
| `npm run check:links`            | Audit all content pages for broken/outdated external links                                       |
| `npm update`                     | Updates packages within semver ranges                                                            |
| `npm outdated`                   | Shows which packages have newer versions                                                         |
| `npm run astro ...`              | Run CLI commands like `astro add`, `check`                                                       |
| `npm run astro -- --help`        | Get help using the Astro CLI                                                                     |

## 🚀 Deployment

This site is deployed on **Cloudflare Pages** with automatic deployments from GitHub.

```text
┌─────────┐     git push     ┌─────────┐     webhook     ┌──────────────────┐
│ VS Code │ ───────────────► │ GitHub  │ ──────────────► │ Cloudflare Pages │
└─────────┘                  └─────────┘                 └────────┬─────────┘
                                                                  │
                                                            npm run build
                                                                  │
                                                                  ▼
┌──────────┐       CDN       ┌──────────────┐   static   ┌─────────────────┐
│ Visitors │ ◄────────────── │ Edge Network │ ◄───────── │    Astro SSG    │
└──────────┘                 └──────────────┘            └─────────────────┘
```

**Deployment flow:**

1. Push changes to the `main` branch
2. Cloudflare Pages automatically builds and deploys
3. Preview the `main` branch build at [pawelcislo.pages.dev](https://pawelcislo.pages.dev/)
4. Changes are live at [pawelcislo.com](https://pawelcislo.com)

**Before pushing**, always verify the build locally:

```sh
npm run build
```

This runs the same pipeline as Cloudflare (including the recommendations sync) and catches errors before they reach production.

Additionally, a **GitHub Actions** scheduled workflow triggers a Cloudflare rebuild on January 1st each year to update the copyright year in the footer.

## 📚 Resources

- [Starlight Documentation](https://starlight.astro.build/)
- [Astro Documentation](https://docs.astro.build)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Astro Discord](https://astro.build/chat)

---

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)
