import solid from "solid-start/vite";
import ssgAdapter from "solid-start-static";
import { defineConfig } from "vite";
import watchGoPlugin from "./dev-helpers/watchGoPlugin.js"

export default defineConfig({
  plugins: [
    {
      ...(await import("@mdx-js/rollup")).default({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx",
      }),
      enforce: "pre",
    },
    solid({
      adapter:ssgAdapter(),
      extensions: [".mdx", ".md"],
    }),
    watchGoPlugin()
  ],
});
