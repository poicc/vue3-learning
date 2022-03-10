let players = ['curry', 'james', 'kobe']
// 从下标为0的项开始，删除一项
players.splice(0, 1)
// [ 'james', 'kobe' ]
console.log(players)
// 从下标为1的项开始，删除0项，插入两项，相当于插入操作
players.splice(1, 0, 'jordan', '魔术师')
// [ 'james', 'jordan', '魔术师', 'kobe' ]
console.log(players)
// 从下标为1的项开始，删除1项，插入1项，相当于替换操作
players.splice(1, 1, "杜兰特")
// [ 'james', '杜兰特', '魔术师', 'kobe' ]
console.log(players)