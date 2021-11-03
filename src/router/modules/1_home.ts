import Layout from "@/layout/basic-layout.vue"

export default {
    name: '首页',
    path: "/",
    meta: {
        icon: ''
    },
    component: Layout,
    children: [
        {
            name: 'home',
            path: '/home',
            meta: {
                icon: '',
                code: 'homePage'
            },
            component: () => import('@/views/home/index.vue')
        }
    ]
}