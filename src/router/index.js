import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/pages/home/home'
import search from '@/pages/search/search'
import discuss from '@/pages/home/children/discuss'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: home,
    }, {
        path: '/search',
        name: "search",
        component: search
    }, {
        path: '/discuss',
        name: "discuss",
        component: discuss
    }]
})