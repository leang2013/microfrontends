const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');
const deps = require('./package.json').dependencies;
const config = require('./config/local');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    main: './src/index',
  },
  devtool: isProd ? false : 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: config.PORT,
    hot: true,
    open: true,
    stats: { colors: true },
    progress: true,
    historyApiFallback: true,
  },
  output: {
    filename: isProd ? '[name].[hash].bundle.js' : '[name].bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: {} },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [
                  autoprefixer(),
                ],
              },
            },
          },
          { loader: 'sass-loader', options: {} },
        ],
      },
      {
        test: /\.(woff|woff2|ttf|tff|otf|eot|ico)$/,
        loader: 'file-loader',
        options: {
          name: isProd ? 'public/assets/[name].[hash].[ext]' : 'public/assets/[name].[ext]',
        },
      },
      {
        test: /\.(svg)$/,
        loader: 'file-loader',
        options: {
          mimetype: 'image/svg+xml',
          name: isProd ? 'public/assets/[name].[hash].[ext]' : 'public/assets/[name].[ext]',
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'tasks',
      library: { type: 'var', name: 'tasks' },
      filename: 'remoteEntry.js',
      exposes: {
        './Tasks': './src/App',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        '@material-ui/core': { singleton: true },
        '@material-ui/icons': { singleton: true },
      },
    }),
    new CompressionPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
