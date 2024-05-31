import cleaner from 'rollup-plugin-cleaner';
import typescript from 'rollup-plugin-typescript2';
// import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
// import svgr from '@svgr/rollup';
import alias from '@rollup/plugin-alias';
import * as path from 'node:path';
import url from '@rollup/plugin-url';
import svg from 'rollup-plugin-svg';
import requireContext from 'rollup-plugin-require-context';
import pkg from './package.json';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.tsx',
    output: [
      {
        file: pkg.module,
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
      // dts(),
      copy({
        targets: [
          { src: 'src/img/24/**/*', dest: './dist/img/24' },
          { src: 'src/img/24/**/*', dest: './dist/esm/img/24' },
        ],
      }),
      typescript({ objectHashIgnoreUnknownHack: false, inlineSourceMap: true, sourceMap: true }),
      svg(),
      // url(),
      // svgr({ icon: true }),
    ],
    external: ['react', 'react-dom'],
  },
];
