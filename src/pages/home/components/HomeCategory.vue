<template>
  <div class="category">
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="(pageArray,index) of pages" :key="index">
        <div class="icons">
          <ul class="icon-list">
            <li v-for="(item,index) of pageArray" :key="index">
              <div class="icon" @click="category(item.id)">
                <div class="icon-img">
                  <img class="icon-img-content" :src="imgHost+item.img"/>
                </div>
                <p class="icon-desc">{{item.name}}</p>
              </div>
            </li>
          </ul>
        </div>
      </mt-swipe-item>
    </mt-swipe>

    </div>
</template>

<script>
    export default {
        name: "HomeCategory",
        data(){
          return{
            imgHost:"http://pay.daidaming.cn/",
            categoryList:[]
          }
        },
      computed:{
        pages(){
          const pages=[]  //数组长度代表页数
          this.categoryList.forEach((item,index)=>{
            //判断index下标的元素应该显示在第几页
            const page=Math.floor(index/8)
            if(!pages[page]){
              pages[page]=[]
            }
            pages[page].push(item)

          })
          return pages
        }
      },
      mounted(){
        this.getcategory()
      },
      methods:{
          category:function(id){
            this.$router.push("/category/"+id)
          },
          getcategory:function () {
            var _vm=this
            this.service.get("/category/get_topcategory.do")
              .then(function (response) {
                console.log(response)
                _vm.categoryList=response.data.data
              })
              .catch(function (error) {
                console.log(error)
              })
          }
      }
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .category
    height :3rem
    .icons
      width :100%
      height :0
      padding-bottom :50%
      overflow :hidden
      .icon
        width :25%
        height:0
        padding-bottom :25%
        overflow :hidden
        float:left
        position: relative
        .icon-img
          position: absolute
          left: 0
          right: 0
          top: 0
          bottom: .44rem
          box-sizing: border-box
          padding: .1rem
          .icon-img-content
            height :100%
            display :block
            margin :0 auto
        .icon-desc
          position :absolute
          left :0
          right :0
          bottom :0
          height :.44rem
          color:#333
          text-align :center
          overflow:hidden
          white-space :nowrap
          text-overflow: ellipsis
          ellipsis()
</style>
