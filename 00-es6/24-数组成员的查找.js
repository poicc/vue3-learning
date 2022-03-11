let players = ['curry', 'james', 'kobe', 'james', 'curry']
// 这两个方法在找不到数据时，返回-1
// 从头开始找
console.log(players.indexOf('james'))
// 从尾部开始找
console.log(players.lastIndexOf("james"))

let findOne = players.find(function (value, index, arr) {
    return value.includes("cu")
})
console.log(findOne)
// 查找符合条件的第一个数组成员下标，找不到返回-1
let findOneIndex = players.findIndex(function (value, index, arr) {
    return value.includes("cu")
})
console.log(findOneIndex)
// ES6写法
// let isGt30 = players.every((value) => value.age > 30)
// let isContainCu = players.some((value) => value.name.includes("cu"))