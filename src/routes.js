import {createRouter, createWebHashHistory} from 'vue-router'
import PageContent from './components/PageContent.vue'
import DevPortal from './components/DevPortal.vue'
import NotFound from './components/NotFound.vue'
import Login from './components/Login.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/:index?', component: PageContent},
        { path: '/develop', component: DevPortal},
        { path: "/:notFound", component: NotFound},
        { path: "/welcome", component: Login}
    ]
})

export default router