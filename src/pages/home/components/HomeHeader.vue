<template>
    <div class="header">
      <div class="header-left"><span class="iconfont">&#xe600;</span></div>
      <div class="header-content" @click="search">
        <span class="iconfont">&#xe650;</span>
        <span class="warn">输入要搜索的商品</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "HomeHeader",
        methods:{
          search:function () {
            this.$router.push("/search")
          }
        }
    }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'

  .header
    height:.88rem
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
      height :.6rem
      line-height :.6rem
      margin-top :.14rem
      margin-right :.2rem
      border-radius :.1rem
      -webkit-border-radius :.1rem
      -moz-border-radius :.1rem
    .header-content>.iconfont
      padding-left :.1rem

</style>
