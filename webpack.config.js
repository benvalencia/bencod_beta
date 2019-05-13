const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.tsx',
   resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.min.js'
  },
  module: {
    rules: [
      // DONE
      { 
        test: /\.tsx?$/, 
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      // DONE
      {
        test: /\.sass$/,
        use: [
            "style-loader", 
            "css-loader",
            "sass-loader" 
        ]
      },
      // TEST
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash:8].[ext]',
              outputPath: 'assets/'
            }
          }
        ]
      },
      
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}