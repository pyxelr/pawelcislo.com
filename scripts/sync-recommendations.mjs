/**
 * Syncs the README from pyxelr/recommendations-for-engineers into the Starlight page.
 *
 * Source of truth: https://github.com/pyxelr/recommendations-for-engineers
 * Target: src/content/docs/pages/recommendations.md
 *
 * Transformations applied:
 *   - Strips H1 title (Starlight uses frontmatter title)
 *   - Strips the Contents/TOC section
 *   - Strips "Inspired by..." line
 *   - Strips "Back to Contents" links
 *   - Adjusts intro paragraph for website context
 *   - Converts old WordPress post URLs to relative paths
 *   - Converts GitHub-flavored admonitions (> [!TIP], > [!NOTE]) to :::tip / :::note
 *
 * Run: node scripts/sync-recommendations.mjs
 */

import { existsSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const REPO_RAW_URL =
	'https://raw.githubusercontent.com/pyxelr/recommendations-for-engineers/master/README.md';
const OUTPUT_PATH = resolve(
	__dirname,
	'..',
	'src/content/docs/pages/recommendations.md',
);

const FRONTMATTER = `---
title: "Recommendations for Engineers"
date: 2019-11-24
---`;

// Convert GitHub-flavored admonitions (> [!TIP], > [!NOTE], etc.) to Starlight :::type syntax
function convertGfmAdmonitions(md) {
	return md.replace(
		/^> \[!(TIP|NOTE|WARNING|CAUTION|IMPORTANT)\]\n((?:> .*(?:\n|$))+)/gim,
		(_match, type, body) => {
			const content = body
				.replace(/^> ?/gm, '') // strip leading > from each line
				.replace(/ {2,}\n/g, '\n\n') // convert trailing-space line breaks to paragraph breaks
				.trimEnd();
			return `:::${type.toLowerCase()}\n${content}\n:::\n`;
		},
	);
}

async function main() {
	console.log(`Fetching README from ${REPO_RAW_URL} …`);
	const res = await fetch(REPO_RAW_URL);
	if (!res.ok) {
		throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
	}
	let md = await res.text();

	// 1. Strip the H1 title
	md = md.replace(/^# Recommendations for Engineers\n+/, '');

	// 2. Strip the Contents / TOC section (everything between "## Contents" and the "* * * * *" rule)
	md = md.replace(/## Contents[\s\S]*?\* \* \* \* \*\n*/, '');

	// 3. Strip "Inspired by the awesome list thing." paragraph
	md = md.replace(
		/Inspired by the \[awesome\]\(https:\/\/github\.com\/sindresorhus\/awesome\) list thing\.\n*/,
		'',
	);

	// 4. Remove "**[⬆ Back to Contents](#contents)**" links
	md = md.replace(
		/\*\*\[⬆ Back to Contents\]\(#contents\)\*\*\n*/g,
		'',
	);

	// 5. Adjust intro paragraph for website context
	md = md.replace(
		/suggestions from \[my blog posts\]\(https:\/\/pawelcislo\.com\/\), where/,
		'suggestions from my blog posts, where',
	);
	md = md.replace(
		"don't hesitate to create a pull request if I missed something interesting or if there is a dead link.",
		"don't hesitate to [tell me](/pages/contact/) if I missed something interesting or if there is a dead link. You are also welcome to create a pull request and see the history of edits in the [GitHub repo](https://github.com/pyxelr/recommendations-for-engineers).",
	);

	// 6. Convert old WordPress-style pawelcislo.com post URLs to relative paths
	// e.g. https://pawelcislo.com/2020/07/10/some-post/ → /posts/some-post/
	md = md.replace(
		/https:\/\/pawelcislo\.com\/\d{4}\/\d{2}\/\d{2}\/([\w-]+)\//g,
		'/posts/$1/',
	);

	// 7. Convert remaining pawelcislo.com homepage links to relative /
	md = md.replace(/https:\/\/pawelcislo\.com\//g, '/');

	// 8. Strip old WordPress #ftoc-heading-N anchors
	md = md.replace(/#ftoc-heading-\d+/g, '');

	// 9. Add the browsing tip before the first horizontal rule
	md = md.replace(
		/(\n)\* \* \* \* \*\n/,
		'\n_Tip_: The catalogue is sorted chronologically, but I believe it is easier and more practical to browse this site by categories (using the TOC).\n\n* * *\n',
	);

	// 10. Normalise horizontal rules from GitHub style to Starlight style
	md = md.replace(/\* \* \* \* \*/g, '* * *');

	// 11. Convert GitHub-flavored admonitions to Starlight syntax
	md = convertGfmAdmonitions(md);

	// 12. Clean up excessive blank lines (max 2 consecutive)
	md = md.replace(/\n{4,}/g, '\n\n\n');

	// Combine frontmatter + content
	const output = `${FRONTMATTER}\n\n${md.trim()}\n`;

	writeFileSync(OUTPUT_PATH, output);
	console.log(`✅ Written to ${OUTPUT_PATH}`);
}

main().catch((err) => {
	console.error('⚠️  Sync failed:', err.message);
	if (existsSync(OUTPUT_PATH)) {
		console.log('ℹ️  Keeping existing recommendations.md');
	} else {
		console.error('❌ No existing file to fall back to — aborting build.');
		process.exit(1);
	}
});
