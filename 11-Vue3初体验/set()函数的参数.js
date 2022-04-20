// setup()的参数
export default {
    props: {
        name: String
    },
    setup(props) {
        watchEffect(() => {
            //可以使用watchEffect()或watch()来观察props的响应变化
            console.log(`name is:` + props.name);
        })
    }
}

// export default {
//     props: {
//         name: String
//     },
//     setup(props) {
//         watchEffect(() => {
//             //结构参数后会失效 不再为响应式
//             console.log(`name is:` + name);
//         })
//     }
// }

// const MyCompont = {
//     setup(props,context) {
//         context.attrs;
//         context.slots;
//         context.emit;
//     }
// };