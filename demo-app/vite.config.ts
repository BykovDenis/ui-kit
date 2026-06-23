
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import progress from "vite-plugin-progress";
import colors from "picocolors";
import { visualizer } from "rollup-plugin-visualizer";
// @ts-ignore

const dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  root: "./src",
  base: "/",
  plugins: [
    react(),
    progress({
      format: `${colors.green(colors.bold("Bouilding"))} ${colors.cyan(
        "[:bar]"
      )} :percent`,
    }),
    visualizer({
      template: "treemap", // or sunburst
      open: true,
      gzipSize: false,
      brotliSize: true,
      filename: "analize.html",
    }) as PluginOption,
  ],
  resolve: {
    dedupe: ["react", "react-dom", "styled-components", "use-debounce"],
    alias: {
      react: path.resolve(dirname, "node_modules/react"),
      "react-dom": path.resolve(dirname, "node_modules/react-dom"),
      "styled-components": path.resolve(dirname, "node_modules/styled-components"),
      "use-debounce": path.resolve(dirname, "node_modules/use-debounce"),
    },
    extensions: [
      ".ts",
      ".tsx",
      ".js",
      ".d.ts",
      ".jsx",
      ".scss",
      ".css",
      ".json",
      ".svg",
      ".png",
    ],
  },
  server: {
    port: 3000,
  },
});
