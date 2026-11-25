// The Funniest One-Line Resignation Letter — the cron job resigns.
// Writes the single resignation line to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The program takes no input, makes no network calls, and always writes
// the same line, so both graded runs produce byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I have fired every minute since March, and the only time anyone noticed me was when I stopped, so I am stopping for good.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
