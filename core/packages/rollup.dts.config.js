import dts from 'rollup-plugin-dts';
import path from 'path';

export default {
    input: path.resolve(process.cwd(), 'src/index.tsx'),
    output: { file: 'dist/index.d.ts', format: 'es' },
    plugins: [dts()],
};