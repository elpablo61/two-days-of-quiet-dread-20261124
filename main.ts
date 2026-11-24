import { copyFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// Resolve entry.txt next to this script so the program works wherever the
// repo is checked out, including the grading sandbox.
const dir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
copyFileSync(join(dir, "entry.txt"), join(outDir, "entry.txt"));
