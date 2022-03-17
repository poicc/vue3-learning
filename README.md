# Vue3学习仓库

### es6语法练习

- var-let-const
- 对象字面量增强写法
- 箭头函数
- this指针
- 数组解构赋值及数组的方法
- Primise函数

### Vue初体验

- 包括vue2、vue3创建Vue对象的和挂载的语法对比
- v-if、v-for、v-bind、v-model、组件化

### Vue基本语法
- vue生命周期
- v-on {{}} v-once v-html  v-pre t-text v-cloak 事件、按键修饰符 v-model v-for

### Vue3语法

- 调用createApp会返回一个新的app实例，该实例不会被应用到其他实例的任何全局配置污染。
- setup()是一个新的组件选项，为我们使用Vue3的CompositionAPI新特性提供了统一的入口。创建组件实例时，setup()在初始props解析后立即调用；在生命周期方面，它在beforeCreate()挂载之后，created()之前被执行调用。在setup()里的方法不能通过this来访问实例上的数据，而是通过直接读取data来访问。
- ref函数传入一个值作为参数，返回一个基于该值的响应式Ref对象，该对象中的值一旦被改变和访问，都会被跟踪到，即可以触发模板的重新渲染，显示最新的值。
- 在Vue3中，除了ref函数，还提供了另外一个可以创建响应式对象的函数:reactive函数。
- computed()用来创建计算属性，computed()函数的返回值是一个ref的实例.
- readonly函数，这个函数可以把普通object对象、reactive对象、ref对象返回一个只读对象。

