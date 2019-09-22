<template>
  <div class="search">
    <div class="header">
      <div class="header-left" ><span class="iconfont" @click="back">&#xe600;</span></div>
      <div class="header-content">
        <span class="iconfont" >&#xe650;</span>
        <input class="search-input" placeholder="请输入要搜索的商品" v-model="keyword">
      </div>
      <span class="search-span" @click="searchclick">搜索</span>
    </div>
    <div id="corder_loadmore" ref="wrapper" :style="{height:this.wrapperHeight+'px'}">
      <mt-loadmore :top-method="loadTop"
                   :bottom-method="loadBottom"
                   :bottom-all-loaded="allLoaded"
                   ref="loadmore"
                   :autoFill="autoFill">

        <router-link tag="div" :to="'/productdetail/'+item.id" class="item" v-for="(item,index) of ProductList" :key="index">
          <img class="item-img" :src="imgUrl+item.mainImage">
          <div class="item-info">
            <p class="item-title">{{item.name}}</p>
            <p class="item-desc">{{item.subtitle}}</p>
            <p class="item-price">{{item.price|formatMoney('元')}}</p>
          </div>
        </router-link>

      </mt-loadmore>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
    export default {
        name: "Search",
        data(){
          return{
            allLoaded:false,
            pageModel:{},
            autoFill:true,
            wrapperHeight:0,
            imgUrl:"http://img.cdn.imbession.top/",
            keyword:""
          }
        },
        computed:{
          ProductList:function () {
            return this.pageModel.list
          }
        },

        methods:{
          ...mapActions(['isShowFooterBar']),
          back:function (){
            this.$router.push('/producthome')
          },
          searchclick:function(){
            this.search('refresh',1,10)

          },
          loadTop:function() {
            this.search('refresh',1,10)

            // 加载更多数据
            // this.$refs.loadmore.onTopLoaded();
          },
          loadBottom:function() {
            // 加载更多数据
            console.log("=======加载更多===")
            // this.$refs.loadmore.onBottomLoaded();
            console.log(this.pageModel.pageNum);
            if(this.pageModel.hasNextPage){
              this.search("loadmore",this.pageModel.pageNum+1,10)
            }else{
              this.allLoaded=true
              this.$refs.loadmore.onBottomLoaded();
            }

          },
          search:function (optype,pageNo,pageSize) {
            var _vm=this
            this.service.get("/product/list.do",{
              params:{
                "keyword":this.keyword,
                "pageNum":pageNo,
                "pageSize":pageSize
              }
            })
              .then(function(response){
                console.log(response)
                if(optype=='refresh'){
                  _vm.pageModel=response.data.data
                  _vm.$refs.loadmore.onTopLoaded();
                  _vm.allLoaded=false
                }else if(optype=='loadmore'){
                  if(response.data.data.list.length>0){
                    const oldOrders= _vm.pageModel.list
                    console.log("=========旧数据===")
                    console.log(oldOrders)
                    var orderItem;
                    // for( var i=0 ;i<oldOrders.length;i++){
                    // response.data.data.list.splice(0,0,oldOrders[i])

                    // }
                    var newArrayOrder=oldOrders.concat(response.data.data.list)
                    response.data.data.list=newArrayOrder
                    console.log("=========新数据===")
                    console.log( response.data.data.list)

                  }else{
                    //加载完成
                    _vm.allLoaded = true;// 若数据已全部获取完毕
                  }
                  _vm.pageModel=response.data.data
                  console.log("loadmore=")
                  console.log( _vm.pageModel.list)
                  _vm.$refs.loadmore.onBottomLoaded();

                }
              })
              .catch(function (error) {
                console.log(error)
              })
          },
        },

      mounted() {
        this.isShowFooterBar(false)
        console.log("=====mounted====")
        this.wrapperHeight = document.documentElement.clientHeight
          -this.$refs.wrapper.getBoundingClientRect().top;
        console.log(this.wrapperHeight)
      }

    }
</script>

<style lang="stylus" scoped>
@import "~styles/mixins.styl"
@import '~styles/varibles.styl'
  .search
    width 100%
    .header
      height: .88rem
      background-color:$bgColor
      display :flex
      line-height :.88rem
      .header-left
        height :.72rem
        width :.72rem
        color :white
      .header-left>.iconfont
        font-size :.5rem
      .header-content
        flex:1
        background-color :white
        height: .6rem
        line-height :.6rem
        margin-top :.14rem
        margin-right .1rem
        border-radius :.1rem
        -webkit-border-radius :.1rem
        -moz-border-radius :.1rem
        .header-content>.iconfont
          padding-left :.1rem
        .search-input
          margin-top -.08rem
          height .48rem
          width 3.2rem
      .search-span
        margin-right .1rem
    #corder_loadmore
      overflow-y: auto
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
