<template>
    <div>
      <h1>注册</h1>
      <br>
      用户名:<input v-model="registusername"><br>
      密码:  <input type="password" v-model="registpassword">
      邮箱： <input v-model="registemail">
      手机： <input v-model="registphone">
      密保问题：<input v-model="registquestion">
      密保答案：<input v-model="registanswer">
      <br>
      <button v-on:click="registclick">注册</button>
    </div>
</template>

<script>
    export default {
        name: "UserRegister",
      data:function () {
        return{
          registusername:"",
          registpassword:"",
          registemail:"",
          registphone:"",
          registquestion:"",
          registanswer:"",
        }
      },
      methods:{
        registclick:function () {
          var _vm=this
          this.service.get("/user/register.do",{
            params: {
              username: this.registusername,
              password: this.registpassword,
              email: this.registemail,
              phone: this.registphone,
              question: this.registquestion,
              answer: this.registanswer
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
</script>

<style scoped>

</style>
