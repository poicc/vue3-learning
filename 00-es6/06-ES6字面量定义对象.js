let name = "Tom"
let age = 33

let player = {
    name: name,
    age: age,
    toPrint: function () {
        console.log(player)
    }
}

// { name: 'Tom', age: 33, toPrint: [Function: toPrint] }
player.toPrint()

// ES6可以简写
let player1 = {
    name,
    age,
    toPrint () {
        console.log(player1)
    }
}
// { name: 'Tom', age: 33, toPrint: [Function: toPrint] }
player1.toPrint()