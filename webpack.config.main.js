const { createConfig, rules } = require('./webpack.config.shared')

module.exports = createConfig('main/main.ts', {
  target: 'electron-main',
  node: {
    __dirname: false,
    __filename: false,
  },
  module: {
    rules: [rules.babelLoader],
  },
})
