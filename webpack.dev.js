const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin;
const helmet = require('helmet');
const buildPath = 'build';
const publicPath = '/';
const PORT = 8080;
module.exports = () => {
  return {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: {
      index: './src',
    },
    devServer: {
      hot: true,

      open: true,
      historyApiFallback: true,
      index: 'index.html',
      port: PORT,
      open: true,
      publicPath,
      before: function (app, server, compiler) {
        app.use(helmet());
      },
    },
    output: {
      filename: 'assets/[name].[hash].bundle.js',
      chunkFilename: 'assets/[name].[hash].js',
      path: path.resolve(__dirname, buildPath),
      publicPath,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.(jpg|jpeg|png|gif|svg)$/,
          use: 'file-loader?name=images/[hash].[ext]',
        },
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(s?)css$/,

          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',

            'postcss-loader',
            'sass-loader',
          ],
        },
      ],
    },
    plugins: [
      new ProgressBarPlugin(),
      new HtmlWebpackPlugin({
        template: './src/html-templace/index.html',
      }),
      new MiniCssExtractPlugin({
        filename: 'assets/[name].[hash].css',
        chunkFilename: 'assets/[id].[hash].css',
      }),
      new ManifestPlugin(),
      // new BundleAnalyzerPlugin(),
    ],
    optimization: {
      minimizer: [
        new TerserPlugin({
          sourceMap: true,
          parallel: true,
          cache: true,
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
      splitChunks: {
        chunks: 'all',
      },
    },
  };
};
