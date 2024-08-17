import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import path from "path";
import watchGoPlugin from "./dev-helpers/watchGoPlugin.js"

export default defineConfig({
  plugins: [solidPlugin(), watchGoPlugin()],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
