import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import compression from 'vite-plugin-compression2';
import eslint from 'vite-plugin-eslint';
import dts from 'vite-plugin-dts';


export default defineConfig({
  plugins: [
    react(),
    eslint({
      exclude: ['node_modules', 'virtual:']
    }),
    compression({
      include: [/\.(js)$/, /\.(scss)$/],
      threshold: 1400,
    }),
    dts({
      tsconfigPath: 'tsconfig.esm.json',
      outDir: 'lib/es',
      include: ['src/**/*'],
      exclude: ['node_modules', 'lib'],
      insertTypesEntry: false,
      copyDtsFiles: true,
    }),
    {
      name: 'update-font-paths',
      apply: 'build',
      enforce: 'post',
      generateBundle(_, bundle) {
        for (const file of Object.values(bundle)) {
          if (
            file.type === 'asset' &&
            file.fileName.endsWith('.css') &&
            typeof file.source === 'string'
          ) {
            file.source = file.source.replace(
              /url\(\s*['"]?\/(fonts\/[a-zA-Z0-9_\-./]+)['"]?\s*\)/g,
              'url("$1")'
            )
          }
        }
      },
    },
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.scss', '.js'],
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
  build: {
    outDir: 'lib',
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/index.ts'),         // for `kku-ui`
        hooks: path.resolve(__dirname, 'src/common/hooks/index.ts'),   // for `kku-ui/hooks`
      },
      name: 'kku-ui',
      formats: ['cjs', 'es'],
      fileName: (format, entry) => `${format}/${entry}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'motion', 'zustand', 'lodash-es'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: 'index.css',
      },
    },
    sourcemap: true,
    target: 'esnext',
    emptyOutDir: true,
  },
});
