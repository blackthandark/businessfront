// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Home from '@/components/Home'
import UserLogin from '@/pages/center/Userlogin'
import UserRegister from '@/pages/center/UserRegister'
import Cart from '@/pages/cart/Cart'
import My from '@/pages/center/My'
import ProductHome from '@/pages/home/ProductHome'
import {store} from './store/index'


Vue.use(MintUI)

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
  return"￥"+value.toFixed(2)+type;
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App,Home,UserLogin,
    UserRegister,Cart,My,ProductHome },
  template: '<Home/>'
})
