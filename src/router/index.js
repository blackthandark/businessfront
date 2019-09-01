import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import UserLogin from '@/pages/center/Userlogin'
import UserRegister from '@/pages/center/UserRegister'
import Cart from '@/pages/cart/Cart'
import My from '@/pages/center/My'
import ProductHome from '@/pages/home/ProductHome'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/home',
      name:'Home',
      component:Home
    },
    {
      path:'/login',
      name:'UserLogin',
      component:UserLogin,
    },
    {
      path:'/register',
      name:'UserRegister',
      component:UserRegister,
    },
    {
      path:'/cart',
      name:'Cart',
      component:Cart,
    },

    {
      path:'/producthome',
      name:'ProductHome',
      component:ProductHome,
    },
    {
      path:'/my',
      name:'My',
      component:My,
    },

  ]
})
