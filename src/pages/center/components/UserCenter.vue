<template>
  <div>
    <mt-header title="个人中心">
      <router-link to="/" slot="left">
        <mt-button icon="back" @click="back">返回</mt-button>
      </router-link>
      <!--<mt-button icon="more" slot="right"></mt-button>-->
    </mt-header>
    <mt-field  label="用户名" placeholder="" v-model="this.getUser.username" :readonly="readonly"></mt-field>
    <mt-field  label="邮箱" placeholder="" type="email" v-model="this.getUser.email" :readonly="readonly"></mt-field>
    <mt-field  label="联系方式" placeholder=""  v-model="this.getUser.phone" :readonly="readonly"></mt-field>
    <mt-field  label="密保问题" placeholder=""  v-model="this.getUser.question" :readonly="readonly"></mt-field>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
        name: "UserCenter",
        data(){
          return{
            readonly:true
          }
        },
    computed:{
          ...mapGetters(['getUser'])
    },
        methods:{
          back:function () {
            this.$router.go(-1)
          }
        }
    }
</script>

<style scoped>

</style>
