<template>
  <div>
    <div class="banner" @click="handlerClickBanner">
      <img class="banner-img" :src="imgUrl+productDetail.mainImage"/>
      <div class="banner-info">
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe634;</span>
          {{imageList.length}}
        </div>
      </div>
    </div>
    <gallery :imgList="imageList" v-show="showGallery" @close="handlerClose"></gallery>
  </div>
</template>

<script>
  import Gallery from '@/components/Gallery'
    export default {
        name: "DetailBanner",
        components:{Gallery},
        props:{
          productDetail:Object
        },
        data(){
          return{
            imgUrl:"http://img.cdn.imbession.top/",
            showGallery:false,
          }
        },
      computed:{
          imageList:function () {
            return this.productDetail.subImageArr
          },
          imgCount:function(){
            return this.productDetail.subImageArr.length
          }
      },
      methods:{
        handlerClickBanner:function () {
          this.showGallery=true
        },
        handlerClose:function () {
          this.showGallery=false
        }
      }
    }
</script>

<style lang="stylus" scoped>
  .banner
    overflow :hidden
    height :0
    padding-bottom :70%
    position :relative
    .banner-img
      height 3.72rem
      width 100%
    .banner-info
      position absolute
      left :0
      right :0
      bottom :0
      background :rgba(255,255,255,.6)
      .banner-number
        float :right
        margin-right :.1rem
        background:rgba(0,0,0,.8)
        color :white
        border-radius :.1rem
        padding :.05rem
        font-size :.22rem
        .banner-icon
          font-size :.22rem
</style>
