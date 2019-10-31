const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (_, { mode }) => {
  /** @type {import('webpack').Configuration} */
  const config = {
    devtool: false,
    entry: './src/js/index.js',
    output: {
      filename: (mode === 'production') ? 'main.[chunkHash].js' : 'main.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [],
            }
          }
        }
      ]
    }
  };

  return config;
};
