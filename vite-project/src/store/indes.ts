import { defineStore } from 'pinia'

// 定义store
export const testStore = defineStore('counter', {
    // 在 Pinia 中，state 被定义为一个返回初始状态的函数。
    state: () => ({ count: 0 }),
    // Getter 完全等同于 store 的 state 的计算值。可以通过 defineStore() 中的 getters 属性来定义它们。
    getters: {
        double: (state) => state.count * 2,
    },
    // Action 相当于组件中的 method。
    actions: {
        increment() {
            this.count++
        },
    },
})