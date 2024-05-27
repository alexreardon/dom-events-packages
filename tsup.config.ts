import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/*'],
  bundle: false,
  clean: true,
  format: ['cjs', 'esm'],
  dts: true,
  tsconfig: './tsconfig.json',
});
