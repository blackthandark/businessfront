<template>
    <div class="order-detail">
      <mt-header title="订单详情">
        <router-link to="/" slot="left">
          <mt-button icon="back" @click="back">返回</mt-button>
        </router-link>
      </mt-header>

      <div class="order-info">
        <div class="orderNo">
          <p class="orderNo-p">订单编号:{{OrderDetail.orderNo}}</p>
        </div>
        <div class="order-createTime">
          <p class="createTime">创建时间:{{OrderDetail.createTime}}</p>
        </div>
        <div class="orderStatus">
          <p class="orderStatus-p">订单状态:{{OrderDetail.statusDesc}}</p>
        </div>
        <div class="orderAddress">
          <img class="address-img" src="static/images/address.png">
          <p class="address">{{OrderDetail.shippingVO.receiverProvince}}
            {{OrderDetail.shippingVO.receiverCity}}
            {{OrderDetail.shippingVO.receiverDistrict}}
            {{OrderDetail.shippingVO.receiverAddress}}
            邮编:{{OrderDetail.shippingVO.receiverZip}}
          </p>
        </div>
        <div class="receiver">
          <p class="receiver-p">收件人:{{OrderDetail.shippingVO.receiverName}}
            手机号:{{OrderDetail.shippingVO.receiverMobile}}</p>
        </div>
        <div class="product">
          <div class="product-item" v-for="(item,index) of OrderDetail.orderItemVoList" :key="index">
              <div class="item-img">
                <img class="img" :src="imgUrl+item.productImage"/>
              </div>
              <div class="item-info">
                <div class="item-name">
                  <p class="name">{{item.productName}}</p>
                </div>
                <div class="item-price">
                  <p class="price">单价:{{item.currentUnitPrice|formatMoney("元")}}</p>
                </div>
                <div class="item-quantity">
                  <p class="quantity">数量:{{item.quantity}}</p>
                </div>
                <div class="item-totalprice">
                  <p class="totalprice">小计:{{item.totalPrice|formatMoney("元")}}</p>
                </div>
              </div>
          </div>
        </div>
        <div class="order-payment">
          <p class="payment">订单金额:{{OrderDetail.payment|formatMoney("元")}}</p>
        </div>

      </div>

    </div>
</template>

<script>
    export default {
        name: "OrderDetail",
        data(){
          return{
            imgUrl:"http://img.cdn.imbession.top/",
            OrderDetail:{}
          }
        },
        methods:{
          back:function () {
            this.$router.go(-1)
          },
          getOrderDetail:function () {
            const orderNo=this.$route.params.orderNo;
            var _vm=this
            this.service.get("/order/detail.do",{
              params:{
                orderNo:orderNo
              }
            })
              .then(function (response) {
                console.log(response)
                _vm.OrderDetail=response.data.data
              })
              .catch(function (error) {
                console.log(error)
              })
          }
        },
        mounted(){
          this.getOrderDetail()
        },
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
    .order-detail
      .order-info
        margin-left :.15rem
        margin-top :.3rem
        .orderNo
          .orderNo-p
            font-size :.35rem
        .order-createTime
          margin-top :.3rem
          font-size .3rem
        .orderStatus
          margin-top .2rem
          .orderStatus-p
            font-size :.3rem
        .orderAddress
          display :flex
          margin-top :.2rem
          .address-img
            width :.3rem
            height:.3rem
        .receiver
          margin-top :.2rem
        .product
          .product-item
            margin-top :.3rem
            display:flex
            .item-img
              .img
                width :2rem
                height :2rem
            .item-info
              font-size :.3rem
              margin-left :.1rem
              .name
                width :3rem
                ellipsis()
            .item-price
              margin-top .1rem
            .item-quantity
              margin-top .1rem
            .item-totalprice
              margin-top .1rem
        .order-payment
          margin-top .3rem
          font-size .4rem


</style>
