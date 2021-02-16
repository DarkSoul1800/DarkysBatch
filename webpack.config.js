const path = require('path');

module.exports = {
 cache: true,
 devtool: 'source-map',
 entry: {
  DarkysAchievementPackage: path.resolve(__dirname, 'src', 'index.js'),
 },
 mode: 'production',
 module: {
  rules: [
   {
    test: /\.js$/i,
    exclude: /node_modules/,
    use: {
     loader: 'babel-loader',
     options: {
      compact: true,
      presets: [['@babel/preset-env', { targets: '> 1.5%, not dead' }]],
     },
    },
   },
  ],
 },
 output: {
  path: path.resolve(__dirname, 'dist'),
 },
 resolve: {
  extensions: ['.js'],
  modules: [path.resolve(__dirname, 'src')],
 },
};
