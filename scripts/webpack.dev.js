const merge = require('webpack-merge');
const common = require('./webpack.common');
const getSubNpmTask = require('./getSubNpmTask');
const isLegacy = getSubNpmTask(process);

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  output: {
    chunkFilename: isLegacy ? 'chunks/[id].legacy.js' : 'chunks/[id].js',
    filename: isLegacy ? 'index.legacy.js' : 'index.js'
  }
});
