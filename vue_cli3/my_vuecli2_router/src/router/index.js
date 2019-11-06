// 配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

// 路由的懒加载方式
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

// 1.通过Vue.use（插件），安装插件VueRouter
Vue.use(VueRouter)

// 2.创建VueRouter对象

const routes = [
    {
        path: '',
        // redirect重定向  (默认路径)
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '',
                redirect: 'news'
            },
            {
                path: 'news',
                component: HomeNews
            },
            {
                path: 'message',
                component: HomeMessage
            }
        ]
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/user/:userId',
        component: User
    },
    {
        path: '/profile',
        component: Profile
    }
]

const router = new VueRouter({
    // 在routers中配置路由和组件之间的应用关系
    routes,
    mode: 'history',
    linkActiveClass: 'active'
})



// 3.将router对象传入到Vue实例中
export default router


