import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  entry: './assets/app.tsx',
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'public/bundle'),
    filename: 'index.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { modules: false }]],
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [path.resolve('./assets'), path.resolve('./node_modules')],
  },
  devServer: {
    contentBase: path.join(__dirname, 'static'),
    watchContentBase: true,
    disableHostCheck: true,
  },
};

export default config;
