## 源码调试

### 基础运行

- 问题：运行`yarn install`安装依赖是会报错的，
- 报错提示：`This repository requires using pnpm as the package manager for scripts to work properly.`
  - [Using pnpm as a Node.js version manager ](https://github.com/pnpm/pnpm/discussions/3434)
- 原因：vue3 源码已经全部迁移到 pnpm 了，需要使用 pnpm 安装

```js
// 全局安装pnpm
sudo npm install --g pnpm

// 安装依赖
pnpm install

// 运行源码
pnpm dev
```

### dev 命令解析

- 命令：`"dev": "node scripts/dev.js --sourcemap"`
- 说明
  - 会将 package.json 中的代码打包到`packages/vue/dist/vue.global.js`文件中，这个文件就是 vue 使用时通过外链引入的文件
  - 创建`packages/vue/examples/my/index.html`文件，引入打包后的 vue.global.js 文件，在浏览器中打开 index.html 文件，即可调试源码
  - sourceMap：调试时可对应源码内容，而不是仅在打包后文件中调试

![图片效果展示](https://github.com/zptime/resources/blob/master/study/ic_ts_2_17.png)

![图片效果展示](https://github.com/zptime/resources/blob/master/study/ic_ts_2_16.png)