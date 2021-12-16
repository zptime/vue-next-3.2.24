## webpack 常用 plugin

> 主要介绍 webpack 常用 的几个 plugin 插件，如 CleanWebpackPlugin，HtmlWebpackPlugin，DefinePlugin，CopyWebpackPlugin；还介绍了 webpack 的两个 基础配置，如 mode 和 devtool

### 介绍

- **CleanWebpackPlugin**：打包时，自动删除之前的打包文件，避免每次都要手动删除
- **HtmlWebpackPlugin**：打包的文件夹(build)中没有 index.html 文件，但是项目部署时是必须的，可使用该插件对 index.html 进行打包处理
  - 默认情况下是根据 ejs 的一个模板来生成的，在 html-webpack-plugin 的源码中，有一个 default_index.ejs 模块
  - 自定义模版：配置**template**参数
- **DefinePlugin**：在编译时创建配置的全局常量，是一个 webpack 内置的插件（不需要单独安装）
  - 可用于上面自定义模版中的 BASE_URL 值定义
- **CopyWebpackPlugin**：将一些文件放到 public 的目录下，那么这个目录会被复制到 build 文件夹中。如拷贝 favicon.ico 文件
- 其他配置
  - **mode**：设置模式，development-开发；production-生产，上线；
  - **devtool**：默认 eval；设置为 source-map 时，会生成.map 文件，建议 js 映射文件，方便调试代码

### 安装

```bash
npm install clean-webpack-plugin -D
npm install html-webpack-plugin -D
npm install copy-webpack-plugin -D
```

### 配置

webpack.config.js 配置

```js
const path = require("path");
const { DefinePlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  // 设置模式：development-开发；production-生产，上线；
  mode: "development",
  // 默认eval；设置为source-map时，会生成.map文件，建议js映射文件，方便调试代码
  devtool: "source-map",
  // 入口文件
  entry: "./src/main.js",
  // 打包导出文件
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "js/bundle.js",
  },
  // 插件没有顺序，可以随便写
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "webpack示例",
      template: "./public/index.html",
    }),
    new DefinePlugin({
      // 必须要加外层的单引号，不然会报错
      BASE_URL: '"./"',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          to: "./",
          globOptions: {
            ignore: ["**/index.html"], // 忽略的文件
          },
        },
      ],
    }),
  ],
};
```
