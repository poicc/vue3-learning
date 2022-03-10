let players = ['curry', 'james', 'kobe']
players.length = 2
// 将数组的length设置⼤于当前数组的项⽬，新加的每⼀项也都是undefined
// undefined
console.log(players[2])


// 超出数组⻓度赋值，数组会⾃动扩充到指定项的⻓度。没有被赋值的项，为undefined
//创建带有3个初始化项的数组
let players1 = ["curry", "james", "kobe"]
//设置数组中第8项
players1[7] = "jordan"
//输出结果为8
console.log(players1.length)
//undefined
console.log(players1[5]) 