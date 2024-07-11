import {mergeConfig} from 'vite';
import type {StorybookConfig} from '@storybook/react-vite';
import path from 'path';

const config: StorybookConfig = {
    stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        'storybook-dark-mode',
        {
            name: '@storybook/preset-scss',
            options: {
                sassLoaderOptions: {
                    scss: {additionalData: '@import "/src/styles/Entry.scss";'},
                },
            },
        },
    ],

    framework: {
        name: '@storybook/react-vite',
        options: {},
    },

    docs: {},

    // 👈 The builder enabled here.
    core: {},

    async viteFinal(config) {
        // Merge custom configuration into the default config

        return mergeConfig(config, {
            // Add dependencies t   o pre-optimization
            resolve: {alias: {'@': path.resolve('src')}},
            css: {
                preprocessorOptions: {
                    scss: {additionalData: '@import "/src/styles/Entry.scss";'},
                },
            },
            optimizeDeps: {
                include: ['storybook-dark-mode'],
            },
        });
    },

    typescript: {
        check: true,
        reactDocgen: 'react-docgen-typescript'
    }
};
export default config;
