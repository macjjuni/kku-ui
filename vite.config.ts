import path from 'path';
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import compression from 'vite-plugin-compression2';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        compression({
            include: [/\.(js)$/, /\.(scss)$/],
            threshold: 1400,
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.scss', '.js'],
        alias: [{find: '@', replacement: path.resolve(__dirname, 'src')}]
    },
    // SCSS 전역 사용
    css: {
        preprocessorOptions: {
            scss: {additionalData: '@import "/src/styles/Entry.scss";'},
        },
        devSourcemap: true,
    },
    build: {outDir: 'dist'},
});
