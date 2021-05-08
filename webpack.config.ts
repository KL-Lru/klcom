import path from 'path';
import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import { babelRule } from './assets/configs/babel.config';
import { tsRule } from './assets/configs/ts.config';
import { htmlRule, htmlPlugin } from './assets/configs/html.config';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
  entry: './assets/app.tsx',
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'public/bundle'),
    filename: 'index.bundle.js',
  },
  module: {
    rules: [
      babelRule,
      tsRule,
      htmlRule
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [path.resolve('./assets'), path.resolve('./node_modules')],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    watchContentBase: true,
    disableHostCheck: true,
  },
  plugins: [
    htmlPlugin
  ]
};

export default config;
