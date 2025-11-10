/// <reference types="vitest/config" />
import { defineConfig, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
// @ts-ignore-next-line
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  root: './packages',
  base: '/',
  build: {
    outDir: './',
    sourcemap: false,
    minify: 'terser',
    cssMinify: true
  },
  plugins: [react(), visualizer({
    template: 'treemap',
    // or sunburst
    open: true,
    gzipSize: false,
    brotliSize: true,
    filename: 'analize.html'
  }) as PluginOption],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.d.ts', '.jsx', '.scss', '.css', '.json', '.svg', '.png'],
    alias: {
      'storybook/internal/theming': '@storybook/theming',
    },
  },
  define: {
    __dirname: JSON.stringify('/'),
    // ⬅️ добавляем это
    'process.env.REACT_APP_SC_ATTR': JSON.stringify('data-styled')
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        },
        setupFiles: ['.storybook/vitest.setup.ts']
      }
    }]
  }
});