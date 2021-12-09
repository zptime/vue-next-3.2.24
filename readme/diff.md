## v-for 中 key 的作用

- key 属性主要用在 Vue 的虚拟 DOM 算法，在新旧 nodes 对比时辨识 VNodes；
- 如果不使用 key，Vue 会使用一种最大限度减少动态元素并且尽可能的尝试`就地修改/复用`相同类型元素的算法；
- 而使用 key 时，它会基于 key 的变化重新排列元素顺序，并且会移除/销毁 key 不存在的元素；

## VNode

- VNode：是 Virtual Node，虚拟节点，本质是一个 JavaScript 的对象
- 虚拟 DOM：虚拟节点组成的树状结构

## diff 算法

没有 key，会执行 patchUnkeyedChildren 方法；又 key，会执行 patchKeyedChildren 方法

### 没有 key 的操作及源码

![图片效果展示](https://github.com/zptime/resources/blob/master/study/ic_ts_3_24.png)

![图片效果展示](https://github.com/zptime/resources/blob/master/study/ic_ts_3_23.png)

### 有 key 的操作及源码

![图片效果展示](https://github.com/zptime/resources/blob/master/study/ic_ts_3_26.png)

![图片效果展示](https://github.com/zptime/resources/blob/master/study/ic_ts_3_27.png)

![图片效果展示](https://github.com/zptime/resources/blob/master/study/ic_ts_3_28.png)

![图片效果展示](https://github.com/zptime/resources/blob/master/study/ic_ts_3_25.png)

### patch 的处理

有 key 时，第三步处理方式，挂载一个节点。通过给 patch 函数的第一个参数传 null 实现

![图片效果展示](https://github.com/zptime/resources/blob/master/study/ic_ts_3_29.png)

![图片效果展示](https://github.com/zptime/resources/blob/master/study/ic_ts_3_30.png)
