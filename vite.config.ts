/// <reference types="vitest" />  // <-- 이 줄을 반드시 파일 최상단에 추가하세요.
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import compression from 'vite-plugin-compression2';
import tsconfigPaths from 'vite-tsconfig-paths';
import eslint from 'vite-plugin-eslint';
import dts from 'vite-plugin-dts';


export default defineConfig({
  plugins: [
    react(),
    eslint({
      cache: false,
      include: ['src/**/*.ts', 'src/**/*.tsx'], // src 내부만 검사하도록 한정
      exclude: ['/virtual:/**', 'node_modules/**'], // 가상 파일 제외
    }),
    compression({
      include: [/\.(js)$/, /\.(scss)$/],
      threshold: 1400,
    }),
    tsconfigPaths(),
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
  test: {
    globals: true,
    environment: 'jsdom',
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
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
        index: path.resolve(__dirname, 'src/index.ts'),               // for `kku-ui`
        hooks: path.resolve(__dirname, 'src/common/hooks/index.ts'),  // for `kku-ui/hooks`
      },
      name: 'kku-ui',
      formats: ['es'],
      fileName: (format, entry) => `${format}/${entry}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'lucide-react',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: 'index.css',
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name]-[hash].js',
      },
    },
    sourcemap: false,
    minify: 'esbuild',
    target: 'esnext',
    emptyOutDir: true,
  },
  assetsInclude: ['**/*.woff2'],
});
