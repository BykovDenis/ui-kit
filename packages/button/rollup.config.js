import replace from '@rollup/plugin-replace';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';
import scss from 'rollup-plugin-scss';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

// web design token replacements
const tokens = {
  __CLOCKSELECTOR__: '.clock',
  __CLOCKINTERVAL__: 1000,
  __CLOCKFORMAT__: 'formatHMS',
};

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
      entryFileNames: '[name].[hash].js',
    },
  ],
  plugins: [
    typescript({ objectHashIgnoreUnknownHack: false }),
    scss({
      output: 'dist/styles.css',
      outputStyle: 'compressed',
      processor: postcss({ plugins: { autoprefixer }, modules: {} }),
    }),
    terser(),
    replace({
      preventAssignment: true,
      include: ['src/**/*'],
      values: {
        changed: 'replaced',
      },
      __buildDate__: () => JSON.stringify(new Date()),
      __buildVersion: 15,
    }),
  ],
  external: ['react', 'react-dom'],
};
