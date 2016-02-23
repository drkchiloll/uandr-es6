module.exports = {
  entry: ['babel-polyfill', './script.js'],
  output: {filename: 'es5.js'},
  module: {
    loaders: [{
      test: /\.js?/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  }
};
