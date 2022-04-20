import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';


//使用Vuex
Vue.use(Vuex);

import { COUNTER_ADD, COUNTER_SUB } from './mutation-types';

//创建store对象
const store = new Vuex.Store({
    //相当于全局data
    state: {
        counter: 10,
        firstName: "",
        lastName: ""
    },
    mutations: {
        //mutations基本使用
        // add(state) {
        //     state.counter++;
        // },
        // sub(state) {
        //     state.counter--;
        // }

        //mutations携带参数
        // add(state, num) {
        //     state.counter += num;
        // },
        // sub(state, num) {
        //     state.counter -= num;
        // }

        //mutations携带多个参数-payload
        // add(state, payload) {
        //     state.counter += payload.num * payload.multiple;
        // },
        // sub(state, payload) {
        //     state.counter -= payload.num * payload.multiple;
        // }

        //通过常量引用函数
        [COUNTER_ADD](state, payload) {
            state.counter += payload.num * payload.multiple;
        },
        [COUNTER_SUB](state, payload) {
            state.counter -= payload.num * payload.multiple;
        },
        handleFirstNameVal(state, firstName) {
            state.firstName = firstName
        },
        handleLastNameVal(state, lastName) {
            state.lastName = lastName
        },
        submitMutations(state) {
            state.firstName = "hello"
        }
    },
    actions: {
        // submitActions(context) {
        //     //模拟异步
        //     setTimeout(() => {
        //         context.commit('submitMutations')
        //     }, 2000)
        // },

        // 结合Primise
        submitActions(context, payload) {
            return new Promise((resolve, reject) => {
                axios.get("https://picsum.photos/1920/1080?random").then(res => {
                    console.log(res)
                    resolve("异步操作完成" + res.data)
                }).catch((res) => {
                    reject("异步操作异常" + res)
                })
                // setTimeout(() => {
                //     context.commit('submitMutations')
                //     resolve("异步操作完成" + payload)
                // }, 1000);
            })
        },

        demoActions({commit,state,getters}) {
            setTimeout(() => {
                commit('submitMutations')
            },1000)
        }
    },
    //全局计算属性
    getters: {
        fullName(state) {
            return state.firstName + '-' + state.lastName
        }
    },
    modules: {

    }
})

export default store;