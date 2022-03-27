//使用import{....} 导入变量.. from 模块文件路径
// import { flag, doPrintA, Player } from './module-a.js'

// if (flag) {
//     doPrintA()
//     let player = new Player("张三", 20)
//     player.beBetter()
// }

//使用别名的方式
import  * as moduleA from './module-a.js'

if (moduleA.flag) {
    moduleA.doPrintA()
    let player = new moduleA.Player("张三", 20)
    player.beBetter()
}