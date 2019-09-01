<template>
  <div>
    首页
    {{this.getUser.username}}
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
    export default {
        name: "ProductHome",
        computed:{
          ...mapGetters(['getUser'])
        }
    }
</script>

<style scoped>

</style>
