// 箭头左侧定义参数,箭头右侧定义函数体,当函数体为一行内容时,return关键字可以省略
let npParam = function () {
    return 7
}
// 无参箭头函数
let noParamA = () => 7

let sum = function (num1, num2) {
    return num1 + num2
}
// 带参箭头函数
let sumA = (num1, num2) => num1 + num2

let add = function (num1, num2) {
    num1 += 5
    num2 += 5
    return num1 + mum2
}
// 多行函数体的箭头函数
let addA = (num1, num2) => {
    num1 += 5
    num2 += 5
    return num1 + num2
}

