## webpack 初体验

1. 新建项目 webpack-demo，直接在浏览器打开，会报错，语法浏览器解析不了，不支持

2. 运行 `webpack` 命令（全局的），会将代码压缩打包（dist/main.js），再次在 index.html 中引入运行，可以正常显示

3. 项目中配置独立的 webpack

```js
// package.json 文件初始化
npm init

// 单独安装项目中的 webpack
npm install webpack webpack-cli --save-dev
// 等价于 开发时依赖
npm install webpack webpack-cli -D

```

## webpack 打包体验

### 基础配置

1. 新建 webpack.config.js 文件

```js
const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
  },
};
```

2. 修改 index.html 文件引入

```html
<script src="./build/bundle.js"></script>
```

3. 修改 package.json 文件，加入 build 命令

```json
"build": "webpack",
// 或者
"build": "webpack --config webpack.config.js",
```

### js 文件打包体验

操作：新建 src/js/element.js 文件，进行 dom 的处理

注意：必须在 main.js，即入口文件中引入，才能被打包进入，起作用

### css-loader 配置

1. 新建 css/style.css 文件，加入样式（测试样式）
2. 运行 build 命令，会报错如下：

- Module parse failed: Unexpected token (1:0)
  - 模块解析失败
- You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
  - 需要一个合适的 loader 处理来处理这种类型的文件（css）

解决办法：配置 css-loader

3. css-loader 配置

问题：通过 css-loader 来加载 css 文件，代码中并没有生效（页面没有效果）

原因：css-loader 只是负责将.css 文件进行解析，并不会将解析之后的 css 插入到页面中

解决：使用 style-loader，完成插入 style 的操作

```js
// 安装依赖包
npm install css-loader -D

// 内联方式引入：不报错了，但是不起作用
import "css-loader!./css/style.css";

// cli方式：webpack.config.js中配置
  module: {
    rules: [
      {
        test: /\.css$/, // 正则表达式
        // 写法一：loader的写法（语法糖）
        // loader: "css-loader",

        // 写法二
        // use: "css-loader",

        // 写法三
        use: [{ loader: "css-loader" }],
      },
    ],
  },
```

### style-loader 配置

```js
// 安装命令
npm install style-loader -D

// 配置 webpack.config.js
module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
        ],
      },
    ],
  },
```

### less/sass loader 配置

操作：添加 css/title.less 文件

报错信息：ERROR in ./src/css/title.less 1:0
Module parse failed: Unexpected character '@' (1:0)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders

> @bgColor: blue;

解决：添加 less 支持

```js
// 安装
npm install less-loader -D

// 配置
{
  test: /\.less$/,
  use: [
    { loader: "style-loader" },
    { loader: "css-loader" },
    { loader: "less-loader"}
  ],
},
```

### PostCss 工具

1. PostCSS 介绍：

- PostCSS 是一个通过 JavaScript 来转换样式的工具；
- 这个工具可以帮助我们进行一些 CSS 的转换和适配，比如自动添加浏览器前缀、css 样式的重置；

2. 如何使用 PostCSS：

- 第一步：查找 PostCSS 在构建工具中的扩展，比如 webpack 中的 postcss-loader；
- 第二步：选择可以添加你需要的 PostCSS 相关的插件；

```js
// 安装
npm install postcss -D
// 添加前缀插件
npm install autoprefixer -D
// 扩展插件
npm install postcss-loader -D

// 配置
use: [
  { loader: "style-loader" },
  { loader: "css-loader" },
  {
    loader: "postcss-loader",
    options: {
      postcssOptions: {
        plugins: [require("autoprefixer")],
      },
    },
  },
],
```

3. 事实上，在配置 postcss-loader 时，并不需要使用 autoprefixer，而是使用 postcss-preset-env

postcss-preset-env：将一些现代的 CSS 特性，转成大多数浏览器认识的 CSS，并且会根据目标浏览器或者运行时环境 添加所需的 polyfill；也会自动帮助添加 autoprefixer（所以相当于已经内置了 autoprefixer）

```js
npm install postcss-preset-env -D
```

## 完整配置展示

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
    ],
  },
};
```
