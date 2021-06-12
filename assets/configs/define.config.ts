import webpack from 'webpack';
import { env } from './env';

const envProperties = [
  'API_ROOT'
];

const stringyfiedFromEntries = (obj: Array<[string, string | number | undefined]>): {[key: string]: string} => {
  return obj.reduce((buf, [key, value]) => ({
    ...buf,
    [key]: JSON.stringify(value),
  }), {})
}

const loadEnv = () => stringyfiedFromEntries(Object.entries(env || {}).filter(([key, ]) => envProperties.includes(key)));

export const definePlugin = new webpack.DefinePlugin(
  loadEnv()
);
