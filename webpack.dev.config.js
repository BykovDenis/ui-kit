const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const paths = require('./paths');
const WebpackBar = require('webpackbar');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const { UnusedFilesWebpackPlugin } = require('unused-files-webpack-plugin');
const { DuplicatesPlugin } = require('inspectpack/plugin');
// const CircularDependencyPlugin = require('circular-dependency-plugin');
// const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// const TerserPlugin = require("terser-webpack-plugin");
// var HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
// const DeadCodePlugin = require('webpack-deadcode-plugin');

const publicPath = '/'; // paths.servedPath;
// const smp = new SpeedMeasurePlugin();

// замер производительности сборки
// module.exports = smp.wrap({
//   /* ... */
// });

module.exports = {
  mode: 'development',
  entry: {
    'ui-kit-js': {
      import: paths.appIndexJs,
      dependOn: 'shared',
    },
    'ui-kit-css': {
      import: paths.appIndexScss,
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
  cache: {
    type: 'filesystem',
    cacheDirectory: path.resolve(__dirname, '.temp_cache'),
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: paths.appBuild,
    },
    compress: true,
    port: 3000,
    historyApiFallback: true,
    hot: true,
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'packages'),
      process: 'process/browser',
    },
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js', '.d.ts', '.jsx', '.scss', '.css', '.json', '.svg'],
  },
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
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', { loader: 'css-loader', options: { modules: true } }, 'postcss-loader', 'sass-loader'],
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
      // {
      //   test: /\.svg$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'svg-react-loader',
      //     options: {
      //       tag: 'symbol',
      //       attrs: {
      //         title: 'example',
      //       },
      //       name: 'MyIcon',
      //     },
      //   },
      // },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.icon$/, /\.ico$/, /\.svg$/],
        loader: require.resolve('url-loader'),
        options: {
          name: 'static/media/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en|hu/),
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    // красивые прогрессбарчики билдинга
    new WebpackBar(),
    // большой борд с пачкой зависимостей для анализа состава билда
    new BundleAnalyzerPlugin(),
    // поиск неиспользуемых файлов в проекте (not compatible webpack5)
    // new UnusedFilesWebpackPlugin(),
    // поиск неиспользуемых файлов в проекте (not compatible webpack5)
    // new DeadCodePlugin({
    //   patterns: [
    //     'src/**/*.(js|jsx|css|ts|tsx)',
    //   ],
    // }),
    // поиск дублей библиотек с разными версиями
    // new DuplicatesPlugin(),
    // поиск циклических зависимостей
    // new CircularDependencyPlugin(),
    // new MomentLocalesPlugin({
    //   localesToKeep: ['es-us', 'ru'],
    // }),
    // кеширование
    // new HardSourceWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        PRODUCTION: JSON.stringify(true),
        REACT_APP_ENV: JSON.stringify('production'),
      },
    }),
  ],
};
