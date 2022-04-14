import { terser } from 'rollup-plugin-terser';
import cleaner from 'rollup-plugin-cleaner';
import postcss from 'rollup-plugin-postcss';
import svg from 'rollup-plugin-svg';
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
    svg(),
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
  external: ['react', 'react-dom', 'styled-components'],
  globals: { 'styled-components': 'styled' },
};
