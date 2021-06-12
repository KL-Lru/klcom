import { Configuration } from 'webpack';

export const optimizeConfig: Configuration["optimization"] = {
  chunkIds: 'named',
  runtimeChunk: {
    name: 'runtime',
  },
  splitChunks: {
    name: 'vendors',
    chunks: 'all',
    cacheGroups: {
      react: {
        test: /\/node_modules\/react\//,
        name: 'react',
      },
      material_ui: {
        test: /\/node_modules\/@material-ui\//,
        name: 'material-ui',
      },
      fonts: {
        test: /\/node_modules\/@fontsource\//,
        name: 'font-source',
      },
      devicon: {
        test: /\/node_modules\/devicon\//,
        name: 'devicon',
      }
    }
  }
};
