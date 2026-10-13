/// <reference types="vitest" />
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';
import pkg from './package.json';

// dependencies/peerDependencies는 번들에 포함하지 않고 소비자 쪽에서 해석하도록 둔다 (서브패스 포함)
const externalPackages = [...Object.keys(pkg.dependencies), ...Object.keys(pkg.peerDependencies)];
const isExternal = (id: string) => externalPackages.some((name) => id === name || id.startsWith(`${name}/`));

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths({
      projects: ['tsconfig.json', 'tsconfig.esm.json'],
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
          if (file.type === 'asset' && file.fileName.endsWith('.css') && typeof file.source === 'string') {
            file.source = file.source.replace(/url\(\s*['"]?\/(fonts\/[a-zA-Z0-9_\-./]+)['"]?\s*\)/g, 'url("$1")');
          }
        }
      },
    },
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.scss', '.js'],
    alias: { '@': path.resolve(__dirname, './src') },
  },
  build: {
    outDir: 'lib',
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/index.ts'), // for `kku-ui`
        hooks: path.resolve(__dirname, 'src/common/hooks/index.ts'), // for `kku-ui/hooks`
      },
      name: 'kku-ui',
      formats: ['es'],
      fileName: (format, entry) => `${format}/${entry}.js`,
    },
    rollupOptions: {
      external: isExternal,
      output: {
        assetFileNames: 'index.css',
        entryFileNames: 'es/[name].js',
        chunkFileNames: 'es/chunks/[name]-[hash].js',
      },
    },
    sourcemap: false,
    minify: 'esbuild',
    target: 'esnext',
    emptyOutDir: true,
  },
  assetsInclude: ['**/*.woff2'],
});
