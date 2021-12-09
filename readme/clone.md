## 基础对比

[前端数组、对象的浅拷贝和深拷贝](https://juejin.cn/post/7020348927643746312)

对象的引用赋值（const obj = info）

对象的浅拷贝（const obj = Object.assign({}, info)）：单层对象可以，嵌套对象（如 obj.friends.name）里层的对象仍然公用一个内存地址，会互相影响

对象的深拷贝（JSON.parse(JSON.stringify(obj))；手写 deepClone；借助第三方工具，如 lodash，\_cloneDeep(obj)）

## 引用赋值

## 浅拷贝

## 深拷贝

```js
// 深拷贝
const deepClone = (obj, hash = new WeakMap()) {
  // null或者undefined
  if(obj === null) return obj;
  // 日期
  if(obj instanceof Date) return new Date(obj);
  // 正则
  if(obj instanceof RegExp) return new RegExp(obj);
  // 普通值或者函数
  if(typeof obj !== 'object') return obj;

  // 对象需要深拷贝
  if(hash.get(obj)) return hash.get(obj);
  let clone = new obj.constructor()
  hash.set(obj, clone);
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key], hash);
    }
  }
  return clone;
}
```
