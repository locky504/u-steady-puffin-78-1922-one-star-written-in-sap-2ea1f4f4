// One Star, Written in Sap — entry program for make.fun.
// A houseplant leaves a one-star review of its human owner.
// The program writes the single review line to /output/entry.txt
// and prints the same line to stdout.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const entry =
  "★☆☆☆☆ Hired as the ‘emotional support plant’, then watered with cold coffee and parked beside the radiator. I photosynthesize, I don’t do saunas — and somehow I’m the one getting blamed for browning. One star; HR has been notified.";

// Reject entries that are empty, padded, multi-line, overlong,
// or missing the one-star rating prefix.
function validateEntry(text: string): void {
  if (text.length === 0) throw new Error("entry must not be empty");
  if (text.length > 280) throw new Error("entry must be at most 280 characters");
  if (text !== text.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (!text.startsWith("★☆☆☆☆")) {
    throw new Error("entry must start with ★☆☆☆☆");
  }
}

// Validate, write the entry to disk, and echo it to stdout.
function writeEntry(text: string, outputPath: string): void {
  validateEntry(text);
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, text, "utf8");
  console.log(text);
}

// Output path is configurable; default keeps the original location.
const outputPath = process.env.ENTRY_OUTPUT_PATH ?? "/output/entry.txt";

writeEntry(entry, outputPath);
