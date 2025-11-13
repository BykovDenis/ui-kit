import localTs from 'typescript';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import pkg from './package.json' with {type: 'json'};
import path from 'path';

export default {
    input: path.resolve(process.cwd(), 'src/index.tsx'),
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
            sourcemap: true,
        },
        {
            file: pkg.module,
            format: 'esm',
            exports: 'named',
            sourcemap: true,
        },
    ],
    plugins: [
        // del({targets: 'dist/*'}),
        postcss({
            autoModules: true,
            modules: {generateScopedName: '[hash:base64:8]'},
            minimize: true,
        }),
        resolve({
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
            browser: true,
            preferBuiltins: false,
        }),
        commonjs(),
        typescript({
            tsconfig: false, // не ищем внешний tsconfig
            typescript: localTs,
            noEmitOnError: false,
            sourceMap: true,
            include: ['src/**/*.ts', 'src/**/*.tsx', '../**/*.ts', '../**/*.tsx', '../types/global.d.ts'],
            exclude: [
                'node_modules',
                'dist',
                '**/*.stories.tsx',
                '**/*.stories.ts',
                '**/__tests__/**',
                '**/*.test.ts',
                '**/*.test.tsx'
            ],
            compilerOptions: {
                target: 'esnext',
                module: 'esnext',
                jsx: 'react-jsx',
                moduleResolution: 'node',
                esModuleInterop: true,
                skipLibCheck: true,
                typeRoots: [
                    path.resolve(process.cwd(), '../types'),
                    path.resolve(process.cwd(), 'node_modules/@types')
                ],
                declaration: false,
                emitDeclarationOnly: false,
            },
        }),
        json(),
        terser(),
    ],
    onwarn(warning, warn) {
        const message = [warning.message, warning.frame].join(' ');
        if (
            warning.plugin === 'typescript' &&
            /(tabIndex|width|fontSize)/.test(message) &&
            message.includes('TS2769')
        ) {
            return;
        }

        warn(warning);
    },
};
