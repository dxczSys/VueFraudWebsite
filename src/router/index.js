import Vue from 'vue'
import Router from 'vue-router'
import CommonPage from '../components/common/commonPage.vue'
import index from '../views/index.vue'

Vue.use(Router)

const login = resolve => require(['../views/login.vue'], resolve)
const register = resolve => require(['../views/register.vue'], resolve)
const hrUserInfo = resolve => require(['../views/userInfo.vue'], resolve)
const addNews = resolve => require(['../views/addNews.vue'], resolve)
const newsList = resolve => require(['../views/newsList.vue'], resolve)
const browseNews = resolve => require(['../views/browseNews.vue'], resolve)

export default new Router({
    routes: [
        {
            path: '/',
            component: CommonPage,
            children: [
                {
                    path: '/',
                    name: 'index',
                    component: index
                },
                {
                    path: '/hrView',
                    name: 'hrView',
                    component: hrUserInfo
                },
                {
                    path : '/addNews',
                    name : 'addNews',
                    component : addNews
                },
                {
                    path : '/newsList',
                    name : 'newsList',
                    component : newsList
                },
                {
                    path : '/browseNews',
                    name : 'browseNews',
                    component : browseNews
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/register',
            name: 'register',
            component: register
        },
    ]
})
