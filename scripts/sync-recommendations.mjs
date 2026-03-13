/**
 * Syncs the README from pyxelr/recommendations-for-engineers into the Starlight page,
 * and merges tool sections into their corresponding knowledge pages.
 *
 * Source of truth: https://github.com/pyxelr/recommendations-for-engineers
 * Target: src/content/docs/recommendations.md
 *
 * Transformations applied:
 *   - Strips H1 title (Starlight uses frontmatter title)
 *   - Strips the Contents/TOC section
 *   - Strips "Inspired by..." line
 *   - Strips "Back to Contents" links
 *   - Strips newsletter subscribe admonition
 *   - Adjusts intro paragraph for website context
 *   - Converts old WordPress post URLs to relative paths
 *   - Converts GitHub-flavored admonitions (> [!TIP], > [!NOTE]) to :::tip / :::note
 *
 * Knowledge page sync:
 *   - 🍎 macOS      → src/content/docs/knowledge/macos/macos.md       (## Tools)
 *   - 📱 Mobile Apps → src/content/docs/knowledge/mobile/android.md   (## Tools)
 *   - 🖥 Windows    → src/content/docs/knowledge/windows/windows.md   (## Tools)
 *   New tools from recommendations are added; existing entries are preserved.
 *
 * Run: node scripts/sync-recommendations.mjs
 */

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const REPO_RAW_URL =
	'https://raw.githubusercontent.com/pyxelr/recommendations-for-engineers/master/README.md';
const OUTPUT_PATH = resolve(
	__dirname,
	'..',
	'src/content/docs/recommendations.md',
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

// ---------------------------------------------------------------------------
// Knowledge-page sync helpers
// ---------------------------------------------------------------------------

/** Extract list content between a `## ` heading containing `title` and the next `## `. */
function extractSection(md, title) {
	const lines = md.split('\n');
	let capturing = false;
	const buf = [];
	for (const line of lines) {
		if (/^## /.test(line) && line.includes(title)) { capturing = true; continue; }
		if (capturing && /^## /.test(line)) break;
		if (capturing) buf.push(line);
	}
	return buf.join('\n').trim();
}

/**
 * Parse a markdown tool list into entries.
 * Each entry: { name, url, lines[], sortKey }
 * Sub-items (indented `  - …`) are grouped under their parent.
 */
function parseToolEntries(text) {
	const lines = text.split('\n');
	const entries = [];
	let cur = null;
	for (const line of lines) {
		if (/^- /.test(line)) {
			if (cur) entries.push(cur);
			const nameM = line.match(/^- \[([^\]]+)\]/);
			const urlM = line.match(/^- \[[^\]]*\]\(([^)]+)\)/);
			const name = nameM ? nameM[1] : line.replace(/^- /, '').split(/\s/)[0];
			cur = {
				name,
				url: urlM ? urlM[1] : null,
				lines: [line],
				sortKey: name.toLowerCase().replace(/^[^a-z0-9]+/, ''),
			};
		} else if (/^\s+/.test(line) && line.trim() && cur) {
			cur.lines.push(line);
		}
	}
	if (cur) entries.push(cur);
	return entries;
}

/**
 * Merge source entries into target entries.
 * Keeps target version when URL or name matches. Adds new source entries.
 * Returns sorted merged array, or null if nothing was added.
 */
function mergeToolEntries(target, source) {
	const targetUrls = new Set(target.map((e) => e.url).filter(Boolean));
	const targetNames = new Set(target.map((e) => e.name.toLowerCase()));

	const added = source.filter((e) => {
		if (e.url && targetUrls.has(e.url)) return false;
		if (targetNames.has(e.name.toLowerCase())) return false;
		return true;
	});

	if (added.length === 0) return null;

	const merged = [...target, ...added];
	merged.sort((a, b) => a.sortKey.localeCompare(b.sortKey));
	return merged;
}

/**
 * Sync tools from a recommendations section into a knowledge page's ## Tools section.
 */
function syncToolsToPage(recsMd, sectionTitle, pagePath, label) {
	if (!existsSync(pagePath)) {
		console.log(`⏭  ${label}: file not found, skipping`);
		return;
	}

	const sectionContent = extractSection(recsMd, sectionTitle);
	if (!sectionContent) {
		console.log(`⏭  ${label}: section "${sectionTitle}" not found in recommendations`);
		return;
	}
	const sourceEntries = parseToolEntries(sectionContent);

	const page = readFileSync(pagePath, 'utf-8');
	const pageLines = page.split('\n');

	// Locate ## Tools boundaries
	let headingIdx = -1;
	let endIdx = pageLines.length;
	for (let i = 0; i < pageLines.length; i++) {
		if (pageLines[i] === '## Tools') headingIdx = i;
		else if (headingIdx >= 0 && /^## /.test(pageLines[i]) && i > headingIdx) {
			endIdx = i;
			break;
		}
	}
	if (headingIdx < 0) {
		console.log(`⏭  ${label}: no "## Tools" section found`);
		return;
	}

	const toolsText = pageLines.slice(headingIdx + 1, endIdx).join('\n').trim();
	const targetEntries = parseToolEntries(toolsText);
	const merged = mergeToolEntries(targetEntries, sourceEntries);

	if (!merged) {
		console.log(`✅ ${label}: already up to date (${targetEntries.length} tools)`);
		return;
	}

	const newCount = merged.length - targetEntries.length;
	const serialized = merged.map((e) => e.lines.join('\n')).join('\n');

	const before = pageLines.slice(0, headingIdx + 1).join('\n');
	const after = endIdx < pageLines.length ? pageLines.slice(endIdx).join('\n') : '';
	const rebuilt = after
		? `${before}\n\n${serialized}\n\n${after}`
		: `${before}\n\n${serialized}\n`;

	writeFileSync(pagePath, rebuilt);
	console.log(
		`✅ ${label}: ${newCount} new tool(s) added (${merged.length} total)`,
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
		"don't hesitate to [tell me](/contact/) if I missed something interesting or if there is a dead link. You are also welcome to create a pull request and see the history of edits in the [GitHub repo](https://github.com/pyxelr/recommendations-for-engineers).",
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

	// 9. Normalise horizontal rules from GitHub style to Starlight style
	md = md.replace(/\* \* \* \* \*/g, '* * *');

	// 10. Strip newsletter subscribe admonition
	md = md.replace(/> \[!(?:TIP|NOTE)\]\n> \[Subscribe to my newsletter\].*?\n\n/gi, '');

	// 11. Convert GitHub-flavored admonitions to Starlight syntax
	md = convertGfmAdmonitions(md);

	// 12. Clean up excessive blank lines (max 2 consecutive)
	md = md.replace(/\n{4,}/g, '\n\n\n');

	// Combine frontmatter + content
	const output = `${FRONTMATTER}\n\n${md.trim()}\n`;

	writeFileSync(OUTPUT_PATH, output);
	console.log(`✅ Written to ${OUTPUT_PATH}`);

	// --- Sync tool sections into knowledge pages ---
	console.log('\nSyncing tools into knowledge pages…');
	const knowledgePages = [
		{
			section: 'macOS',
			path: resolve(__dirname, '..', 'src/content/docs/knowledge/macos/macos.md'),
			label: 'macOS → macos.md',
		},
		{
			section: 'Mobile Apps',
			path: resolve(__dirname, '..', 'src/content/docs/knowledge/mobile/android.md'),
			label: 'Mobile Apps → android.md',
		},
		{
			section: 'Windows',
			path: resolve(__dirname, '..', 'src/content/docs/knowledge/windows/windows.md'),
			label: 'Windows → windows.md',
		},
	];
	for (const { section, path, label } of knowledgePages) {
		try {
			syncToolsToPage(md, section, path, label);
		} catch (err) {
			console.error(`⚠️  ${label}: ${err.message}`);
		}
	}
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
