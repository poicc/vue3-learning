// 对象中的this指针
// 在对象中,this指针指向的就是对象本身,this可以引用对象的属性和方法
class Player {
    // 定义构造函数
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    // 定义成员方法
    toPrint () {
        console.log(this.name + "---------" + this.age)
    }
}
var player = new Player('aaa', 22)
player1.toPrint()