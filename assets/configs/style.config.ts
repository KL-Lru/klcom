import { RuleSetRule } from 'webpack';

export const styleRule: RuleSetRule = {
  test: /\.s?css$/,
  use:[
    'style-loader', 'css-loader', 'sass-loader'
  ]
}
