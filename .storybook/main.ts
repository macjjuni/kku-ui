import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
    stories: ['../**/*.stories.@(ts|tsx|js|jsx)'],
    core: {
        builder: '@storybook/builder-vite',
    },
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
        return mergeConfig(config, {
            optimizeDeps: {
                include: ['@storybook/react', '@storybook/addon-docs', '@storybook/addon-a11y'],
            },
        });
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
