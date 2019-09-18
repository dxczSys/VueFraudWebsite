import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'animate.css'
import './assets/scss/common.scss'

import '../static/plugins/ueditor-1.4.3.3/ueditor.config.js'
import '../static/plugins/ueditor-1.4.3.3/ueditor.all.min.js'
import '../static/plugins/ueditor-1.4.3.3/lang/zh-cn/zh-cn.js'
import '../static/plugins/ueditor-1.4.3.3/ueditor.parse.min.js'

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
