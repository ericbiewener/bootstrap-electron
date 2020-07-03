const path = require('path')
const { removeFileExt } = require('utlz')

const paths = {
  src: path.join(__dirname, 'src'),
}

const createConfig = (entryFilename, config) => ({
  mode: process.env.NODE_ENV || 'development',
  entry: path.join(paths.src, entryFilename),
  output: {
    filename: `${removeFileExt(entryFilename)}.js`,
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  ...config,
})

const rules = {
  babelLoader: {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: 'babel-loader',
  },
}

module.exports = {
  paths,
  createConfig,
  rules,
}
