import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Index',
    component: () => import(/* webpackChunkName: "Index" */ '../views/Index.vue')
}, {
    path: '/list/:version',
    name: 'ListView',
    component: () => import(/* webpackChunkName: "ListView" */ '../views/ListView')
}, {
    path: '/list/:version/calc/:index',
    name: 'Calculate',
    component: () => import(/* webpackChunkName: "Calculate" */ '../views/Calculate')
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
