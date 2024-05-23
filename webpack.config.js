const path = require('path');

module.exports = {
  target: 'web',
  entry: './lib/index.js',
  output: {
    library: 'runjs',
    libraryTarget: 'umd',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // Additional configuration goes here
};
