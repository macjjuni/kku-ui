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
            cacheDir: './.vite-cache',
            optimizeDeps: {
                force: true,
                include: ['react', 'react-dom', '@storybook/react', '@storybook/addon-docs', '@storybook/addon-a11y'],
            },
            build: {
                rollupOptions: {
                    // Storybook에서 external 설정 무시
                    external: [],
                },
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
