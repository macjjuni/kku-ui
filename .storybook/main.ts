import type { StorybookConfig } from '@storybook/react-vite';

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
        config.optimizeDeps = {
            ...(config.optimizeDeps ?? {}),
            include: [...(config.optimizeDeps?.include ?? []), 'storybook-dark-mode'],
            exclude: ['some-problematic-lib'],
        };
        config.ssr = {
            ...(config.ssr ?? {}),
            noExternal: ['some-lib-to-bundle'],
        };
        return config;
    },

    typescript: {
        check: false,
        // reactDocgen: 'react-docgen-typescript',
        reactDocgen: false,
        // reactDocgenTypescriptOptions: {
        //     shouldExtractLiteralValuesFromEnum: true,
        //     shouldRemoveUndefinedFromOptional: true,
        // },
    },
};

export default config;
