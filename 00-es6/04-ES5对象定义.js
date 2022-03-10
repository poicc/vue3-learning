// 定义对象
function Player (name, age) {
    this.name = name
    this.age = age
}
// 对象的成员函数
Player.prototype.toPrint = function () {
    console.log(this.name + "-----" + this.age)
}

var player1 = new Player("Tom", 30)
var player2 = new Player("Jack", 30)

// Tom-----30
player1.toPrint()
// Jack-----30
player2.toPrint()