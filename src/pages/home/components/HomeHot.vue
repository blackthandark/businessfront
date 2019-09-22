<template>
    <div>
      <div class="title">热销商品</div>
      <ul>

        <router-link tag="li" :to="'/productdetail/'+item.id" class="item" v-for="(item,index) of hotList" :key="index">
          <img class="item-img" :src="imgUrl+item.mainImage">
          <div class="item-info">
            <p class="item-title">{{item.name}}</p>
            <p class="item-desc">{{item.subtitle}}</p>
            <p class="item-price">{{item.price|formatMoney('元')}}</p>
          </div>
        </router-link>

      </ul>
    </div>
</template>

<script>
  import {mapActions} from 'vuex'
    export default {
        name: "HomeHot",
        data(){
          return{
            hotList:[],
            imgUrl:"http://img.cdn.imbession.top/"
          }
        },
      methods:{
          ...mapActions(['isShowFooterBar']),
          getHotList:function () {
            var _vm=this
            this.service.get("/product/gethot.do")
              .then(function (response) {
                  console.log(response)
                  _vm.hotList=response.data.data
              })
              .catch(function (error) {
                console.log(error)
              })
          }
      },
      mounted(){
        this.getHotList()
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


    }
</script>

<style lang="stylus" scoped>
@import "~styles/mixins.styl"
  .title
    background :#eee
    line-height :.8rem
    text-indent :.2rem
  .item
    display :flex
    overflow:hidden
    height :2rem
    .item-img
      width:1.8rem
      height:1.8rem
      padding:.1rem
    .item-info
      flex:1
      padding :.1rem
      min-width:0
      .item-title
        line-height:.54rem
        font-size:.30rem
        ellipsis()
      .item-desc
        line-height :.54rem
        font-size:.22rem
        ellipsis()
      .item-price
        color:#ff261e
</style>
