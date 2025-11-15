import cleaner from 'rollup-plugin-cleaner';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';
import path from 'path';
import pkg from './package.json' with { type: 'json' };

export default [
  {
    input: './src/index.ts',
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
      }),
      terser(),
    ],
    external: ['react', 'react-dom','styled-components'],
  },
  {
    input: './src/index.d.ts',
    output: [{ file: './dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
];
