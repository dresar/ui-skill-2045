#!/usr/bin/env node
import { main } from "../lib/cli.js";

main(process.argv.slice(2)).catch((error) => {
  console.error(`\nError: ${error.message}`);
  if (process.env.UI_SKILL_DEBUG) console.error(error.stack);
  process.exitCode = 1;
});
