<template>
    <div class="swipe">
      <mt-swipe :auto="4500">
        <mt-swipe-item><img class="swipe_img" :src="imgUrl+'topbanner.png'"></mt-swipe-item>
        <mt-swipe-item><img class="swipe_img" :src="imgUrl+'combanner.png'"></mt-swipe-item>

      </mt-swipe>
    </div>
</template>

<script>
    export default {
        name: "HomeCarousel",
        data(){
          return{
            auto:0,
            imgUrl:"http://img.cdn.imbession.top/"
          }
        }
    }
</script>

<style lang="stylus" scoped>
  .swipe
    height :2rem
  .swipe_img
    width :100%

</style>
