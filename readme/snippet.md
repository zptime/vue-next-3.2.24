## vscode 代码片段

在 vscode 开发中，一些常用的代码片段或者页面模版，经常需要写，为了方便，可以配置代码片段，之后使用配置的语法命令快速生成，节省时间。

1. mac 中配置：Code->首选项->用户片段

![图片效果展示](https://github.com/zptime/resources/blob/master/study/ic_ts_3_2.png)

2. 搜索 html，配置 html.json

![图片效果展示](https://github.com/zptime/resources/blob/master/study/ic_ts_3_3.png)

将写好的模版语法在[https://snippet-generator.app/](https://snippet-generator.app/)网站生成代码片段，在 vscode 中配置

![图片效果展示](https://github.com/zptime/resources/blob/master/study/ic_ts_3_8.png)

3. 配置后效果

![图片效果展示](https://github.com/zptime/resources/blob/master/study/ic_ts_3_5.png)

4. 使用时，直接输入配置的命令语言即可

```js
// 通用模版
commonHtml;

// vue模版
vueapp;
```

## html 模版页

1. 通用模版页：create common html（使用命令：`commonHtml`）

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <title>通用html模版片段</title>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
    <meta name="renderer" content="webkit" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="keyword" content="测试页" />
    <meta name="description" content="测试页" />
  </head>
  <body>
    <div id="app">调试页面</div>
    <script></script>
  </body>
</html>
```

2. vue 模版页：create vue app（使用命令：`vueapp`）

```html
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
    <meta name="renderer" content="webkit" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="keyword" content="测试页" />
    <meta name="description" content="测试页" />
    <title>vue3.x 使用html模版片段</title>
  </head>
  <body>
    <div id="app"></div>
    <template id="components">
      <h2>{{ message }}</h2>
    </template>

    <script src="https://unpkg.com/vue@next"></script>
    <script>
      const App = {
        template: "#components",
        data() {
          return {
            message: "Hello World!",
          };
        },
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```

### vue 模版

1. vue2.x 模版：create vue page（createVue）

```vue
<template>
  <div class="demo"></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
```

2. vue3.x ts 模板：create vue page for ts（createTSPage）

```js
<template>
  <div class="demo"></div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
```
