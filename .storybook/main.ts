import type { StorybookConfig } from '@storybook/react-vite';
import type { PluginOption, UserConfig } from 'vite';
import path from 'path';

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
    async viteFinal(config: UserConfig) {
        // vite:dts 플러그인 비활성화
        const plugins = Array.isArray(config.plugins)
            ? config.plugins.flat().filter(
                  (plugin): plugin is NonNullable<PluginOption> =>
                      plugin != null && 'name' in plugin && plugin.name !== 'vite:dts'
              )
            : [];

        config.plugins = plugins as PluginOption[];

        // 경로 별칭 설정
        config.resolve = config.resolve || {};
        config.resolve.alias = {
            '@': path.resolve(__dirname, '../src'),
        };

        // Rollup 설정: 객체 동결 비활성화
        config.build = config.build || {};
        config.build.rollupOptions = {
            ...config.build.rollupOptions,
            output: {
                freeze: false, // 비확장 객체 문제 해결
            },
        };

        // Vite 6.x 최적화
        config.optimizeDeps = {
            ...config.optimizeDeps,
            include: ['storybook-dark-mode'],
            exclude: ['@storybook/react-vite'],
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
    core: {
        disableTelemetry: true,
    },
};

export default config;