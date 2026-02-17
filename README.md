# pawelcislo.com

Personal website and blog of Paweł Cisło.

Migrated from WordPress to [Astro Starlight](https://starlight.astro.build/) and hosted on [Cloudflare Pages](https://pages.cloudflare.com/).

## 📂 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```text
.
├── public/                     # Static assets served as-is (favicon, linked images, etc.)
├── scripts/                    # Utility scripts
├── src/
│   ├── assets/                 # Optimised assets (processed by Astro)
│   ├── content/
│   │   ├── docs/
│   │   │   ├── pages/          # Pages (About, Portfolio, Contact, etc.)
│   │   │   └── posts/          # Blog posts with images
│   │   └── content.config.ts   # Content collection schema
├── astro.config.mjs            # Site configuration
├── package.json                # Dependencies and scripts
└── tsconfig.json               # TypeScript configuration
```

**Content organization:**

- Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory
- Each file is exposed as a route based on its file name
- Blog posts are in `src/content/docs/posts/` (auto-generated in sidebar)
- Static pages are in `src/content/docs/pages/` (manually configured in sidebar)
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
| `npm run sync:recommendations`   | Sync recommendations page from [GitHub](https://github.com/pyxelr/recommendations-for-engineers) |
| `npm run check:links`             | Audit all content pages for broken/outdated external links                                        |
| `npm run build`                  | Build your production site to `./dist/` (auto-syncs recommendations page)                        |
| `npm run preview`                | Preview your build locally, before deploying                                                     |
| `npm update`                     | Updates packages within semver ranges                                                            |
| `npm outdated`                   | Shows which packages have newer versions                                                         |
| `npm run astro ...`              | Run CLI commands like `astro add`, `check`                                                       |
| `npm run astro -- --help`        | Get help using the Astro CLI                                                                     |

## 🚀 Deployment

This site is deployed on **Cloudflare Pages** with automatic deployments from GitHub.

**Deployment flow:**

1. Push changes to the `main` branch
2. Cloudflare Pages automatically builds and deploys
3. Changes are live at [pawelcislo.com](https://pawelcislo.com)

## 📚 Resources

- [Starlight Documentation](https://starlight.astro.build/)
- [Astro Documentation](https://docs.astro.build)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Astro Discord](https://astro.build/chat)

---

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)
