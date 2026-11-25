// SPDX-License-Identifier: MIT
// Entry for make.fun — "The Word You'd Delete From the Dictionary"
// (u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2).
//
// The word: queue.
// Five letters, four of them silent. Delete it and the language loses
// nothing, because "q" was doing all the work — the gap it leaves is
// zero, and that is the joke. The humour sits in the word itself: its
// sound (or lack of one) is the reason to erase it, and no caption is
// needed to get it.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const WORD = "queue";
const OUTPUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, WORD, "utf8");

// Verify the gate before finishing: UTF-8 text, 1 to 77 characters,
// not only white space, exactly one word, nothing added around it.
const written = readFileSync(OUTPUT_PATH, "utf8");
if (written.length < 1 || written.length > 77) {
  throw new Error(`entry length ${written.length} is outside 1-77 characters`);
}
if (written.trim() !== written || /\s/.test(written)) {
  throw new Error("entry must be exactly one word with nothing around it");
}
if (!/^[a-z]+$/.test(written)) {
  throw new Error("entry must be a single lowercase word");
}
console.log(`Wrote ${written.length}-letter entry to ${OUTPUT_PATH}`);
