import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'animate.css'
import './assets/scss/common.scss'

import api from './api/fetch'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.api = api

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
