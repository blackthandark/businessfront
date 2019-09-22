<template>
    <div class="register">
      <mt-header title="用户注册">
        <router-link to="/" slot="left">
          <mt-button icon="back" @click="back">返回</mt-button>
        </router-link>
      </mt-header>
      <div class="register-info">
        <mt-field label="用户名" placeholder="请输入用户名" v-model="registusername"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="registpassword"></mt-field>
        <mt-field label="邮箱" placeholder="请输入邮箱"  v-model="registemail"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号"  v-model="registphone"></mt-field>
        <mt-field label="密保问题" placeholder="请输入密保问题"  v-model="registquestion"></mt-field>
        <mt-field label="密保答案" placeholder="请输入密保答案"  v-model="registanswer"></mt-field>
        <mt-button type="primary" size="large" @click="registclick">注册</mt-button>
      </div>
    </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import { MessageBox } from 'mint-ui'
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
        ...mapActions(['isShowFooterBar']),
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
              MessageBox.alert(response.data.msg).then(action => {
                if(response.data.status==0){
                  _vm.$router.go(-1)
                }
              });


            })
            .catch(function (error) {
              console.log(error)
            })
        },

        back:function () {
          this.$router.go(-1)
        },

      },

      mounted(){
        this.isShowFooterBar(false)
      }

    }
</script>

<style scoped>

</style>
