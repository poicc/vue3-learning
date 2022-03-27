// moudle-a模块内容导出 方法一 先定义变量、函数 再使用export{...}统一导出
var flag = true;
function doPrintA() {
    console.log('打印模块a的代码')
}

class Player {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    beBetter() {
        console.log(this.name + '越来越好')
    }
}

export { flag, doPrintA, Player }

//定义时直接导出
// export var flag = true;

// export function doPrintA() {
//     console.log('打印模块a的代码')
// }

// export class Player {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     beBetter() {
//         console.log(this.name + '越来越好')
//     }
// }