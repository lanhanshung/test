import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)


// 路由懒加载
const Home=()=>import('../views/home/Home.vue')
const Category=()=>import('../views/category/Category')
const ShopCar=()=>import('../views/shopCar/ShopCar.vue')
const Profile=()=>import('../views/profile/Profile.vue')


// 配置路由
const routes = [
  {
    // 默认路由
    path: '/',
    name: 'home',
    redirect:'/home'
  },
  {
    path: '/home',
    // name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Category
  },
  {
    path: '/shopCar',
    name: 'shopCar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ShopCar
  },
  {
    path: '/profile',
    name: 'profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
