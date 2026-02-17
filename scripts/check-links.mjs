#!/usr/bin/env node
/**
 * Link checker for all content pages.
 * Extracts all URLs from markdown files in docs/ and checks them via HTTP HEAD/GET.
 * Outputs broken/unreachable links grouped by file.
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';

const DOCS_DIR = join(import.meta.dirname, '..', 'src', 'content', 'docs');
const TIMEOUT_MS = 15000;
const CONCURRENCY = 20;
const KNOWN_DEAD = new Set(); // We'll populate this from results

// Recursively find all .md and .mdx files
function findMarkdownFiles(dir, base = dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      if (entry === 'images') continue; // skip image directories
      results.push(...findMarkdownFiles(full, base));
    } else if (entry.endsWith('.md') || entry.endsWith('.mdx')) {
      results.push({ absolute: full, relative: relative(base, full) });
    }
  }
  return results;
}

// Extract all URLs from markdown files, keeping track of which file they came from
function extractLinks() {
  const files = findMarkdownFiles(DOCS_DIR);
  const linkMap = new Map(); // url -> Set<filename>
  const urlRegex = /https?:\/\/[^\s)>\]"]+/g;

  for (const { absolute, relative: relPath } of files) {
    const content = readFileSync(absolute, 'utf-8');
    let match;
    while ((match = urlRegex.exec(content)) !== null) {
      let url = match[0];
      // Clean trailing punctuation that's not part of URLs
      url = url.replace(/[.,;:!?]+$/, '');
      if (!linkMap.has(url)) linkMap.set(url, new Set());
      linkMap.get(url).add(relPath);
    }
  }
  return linkMap;
}

async function checkUrl(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    // Try HEAD first (faster)
    let res = await fetch(url, {
      method: 'HEAD',
      signal: controller.signal,
      redirect: 'follow',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; LinkChecker/1.0)',
      },
    });

    // Some servers reject HEAD, retry with GET
    if (res.status === 405 || res.status === 403) {
      res = await fetch(url, {
        method: 'GET',
        signal: controller.signal,
        redirect: 'follow',
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; LinkChecker/1.0)',
        },
      });
    }

    clearTimeout(timer);
    return { url, status: res.status, ok: res.ok };
  } catch (err) {
    clearTimeout(timer);
    const reason = err.name === 'AbortError' ? 'TIMEOUT' : err.cause?.code || err.message;
    return { url, status: 0, ok: false, error: reason };
  }
}

async function runWithConcurrency(tasks, concurrency) {
  const results = [];
  let index = 0;

  async function worker() {
    while (index < tasks.length) {
      const i = index++;
      results[i] = await tasks[i]();
    }
  }

  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  return results;
}

async function main() {
  const linkMap = extractLinks();
  const urls = [...linkMap.keys()];
  console.log(`Found ${urls.length} unique URLs across ${new Set([...linkMap.values()].flatMap(s => [...s])).size} files\n`);
  console.log('Checking links (this may take a minute)...\n');

  const tasks = urls.map(url => () => checkUrl(url));
  const results = await runWithConcurrency(tasks, CONCURRENCY);

  // Filter to broken links
  const broken = results.filter(r => !r.ok);

  if (broken.length === 0) {
    console.log('All links are reachable!');
    return;
  }

  // Group by file
  const byFile = new Map();
  for (const result of broken) {
    const files = linkMap.get(result.url);
    for (const file of files) {
      if (!byFile.has(file)) byFile.set(file, []);
      byFile.get(file).push(result);
    }
  }

  console.log(`\n=== BROKEN LINKS (${broken.length} total) ===\n`);

  for (const [file, links] of [...byFile.entries()].sort()) {
    console.log(`📄 ${file}`);
    for (const link of links) {
      const status = link.error ? `ERR: ${link.error}` : `HTTP ${link.status}`;
      console.log(`   ❌ [${status}] ${link.url}`);
    }
    console.log('');
  }

  // Summary by error type
  const summary = new Map();
  for (const result of broken) {
    const key = result.error ? `ERR: ${result.error}` : `HTTP ${result.status}`;
    summary.set(key, (summary.get(key) || 0) + 1);
  }

  console.log(`=== SUMMARY ===\n`);
  console.log(`Checked: ${urls.length} | Broken: ${broken.length} | OK: ${urls.length - broken.length}\n`);
  for (const [type, count] of [...summary.entries()].sort((a, b) => b[1] - a[1])) {
    console.log(`  ${count.toString().padStart(4)}× ${type}`);
  }
  console.log('');
}

main();
