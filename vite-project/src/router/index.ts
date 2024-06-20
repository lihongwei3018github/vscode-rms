import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Layout from '@/components/HelloWorld.vue'
//定义一个数组
const routes: Array<RouteRecordRaw> = [
    {
        path: '/home',
        name: 'Home',
        component: Layout
    }
]
//创建路由对象
const router = createRouter({
    history: createWebHistory(),
    routes
})
//导出
export default router