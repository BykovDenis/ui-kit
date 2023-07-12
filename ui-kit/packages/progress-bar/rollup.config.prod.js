import cleaner from 'rollup-plugin-cleaner';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import dts from 'rollup-plugin-dts';

import pkg from './package.json';

export default [
	{
		input: 'src/index.tsx',
		output: [
			{
				file: pkg.main,
				format: 'cjs',
				exports: 'named',
				sourcemap: false,
				strict: false,
			},
			{
				file: pkg.module,
				format: 'esm',
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
	},
	{
		input: './src/index.d.ts',
		output: [{ file: './dist/index.d.ts', format: 'es' }],
		plugins: [dts()],
	},
];
