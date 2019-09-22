import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import UserLogin from '@/pages/center/components/Userlogin'
import UserRegister from '@/pages/center/components/UserRegister'
import Cart from '@/pages/cart/Cart'
import My from '@/pages/center/My'
import ProductHome from '@/pages/home/ProductHome'
import UserCenter from '@/pages/center/components/UserCenter'
import MyOrder from '@/pages/order/MyOrder'
import OrderDetail from '@/pages/order/OrderDetail'
import ProductDetail from '@/pages/product/ProductDetail'
import OrderConfirm from '@/pages/order/OrderConfirm'
import SelectAddress from '@/pages/address/SelectAddress'
import AddAddress from '@/pages/address/AddAddress'
import Pay from '@/pages/order/Pay'
import MyAddress from '@/pages/address/MyAddress'
import EditAddress from '@/pages/address/EditAddress'
import CategoryProduct from '@/pages/product/CategoryProduct'
import Search from '@/pages/product/Search'
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
    {
      path:'/usercenter',
      name:'UserCenter',
      component:UserCenter,
    },
    {
      path:'/myorder',
      name:'MyOrder',
      component:MyOrder,
    },
    {
      path:'/orderdetail/:orderNo',
      name:'OrderDetail',
      component:OrderDetail,
    },
    {
      path:'/productdetail/:id',
      name:'ProductDetail',
      component:ProductDetail,
    },
    {
      path:'/orderconfirm',
      name:'OrderConfirm',
      component:OrderConfirm,
    },
    {
      path:'/selectaddress',
      name:'SelectAddress',
      component:SelectAddress,
    },
    {
      path:'/addaddress',
      name:'AddAddress',
      component:AddAddress,
    },
    {
      path:'/pay/:orderNo',
      name:'Pay',
      component:Pay,
    },
    {
      path:'/myaddress',
      name:'MyAddress',
      component:MyAddress,
    },
    {
      path:'/editaddress/:id',
      name:'EditAddress',
      component:EditAddress,
    },
    {
      path:'/category/:id',
      name:'CategoryProduct',
      component:CategoryProduct,
    },
    {
      path:'/search',
      name:'Search',
      component:Search,
    },
  ]
})
