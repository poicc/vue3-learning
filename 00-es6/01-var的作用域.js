if (true) {
    // externalVal没有代码块作用域
    var externalVal = "externaVal"
}

function domainTest () {
    var funVal = "funVal"
    // 可以访问到externalVal+funVal
    console.log(externalVal + "-----------" + funVal)
}
domainTest()

if (true) {
    // 只能访问到externalVal
    console.log(externalVal)
    // 访问不到funVal,因为funVal定义在函数里面，函数有作用域
}