import path from 'path';
import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import { babelRule } from './assets/configs/babel.config';
import { tsRule } from './assets/configs/ts.config';
import { htmlRule, htmlPlugin } from './assets/configs/html.config';
import { optimizeConfig } from './assets/configs/optimization.config';
import { definePlugin } from './assets/configs/define.config';
import { styleRule } from './assets/configs/style.config';
import { assetsRule } from './assets/configs/assets.config';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
  entry: './assets/app.tsx',
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'public/bundle'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
  },
  module: {
    rules: [
      assetsRule,
      babelRule,
      tsRule,
      styleRule,
      htmlRule
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [path.resolve('./assets'), path.resolve('./node_modules')],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    watchContentBase: true,
    historyApiFallback: true,
    disableHostCheck: true,
  },
  plugins: [
    htmlPlugin,
    definePlugin
  ],
  optimization: optimizeConfig,
};

export default config;
