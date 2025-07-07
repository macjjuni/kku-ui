import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    stories: ['../**/*.stories.@(ts|tsx|js|jsx)'],

    addons: [
        '@storybook/addon-a11y',
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
        config.optimizeDeps = {
            ...config.optimizeDeps,
            include: ['storybook-dark-mode'],
        };
        return config;
    },

    typescript: {
        check: true,
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            shouldRemoveUndefinedFromOptional: true,
        },
    },
};

export default config;
