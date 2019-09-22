<template>
    <div  class="pay">
      <mt-header title="支付">
        <router-link to="/" slot="left">
          <mt-button icon="back" @click="back">返回</mt-button>
        </router-link>
      </mt-header>
      <div class="title">
        <p>订单编号:{{this.orderNo}}</p>
        <p>请尽快扫码支付....</p>
      </div>
      <div class="qrimg">
        <img class="img" :src="this.imgUrl"/>
      </div>
      <div class="button">
        <mt-button type="primary" size="large" @click="refresh()">刷新</mt-button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Pay",
        data(){
          return{
            orderNo:"",
            imgUrl:"",
            timer:null
          }},
        methods:{
          back:function () {
            this.$router.go(-1)
          },
          refresh:function(){
            var _vm=this
            this.service.get("/order/pay.do",{
              params:{
                orderNo:this.orderNo
              }
            })
              .then(function (response) {
                console.log(response)
                _vm.imgUrl=response.data.data.qrCode
              })
              .catch(function (error) {
                console.log(error)
              })
          },
          pay:function (orderNo) {
            var _vm=this
            this.service.get("/order/pay.do",{
              params:{
                orderNo:orderNo
              }
            })
              .then(function (response) {
                console.log(response)
                _vm.imgUrl=response.data.data.qrCode
              })
              .catch(function (error) {
                console.log(error)
              })
          },
          ifpayed:function () {
            var _vm=this
            this.service.get("/order/query_order_pay_status.do",{
              params:{
                "orderNo":_vm.orderNo
              }
            })
              .then(function (response) {
                console.log(response)
                if(response.data.data==true){
                  clearInterval(_vm.timer)
                  _vm.$router.push("/myorder")
                }
              })
              .catch(function (error) {
                console.log(error)
              })
          }

        },

        mounted(){
          const orderNo=this.$route.params.orderNo
          this.orderNo=orderNo
          this.pay(orderNo)
          this.timer=setInterval(this.ifpayed,1000)
        }
    }
</script>

<style lang="stylus" scoped>
    .pay
      .title
        text-align center
        margin-top .2rem
        font-size .35rem
      .qrimg
        margin-top .2rem
        text-align center
        .img
          width 3.5rem
          height 3.5rem
      .button
        margin-top .5rem
</style>
