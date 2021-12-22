## vue 源码打包

```js
# 最新稳定版
npm install vue@next

// main.js
import { createApp } from "vue";
const app = createApp({
  template: `<h2>这是vue渲染处理的内容</h2>`,
});
app.mount("#app");
```

1. 报错警告：[Vue warn]: Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".
   at <App>

原因分析：

- 运行时+编译器：包含了对 template 模板的编译代码，更加完整，但是也更大一些；（如 vue.esm-bundler）

- 仅运行时：没有包含对 template 版本的编译代码，相对更小一些；如（vue.runtime.esm-bundler.js）

解决办法：

```js
// import { createApp } from "vue"; // 代表默认使用的是vue.runtime.esm-bundler.js，无法解析template内容
import { createApp } from "vue/dist/vue.esm-bundler"; // 可以正常解析
```
