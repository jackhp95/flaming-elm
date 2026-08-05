// @ts-check
// One-off generator for elm-pages/review/src/TailwindCss/ClassOrder.elm.
//
// Runs the app's real Tailwind config (tailwind.config.js) plus
// elm-review-tailwindcss-postcss-plugin (see postcss.config.mjs) over
// src/tailwindcss.css, purely to let the plugin observe every generated
// utility class and write out the classOrder/classProps Elm module that
// elm-pages/review/src/ReviewConfig.elm imports. It does not write any CSS
// output and is not part of the app's normal build (see package.json
// "start"/"build"). Re-run via `pnpm generate:tailwind-class-order` whenever
// tailwind.config.js or the Tailwind classes used in the app change.
import fs from "fs";
import postcss from "postcss";

import postcssConfig from "../postcss.config.mjs";

const inputPath = new URL("../src/tailwindcss.css", import.meta.url);
const css = fs.readFileSync(inputPath, "utf-8");

await postcss(postcssConfig.plugins).process(css, { from: "src/tailwindcss.css" })
  .css;

console.log(
  "Generated elm-pages/review/src/TailwindCss/ClassOrder.elm from src/tailwindcss.css"
);
