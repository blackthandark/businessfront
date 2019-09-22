<template>
  <div>
    <home-header></home-header>
    <home-carousel></home-carousel>
    <home-category></home-category>
    <home-hot></home-hot>


  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'
  import HomeHeader from './components/HomeHeader'
  import HomeCarousel from './components/HomeCarousel'
  import HomeCategory from './components/HomeCategory'
  import HomeHot from './components/HomeHot'
    export default {
        name: "ProductHome",
      components: {HomeHot, HomeCategory, HomeCarousel, HomeHeader},
      methods:{
        ...mapActions(['isShowFooterBar']),
      },
      computed:{
          ...mapGetters(['getUser'])
        },
      mounted(){
        this.isShowFooterBar(true)
      }
    }
</script>

<style scoped>

</style>
