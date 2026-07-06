import { terser } from 'rollup-plugin-terser';
import cleaner from 'rollup-plugin-cleaner';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';
import dts from 'rollup-plugin-dts';

// The shared IconContext lives in the main bundle; import it there instead of
// bundling a second copy. Both bundles ship in one npm tarball, so the
// relative dist paths resolve for consumers as well as in the workspace.
const MAIN_ENTRY = '@dbykov-ui-kit/icon';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: false,
        strict: true,
        paths: { [MAIN_ENTRY]: '../../dist/index.cjs' },
      },
      {
        file: pkg.module,
        format: 'esm',
        exports: 'named',
        sourcemap: false,
        strict: true,
        paths: { [MAIN_ENTRY]: '../../../dist/esm/index.js' },
      },
    ],
    plugins: [
      cleaner({
        targets: ['./dist'],
      }),
      typescript({ objectHashIgnoreUnknownHack: false }),
      terser(),
    ],
    external: ['react', 'react-dom', MAIN_ENTRY],
  },
  {
    input: './src/index.d.ts',
    output: [{ file: pkg.types, format: 'es' }],
    plugins: [dts()],
  },
];
