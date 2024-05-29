import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/*'],
  bundle: false,
  clean: true,
  format: ['cjs', 'esm'],
  dts: true,
  tsconfig: './tsconfig.json',
  plugins: [
    {
      // https://github.com/egoist/tsup/issues/953#issuecomment-2132576167
      // ensuring that all local requires in `.cjs` files import from `.cjs` files.
      // require('./path') → require('./path.cjs') in `.cjs` files
      name: 'fix-cjs-require',
      renderChunk(_, { code }) {
        if (this.format === 'cjs') {
          const regex = /require\("(?<import>\.\/.+)"\)/g;
          // TODO: should do nothing if file already ends in .cjs
          // TODO: could be more resilient for `"` vs `'` imports
          return { code: code.replace(regex, "require('$<import>.cjs')") };
        }
      },
    },
  ],
});
