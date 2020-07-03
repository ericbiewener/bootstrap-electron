const { createConfig, rules, paths } = require('./webpack.config.shared')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = createConfig('renderer.tsx', {
  target: 'electron-renderer',
  module: {
    rules: [
      rules.babelLoader,
      {
        test: /\.html$/,
        use: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.src, 'index.html'),
      filename: './index.html',
    }),
  ],
})
