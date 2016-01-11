const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: './app.js'
  },

  output: {
    path: __dirname + '/server/public',
    filename: '[name].js'
  },

  watch: true,

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: 'cheap-inline-module-source-map',

  resolve: {
    modulesDirectories: ['node_modules'],
    extension: ['', '.js', '.styl'],
    alias: {
      socket: __dirname + '/socket'
    }
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|server|bower_components)/,
        loader: 'babel?presets[]=es2015'
      },
      {
        test: /\.jade$/,
        loader: ExtractTextPlugin.extract('html!jade-html')
      },
      {
        test: /\.styl$/,
        loader: 'style!css!stylus'
      },
      {
        test: /\.(png|gif|svg|jpeg)$/,
        loader: 'file?name=[path][name].[ext]'
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('components/base.html')
  ]
};
