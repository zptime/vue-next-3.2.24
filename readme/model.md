## v-model

- v-model 的原理其实是背后有两个操作：

  - v-bind 绑定 value 属性的值；
  - v-on 绑定 input 事件监听到函数中，函数会获取最新的值赋值到绑定的属性中；

- v-model 表单类型绑定：textarea， checkbox，radio，select

- v-model 修饰符：lazy，number，trim

```html
<input v-model="value" />

<!-- 等价于 -->
<input :value="value" @input="value = $event.target.value" />
```

![图片效果展示](https://github.com/zptime/resources/blob/master/study/ic_ts_5_2.png)

```js
const getModelAssigner = (vnode: VNode): AssignerFn => {
  const fn = vnode.props!['onUpdate:modelValue']
  return isArray(fn) ? value => invokeArrayFns(fn, value) : fn
}
```
