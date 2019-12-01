import babel from 'rollup-plugin-babel';
import commonJS from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { terser } from 'rollup-plugin-terser';

import { dependencies, main, peerDependencies } from './package.json';

const nodeExternalBuiltIns = [];

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
    commonJS({ include: /node_modules/ }),
    babel({ exclude: 'node_modules/**' }),
    sizeSnapshot(),
    terser(),
  ],
};
