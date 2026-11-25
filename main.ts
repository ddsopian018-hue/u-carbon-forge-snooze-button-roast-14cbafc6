// Snooze Button Roast — one line roasting an alarm clock that rings at 6 AM
// on a Saturday. Writes the roast to entry.txt inside MAKEFUN_OUTPUT_DIR
// (or ./out when run locally), exactly as the grader expects.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My alarm clock rings at 6 AM on Saturday like a rooster fired from the farm for sleeping in, now screaming for revenge outside my bedroom window.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
// The gate rejects anything over 200 characters, so never ship a longer line.
if (ROAST.length > 200) {
  throw new Error(`Roast is ${ROAST.length} characters, over the 200 limit`);
}
writeFileSync(join(outDir, "entry.txt"), ROAST + "\n", "utf8");
console.log(`Wrote ${ROAST.length} characters to ${join(outDir, "entry.txt")}`);
