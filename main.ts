import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = "I missed the deadline because I spent the morning convincing the printer it was, in fact, plugged in.";

if (TEXT.length < 1 || TEXT.length > 160) throw new Error("entry must be 1 to 160 characters");
if (TEXT.includes("\n")) throw new Error("entry must be a single line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
