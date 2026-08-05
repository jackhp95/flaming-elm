// @ts-check
// Not used by the app's normal Tailwind build: `start`/`build` in package.json
// invoke the standalone `tailwindcss` CLI directly, which does not read this
// file. This config exists only to drive the one-off generation script at
// scripts/generate-tailwind-class-order.mjs, which produces the
// TailwindCss.ClassOrder Elm module required by elm-review-tailwindcss's
// NoUnknownClasses/ConsistentClassOrder/NoCssConflict rules. Re-run that
// script (`pnpm generate:tailwind-class-order`) whenever tailwind.config.js
// or the Tailwind classes used in the app change.
import tailwindcss from "tailwindcss";
import { elmReviewTailwindCssPlugin } from "elm-review-tailwindcss-postcss-plugin";

import tailwindConfig from "./tailwind.config.js";

export default {
  plugins: [
    tailwindcss(tailwindConfig),
    elmReviewTailwindCssPlugin({
      outputSourceDir: "elm-pages/review/src",
      tailwindConfig,
    }),
  ],
};
