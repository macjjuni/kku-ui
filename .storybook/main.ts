import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    stories: ['../**/*.stories.@(ts|tsx|js|jsx)'],
    addons: [
        '@storybook/addon-links',
        '@chromatic-com/storybook',
        'storybook-dark-mode',
        '@storybook/addon-docs',
    ],

    framework: {
        name: '@storybook/react-vite',
        options: {},
    },

    docs: {},

    async viteFinal(config) {
        return mergeConfig(config, {
            optimizeDeps: {
                include: ['storybook-dark-mode'],
            },
        });
    },

    typescript: {
        check: true,
        reactDocgen: false,
    },
};

export default config;
