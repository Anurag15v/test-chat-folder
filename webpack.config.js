// webpack.config.js

const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle file
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Apply loaders to JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel for transpilation
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Presets for transpiling JavaScript and React
          },
        },
      },
    ],
  },
};
