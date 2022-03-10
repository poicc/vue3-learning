// 对象的解构赋值,变量名上对应即可,顺序不重要
let { age: age, name: name } = { name: "james", age: 35 }
// james---------35
console.log(name + "---------" + age)

// 对象方法的解构
let { sqrt, sin, cos } = Math
// 2
console.log(sqrt(4))