import path from "node:path";
import { defineConfig } from "vite";
import { standardCssModules } from "vite-plugin-standard-css-modules";

const prod = process.env.NODE_ENV === "production";

export default defineConfig({
  root: "src",
  base: prod ? `/${path.basename(process.cwd())}/` : "/",
  mode: prod ? "production" : "development",
  publicDir: "../public",
  css: {
    transformer: "lightningcss" /* "postcss" */,
    lightningcss: {
      drafts: {
        customMedia: true,
      },
    },
  },
  plugins: [standardCssModules()],
  server: { port: 1234 },
  build: {
    outDir: "../dist",
  },
});
