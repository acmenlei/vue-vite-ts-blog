import Layout from "@/layout/basic-layout.vue"

export default {
    name: '留言板',
    path: "/depature",
    meta: {
        icon: ''
    },
    component: Layout,
    children: [
        {
            name: 'words',
            path: '/depature/words',
            meta: {
                icon: '',
                code: 'depatureWords'
            },
            component: () => import('@/views/depatureWords/index.vue')
        }
    ]
}