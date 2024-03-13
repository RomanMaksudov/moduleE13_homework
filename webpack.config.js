const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
   devServer: {
     static: './dist',
   },
    plugins: [
        new HtmlWebpackPlugin({
        title: 'Development',
      }),
        new ESLintPlugin({
        extensions: ['main.js',],
      }),
    ],
    output: {
      filename: 'main.js',
    },
    devServer: {
        static: './dist',
        port: 3001,
        contentBase: './dist',
        hot: true,
    },
    devtool: 'inline-source-map',
  };
  