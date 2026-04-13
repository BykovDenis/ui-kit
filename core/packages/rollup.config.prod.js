import cleaner from 'rollup-plugin-cleaner';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';
import path from 'path';
import pkg from './package.json' with { type: 'json' };

export default [
  {
    input: path.resolve(process.cwd(), 'src/index.tsx'),
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
  }
];
