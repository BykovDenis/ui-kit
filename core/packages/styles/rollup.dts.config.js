import dts from 'rollup-plugin-dts';
import path from 'path';

export default {
    input: path.resolve(process.cwd(), 'src/index.ts'),
    output: { file: 'dist/index.d.ts', format: 'es' },
    plugins: [dts()],
};