import Layout from "@/layout/basic-layout.vue"

export default {
    name: '创作中心',
    path: "/article",
    meta: {
        icon: ''
    },
    component: Layout,
    children: [
        {
            name: 'list',
            path: '/article/list',
            meta: {
                icon: '',
                code: 'articleList'
            },
            component: () => import('@/views/article/index.vue')
        }
    ]
}