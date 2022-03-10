let players = [{ name: "james", age: 36, champions: 3 },
{ name: "curry", age: 31, champions: 3 },
{ name: "kobe", age: 39, champions: 5 }]
//  filter⽅法⽤于过滤数组的成员，满⾜条件的成员组成⼀个新的数组返回
//过滤数组中所有年龄⼤于30的球员，返回值也是⼀个数组
let ageGt30Players = players.filter(function (value, index, array) {
    return value.age > 30
})
// [
//     { name: 'james', age: 36, champions: 3 },
//     { name: 'curry', age: 31, champions: 3 },
//     { name: 'kobe', age: 39, champions: 5 }
//   ]
console.log(ageGt30Players)
// map⽅法⽤于对数组成员处理，返回⼀个处理完成之后的数组
//将数组的中所有⼈的年龄都减⼩5岁
let young5Plauers = ageGt30Players.map(function (value, index, array) {
    return { name: value.name, age: value.age - 5, champions: value.champions }
})
console.log(young5Plauers) //球员对象的年龄变为31,26,34
//计算数组中球员，总冠军的数量
// [
//   { name: 'james', age: 31, champions: 3 },
//   { name: 'curry', age: 26, champions: 3 },
//   { name: 'kobe', age: 34, champions: 5 }
// ]
// reduce⽤于对数组元素进⾏归并计算，和其他数组迭代⽅法不同，它的function有四个参
// 数。其中第⼀个参数⽐较特殊，表示上⼀次迭代计算的结果。
let championsNums = young5Plauers.reduce(function (prev, value, index, array) {
    return prev + value.champions
}, 0)
// 11
console.log(championsNums) 

// ES6写法
let championsNums1 = players.filter(value => value.age > 30)
 .map(value => {return {name:value.name,
age:value.age - 5, champions:value.champions}})
 .reduce((prev,value) => prev + value.champions ,0 )