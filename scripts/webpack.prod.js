const merge = require('webpack-merge');
const common = require('./webpack.common');
const getSubNpmTask = require('./getSubNpmTask');
const isLegacy = getSubNpmTask(process);

module.exports = merge(common, {
  mode: 'production',
  output: {
    chunkFilename: isLegacy ? 'chunks/[id].legacy.min.js' : 'chunks/[id].min.js',
    filename: isLegacy ? 'index.legacy.min.js' : 'index.min.js'
  }
});
