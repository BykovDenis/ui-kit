import cleaner from 'rollup-plugin-cleaner';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';
import path from 'path';
import pkg from './package.json' with { type: 'json' };

// Cross-package imports (@dbykov-ui-kit/<name>) stay external and are rewritten
// to relative paths between sibling dists: all packages ship inside the single
// published @dbykov-ui-kit/core tarball, so '../../<name>/dist/index.js' resolves
// both in the workspace and in the consumer's node_modules.
const UI_KIT_SCOPE = '@dbykov-ui-kit/';
const EXTERNALS = ['react', 'react-dom', 'styled-components'];

const isExternal = (id) => EXTERNALS.includes(id) || id.startsWith(UI_KIT_SCOPE);

// every package builds to the same layout (pkg.main/pkg.module come from this
// shared package.json), so the sibling's file sits at <name>/<same outFile>
const toSiblingDist = (outFile) => {
  const upToPackagesRoot = '../'.repeat(outFile.split('/').length);
  return (id) => (id.startsWith(UI_KIT_SCOPE) ? `${upToPackagesRoot}${id.slice(UI_KIT_SCOPE.length)}/${outFile}` : id);
};

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
        paths: toSiblingDist(pkg.main),
      },
      {
        file: pkg.module,
        format: 'esm',
        exports: 'named',
        sourcemap: false,
        strict: true,
        paths: toSiblingDist(pkg.module),
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
    external: isExternal,
  }
];
