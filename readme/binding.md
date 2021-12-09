## 动态绑定属性

通常情况下，我们绑定 src、href、class、style，属性名称都是固定的

但其实也是可以动态绑定属性，即属性名称是变量形式，通过 `:[属性名]=“值”` 的格式来定义

```html
<template>
  <div :[name]="value"></div>
  <!-- 渲染后效果 -->
  <!-- <div 哈哈哈="111"></div> -->
</template>

<script>
  export default {
    data() {
      return {
        name: "哈哈哈",
        value: "111",
      };
    },
  };
</script>
```

## 绑定对象

v-bind 绑定对象时，会将对象上的所有元素，绑定到元素上，常用在

```html
<template>
  <div v-bind="info">绑定对象</div>
  <!-- 渲染后效果 -->
  <!-- <div name="测试" age="4" sex="女">绑定对象</div> -->
</template>

<script>
  export default {
    data() {
      return {
        info: {
          name: "测试",
          age: 4,
          sex: "女",
        },
      };
    },
  };
</script>
```
