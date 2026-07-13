#!/usr/bin/env node
/**
 * Generates components/page-meta.json: last-modified date, revision count,
 * and short SHA for each app route, derived from that page file's git
 * history. The manifest is committed so builds without git history
 * (e.g. Vercel build containers) still have the data; when git is
 * unavailable this script leaves the committed manifest untouched.
 */
import { execSync } from "node:child_process";
import { readdirSync, statSync, writeFileSync, existsSync } from "node:fs";
import { join, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const appDir = join(root, "app");
const outFile = join(root, "components", "page-meta.json");

function pageFiles(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...pageFiles(full));
    else if (name === "page.js") out.push(full);
  }
  return out;
}

function git(cmd) {
  return execSync(cmd, { cwd: root, encoding: "utf8" }).trim();
}

try {
  git("git rev-parse --is-inside-work-tree");
} catch {
  if (!existsSync(outFile)) {
    writeFileSync(outFile, "{}\n");
    console.warn("page-meta: git unavailable, wrote empty manifest");
  } else {
    console.warn("page-meta: git unavailable, keeping committed manifest");
  }
  process.exit(0);
}

const manifest = {};
for (const file of pageFiles(appDir)) {
  const rel = relative(root, file);
  const updated = git(`git log -1 --format=%cI -- "${rel}"`);
  if (!updated) continue; // page not committed yet

  const relDir = relative(appDir, dirname(file)).replaceAll("\\", "/");
  const route = relDir === "" || relDir === "." ? "/" : `/${relDir}`;

  manifest[route] = {
    updated,
    rev: Number(git(`git rev-list --count HEAD -- "${rel}"`)),
    sha: git(`git log -1 --format=%h -- "${rel}"`),
  };
}

writeFileSync(outFile, JSON.stringify(manifest, null, 2) + "\n");
console.log(`page-meta: wrote ${Object.keys(manifest).length} routes`);
