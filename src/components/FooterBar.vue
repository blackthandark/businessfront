<template>
    <div>

      <router-view></router-view>

      <mt-tabbar v-model="selected">
        <mt-tab-item id="producthome">
          <img slot="icon" :src="home_img">
          首页
        </mt-tab-item>
        <mt-tab-item id="cart">
          <img slot="icon" :src="cart_img">
          购物车
        </mt-tab-item>
        <mt-tab-item id="my">
          <img slot="icon" :src="my_img">
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>

</template>

<script>
    export default {
        name: "FooterBar",
        data() {
          return{
            home_img:'static/images/home_unselected.png',
            cart_img:'static/images/cart_unselected.png',
            my_img:'static/images/my_unselected.png',
            selected:'producthome'
          }
        },

        watch:{
          selected: function () {
            if(this.selected=='producthome'){
              //首页
              this.$router.push("/producthome")
              this.home_img="static/images/home_selected.png"
            }else{
              this.home_img="static/images/home_unselected.png"
            }
            if(this.selected=='cart'){
              //购物车
              this.$router.push("/cart")
              this.cart_img="static/images/cart_selected.png"
            }else{
              this.cart_img="static/images/cart_unselected.png"
            }
            if(this.selected=='my'){
              //我的
              this.$router.push("/my")
              this.my_img="static/images/my_selected.png"
            }else{
              this.my_img="static/images/my_unselected.png"
            }
          }
        }
    }
</script>

<style scoped>

</style>
