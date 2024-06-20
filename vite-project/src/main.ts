import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//引入路由
import router from './router'
//引入element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入Icon图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//引入Pinia
import { createPinia } from 'pinia'
//实例化Pinia
const pinia = createPinia()

const app = createApp(App);
app.use(router).use(ElementPlus).use(pinia).mount('#app');
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}