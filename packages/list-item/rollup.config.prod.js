import { terser } from 'rollup-plugin-terser';
import svgr from '@svgr/rollup';
import cleaner from 'rollup-plugin-cleaner';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: false,
      strict: false,
    },
  ],
  plugins: [
    cleaner({
      targets: ['./dist'],
    }),
    typescript({ objectHashIgnoreUnknownHack: false }),
    //svg(),
    svgr(),
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
  external: ['react', 'react-dom'],
};
