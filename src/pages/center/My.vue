<template xmlns:v-text="http://www.w3.org/1999/xhtml">
    <div>
      <div class="user_header">
        <mt-header title="我的">
          <router-link to="/" slot="left">
          </router-link>

        </mt-header>
        <div class="userinfo">
          <img class="head-portrait" src="static/images/head-portrait.jpg">
          <span class="optext" v-text="optext" @click="opclick"></span>
        </div>
        <div class="order-content">
          <span class="myorder" @click="clickmyorder">我的订单 ></span>
        </div>
        <div class="address-content">
          <span class="myaddress" @click="clickmyaddress">我的地址 ></span>
        </div>

      </div>


    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {mapActions} from 'vuex'
    import UserCenter from './components/UserCenter'
    export default {
        name: "My",
      components: {UserCenter},
      data(){
        return{
          active:"",
          optext:"请登录",
          isLogin:false,
        }
      },
      methods:{
        back:function () {
          this.$router.go(-1)
        },
        ...mapActions(['isShowFooterBar']),
        ...mapActions(['setUserInfo']),
        opclick:function(){
          if(this.isLogin){
            this.$router.push("/usercenter")
          }else{
            this.$router.push("/login")
          }
        },
        clickmyorder:function () {
          if(this.isLogin){
            this.$router.push("/myorder")
          }else{
            this.$router.push("/login")
          }
        },
        clickmyaddress:function () {
          if(this.isLogin){
            this.$router.push("/myaddress")
          }else{
            this.$router.push("/login")
          }
        },
      },

      computed:{
        ...mapGetters(['getUser'])
      },
      mounted(){
        this.isShowFooterBar(true)
        if(JSON.stringify(this.getUser)=='{}'){
          this.optext="请登录"
          this.isLogin=false
        }else{
          this.optext="用户 "+this.getUser.username
          this.isLogin=true
        }

      }
    }
</script>

<style lang="stylus" scoped>
  .user_header
    .userinfo
      margin-top :.3rem
      width :100%
      height :1.4rem
      margin-left :.3rem
      .head-portrait
        height :1.2rem
        width :1.2rem
        border-radius :100%
      .optext
        margin-left :.3rem
        font-size :.4rem
    .order-content
      height .6rem
      width :100%
      border-style :solid none
      border-width:.02rem
      border-color :#bbbbbb
      line-height :.6rem
      .myorder
        font-size :.3rem
        margin-left .3rem
    .address-content
      height .6rem
      width :100%
      border-style :none none solid none
      border-width:.02rem
      border-color :#bbbbbb
      line-height :.6rem
    .myaddress
      font-size :.3rem
      margin-left .3rem
</style>
