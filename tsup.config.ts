import { defineConfig } from 'tsup';

// * constants
const entry = 'src/index.tsx';

export default defineConfig({
  format: 'esm',
  entry: [entry],
  dts: {
    entry,
    resolve: true,
  },
  sourcemap: true,
  clean: true,
  minify: true,
  outDir: 'dist',
  target: 'node16',
  splitting: false,
});
