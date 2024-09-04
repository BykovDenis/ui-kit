import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import progress from "vite-plugin-progress";
import colors from "picocolors";
import { visualizer } from "rollup-plugin-visualizer";

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
