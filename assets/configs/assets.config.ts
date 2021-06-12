import { RuleSetRule } from 'webpack';

export const assetsRule: RuleSetRule = {
  test: /\.(png|jpe?g|gif|svg|eot|ttf|woff2?)$/i,
  type: "asset",
  parser: {
    dataUrlCondition: {
      maxSize: 100 * 1024
    },
  }
};
