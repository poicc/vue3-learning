let playerObje = { "0": "curry", "1": "james", "2": "kobe", length: 3 }
let players = Array.from(playerObje)
// [ 'curry', 'james', 'kobe' ]
console.log(players)

let playersSet = new Set(['curry', 'james', 'curry'])
players = Array.from(playersSet)
// [ 'curry', 'james' ]
console.log(players)

// copyWithIn的用法
//输出结果为[3, 4, 2, 3, 4]
console.log([0,1,2,3,4].copyWithin(0,3,5))