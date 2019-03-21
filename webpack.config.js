'use strict';

const path = require('path');
const webpack = require('webpack');
module.exports = {
  devtool: 'eval-source-map',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=50000&name=[path][name].[ext]'}
    ]
  },
  resolve: {
    extensions: [' ', '.css', '.js', '.jsx', '.json']
  },
  devServer: {
    contentBase: './build', 
    historyApiFallback: true,
    inline: true, //set true will automatically refresh the page
    port: 8080, //set the port, default 8080
  }
};
