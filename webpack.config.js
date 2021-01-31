const path = require('path')

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
}
