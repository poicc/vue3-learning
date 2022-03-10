let players = ['curry', 'james', 'kobe']
let players2 = players.concat('jorda', ['拉里伯德', '魔术师'])
// [ 'curry', 'james', 'kobe', 'jorda', '拉里伯德', '魔术师' ]
console.log(players2)
// 从第二项剪切到最后
// [ 'james', 'kobe', 'jorda', '拉里伯德', '魔术师' ]
console.log(players2.slice(1))
// [ 'james', 'kobe', 'jorda' ]
console.log(players2.slice(1, 4))