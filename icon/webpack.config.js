const path = require('path');
const paths = require('./paths');
const WebpackBar = require('webpackbar');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const publicPath = paths.servedPath;

module.exports = {
  mode: 'production',
  entry: {
    index: {
      import: paths.appIndexTs,
    },
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src'),
      process: 'process/browser',
    },
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js', '.d.ts', '.jsx', '.scss', '.css', '.json', '.svg', '.png'],
  },
  experiments: {
    outputModule: true,
  },
  output: {
    // The build folder.
    path: path.resolve(__dirname, paths.appBuild),
    // Generated JS file names (with nested folders).
    // There will be one main bundle, and one file per asynchronous chunk.
    // We don't currently advertise code splitting but Webpack supports it.
    filename: '[name].js',
    // We inferred the "public path" (such as / or /my-project) from homepage.
    publicPath: publicPath,
    libraryTarget: 'module',
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  optimization: {
    minimize: false,
    minimizer: [
      new TerserPlugin({
        parallel: 4,
      }),
    ],
    usedExports: true,
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: 'inline-source-map',
  module: {
    // configuration regarding modules
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        loader: require.resolve('source-map-loader'),
        enforce: 'pre',
        include: paths.appSrc,
      },
      {
        test: /\.m?jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread'],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
          options: {
            // make all svg images to work in IE
            iesafe: true,
            encoding: 'base64',
          },
        },
      },
    ],
  },
  plugins: [
    new WebpackBar(),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'src/index.d.ts', to: paths.appBuild }],
    }),
  ],
};
