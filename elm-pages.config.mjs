import { defineConfig } from "vite";

import adapter from "./adapter.mjs";

export default {
  vite: defineConfig({
    server: {
      // Allow any Host header — safe on a trusted tailnet (tailscale-serve access).
      allowedHosts: true,
    },
  }),
  adapter,
};
