import { RuleSetRule } from 'webpack';
import { Options as TsLoaderOptions} from 'ts-loader';

const errorFormatter: TsLoaderOptions["errorFormatter"] = (error, color) => {
  const messageColor = error.severity === "warning" ? color.bold.yellow : color.bold.red;
  return messageColor(`[${error.severity}]: ${error.file}\n${error.content}`);
}

export const tsRule: RuleSetRule & {options: Partial<TsLoaderOptions>}= {
  test: /\.tsx?$/,
  loader: 'ts-loader',
  options: {
    configFile: "tsconfig.json",
    errorFormatter: errorFormatter,
  },
};
