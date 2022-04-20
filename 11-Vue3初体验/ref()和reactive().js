const state = reactive({
    foo: 1,
    bar: 2
});
const fooRef = toRef(state, 'foo')

const number = ref(0);
const count = reactive({
    number
});

console.log(count.number) //0
count.number = 1;
console.log(number.value) //1

