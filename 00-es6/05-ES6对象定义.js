// 定义对象
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

var player1 = new Player('张三', 22)
// 张三---------22
player1.toPrint()

// extends实现类的继承
class BestPlayer extends Player {
    constructor() {
        // super关键字调用父类构造函数，如果不传参数，默认是undefined
        // super必须显式调用，否则子类找不到this指针
        super()
        this.name = "jordan",
            this.age = 49
    }
}
let bestPlayer = new BestPlayer()
// jordan---------49
bestPlayer.toPrint()