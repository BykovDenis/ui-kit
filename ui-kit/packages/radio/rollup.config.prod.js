import { terser } from 'rollup-plugin-terser';
import url from 'postcss-url';
import cleaner from 'rollup-plugin-cleaner';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.tsx',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: false,
        strict: true,
      },
      {
        file: pkg.module,
        format: 'esm',
        exports: 'named',
        sourcemap: false,
        strict: true,
      },
    ],
    plugins: [
      cleaner({
        targets: ['./dist'],
      }),
      typescript({ objectHashIgnoreUnknownHack: false }),
      postcss({
        autoModules: true,
        modules: {
          generateScopedName: '[hash:base64:8]',
        },
        options: {
          autoprefixer: true,
        },
        plugins: [
          url({
            url: 'inline', // enable inline assets using base64 encoding
            maxSize: 1000000, // maximum file size to inline (in kilobytes)
            fallback: 'copy', // fallback method to use if max size is exceeded
          }),
        ],
      }),
      terser(),
    ],
    external: ['react', 'react-dom', 'styled-components'],
  },
  {
    input: './src/index.d.ts',
    output: [{ file: pkg.types, format: 'es' }],
    plugins: [dts()],
  },
];
