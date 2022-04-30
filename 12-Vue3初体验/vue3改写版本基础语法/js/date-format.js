
export function formatData(dt) {
    //获取年月日
    let y = dt.getFullYear();
    // .padStart(2, '0')不足两位则往前补0
    let m = (dt.getMonth() + 1).toString().padStart(2, '0');
    let d = dt.getDate().toString().padStart(2, '0');

    //获取时分秒
    let hh = dt.getHours().toString().padStart(2, '0');
    let mm = dt.getMinutes().toString().padStart(2, '0');
    let ss = dt.getSeconds().toString().padStart(2, '0');

    let formatStr = `${y}-${m}-${d} ${hh}:${mm}:${ss}`
    return formatStr
}
