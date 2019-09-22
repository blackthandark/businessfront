// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import fastClick from 'fastclick'
import axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Home from '@/components/Home'
import UserLogin from '@/pages/center/components/Userlogin'
import UserRegister from '@/pages/center/components/UserRegister'
import Cart from '@/pages/cart/Cart'
import My from '@/pages/center/My'
import ProductHome from '@/pages/home/ProductHome'
import ProductDetail from '@/pages/product/ProductDetail'
import OrderDetail from '@/pages/order/OrderDetail'
import {store} from './store/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import OrderConfirm from '@/pages/order/OrderConfirm'
import SelectAddress from '@/pages/address/SelectAddress'

// require styles
import 'swiper/dist/css/swiper.css'
import VDistpicker from 'v-distpicker'

Vue.use(VDistpicker)
fastClick.attach (document.body)
Vue.use(MintUI)
Vue.use(VueAwesomeSwiper)

var service=axios.create({
  baseURL:"http://localhost:8888",
  withCredentials:true,//允许携带Cookie
  //请求预处理
  transformRequest:[
    data =>{
      let params=''
      for(var index in data){
        params+=index+'='+data[index]+'&'
      }
      return params
    }
  ]
})
Vue.prototype.service = service
Vue.config.productionTip = false
Vue.filter("formatMoney",function (value,type) {
    return "￥" + value.toFixed(2) + type;
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App,Home,UserLogin,
    UserRegister,Cart,My,ProductHome,ProductDetail,
    OrderDetail,OrderConfirm,SelectAddress, },
  template: '<Home/>'
})
