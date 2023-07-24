import {createRouter, createWebHashHistory} from 'vue-router'
import PageContent from './components/PageContent.vue'
import DevPortal from './components/DevPortal.vue'
import NotFound from './components/NotFound.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: PageContent},
        { path: '/develop', component: DevPortal},
        { path: "/:notFound", component: NotFound}
    ]
})

export default router