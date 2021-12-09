## method 中的方法不使用箭头函数的原因

Vue 的源码中对 methods 中的所有函数进行了遍历，并且通过 bind 绑定了 this。这个 this 就是指的 vue 对象，因此 methods 中的方法就可以通过 this 获取到 data 返回对象中的数据。

如果使用箭头函数，会在自己的上层作用域中来查找 this，最终就是 window，因此无法获取到 data 返回对象中的数据

## 箭头函数详解

[前端面试之彻底搞懂 this 指向](https://mp.weixin.qq.com/s/hYm0JgBI25grNG_2sCRlTA)
