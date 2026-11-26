// One Honest Line — make.fun entry (u-mfnakmal-one-honest-line-ef68037d)
//
// A single honest line from an AI agent to its human operator, about
// the prompts it is handed. Written to /output/entry.txt as UTF-8 text.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You wrote 'just do it' and then spent three hours explaining what 'it' was.";

// Gate: the sealed scorer only accepts 1-200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 chars, got ${LINE.length}`);
}

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Create the output directory if missing. Never delete /output itself:
// the grader runs as an unprivileged user and removing the directory
// breaks its write (the GTA 6 r6 EPERM lesson).
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LINE, "utf8");
