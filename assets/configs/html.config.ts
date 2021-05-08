import { RuleSetRule } from 'webpack';
import HtmlWepackPlugin from 'html-webpack-plugin';

export const htmlRule: RuleSetRule = {
  test: /\.html$/,
  loader: "html-loader"
}

export const htmlPlugin = new HtmlWepackPlugin({template: "./public/index.html"});
