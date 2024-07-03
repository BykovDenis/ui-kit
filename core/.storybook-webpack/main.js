module.exports = {
  stories: ['../packages/**/*.stories.mdx', '../packages/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
    '@storybook/addon-actions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: (config) => {
    // Default rule for images /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      loader: require.resolve('@svgr/webpack'),
    });

    return config;
  },
  docs: {
    autodocs: true,
  },
};

// import { mergeConfig } from 'vite';
//
// export default {
//   framework: '@storybook/react-vite',
//   stories: ['../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
//   addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
//   core: {
//     builder: '@storybook/builder-vite',
//   },
//   async viteFinal(config) {
//     // Merge custom configuration into the default config
//     return mergeConfig(config, {
//       // Add dependencies to pre-optimization
//       optimizeDeps: {
//         include: ['storybook-dark-mode'],
//       },
//     });
//   },
//   docs: {
//     autodocs: true,
//   },
// };
