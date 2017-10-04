const webpack = require('webpack')
const path = require('path')

const nodeEnv = process.env.NODE_ENV || 'development'
const babelEnv = process.env.BABEL_ENV || 'react'

const isProd = nodeEnv === 'production'

const config = require('./_pigeon_config')

module.exports = {
  devtool: isProd ? 'hidden-source-map' : 'cheap-eval-source-map',
  context: path.join(__dirname, './demo'),
  entry: {
    vendor: [
      'react',
      'react-dom'
    ],
    demo: isProd ? [
      './index.js'
    ] : [
      'webpack-dev-server/client?http://0.0.0.0:4040',
      './index.js'
    ]
  },
  output: {
    path: path.join(__dirname, './docs' + (babelEnv === 'inferno' ? '/inferno' : '')),
    publicPath: '',
    chunkFilename: '[name].bundle.js',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(html|png|jpg|gif|jpeg|svg)$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve('./demo'),
      'node_modules'
    ],
    alias: config.alias
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv),
        BABEL_ENV: JSON.stringify(babelEnv)
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: false
    })
  ],
  devServer: {
    contentBase: './demo'
  }
}
