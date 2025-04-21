import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

const config: StorybookConfig = {
    stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        'storybook-dark-mode',
    ],

    framework: {
        name: '@storybook/react-vite',
        options: {},
    },

    docs: {},

    core: {},

    async viteFinal(config) {
        return mergeConfig(config, {
            resolve: {
                alias: {
                    '@': path.resolve('src'),
                },
            },
            css: {
                preprocessorOptions: {
                    scss: {
                        additionalData: '@use "/src/styles/Entry.scss" as *;',
                    },
                },
            },
            optimizeDeps: {
                include: ['storybook-dark-mode'],
            },
        });
    },

    typescript: {
        check: true,
        reactDocgen: 'react-docgen-typescript',
    },
};

export default config;
