## 基础对比

[前端数组、对象的浅拷贝和深拷贝](https://juejin.cn/post/7020348927643746312)

对象的引用赋值（const obj = info）

对象的浅拷贝（const obj = Object.assign({}, info)）：单层对象可以，嵌套对象（如 obj.friends.name）里层的对象仍然公用一个内存地址，会互相影响

对象的深拷贝（JSON.parse(JSON.stringify(obj))；手写 deepClone；借助第三方工具，如 lodash，\_cloneDeep(obj)）

## 引用赋值

## 浅拷贝

## 深拷贝
