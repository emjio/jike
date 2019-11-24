// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'

import iconfont from '@/config/iconfont'
import flexible from '@/config/flexible.min'
import zp from '@/config/zepto.min'
import mimimoble from '@/config/miniMobile'

import { Badge, XImg, TransferDom, Tab, TabItem, Swiper, SwiperItem, Previewer } from 'vux'
Vue.component('badge', Badge)
Vue.component('x-img', XImg)
Vue.component('Tab', Tab)
Vue.component('TabItem', TabItem)
Vue.component('Swiper', Swiper)
Vue.component('SwiperItem', SwiperItem)
Vue.directive('transfer-dom', TransferDom)
Vue.component('Previewer', Previewer);
Vue.config.productionTip = false;
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})