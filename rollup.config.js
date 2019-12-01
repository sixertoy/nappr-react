import babel from 'rollup-plugin-babel';
import commonJS from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';

import { dependencies, peerDependencies, main } from './package.json';

const nodeExternalBuiltIns = ['fs', 'path', 'http', 'https'];

export default {
  external: [
    ...Object.keys(dependencies || {}),
    ...Object.keys(peerDependencies || {}),
    ...nodeExternalBuiltIns,
  ],
  input: 'src/index.js',
  output: { file: main, format: 'cjs' },
  plugins: [
    resolve({ preferBuiltins: true }),
    commonJS({
      include: /node_modules/,
      namedExports: {
        mongoose: ['Mongoose'],
      },
    }),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
    }),
    sizeSnapshot(),
    terser(),
  ],
};
