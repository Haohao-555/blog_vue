import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Otherprofile from './pages/otherprofile'
import Square from './pages/square'
import Setting from './pages/setting'
import Profile from './pages/profile'
import Login from './pages/login'
import Register from './pages/register'
import AtMe from './pages/atMe'
import Cookie from 'vue-cookie'
import constant from './conf/constant'

Vue.use(Router)


const router = new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: Home,
         redirect: '/index',
        children: [
            { // 首页
                path: '/index',
                name: 'Index',
                component: Index,
            },
            {  // 其他人主页
                path: '/Otherprofile/:username',
                name: 'Otherprofile',
                component: Otherprofile,
            },
            {  // 广场页
                path: '/square',
                name: 'Square',
                component: Square,
            },
            {  // 设置页
                path: '/setting',
                name: 'Setting',
                component: Setting,
            },
            { // atMe
                path: '/atMe',
                name: 'AtMe',
                component: AtMe,
            },{
                path: '/profile',
                name: 'Profile',
                component: Profile,

            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
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

