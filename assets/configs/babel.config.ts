import { RuleSetRule } from 'webpack';
import { TransformOptions } from '@babel/core';

export const babelRule: RuleSetRule & {options: Partial<TransformOptions>} = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: {
    presets: [
      ['@babel/preset-env', { 
        useBuiltIns: "entry",
        modules: false,
        targets: "defaults",
      }],
      "@babel/react",
    ],
    plugins: [
      ["prismjs", {
        languages: ["css", "html", "cpp"],
        plugins: ["line-numbers", "show-language"],
        theme: "okaidia",
        css: true,
      }],
    ]
  },
};
