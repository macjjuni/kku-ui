import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';


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
