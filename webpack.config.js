const path = require('path');

module.exports = {
 cache: true,
 devtool: 'source-map',
 entry: {
  Darkys_Achievement_Package: path.resolve(__dirname, 'src', 'Darkys_Achievement_Package', 'index.js'),
  Darkys_Armful_Collection_of_Upgrades: path.resolve(
   __dirname,
   'src',
   'Darkys_Armful_Collection_of_Upgrades',
   'index.js',
  ),
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
  alias: {
   AchievementsRoot: path.resolve(__dirname, 'src', 'Darkys_Achievement_Package'),
   UpgradesRoot: path.resolve(__dirname, 'src', 'Darkys_Armful_Collection_of_Upgrades'),
  },
  extensions: ['.js'],
  modules: [path.resolve(__dirname, 'src')],
 },
};
