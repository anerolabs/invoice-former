// const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/app-mount.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, './public'),
    },
    client: {
      overlay: false,
      progress: true,
    },
    // https://betterexplained.com/articles/how-to-optimize-your-site-with-gzip-compression/
    compress: true,
    hot: true,
    historyApiFallback: {
      index: 'index.html',
      verbose: true,
    },
    // https: true,
    port: 3080,
    liveReload: false,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: /node_modules/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/app-index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};

module.exports = config;
