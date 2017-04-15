const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'app-client.js'),
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    filename: 'bundle.js'
  },
  module: {
// this section allows SPECIFIC transformations on SPECIFIC files
// here using Babel with react and es2015 to convert all included JS files to ES5
    loaders: [{
      test: path.join(__dirname, 'src'),
      loader: ['babel-loader'],
      query: {
        cacheDirectory: 'babel_cache',
        presets: ['react', 'es2015']
      }
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
// allows us to define the NODE_ENV variable as a gloabl variable in the bundling process
// hence the inclusion in this file. AS IF it were defined in one of the scripts.
// advantages of this? not sure.
    new webpack.optimize.DedupePlugin(),
// removes all duplicated files
    new webpack.optimize.OccurenceOrderPlugin(),
// simply helps in reducing the file size of the resulting bundle
    new webpack.optimize.UglifyJsPlugin({
// minifies and obfuscates...
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    })
  ]
};
