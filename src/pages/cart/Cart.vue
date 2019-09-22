<template>
    <div class="cart-container">
      <mt-header title="购物车">
        <router-link to="/" slot="left">
          <mt-button icon="back" @click="back">返回</mt-button>
        </router-link>
        <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
            <symbol id="icon-add" viewBox="0 0 32 32">
              <title>add2</title>
              <path class="path1" d="M15 17h-13.664c-0.554 0-1.002-0.446-1.002-1 0-0.552 0.452-1 1.002-1h13.664v-13.664c0-0.554 0.446-1.002 1-1.002 0.552 0 1 0.452 1 1.002v13.664h13.664c0.554 0 1.002 0.446 1.002 1 0 0.552-0.452 1-1.002 1h-13.664v13.664c0 0.554-0.446 1.002-1 1.002-0.552 0-1-0.452-1-1.002v-13.664z"></path>
            </symbol>
            <symbol id="icon-ok" viewBox="0 0 39 32">
              <title>ok</title>
              <path class="path1" d="M14.084 20.656l-7.845-9.282c-1.288-1.482-3.534-1.639-5.016-0.351s-1.639 3.534-0.351 5.016l10.697 12.306c1.451 1.669 4.057 1.623 5.448-0.096l18.168-22.456c1.235-1.527 0.999-3.765-0.528-5.001s-3.765-0.999-5.001 0.528l-15.573 19.337z"></path>
            </symbol>
            <symbol id="icon-edit" viewBox="0 0 32 32">
              <title>edit</title>
              <path class="path1" d="M25.599 11.292l-4.892-4.892 3.825-3.825 4.892 4.892-3.825 3.825zM4.732 23.308l3.959 3.959-5.939 1.98 1.98-5.939zM10.666 26.225l-4.892-4.892 13.425-13.425 4.892 4.892-13.425 13.425zM31.687 6.713l-6.4-6.4c-0.417-0.417-1.091-0.417-1.508 0l-20.267 20.267c-0.114 0.115-0.191 0.25-0.242 0.393-0.003 0.009-0.012 0.015-0.015 0.025l-3.2 9.6c-0.128 0.383-0.029 0.806 0.257 1.091 0.203 0.204 0.476 0.313 0.754 0.313 0.112 0 0.227-0.017 0.337-0.054l9.6-3.2c0.011-0.003 0.017-0.013 0.027-0.016 0.142-0.052 0.276-0.128 0.39-0.242l20.267-20.267c0.417-0.416 0.417-1.091 0-1.508v0z"></path>
            </symbol>
            <symbol id="icon-del" viewBox="0 0 26 32">
              <title>delete</title>
              <path class="path1" d="M17.723 28c0.543 0 0.984-0.448 0.984-1v-12c0-0.552-0.441-1-0.984-1s-0.985 0.448-0.985 1v12c0 0.552 0.441 1 0.985 1v0zM7.877 28c0.543 0 0.984-0.448 0.984-1v-12c0-0.552-0.441-1-0.984-1s-0.985 0.448-0.985 1v12c0 0.552 0.441 1 0.985 1v0zM12.8 28c0.543 0 0.985-0.448 0.985-1v-12c0-0.552-0.441-1-0.985-1s-0.984 0.448-0.984 1v12c0 0.552 0.441 1 0.984 1v0zM23.631 4h-5.908v-2c0-1.104-0.882-2-1.969-2h-5.908c-1.087 0-1.969 0.896-1.969 2v2h-5.908c-1.087 0-1.969 0.896-1.969 2v2c0 1.104 0.882 2 1.969 2v18c0 2.208 1.765 4 3.939 4h13.784c2.174 0 3.938-1.792 3.938-4v-18c1.087 0 1.969-0.896 1.969-2v-2c0-1.104-0.882-2-1.969-2v0zM9.846 3c0-0.552 0.441-1 0.984-1h3.938c0.544 0 0.985 0.448 0.985 1v1h-5.908v-1zM21.662 28c0 1.104-0.882 2-1.969 2h-13.784c-1.087 0-1.97-0.896-1.97-2v-18h17.723v18zM22.646 8h-19.692c-0.543 0-0.985-0.448-0.985-1s0.441-1 0.985-1h19.692c0.543 0 0.984 0.448 0.984 1s-0.441 1-0.984 1v0z"></path>
            </symbol>
            <symbol id="icon-clock" viewBox="0 0 32 32">
              <title>clock</title>
              <path class="path1" d="M29.333 16c0-7.364-5.97-13.333-13.333-13.333s-13.333 5.97-13.333 13.333c0 7.364 5.97 13.333 13.333 13.333s13.333-5.97 13.333-13.333v0 0 0 0 0 0zM0 16c0-8.837 7.163-16 16-16s16 7.163 16 16c0 8.837-7.163 16-16 16s-16-7.163-16-16zM14.667 14.667v1.333h2.667v-10.667h-2.667v9.333zM24 18.667h1.333v-2.667h-10.667v2.667h9.333z"></path>
            </symbol>
          </defs>
        </svg>
      </mt-header>
      <div class="cart-content">
        <ul>
          <li v-for="(item,index) in productList" :key="index">
            <div class="cart-item">
              <div class="cart-item-main">
                <div class="cart-item-check">
                  <a href="javascript:void 0" class="item-check-btn" :class="{'check':item.productChecked}" @click="changeCheck(item)">
                    <svg class="icon icon-ok"><use xlink:href="#icon-ok"></use></svg>
                  </a>
                </div>
                <div class="cart-item-pic">
                  <img class="cart-img" :src="'http://img.cdn.imbession.top/'+item.productMainImage" alt="">
                </div>
                <div class="cart-info">
                  <div class="item-name">{{item.productName}}</div>
                  <div class="item-price"><span class="unit-price">单价：</span>{{item.productPrice|formatMoney('元')}}</div>
                  <div class="quantity">
                    <a class="add" href="javascript:;" @click="changeQuantity(item,-1)" >-</a>
                    <input class="input-quantity" type="text" v-model="item.quantity" disabled >
                    <a class="sub" href="javascript:;" @click="changeQuantity(item,1)" >+</a>
                  </div>

                </div>
              </div>
              <div class="cart-item-footer">
                <div class="item-price-total"><span class="item-totalpice">小计:</span>{{item.productTotalPrice|formatMoney('元')}}</div>
                <div class="cart-item-operation">
                  <img src="static/images/delete.png" class="item-delete" @click="deleteProduct(item)">
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="cart-footer">
          <div class="item-all-check">
            <a href="javascript:void 0">
                      <span class="item-check-btn" :class="{'check':isallchecked}" >
                        <svg class="icon icon-ok"><use xlink:href="#icon-ok"></use></svg>
                      </span>
              <span class="checkall" @click="checkAll(true)">全选</span>
              <span class="uncheckall"@click="checkAll(false)">取消全选</span>
            </a>
          </div>
          <div class="cart-footer-2">
            <div class="item-total">
              <span class="item-totalspan">总计:</span> <span class="total-price">{{carttotalprice|formatMoney('元')}}</span>
            </div>
            <div class="next-btn-wrap">
              <mt-button type="danger" size="normal" @click="orderconfirm">结账</mt-button>
            </div>
          </div>
        </div>
      </div>

    </div>


      <!--<div id="cart_container">
            <div class="checkout">
              <div id="app">
                <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <symbol id="icon-add" viewBox="0 0 32 32">
                      <title>add2</title>
                      <path class="path1" d="M15 17h-13.664c-0.554 0-1.002-0.446-1.002-1 0-0.552 0.452-1 1.002-1h13.664v-13.664c0-0.554 0.446-1.002 1-1.002 0.552 0 1 0.452 1 1.002v13.664h13.664c0.554 0 1.002 0.446 1.002 1 0 0.552-0.452 1-1.002 1h-13.664v13.664c0 0.554-0.446 1.002-1 1.002-0.552 0-1-0.452-1-1.002v-13.664z"></path>
                    </symbol>
                    <symbol id="icon-ok" viewBox="0 0 39 32">
                      <title>ok</title>
                      <path class="path1" d="M14.084 20.656l-7.845-9.282c-1.288-1.482-3.534-1.639-5.016-0.351s-1.639 3.534-0.351 5.016l10.697 12.306c1.451 1.669 4.057 1.623 5.448-0.096l18.168-22.456c1.235-1.527 0.999-3.765-0.528-5.001s-3.765-0.999-5.001 0.528l-15.573 19.337z"></path>
                    </symbol>
                    <symbol id="icon-edit" viewBox="0 0 32 32">
                      <title>edit</title>
                      <path class="path1" d="M25.599 11.292l-4.892-4.892 3.825-3.825 4.892 4.892-3.825 3.825zM4.732 23.308l3.959 3.959-5.939 1.98 1.98-5.939zM10.666 26.225l-4.892-4.892 13.425-13.425 4.892 4.892-13.425 13.425zM31.687 6.713l-6.4-6.4c-0.417-0.417-1.091-0.417-1.508 0l-20.267 20.267c-0.114 0.115-0.191 0.25-0.242 0.393-0.003 0.009-0.012 0.015-0.015 0.025l-3.2 9.6c-0.128 0.383-0.029 0.806 0.257 1.091 0.203 0.204 0.476 0.313 0.754 0.313 0.112 0 0.227-0.017 0.337-0.054l9.6-3.2c0.011-0.003 0.017-0.013 0.027-0.016 0.142-0.052 0.276-0.128 0.39-0.242l20.267-20.267c0.417-0.416 0.417-1.091 0-1.508v0z"></path>
                    </symbol>
                    <symbol id="icon-del" viewBox="0 0 26 32">
                      <title>delete</title>
                      <path class="path1" d="M17.723 28c0.543 0 0.984-0.448 0.984-1v-12c0-0.552-0.441-1-0.984-1s-0.985 0.448-0.985 1v12c0 0.552 0.441 1 0.985 1v0zM7.877 28c0.543 0 0.984-0.448 0.984-1v-12c0-0.552-0.441-1-0.984-1s-0.985 0.448-0.985 1v12c0 0.552 0.441 1 0.985 1v0zM12.8 28c0.543 0 0.985-0.448 0.985-1v-12c0-0.552-0.441-1-0.985-1s-0.984 0.448-0.984 1v12c0 0.552 0.441 1 0.984 1v0zM23.631 4h-5.908v-2c0-1.104-0.882-2-1.969-2h-5.908c-1.087 0-1.969 0.896-1.969 2v2h-5.908c-1.087 0-1.969 0.896-1.969 2v2c0 1.104 0.882 2 1.969 2v18c0 2.208 1.765 4 3.939 4h13.784c2.174 0 3.938-1.792 3.938-4v-18c1.087 0 1.969-0.896 1.969-2v-2c0-1.104-0.882-2-1.969-2v0zM9.846 3c0-0.552 0.441-1 0.984-1h3.938c0.544 0 0.985 0.448 0.985 1v1h-5.908v-1zM21.662 28c0 1.104-0.882 2-1.969 2h-13.784c-1.087 0-1.97-0.896-1.97-2v-18h17.723v18zM22.646 8h-19.692c-0.543 0-0.985-0.448-0.985-1s0.441-1 0.985-1h19.692c0.543 0 0.984 0.448 0.984 1s-0.441 1-0.984 1v0z"></path>
                    </symbol>
                    <symbol id="icon-clock" viewBox="0 0 32 32">
                      <title>clock</title>
                      <path class="path1" d="M29.333 16c0-7.364-5.97-13.333-13.333-13.333s-13.333 5.97-13.333 13.333c0 7.364 5.97 13.333 13.333 13.333s13.333-5.97 13.333-13.333v0 0 0 0 0 0zM0 16c0-8.837 7.163-16 16-16s16 7.163 16 16c0 8.837-7.163 16-16 16s-16-7.163-16-16zM14.667 14.667v1.333h2.667v-10.667h-2.667v9.333zM24 18.667h1.333v-2.667h-10.667v2.667h9.333z"></path>
                    </symbol>
                  </defs>
                </svg>


            <div class="container">
              <div class="cart">
                <div class="checkout-title">
                  <span>购物车</span>
                </div>




                &lt;!&ndash; table &ndash;&gt;
                <div class="item-list-wrap">
                  <div class="cart-item">
                    &lt;!&ndash;<div class="cart-item-head">
                      <ul>
                        <li>商品信息</li>
                        <li>商品金额</li>
                        <li>商品数量</li>
                        <li>总金额</li>
                        <li>编辑</li>
                      </ul>
                    </div>&ndash;&gt;
                    <ul class="cart-item-list">
                      <li v-for="(item,index) in productList" :key="index">
                        <div class="cart-tab-1">
                          <div class="cart-item-check">
                            <a href="javascript:void 0" class="item-check-btn" :class="{'check':item.productChecked}" @click="changeCheck(item)">
                              <svg class="icon icon-ok"><use xlink:href="#icon-ok"></use></svg>
                            </a>
                          </div>
                          <div class="cart-item-pic">
                            <img :src="'http://img.cdn.imbession.top/'+item.productMainImage" alt="">
                          </div>
                          <div class="cart-item-title">
                            <div class="item-name">{{item.productName}}</div>
                          </div>
                          &lt;!&ndash;<div class="item-include">
                            <dl>
                              <dt>赠送:</dt>
                              <dd>打火机</dd>
                            </dl>
                          </div>&ndash;&gt;
                        </div>
                        <div class="cart-tab-2">
                          <div class="item-price">{{item.productPrice|formatMoney('元')}}</div>
                        </div>
                        <div class="cart-tab-3">
                          <div class="item-quantity">
                            <div class="select-self select-self-open">
                              <div class="quantity">
                                <a href="javascript:;" @click="changeQuantity(item,-1)">-</a>
                                <input type="text" v-model="item.quantity" disabled style="width: 100px">
                                <a href="javascript:;" @click="changeQuantity(item,1)">+</a>
                              </div>
                            </div>
                            <div class="item-stock">有货</div>
                          </div>
                        </div>
                        <div class="cart-tab-4">
                          <div class="item-price-total">{{item.productTotalPrice|formatMoney('元')}}</div>
                        </div>
                        <div class="cart-tab-5">
                          <div class="cart-item-operation">
                            <a href="javascript:void 0" class="item-edit-btn" @click="deleteProduct(item)">
                              <svg class="icon icon-del"><use xlink:href="#icon-del" ></use></svg>
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                &lt;!&ndash; footer &ndash;&gt;
                <div class="cart-foot-wrap">
                  <div class="cart-foot-l">
                    <div class="item-all-check">
                      <a href="javascript:void 0">
                      <span class="item-check-btn" :class="{'check':isallchecked}">
                        <svg class="icon icon-ok"><use xlink:href="#icon-ok"></use></svg>
                      </span>
                        <span @click="checkAll(true)">全选</span>
                      </a>
                    </div>
                    <div class="item-all-del">
                      <a href="javascript:void 0" class="item-del-btn">
                        <span @click="checkAll(false)">取消全选</span>
                      </a>
                    </div>
                  </div>
                  <div class="cart-foot-r">
                    <div class="item-total">
                      Item total: <span class="total-price">{{carttotalprice|formatMoney('元')}}</span>
                    </div>
                    <div class="next-btn-wrap">
                      <a href="javascrit:;" class="btn btn&#45;&#45;red" style="width: 200px">结账</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="md-modal modal-msg md-modal-transition" id="showModal" v-show="false">
              <div class="md-modal-inner">
                <div class="md-top">
                  <button class="md-close">关闭</button>
                </div>
                <div class="md-content">
                  <div class="confirm-tips">
                    <p id="cusLanInfo">你确认删除此订单信息吗?</p>
                  </div>
                  <div class="btn-wrap col-2">
                    <button class="btn btn&#45;&#45;m" id="btnModalConfirm">Yes</button>
                    <button class="btn btn&#45;&#45;m btn&#45;&#45;red" id="btnModalCancel">No</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>-->

</template>

<script>
  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'
    export default {
      name: "Cart",
      data: function(){
        return{
          status1:-100,
          productList:[],
          carttotalprice:0,
          isallchecked:true

        }
      },
      mounted() {
        this.getCartList()
        this.isShowFooterBar(true)
      },
      computed:{
        ...mapGetters(['getUser'])
      },
      methods: {
        ...mapActions(['isShowFooterBar']),

        back:function () {
          this.$router.go(-1)
        },
        orderconfirm:function(){
          if(this.productList!="") {
            this.$router.push("/orderconfirm")
          }
        },
        getCartList: function () {
          var _vm = this
          if(JSON.stringify(this.getUser)!='{}'){
          this.service.get("/cart/list.do")
            .then(function (response) {
              console.log(response)
              _vm.status1=response.status
              _vm.productList=response.data.data.cartProductVOList
              _vm.carttotalprice=response.data.data.carttotalprice
              _vm.isallchecked=response.data.data.isallchecked
            })
            .catch(function (error) {
                console.log(error)
            })
          }
        },
        changeQuantity:function (product,flag) {
          if(flag>0){
            product.quantity++
          }else{
            product.quantity--
            if(product.quantity<1){
              product.quantity=1
            }
          }
          var _vm = this
          this.service.get("/cart/update.do",{
            params:{
              productId:product.productId,
              count:product.quantity
            }
          })
            .then(function (response) {
              console.log(response)
              _vm.status1=response.status
              _vm.productList=response.data.data.cartProductVOList
              _vm.carttotalprice=response.data.data.carttotalprice
              _vm.isallchecked=response.data.data.isallchecked
            })
            .catch(function (error) {
              console.log(error)
            })
        },

        changeCheck:function (product) {
          if (product.productChecked==1){

            var _vm = this
            this.service.get("/cart/un_select.do",{
              params:{
                productId:product.productId,
              }
            })
              .then(function (response) {
                console.log(response)
                _vm.status1=response.status
                _vm.productList=response.data.data.cartProductVOList
                _vm.carttotalprice=response.data.data.carttotalprice
                _vm.isallchecked=response.data.data.isallchecked
              })
              .catch(function (error) {
                console.log(error)
              })
          }else {

            var _vm = this
            this.service.get("/cart/select.do",{
              params:{
                productId:product.productId,
              }
            })
              .then(function (response) {
                console.log(response)
                _vm.status1=response.status
                _vm.productList=response.data.data.cartProductVOList
                _vm.carttotalprice=response.data.data.carttotalprice
                _vm.isallchecked=response.data.data.isallchecked
              })
              .catch(function (error) {
                console.log(error)
              })
          }
        },

        checkAll:function (flag) {
          if(flag){
            var _vm = this
            this.service.get("/cart/select_all.do")
              .then(function (response) {
                console.log(response)
                _vm.status1=response.status
                _vm.productList=response.data.data.cartProductVOList
                _vm.carttotalprice=response.data.data.carttotalprice
                _vm.isallchecked=response.data.data.isallchecked
              })
              .catch(function (error) {
                console.log(error)
              })
          }else {
            var _vm = this
            this.service.get("/cart/un_select_all.do")
              .then(function (response) {
                console.log(response)
                _vm.status1=response.status
                _vm.productList=response.data.data.cartProductVOList
                _vm.carttotalprice=response.data.data.carttotalprice
                _vm.isallchecked=response.data.data.isallchecked
              })
              .catch(function (error) {
                console.log(error)
              })
          }

        },

        deleteProduct:function (product) {
          var _vm = this
          this.service.get("/cart/delete_product.do",{
            params:{
              productIds:product.productId
            }
          })
            .then(function (response) {
              console.log(response)
              _vm.status1=response.status
              _vm.productList=response.data.data.cartProductVOList
              _vm.carttotalprice=response.data.data.carttotalprice
              _vm.isallchecked=response.data.data.isallchecked
            })
            .catch(function (error) {
              console.log(error)
            })
        },

      },
      created(){
        var _vm=this
        window.onscroll = function(){

//变量scrollTop是滚动条滚动时，距离顶部的距离
          var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
//变量windowHeight是可视区的高度
          var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
//变量scrollHeight是滚动条的总高度
          var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
          //滚动条到底部的条件
          if((scrollTop+windowHeight+60)>=scrollHeight){
            //写后台加载数据的函数
            /*console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
*/
            _vm.isShowFooterBar(false)

          }else{
            _vm.isShowFooterBar(true)
          }
        }
      },
      filters:{
        /*formatMoney:function (value,type) {
          return"￥"+value.toFixed(2)+type;
        }*/
      }
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"

  @import "../../assets/css/checkout.css"
  /*@import "../../assets/css/base.css"
  @import "../../assets/css/reset.css"
*/
  .cart-container
    width :100%
    .cart-footer
      margin-top :.3rem
      .item-all-check
        .item-check-btn
          margin-left :.2rem
        .checkall
          margin-top :.2rem
          margin-left :.2rem
        .uncheckall
          margin-top .2rem
          margin-left .2rem
      .cart-footer-2
        display :flex
        height :1.5 rem
        .item-total
          margin-top .3rem
          margin-left :.3rem
          color :red
          .item-totalspan
            color :black
        .next-btn-wrap
          margin-left :.8rem
    .cart-content
      width :100%

      .cart-item
        background-color #eeeeee
        margin-top :.3rem
        width :98%
        overflow:hidden
        margin-left :.05rem
        .cart-item-footer
          height :1.2rem
          display :flex
          line-height :1.2rem
          .item-price-total
            color :red
            font-size :.3rem
            margin-left :.25rem
            .item-totalpice
              color :black
          .cart-item-operation
            position: relative
            left :2rem
            .item-delete
              height :.6rem
              width :.6rem
        .cart-item-main
          display :flex
          .cart-item-check
            margin-top :.6rem
            margin-left :.3rem
            width :.5rem
          .cart-item-pic
            margin-top :.1rem
            .cart-img
              height :2rem
              width :2rem
              border :0
          .cart-info
            .item-name
              margin-left :.15rem
              margin-top :.1rem
              font-size :.35rem
              width :3rem
              line-height :.44rem
              ellipsis()
            .item-price
              margin-left :.15rem
              margin-top .4rem
              color :black
              .unit-price
                font-size :.3rem
            .quantity
              margin-top .4rem
              margin-left :.25rem
              .input-quantity
                width :1rem
                text-align :center
              .add
                font-size .35rem
              .sub
                font-size .35rem
</style>
