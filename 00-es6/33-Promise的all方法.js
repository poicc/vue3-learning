var p1 = new Promise((resolve) => {
    resolve({ msg: "1" })
}), p2 = new Promise((resolve) => {
    resolve({ msg: "2" })
}), p3 = new Promise((resolve) => {
    resolve({ msg: "3" })
})
Promise.all([p1, p2, p3]).then(function (results) {
    // [ { msg: '1' }, { msg: '2' }, { msg: '3' } ]
    console.log(results)
})