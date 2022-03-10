class Player {
    // 定义构造函数
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    toPrint () {
        setTimeout(function () {
            console.log(this.name + "---------" + this.age)
        }, 1000)
    }
}

let play = new Player("aaa", 222)
// undefined---------undefined
// window对象没有nickname和age属性,所以打印undefied
play.toPrint()

// 解决方式一:额外定义this指针的替身
class Player1 {
    // 定义构造函数
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    toPrint () {
        let _this = this
        setTimeout(function () {
            console.log(_this.name + "---------" + _this.age)
        }, 1000)
    }
}
let play1 = new Player1("aaa", 222)
// aaa---------222
play1.toPrint()

// 解决方式二:使用bind(this)
class Player2 {
    // 定义构造函数
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    toPrint () {
        let _this = this
        setTimeout(function () {
            console.log(_this.name + "---------" + _this.age)
        }.bind(this), 1000)
    }
}
let play2 = new Player2("aaa", 222)
// aaa---------222
play2.toPrint()

// 解决方式三:箭头函数
class Player3 {
    // 定义构造函数
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    toPrint () {
        setTimeout(() => {
            console.log(_this.name + "---------" + _this.age)
        }, 1000)
    }
}
let play3 = new Player2("aaa", 222)
// aaa---------222
play3.toPrint()