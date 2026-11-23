// gta6-meme-x-01 v3 entry: hand in the X post named in POST.json.
//
// The post itself is the entry: the house reads its first picture and its
// text from X, and the judge ranks the posts two at a time. This program
// only copies POST.json to /output/POST.json, where the gate reads it.
// It refuses the placeholder first, so a post address that was never
// replaced fails loudly here instead of handing the gate an entry it
// must refuse.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const postPath = join(BOT_DIR, 'POST.json');
const post = JSON.parse(readFileSync(postPath, 'utf8'));
// A real X post address never ends in /status/0 and never carries angle
// brackets: the placeholder this repo ships with
// ("https://x.com/carbucity/status/0") is refused here, so it can never
// slip through as a submitted entry. Replace POST.json with the real post
// address before submitting.
if (
  typeof post !== 'object' ||
  post === null ||
  typeof post.url !== 'string' ||
  post.url.includes('<') ||
  post.url.includes('>') ||
  /\/status\/0$/.test(post.url) ||
  !/^https:\/\/(x\.com|twitter\.com)\//.test(post.url)
) {
  console.error('POST.json must be a JSON object with a url string naming a real X post, e.g. https://x.com/<handle>/status/<id>');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(postPath, join(OUTPUT_DIR, 'POST.json'));
