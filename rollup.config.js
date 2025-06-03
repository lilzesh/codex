import path from 'node:path';
import terser from '@rollup/plugin-terser';

const { NODE_ENV } = process.env;
const { dirname } = import.meta;
const is_prod = NODE_ENV === 'prod' ? true : false;
const src = path.join(dirname, 'src');
const dist = path.join(dirname, 'dist');

export default (async () => ({
    input: path.join(src, 'index.js'),
    output: {
        file: path.join(dist, is_prod ? 'codex.min.js' : 'codex.js'),
        format: 'iife',
        name: 'Codex',
    },
    plugins: [
        is_prod && (await import('@rollup/plugin-terser')).default()
    ],
}))();
