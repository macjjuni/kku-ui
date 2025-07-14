import { mergeConfig } from 'vite';

export default {
  stories: ['../**/*.stories.@(ts|tsx|js|jsx)'],
  core: { builder: '@storybook/builder-vite' },
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@chromatic-com/storybook',
    'storybook-dark-mode',
    '@storybook/addon-docs',
  ],
  framework: { name: '@storybook/react-vite', options: {} },
  docs: {},
  async viteFinal(config: any) {
    return mergeConfig(config, {
      cacheDir: './.vite-cache',
      optimizeDeps: {
        force: true,
        include: ['react', 'react-dom', '@storybook/react', '@storybook/addon-docs', '@storybook/addon-a11y'],
      },
      build: {
        rollupOptions: { external: [] },
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
