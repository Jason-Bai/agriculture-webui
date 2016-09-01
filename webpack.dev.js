var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client',
      './index',
      './styles/app.css'
    ],
    vendor: [
      'bootstrap/dist/css/bootstrap.min.css',
      'font-awesome/css/font-awesome.min.css',
      'antd/lib/index.css'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist', 'assets'),
    filename: 'js/[name].js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("css/[name].css")
  ],
  module: {
    loaders: [
      {   
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,                                                                                                                       
        include: __dirname
      },  
      {   
        test: /\.css$/,
        loader:  ExtractTextPlugin.extract('style-loader', 'css-loader')
      },  
      {   
        test: /\.json$/,
        loader: "json-loader"
      },  
      {   
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader?name=img/[name].[ext]'
      },  
      {   
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=100000&minetype=application/font-woff"
      },  
      {   
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader?name=fonts/[name].[ext]"
      },  
      {   
        test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader?name=svg/[name].[ext]"
      } 
    ]
  }
}