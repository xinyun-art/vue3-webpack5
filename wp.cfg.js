const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      /**
       * 由于存在一些浏览器无法使用ES6+的新语法，因此需要转换为ES5。
       * 安装所需依赖：npm install @babel/core babel-loader @babel/preset-env -D
       * 如果不想将配置写在配置文件中，可以在根目录创建babel.config.js或者babelrc.js。
       */
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      /**
       * 处理样式
       * webpack默认只能打包commonJS规范的js文件
       * 处理其他文件都需要相对应的处理器进行处理
       * 安装所需依赖：npm install style-loader css-loader sass-loader node-sass -D
       * 注意：loader的配置有很多能优化的地方
       */
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      /**
       * 处理图片等静态资源
       * 除js文件的其他文件打包，webpack都需要特定的处理器进行处理
       * 安装所需依赖：npm install url-loader file-loader -D
       */
      {
        test: /\.(jpg|png|jpeg|gif|bmp)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024,
            fallback: {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
              },
            },
          },
        },
      },
      {
        test: /\.(mp4|ogg|mp3|wav)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024,
            fallback: {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
              },
            },
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Vue3-WP-CLI',
    }),
  ],
}
