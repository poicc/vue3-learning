// 通过构造函数创建数组
var players = new Array()
// length为20的数组
let players1 = new Array(20)
// 创建带有三个初始化项的数组
let palyers2 = new Array('curry', 'james', 'kobe')
// 关键字new可以省略
let players3 = Array()
let players4 = Array(20)
// 创建并填充一个20项初始值都为0的数组
let players5 = Array(20).fill(0)
let players6 = Array('curry', 'james', 'kobe')
// 通过字面量创建数组
let players7 = []
let players8 = ['curry', 'james', 'kobe']
let players9 = Array.of('curry', 'james', 'kobe')
// [ 'curry', 'james', 'kobe' ]
console.log(players9)
