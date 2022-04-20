const foo = {};
// 创建一个响应式对象
const reactiveFoo = reactive(foo);
console.log(toRaw(reactiveFoo) === foo); // true
