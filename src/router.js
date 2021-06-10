import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'


import Cookie from 'vue-cookie'
import constant from './conf/constant'

Vue.use(Router)


const router = new Router({
    // 本地调试 mode 需要备注掉，上线需要取消备注
    // mode: 'history',
    // base: '/weibo/',
    routes: [{
        path: '/',
        name: 'home',
        component: Home,
         redirect: '/index',
        children: [
            { // 首页
                path: '/index',
                name: 'Index',
                component: () => import('./pages/index'),
            },
            {  // 其他人主页
                // path: '/Otherprofile/:username',
                // path: '/:username',
                path: '/Otherprofile',
                name: 'Otherprofile',
                component:  () => import('./pages/otherprofile'),
            },
            {  // 广场页
                path: '/square',
                name: 'Square',
                component: () => import('./pages/square'),
            },
            {  // 设置页
                path: '/setting',
                name: 'Setting',
                component: () => import('./pages/setting'),
            },
            { // atMe
                path: '/atMe',
                name: 'AtMe',
                component: () => import('./pages/atMe'),
            },{
                path: '/profile',
                name: 'Profile',
                component: () => import('./pages/profile'),

            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('./pages/login'),
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('./pages/register'),
    }
    ]
})
router.beforeEach((to, from, next) => {
    if (to.path == "/login") {
        next()
    } else if (to.path == "/register") {
        next()
    } else {
        if (Cookie.get(constant.COOKIE)) {
            next()
        } else {
            next('/login')
        }
    }
})

export default router

