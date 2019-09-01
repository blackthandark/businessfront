<template>
  <div>
    <h1>登录</h1>
    <br>
    用户名:<input v-model="loginusername"><br>
    密码:  <input type="password" v-model="loginpassword">
    <br>
    <button v-on:click="loginclick">登录</button>
  </div>
</template>

<script>


    export default {
        name: "UserLogin",
        data:function(){
          return {
            loginusername: "",
            loginpassword: ""
          }
        },
      methods: {
        loginclick: function () {
          var _vm=this
          console.log(this.loginusername)
          console.log(this.loginpassword)
          if (this.loginusername != "" && this.loginpassword != "") {
              this.service.get("/user/login.do",{
                params: {
                  username: this.loginusername,
                  password: this.loginpassword
                }
              })
              .then(function (response) {
                console.log(response)
              })
              .catch(function (error) {
                console.log(error)
              })
          }
        }
      }
    }
</script>

<style scoped>

</style>
