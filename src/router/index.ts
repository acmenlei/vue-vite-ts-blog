import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router"
// 1. 根据规则匹配对应的文件
const routeFiles = import.meta.globEager('./modules/*.ts')
// 匹配的路由文件
const routeConfigura: RouteRecordRaw[] = []
// 默认的路由文件
const routeDefaultConfigura: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: "/home"
    }
]
// 
Object.keys(routeFiles).forEach(route => {
    const file = routeFiles[route]
    routeConfigura.push(file.default)
})

const routes = routeDefaultConfigura.concat(routeConfigura)

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

