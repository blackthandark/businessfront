<template>
    <div class="product_detail">
      <mt-header title="商品详情">
        <router-link to="/" slot="left">
          <mt-button icon="back" @click="back">返回</mt-button>
        </router-link>
      </mt-header>

      <detail-banner :productDetail="productDetail"></detail-banner>
      <div class="detail-info">
        <div class="title">
          <span class="title-span">{{productDetail.name}}</span>
        </div>
        <!--<div class="detail-name">
          <span class="name-span">{{productDetail.name}}</span>
        </div>-->
        <div class="price">
          价格:<span class="price-span">{{productDetail.price|formatMoney('元')}} </span>
        </div>
        <div class="stock">
          <span class="stock-span">库存：{{productDetail.stock}}件</span>
        </div>
        <div class="quantity">
          <a class="add" href="javascript:;" @click="changeQuantity(-1)" >-</a>
          <input class="input-quantity" type="text" v-model="quantity" disabled >
          <a class="sub" href="javascript:;" @click="changeQuantity(1)" >+</a>
        </div>
        <div class="addcart">
          <mt-button type="danger" size="normal" @click="addToCart">加入购物车</mt-button>
        </div>

        <!--<div class="detail" v-html="productDetail.detail">

        </div>-->


      </div>
    </div>
</template>

<script>
  import DetailBanner from './components/DetailBanner'
  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'
  import { MessageBox } from 'mint-ui'
    export default {
        name: "ProductDetail",
        components:{DetailBanner},
        data(){
          return{
            imgUrl:"http://img.cdn.imbession.top/",
            productDetail:{},
            quantity:1
          }
        },
        computed:{
          ...mapGetters(['getUser'])
        },
        methods:{
          ...mapActions(['isShowFooterBar']),
          back:function () {
            this.$router.go(-1)
          },
          addToCart:function(){
            if(JSON.stringify(this.getUser)=='{}'){
              this.$router.push("/login")
            }else{
              var _vm=this
              this.service.get("/cart/add.do",{
                params:{
                  productId:this.productDetail.id,
                  count:this.quantity
                }
              })
                .then(function (response) {
                  console.log(response)
                  if(response.data.status==0){
                    MessageBox({
                      title: '提示',
                      message: '加入购物车成功'
                    });
                  }
                })
                .catch(function (error) {
                  console.log(error)
                })
            }

          },
          changeQuantity:function(type){
            if(type==-1){
              if(this.quantity<=1){
                this.quantity=1
              }else{
                this.quantity--
              }

            }
            else if(type==1){
              this.quantity++
            }
          },

          getProductDetail:function () {
            const id=this.$route.params.id;
            var _vm=this
            this.service.get("/product/detail.do",{
              params:{
                productId:id
              }
            })
              .then(function (response) {
                console.log(response)
                if(response.data.status==0){
                  _vm.productDetail=response.data.data
                }

              })
              .catch(function (error) {
                console.log(error)
              })
          }
        },

        mounted(){
          this.isShowFooterBar(false)
          this.getProductDetail()
        },

    }
</script>

<style lang="stylus" scoped>
    .product_detail
      .detail-info
        height :2rem
        .title
          .title-span
            font-size :.36rem
        .price
          margin-left :.3rem
          margin-top :.2rem
          .price-span
            color :red
        .quantity
          margin-top :.2rem
          margin-left :.5rem
          .input-quantity
            width :.5rem
            text-align :center
          .add
            font-size :.4rem
          .sub
            font-size:.4rem
        .stock
          margin-top :.2rem
          margin-left :.3rem
        .addcart
          margin-left :.3rem
          margin-top :.2rem
        /*.detail
          width :4rem
          .J-detail-content
            background-size:3rem 3rem
            width :4rem*/
</style>
