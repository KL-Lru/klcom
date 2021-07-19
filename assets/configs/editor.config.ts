import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';

export const editorPlugin = new MonacoWebpackPlugin({
  publicPath: '/',
  languages: ['markdown'],
});
