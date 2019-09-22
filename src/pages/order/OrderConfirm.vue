<template>
    <div class="orderconfirm">
      <mt-header title="订单确认">
        <router-link to="/" slot="left">
          <mt-button icon="back" @click="back">返回</mt-button>
        </router-link>
      </mt-header>
      <div class="address" @click="selectaddress">
        <img class="address-img" src="static/images/address.png">
        <div class="no-address" v-if="JSON.stringify(getSelectAddress)=='{}'">
          <p class="tip">请选择地址</p>
        </div>
        <div class="have-address" v-else>
          <div class="address-info">
            <p class="address-p">{{this.getSelectAddress.receiverProvince}}
              {{this.getSelectAddress.receiverCity}}
              {{this.getSelectAddress.receiverDistrict}}
              {{this.getSelectAddress.receiverAddress}}
              {{this.getSelectAddress.receiverZip}}
            </p>
            <p class="receiver">
              收件人:{{this.getSelectAddress.receiverName}}
               联系电话:{{this.getSelectAddress.receiverMobile}}
            </p>
          </div>
        </div>
      </div>
      <div class="product">
        <div class="product-item" v-for="(item,index) of cartList" :key="index">
          <div class="item-img">
            <img class="img" :src="imgUrl+item.productMainImage"/>
          </div>
          <div class="item-info">
            <div class="item-name">
              <p class="name">{{item.productName}}</p>
            </div>
            <div class="item-price">
              <p class="price">单价:{{item.productPrice|formatMoney("元")}}</p>
            </div>
            <div class="item-quantity">
              <p class="quantity">数量:{{item.quantity}}</p>
            </div>
            <div class="item-totalprice">
              <p class="totalprice">小计:{{item.productTotalPrice|formatMoney("元")}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="carttotal">
        <span class="totalprice-p">订单金额{{this.totalprice}}</span>
        <span class="totalcount-p">商品数量{{this.totalcount}}</span>
        <div class="commit"><mt-button type="primary" size="large" v-on:click="pay">提交订单</mt-button></div>
      </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
    export default {
        name: "OrderConfirm",
        data(){
          return{
            imgUrl:"http://img.cdn.imbession.top/",
            opaddress:{},
            cartList:{},
            totalprice:0,
            totalcount:0,
          }
        },
      computed:{
        ...mapGetters(['getSelectAddress'])
      },
        methods:{
          ...mapActions(['setSelectAddress']),

          back:function () {
            this.$router.go(-1)
          },
          selectaddress:function () {
            this.$router.push("/selectaddress")
          },
          getCartList:function () {
            var _vm=this
            if(JSON.stringify(this.getUser)!='{}'){
              this.service.get("/cart/list.do")
                .then(function (response) {
                  console.log(response)
                  _vm.cartList=response.data.data.cartProductVOList
                  _vm.totalprice=response.data.data.carttotalprice
                })
                .catch(function (error) {
                  console.log(error)
                })
            }
          },
          getCartCount:function () {
            var _vm=this
            if(JSON.stringify(this.getUser)!='{}'){
              this.service.get("/cart/get_cart_product_count.do")
                .then(function (response) {
                  console.log(response)
                  _vm.totalcount=response.data.data
                })
                .catch(function (error) {
                  console.log(error)
                })
            }
          },
          pay:function () {
            var _vm=this
            if(JSON.stringify(this.getSelectAddress)!='{}'){
              console.log(this.getSelectAddress.id)
              this.service.get("/order/create.do",{
                params:{
                  shippingId:this.getSelectAddress.id
                }
              })
                .then(function (response) {
                  console.log(response)
                  _vm.$router.push('/pay/'+response.data.data.orderNo)
                })
                .catch(function (error) {
                  console.log(error)
                })
            }
          }
        },
      mounted() {

        if(JSON.stringify(this.getSelectAddress)=='{}'){
          this.opaddress="请登录"
        }else{
          this.opaddress=this.getUser
        }
        this.getCartList()
        this.getCartCount()
      }
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .orderconfirm
    width :100%
    .address
      margin-top .2rem
      display flex
      .address-img
        height .6rem
        width  .6rem
      .no-address
        .tip
          margin-top .2rem
    .product
      margin-top .2rem
      .product-item
        background-color #efefef
        margin-top :.2rem
        display:flex
        .item-img
          .img
            width :2rem
            height :2rem
        .item-info
          font-size :.3rem
          margin-left :.1rem
          .item-name
            .name
              width :3rem
              ellipsis()
          .item-price
            margin-top .1rem
          .item-quantity
            margin-top .1rem
          .item-totalprice
            margin-top .1rem
    .carttotal
      margin-top .4rem
      font-size .35rem
      height 1rem
      color #e02614
      .totalprice-p
        margin-top .2rem
        margin-left .2rem
      .totalcount-p
        margin-top .2rem
        margin-left .2rem
      .commit
        margin-top .2rem
</style>
