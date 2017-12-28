const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    Button: './src/components/atoms/Button',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../lib'),
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins () {
                return [
                   require('postcss-variables-rewrite')({ themeIdentifier: 'blue' }),
                   require('postcss-import'),
                   require('postcss-cssnext'),
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              minimize: true,
              importLoaders: 4,
              localIdentName: '[sha1:hash:hex:4]'
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          },
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
          options: {}
        }
      }
    ]
  },
  externals: {
    'react': 'commonjs2 react',
    'react-dom': 'commonjs2 react-dom',
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },
  plugins: [
    // new UglifyJsPlugin()
  ]
};
