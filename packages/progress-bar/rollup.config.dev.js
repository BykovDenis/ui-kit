
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
			sourcemap: true,
			strict: false,
		},
	],
	plugins: [
		cleaner({
			targets: ['./dist'],
		}),
		typescript({ objectHashIgnoreUnknownHack: false, inlineSourceMap: true }),
		postcss({
			autoModules: true,
			modules: {
				generateScopedName: '[hash:base64:8]',
			}
		}),
	],
	external: ['react', 'react-dom'],
};
