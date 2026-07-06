import dts from 'rollup-plugin-dts';

export default {
  input: 'src/index.tsx',

  output: {
    file: 'dist/index.d.ts',
    format: 'es',
    interop: 'auto',      // ← фикс interop!
  },

  external: [
    /^react/,
    /^react-dom/,
    /^react\/jsx-runtime/,
    /^@types\//,
    /^prop-types/,
    /^csstype/
  ],

  plugins: [
    dts({
      compilerOptions: {
        declaration: true,
        declarationMap: false,
        // resolve @dbykov-ui-kit/<name> to sibling package sources so their
        // types get inlined into the generated dist/index.d.ts
        baseUrl: '..',
        paths: {
          '@dbykov-ui-kit/*': ['./*/src'],
        },
      }
    })
  ]
};