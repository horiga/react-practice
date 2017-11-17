#!/bin/bash

if [ $# -ne 1 ]; then
  echo "usage: ./$0 [app_name]"
  exit 1
fi

mkdir $1
cd $1
npm init --force
mkdir src out
npm i --save-dev webpack
npm i --save-dev react react-dom babel-loader babel-core babel-preset-es2015 babel-preset-react
cat << EOS > webpack.config.js
const path = require('path')
const basedir = __dirname

module.exports = {
  entry: path.join(basedir, 'src/index.js'),
  output: {
    path: path.join()basedir, 'out'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015','react']
        }
      }
    ]
  }
}
EOS
