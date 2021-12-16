const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),

  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js',
    publicPath: '',
    assetModuleFilename: 'images/[name][ext]',
  },

  module: {
    rules: [
      { test: /\.(html)$/, use: 'html-loader' },
      { test: /\.(ts|tsx)$/, use: 'ts-loader', exclude: /node_modules/ },
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),

    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, '../src/fonts'), to: path.resolve(__dirname, '../build/fonts'), noErrorOnMissing: true, },
        { from: path.resolve(__dirname, '../src/images'), to: path.resolve(__dirname, '../build/images'), noErrorOnMissing: true, },
      ],
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html',
      inject: 'body',
      favicon: path.resolve(__dirname, '../public/favicon-32x32.png'),
    }),
  ],

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};