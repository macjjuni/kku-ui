import path from 'path';
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import compression from 'vite-plugin-compression2';
import eslint from 'vite-plugin-eslint'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        eslint({
            exclude: [/virtual:/, /node_modules/]
        }),
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
            scss: {additionalData: '@use "/src/styles/Entry.scss" as *;'},
        },
        devSourcemap: true,
    },
    build: {outDir: 'dist'},
});
