import cleaner from 'rollup-plugin-cleaner';
import postcss from 'rollup-plugin-postcss';
import svg from 'rollup-plugin-svg';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: true,
    },
  ],
  plugins: [
    cleaner({
      targets: ['./dist'],
    }),
    typescript({ objectHashIgnoreUnknownHack: false, inlineSourceMap: true }),
    svg(),
    postcss({
      autoModules: true,
      modules: {
        generateScopedName: '[hash:base64:8]',
      },
    }),
  ],
  external: ['react', 'react-dom', 'styled-components'],
};
