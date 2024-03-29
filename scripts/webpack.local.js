const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const packageInfo = require('../package.json');

module.exports = merge(common, {
  mode: 'development',
  output: {
    chunkFilename: `[id].js`,
    filename: 'index.js'
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: '../dist',
    port: 3002,
    open: true,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: packageInfo.name,
      template: 'demo/index.pug',
      filename: 'index.html'
    })
  ]
});
