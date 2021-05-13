import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Profile from './pages/profile'
import Square from './pages/square'
import Setting from './pages/setting'
import Login from './pages/login'
import Register from './pages/register'
import AtMe from './pages/atMe'

Vue.use(Router)

export default new Router({
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
            {  // 个人主页
               path: '/profile/:userName',
               name: 'Profile',
               component: Profile,
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

