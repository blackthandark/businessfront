<template>
  <div class="login_container" >

    <div class="login">
      <mt-header title="用户登录">
        <router-link to="/" slot="left">
          <mt-button icon="back" @click="back">返回</mt-button>
        </router-link>
        <mt-button  slot="right" @click="register">注册</mt-button>
      </mt-header>
      <mt-field label="用户名" placeholder="请输入用户名" v-model="loginusername"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="loginpassword"></mt-field>
      <mt-button type="primary" size="large" v-on:click="loginclick">登录</mt-button>

    </div>
  </div>
</template>

<script>

  import {mapActions} from 'vuex'
    export default {
        name: "UserLogin",
        data:function(){
          return {
            loginusername: "",
            loginpassword: "",
            msg:"",
            status:0
          }
        },
      methods: {
        ...mapActions(['setUserInfo']),
        ...mapActions(['isShowFooterBar']),
        loginclick: function () {
          var _vm=this
          console.log(this.loginusername)
          console.log(this.loginpassword)
          if (this.loginusername != "" && this.loginpassword != "") {
              this.service.post("/user/login.do",{
                  username: this.loginusername,
                  password: this.loginpassword
              })
              .then(function (response) {
                console.log(response)
                _vm.status=response.data.status
                if(response.data.status==0){
                  _vm.setUserInfo(response.data.data)
                  _vm.$router.go(-1)
                }
              })
              .catch(function (error) {
                console.log(error)
              })
          }
        },
        register:function(){
          this.$router.push("/register")
        },
        back:function () {
          this.$router.go(-1)
        }
      },
      mounted(){
        this.isShowFooterBar(false)
      }

    }
</script>

<style lang="stylus" scoped>

</style>
