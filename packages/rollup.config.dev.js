import url from 'postcss-url';
import cleaner from 'rollup-plugin-cleaner';
import svg from 'rollup-plugin-image-base64';
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
      sourcemap: true,
      strict: false,
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
      plugins: [
        url({
          url: 'inline', // enable inline assets using base64 encoding
          maxSize: 1000, // maximum file size to inline (in kilobytes)
          fallback: 'copy', // fallback method to use if max size is exceeded
        }),
      ],
    }),
  ],
  external: ['react', 'react-dom'],
};
