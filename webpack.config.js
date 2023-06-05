const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

const config = {
  //webpack generating production directory
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  //webpack reading js jsx files
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  
  plugins: [
    //webpack definition of root index.html
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),

    //webpack cooping img directory from public directory to production directory
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public/img'),
          to: 'img',
        },
      ],
    }),

     //webpack css minification
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      //webpack babel-loader
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      //webpack css loader
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader'],
      },
      //webpack scss loader
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, 'css-loader', 'sass-loader'],
      },
    ],
  },
};

//webpack build mode definition
module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};
