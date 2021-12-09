## 基础比较

- methods 方法
  - 每次调用都会重新执行
- computed 计算属性
  - 可以缓存结果，基于依赖关系尽心缓存
  - 数据不发生变化，不需要重新计算；依赖的数据发生变化，会重新计算
  - getter 和 setter 的处理（源码）
- watch 监听
  - 默认情况下，只是监听引用的变化，内部属性的变化是不会做出响应的
  - deep：深层监听
  - immediate：立即执行一次

## computed

![图片效果展示](https://github.com/zptime/resources/blob/master/study/ic_ts_4_3.png)

![图片效果展示](https://github.com/zptime/resources/blob/master/study/ic_ts_4_4.png)

## watch

![图片效果展示](https://github.com/zptime/resources/blob/master/study/ic_ts_4_6.png)

![图片效果展示](https://github.com/zptime/resources/blob/master/study/ic_ts_4_7.png)
