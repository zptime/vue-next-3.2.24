## webpack 常用 loader

上一节介绍了 webpack 基础，和 css 相关的打包配置，本节继续讲常见的几个 loader

- css 文件模块的加载、提取、处理
  - css-loader：读取和加载 css 文件，负责将.css 文件进行解析
  - style-loader：插入 style，将解析之后的 css 插入到页面中
  - less-loader/sass-loader：预处理器的处理，将 less，sass 等编写的 css 转换成普通 css
  - postcss-loader：通过 js 转换样式的工具，进行 css 的转换和配置，如自动添加浏览器前缀（+autoprefixer）、css 样式的重置
  - postcss-preset-env：将现代的 css 特性，转换成大多数浏览器认识的 css，并且会根据目标浏览器或者运行时环境添加所需的 polyfill，会自动添加 authprefixer
- 图片打包处理
  - file-loader：处理 import/require()方式引入的文件资源，并放到输出文件夹中
  - url-loader：和 file-loader 类似，可以将较小的文件，转为 base64 的 URI，常用于图片性能优化
  - 资源模块类型(asset module type)：webpack5 开始，可以使用`资源模块类型`代替 raw-loader 、url-loader、file-loader
- 字体文件的处理：可以使用 file-loader 或 webpack5 的`资源模块类型`处理

注意：webpack5 中，官方已经不推荐使用 file-loader 和 url-loader 了，而是使用 webpack5 自带的资源模块类型(asset module type)，不仅可以处理图片，还可以处理字体文件。默认这个配置是生效的，会将图片和字体打包到根目录 build 下，如果再配置了 file-loader 或 url-loader，就会两个都起作用，生成两套资源文件，所以还是使用 *asset module type* 配置就行。

### 安装

```bash
npm install file-loader -D
npm install url-loader -D
```

### 配置

webpack.config.js 配置，如下是将所有的配置列举出来了，实际中选择合适的一种配置即可

```js
const path = require("path");

// 导出配置信息
module.exports = {
  mode: "development",
  // 入口文件
  entry: "./src/main.js",
  // 打包导出文件
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
    // 设置asset module type图片打包路径
    // assetModuleFilename: "img/[name]_[hash:6].[ext]"
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 正则表达式
        // 写法一：loader的写法（语法糖）
        // loader: "css-loader",

        // 写法二
        // use: "css-loader",

        // 写法三
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                // plugins: [require("autoprefixer")],
                // 该插件已包含autoprefixer的功能
                plugins: [require("postcss-preset-env")],
              },
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" },
        ],
      },
      // 如下1，2，3是等效的，选择其一就行；建议webpack5及之后选择3，之前的话选url-loader
      // {
      //   // 1. 图片处理 - file-loader
      //   test: /\.(jpe?g|png|gif|svg)$/,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       outputPath: "img",
      //       // 名称_6位hash值，防止图片重复
      //       // ext[extension]：使用原来的后缀名，而不是统一成某个格式，如png
      //       // name: "[name].png",
      //       name: "[name]_[hash:6].[ext]",
      //     },
      //   },
      // },
      // {
      //   // 2. 图片处理 - url-loader 图片处理
      //   test: /\.(jpe?g|png|gif|svg)$/,
      //   use: {
      //     loader: "url-loader",
      //     options: {
      //       name: "img/[name]_[hash:6].[ext]",
      //       // 小于100kb的才专为base64形式。默认会全部转，如果图片较大的话，影响首屏加载
      //       limit: 100 * 1024,
      //     },
      //   },
      // },
      {
        // 3. 图片处理 - 资源模块类型(asset module type)
        test: /\.(jpe?g|png|gif|svg)$/,
        type: "asset",
        generator: {
          filename: "img/[name]_[hash:6].[ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024,
          },
        },
      },

      // 如下1，2时等效的，但是在webpack5中使用2，单独使用1会有问题
      // {
      //   // 1. 处理字体文件 file-loader
      //   test: /\.(woff2?|eot|ttf)$/i,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       name: "font/[name]_[hash:6][ext]",
      //     },
      //   },
      // },
      {
        // 2. 处理字体文件 资源模块类型
        test: /\.(woff2?|eot|ttf)$/i,
        type: "asset/resource",
        generator: {
          filename: "font/[name]_[hash:6][ext]",
        },
      },
    ],
  },
};
```
