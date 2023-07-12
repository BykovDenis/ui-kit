import cleaner from 'rollup-plugin-cleaner';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

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
      terser(),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: './src/index.d.ts',
    output: [{ file: pkg.types, format: 'es' }],
    plugins: [dts()],
  },
];
