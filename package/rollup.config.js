import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: 'src/RealEsrgan.js', // The entry point for your project
  output: {
    file: 'dist/bundle.js', // The name of the bundled output file
    format: 'cjs', // The format of the output bundle
  },
  plugins: [
    peerDepsExternal(), // Automatically exclude 'peerDependencies' in the bundle
    resolve(), // Locate and bundle dependencies in 'node_modules' (npm packages)
    commonjs(), // Convert CommonJS modules to ES6
  ],
};
