## Babel 的介绍及使用

> babel 独立使用；babel 在 webpack 中的配置使用；babel 配置文件的使用

### 基础

1. babel 是一个工具链，主要用于旧浏览器或者环境中将 ECMAScript 2015+代码转换为向后兼容版本的 JavaScript；包括：语法转换、源代码转换等；

2. babel 命令行使用：babel 可以作为**独立**工具使用，不和 webpack 配置

   - @babel/core：babel 的核心代码，必须安装；
   - @babel/cli：可以让我们在命令行使用 babel；

3. 插件的使用

   - @babel/plugin-transform-arrow-functions：箭头转换函数插件
   - plugin-transform-block-scoping：const 转 var 的插件

4. babel 的预设 preset：如果要转换的内容过多，一个个设置很麻烦，可以用预设（preset），里面默认配置了一些基础的插件

   - 插件： @babel/preset-env
   - 安装：npm install @babel/preset-env -D

5. babel 的底层原理：
   - 问题：babel 是如何做到将我们的**一段代码（ES6、TypeScript、React）**转成**另外一段代码（ES5）**
   - 原理：本质上是一个编译器
   - 工作流程：解析阶段（Parsing）-> 转换阶段（Transformation）-> 生成阶段（Code Generation）
   - 源代码解析查看，实现了一个简单的编译器：[https://github.com/jamiebuilds/the-super-tiny-compiler](https://github.com/jamiebuilds/the-super-tiny-compiler)
   - babel 编译器执行原理：如下图所示：

<img src="https://github.com/zptime/resources/blob/master/study/ic_ts_7_1.png" width=800 />

### babel 配置(webpack)

1. babel-loader：在 webpack 中配置及使用 babel，需要安装相关依赖（ babel-loader @babel/core），但是必须要指定插件才会生效，如 @babel/plugin-transform-arrow-functions 和 @babel/plugin-transform-block-scoping

2. babel-preset：webpack 预设 babel 相关插件列表（ @babel/preset-env）

```js
// 1. 手动处理插件
npm install @babel/plugin-transform-arrow-functions -D
npm install @babel/plugin-transform-block-scoping -D

// 2. webpack预设
npm install babel-loader @babel/core -D
npm install @babel/preset-env -D

// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        // 1. babel对js文件的处理：如ES6语法转化等
        test: /\.m?js$/,
        use: {
          loader: "babel-loader",
          options: {
            // 1.1 手动管理插件：需要一个个去安装使用
            // plugins: [
            //   "@babel/plugin-transform-arrow-functions",
            //   "@babel/plugin-transform-block-scoping",
            // ],

            // 1.2 webpack设置预设，加载对应插件列表，传递给babel
            // 常见预设有三个：env；react；typescript
            presets: ["@babel/preset-env"],
            // presets: [
            //   [
            //     "@babel/preset-env",
            //     {
            //       /* 其他对象配置 */
            //     },
            //   ],
            // ],
          },
        },
      },
    ],
  },
};
```

### babel 配置文件(babel.config.js)

babel 的配置信息可以放到一个独立的文件中，官方提供了两种配置文件的编写：

- babel.config.json（或者.js，.cjs，.mjs）文件；
- .babelrc.json（或者.babelrc，.js，.cjs，.mjs）文件；

区别：

- .babelrc.json：早期使用较多的配置方式，但是对于配置 Monorepos 项目是比较麻烦的；
- babel.config.json（babel7）：可以直接作用于 Monorepos 项目的子包，更加推荐；

```js
// babel.config.js
module.exports = {
  presets: [["@babel/preset-env"]],
};

// webpack.config.js
module.exports = {
  module: {
    rules: [
      // 2. 通过babel.config.js单独配置babel
      {
        test: /\.m?js$/,
        loader: "babel-loader",
      },
    ],
  },
};
```
