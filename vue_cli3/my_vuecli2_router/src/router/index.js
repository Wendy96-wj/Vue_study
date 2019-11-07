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
        ],
        meta:{
            title:'首页'
        }
    },
    {
        path: '/about',
        component: About,
        meta:{
            title:'关于'
        }
    },
    {
        path: '/user/:userId',
        component: User,
        meta:{
            title:'用户'
        }
    },
    {
        path: '/profile',
        component: Profile,
        // meta 元数据   表示描述元素的数据
        meta:{
            title:'档案'
        }
    }
]

const router = new VueRouter({
    // 在routers中配置路由和组件之间的应用关系
    routes,
    mode: 'history',
    linkActiveClass: 'active'
})

// 前置守卫（guard）
router.beforeEach((to,from,next) =>{
    //  从from 跳转到 to
    document.title = to.matched[0].meta.title;
    next() // 必须调用
    // console.log('beforeEach');
    
})

// 后置钩子（hook）
router.afterEach((to,from)=>{
    // console.log('afterEach');
    
})

// 先调（跳转时）beforeEach后调（跳转后）afterEach
// 属于全局守卫





// 3.将router对象传入到Vue实例中
export default router


