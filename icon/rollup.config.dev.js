import cleaner from 'rollup-plugin-cleaner';
import svg from 'rollup-plugin-svg';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';
import alias from '@rollup/plugin-alias';
import path from 'node:path';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      exports: 'named',
      sourcemap: true,
      strict: true,
    },
  ],
  plugins: [
    cleaner({
      targets: ['./dist'],
    }),
    typescript({ objectHashIgnoreUnknownHack: false, inlineSourceMap: true, sourceMap: true }),
    svg(),
    alias({
      entries: {
        '@src': path.resolve(__dirname, './src'),
      },
    }),
  ],
  external: ['react', 'react-dom', 'styled-components'],
};
