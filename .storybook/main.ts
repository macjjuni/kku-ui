import {mergeConfig} from 'vite';
import type {StorybookConfig} from '@storybook/react-vite';
import path from 'path';

const config: StorybookConfig = {
    stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions',
        'storybook-dark-mode', {
            name: '@storybook/preset-scss',
            options: {
                sassLoaderOptions: {
                    scss: {additionalData: '@import "/src/styles/Entry.scss";'},
                },
            },
        }
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    // 👈 The builder enabled here.
    core: {builder: '@storybook/builder-vite'},
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
};
export default config;
