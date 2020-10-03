const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const MediaQuerySplittingPlugin = require('media-query-splitting-plugin');

//npm i -D cross-env кроссбраузерный пакет
//"dev": "webpack-dev-server --mode development --open",
//"prod": "webpack --mode production",
//"start": "",
//"watch": ""
/*
    "clean": "rm dist/bundle.js",
    "dev": "cross-env NODE-ENV=development webpack --mode development",
    "watch": "cross-env NODE-ENV=development webpack --mode development --watch",
    "start": "cross-env NODE-ENV=development webpack-dev-server --mode development --open",
    "build": "cross-env NODE-ENV=production webpack --mode production"
1 добавить loader для формата ttf подключить шрифты на сайт +
2 добавить icons network на сайт +
3 добавить отправку формы на сервер
4 исправить google maps  или сделать новый апи ключ
5 paralax ???
6 добавить scroll +
7 в бандле есть очень большой файл ???
8 подумать об анимации 
*/

/*const isDev = process.env.NODE_ENV === 'development';
console.log(isDev);*/

const config = {
  mode: 'development',
  entry: './src/components/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    port: 3000,
    overlay: true,
    //hot: isDev,
    /*proxy: {
      '/api': 'http://localhost:3000'
    }*/
    /*setup: function(app, server) {
      app.get('/some/path', function(req, res) {
        res.json({ custom: 'response' });
      });
    }*/
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
     /* {
        test: /\.css$/,
        use: [//{loader: MiniCssExtractPlugin.loader,options:{hmr: isDev,reloadAll: true}}
          {
           loader: MiniCssExtractPlugin.loader,
           options: {
             hmr: isDev,
             reloadAll: true
           },
          },
          'css-loader'
        ]
      },*/
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.svg|.ttf$/,
        use: 'file-loader'
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'index.html' }],
    }),
    new HtmlWebpackPlugin({
      appMountId: 'app',
      template: 'index.html'//go
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),//filename:
    new CleanWebpackPlugin()
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};

module.exports = config;