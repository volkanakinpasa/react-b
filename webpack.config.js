const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({ mode }) => {
  console.log(mode);

  return {
    entry: {
      index: './src/index', // app: './src/app', // app2: './src/app2',
    },
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'static/[name].[hash:base64:2].js',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
        {
          test: /\.css$/,
          // use: [
          //   'style-loader',
          //   {
          //     loader: 'css-loader',
          //     options: {
          //       modules: true,
          //       importLoaders: true,
          //       localIdentName: '[folder]-[name]_[local]-[hash:base64:5]',
          //     },
          //   },
          // ],
          //use: [MiniCssExtractPlugin.loader, 'css-loader'],
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  hashPrefix: '--',
                  localIdentName: '[local]_[hash:base64:2]]', //'[folder]-[name]_[local]-[hash:base64:5]',
                },
              },
            },
            'postcss-loader',
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/html-templace/index.html',
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css',
        chunkFilename: '[id].[hash].css',
      }),
    ],
  };
};
