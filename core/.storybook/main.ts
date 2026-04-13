/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y', '@storybook/addon-vitest'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  features: {
    interactionsDebugger: true,
  },
  docs: {
    autodocs: true,
  },
};
export default config;
