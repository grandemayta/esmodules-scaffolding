const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const env = process.env.NODE_ENV;
const getSubNpmTask = require('./getSubNpmTask');
const isLegacy = getSubNpmTask(process);
const src = path.resolve(__dirname, '../src');
const dist = path.resolve(__dirname, '../dist');

const entry = `${src}/index.js`;
const entryLegacy = ['core-js/fn/promise', entry];

const cleanWebpackPlugin = new CleanWebpackPlugin([dist], {
  root: process.cwd(),
  verbose: true,
  dry: false
});

const babel = {
  test: /\.js$/,
  loader: 'babel-loader',
  exclude: /node_modules/
};

const config = {
  optimization: {
    splitChunks: {
      maxAsyncRequests: 1
    }
  },
  output: {
    path: dist,
    library: 'MyComponent',
    libraryExport: 'default',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|png|gif|eot|woff|ttf|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: env === 'local' ? '' : '/assets',
          outputPath: env === 'local' ? '' : '/assets'
        },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: ['node_modules', 'src', 'fixtures'],
    alias: {
      config: path.resolve(__dirname, `../config/config.${env}.js`),
      src: `${src}`,
      assets: `${src}/assets`,
      polyfills: `${src}/polyfills`
    }
  },
  plugins: []
};

if (isLegacy) {
  config.entry = entryLegacy;
  config.module.rules.push(babel);
} else {
  config.entry = entry;
  config.plugins.push(cleanWebpackPlugin);
}

module.exports = config;
