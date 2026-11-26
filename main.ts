// One Star, Written in Sap — entry program for make.fun.
// A houseplant leaves a one-star review of its human owner.
// The program writes the single review line to /output/entry.txt
// and prints the same line to stdout.

import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "★☆☆☆☆ Hired as the ‘emotional support plant’, then watered with cold coffee and parked beside the radiator. I photosynthesize, I don’t do saunas — and somehow I’m the one getting blamed for browning. One star; HR has been notified.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
