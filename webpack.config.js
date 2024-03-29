const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/js/main.js',
    shop: './src/js/shop.js',
    exercises: './src/js/loadExercises.js',
    geocalization: './src/js/loadGeocalization.js',
  },
  externals: {
    'google-maps-api': 'google.maps',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    // clean: true, // Limpia todo lo que no se use de la carpeta dist
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/landing.html',
      filename: 'index.html',
      title: 'WorkoutWizard',
    }),
    new HtmlWebpackPlugin({
      template: './src/shop.html',
      filename: 'shop.html',
      title: 'Shop',
    }),
    new HtmlWebpackPlugin({
      template: './src/exercises_api.html',
      filename: 'exercises.html',
      title: 'Exercises',
    }),
    new HtmlWebpackPlugin({
      template: './src/api_geocalization.html',
      filename: 'location.html',
      title: 'Geocalization',
      inject: 'body',
    }),
  ],
};
