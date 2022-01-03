const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path")

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    // 模块导入扩展名处理
    extensions: ['.js', '.ts', '.tsx']
  },

  mode: 'development',

  devtool: 'eval-cheap-module-source-map',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html'
    })
  ]
}