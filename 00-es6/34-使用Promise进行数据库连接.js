let getTableInfo = function () {
    return new Promise((resolve, reject) => {
        //连接数据库的结果是⼀个回调函数，回调函数是异步的，我想获取连接结果
        this.connection.connect(err => { //lambda写法的回调函数
            if (err) reject("数据库连接失败，请检查数据库连接！")
        })
        let sql = 'select * from tb_user '
        //数据库查询结果是⼀个回调函数，回调函数是异步的，我想获取查询结果数据
        this.connection.query(sql, this.dbName,
            function (error, results, fields) { //正常写法的回调函数
                if (error) {
                    reject(error) //查询数据出错
                } else {
                    resolve(JSON.parse(JSON.stringify(results))) //查询成功，返回查询结果
                }
            }
        )
        //数据库连接关闭结果是⼀个回调函数，回调函数是异步的，如果连接关闭失败我需要得到响应
        this.connection.end(function (err) {
            if (err) reject("数据库关闭失败！")
        })
    })
}

getTableInfo().then(results => {
    //将results查询结果渲染到⻚⾯上
}).catch(error => {
    //给⽤户⼀个错误提示
})