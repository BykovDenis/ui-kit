import uglify from '@lopatnov/rollup-plugin-uglify';
import url from 'postcss-url';
import cleaner from 'rollup-plugin-cleaner';
import svg from 'rollup-plugin-image-base64';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

export default {
  input: 'src/index.ts',
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
      targets: ['./styles/dest'],
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
      plugins: [
        url({
          url: 'inline', // enable inline assets using base64 encoding
          maxSize: 1000, // maximum file size to inline (in kilobytes)
          fallback: 'copy', // fallback method to use if max size is exceeded
        }),
      ],
    }),
    uglify(),
  ],
  external: ['react', 'react-dom'],
};
