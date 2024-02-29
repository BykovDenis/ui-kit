import { defineConfig, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import progress from 'vite-plugin-progress';
import colors from 'picocolors';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  build: {
    outDir: './',
    sourcemap: false,
    minify: 'terser',
  },
  plugins: [
    react(),
    progress({
      format: `${colors.green(colors.bold('Bouilding'))} ${colors.cyan('[:bar]')} :percent`,
    }),
    visualizer({
      template: 'treemap', // or sunburst
      open: true,
      gzipSize: false,
      brotliSize: true,
      filename: 'analize.html',
    }) as PluginOption,
  ],
  define: {
    'process.env.NODE_IS_RELEASE': 'false',
    'process.env.NODE_ENV': '"development"',
    'process.env.JEST_WORKER_ID': undefined,
    'process.env.REACT_APP_ENV': '"online"',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.d.ts', '.jsx', '.scss', '.css', '.json', '.svg', '.png'],
  },
  server: {
    open: '/',
    port: 3000,
    proxy: {
      '/xxx': 'http://localhost:9999',
    },
  },
});
