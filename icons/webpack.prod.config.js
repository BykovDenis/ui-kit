const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const paths = require('./paths.js');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const WebpackBar = require('webpackbar');

const publicPath = paths.servedPath;

module.exports = {
  mode: 'production',
  entry: {
    'icons-js': {
      import: paths.appIndexJs,
      dependOn: 'shared',
    },
    shared: ['react', 'react-dom'],
  },
  output: {
    // The build folder.
    path: paths.appBuild,
    // Generated JS file names (with nested folders).
    // There will be one main bundle, and one file per asynchronous chunk.
    // We don't currently advertise code splitting but Webpack supports it.
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    // We inferred the "public path" (such as / or /my-project) from homepage.
    publicPath: publicPath,
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js', '.d.ts', '.jsx', '.scss', '.css', '.json', '.svg'],
  },
  devtool: 'source-map',
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
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
          options: {
            // make all svg images to work in IE
            iesafe: true,
          },
        },
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.ico$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'static/media/[name].[ext]',
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    usedExports: true,
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en|hu/),
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new WebpackBar(),
    new webpack.DefinePlugin({
      'process.env': {
        PRODUCTION: JSON.stringify(true),
        REACT_APP_ENV: JSON.stringify('production'),
      },
    }),
  ],
};
