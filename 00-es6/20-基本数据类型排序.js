let values = [1, 2, 3, 10, 19]
// 数组倒序
values.reverse()
// 19,10,3,2,1
console.log(values.toString())
// 正序排序
values.sort()
// 1,10,19,2,3
console.log(values.toString())

function compare(value1,value2){
    return value1 -value2;
}
values.sort(compare)
// 1,2,3,10,19
console.log(values.toString());