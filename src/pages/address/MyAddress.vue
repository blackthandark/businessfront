<template>
  <div class="addresslist">
    <mt-header title="我的地址">
      <router-link to="/" slot="left">
        <mt-button icon="back" @click="back">返回</mt-button>
      </router-link>
      <mt-button  slot="right" @click="add">添加地址</mt-button>
    </mt-header>

    <div id="corder_loadmore" ref="wrapper" :style="{height:this.wrapperHeight+'px'}">
      <mt-loadmore :top-method="loadTop"
                   :bottom-method="loadBottom"
                   :bottom-all-loaded="allLoaded"
                   ref="loadmore"
                   :autoFill="autoFill">
        <div class="address-item" v-for="(item,index) of addressList" :key="index" >
          <div class="address-info">
            <div class="address-div">
              <p class="address-p">{{item.receiverProvince}}
                {{item.receiverCity}}
                {{item.receiverDistrict}}
                {{item.receiverAddress}}
              </p>
              <p class="address-zip">邮编:{{item.receiverZip}}</p>
            </div>
            <div class="receiver-div">
              <div class="receiver-name">
                <p class="receiver-name-p">
                  收件人:{{item.receiverName}}
                </p>
              </div>
              <div class="receiver-moblie">
                手机号:{{item.receiverMobile}}
              </div>
            </div>
          </div>
          <div class="address-edit">
            <mt-button type="primary" size="small" @click="editaddress(item.id)">编辑</mt-button>
          </div>
        </div>


      </mt-loadmore>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
    export default {
        name: "MyAddress",
      data() {
        return{
          allLoaded:false,
          pageModel:{},
          autoFill:true,
          wrapperHeight:0
        }
      },
      computed:{
        addressList:function () {

          return this.pageModel.list
        }
      },
      methods:{
        ...mapActions(['isShowFooterBar']),
        ...mapActions(['setSelectAddress']),
        back:function () {
          this.$router.go(-1)
        },
        add:function(){
          this.$router.push("/addaddress")
        },
        editaddress:function(id){
          this.$router.push('/editaddress/'+id)
        },
        loadTop:function() {
          this.getMyAddressList('refresh',1,10)

          // 加载更多数据
          // this.$refs.loadmore.onTopLoaded();
        },
        loadBottom:function() {
          // 加载更多数据
          console.log("=======加载更多===")
          // this.$refs.loadmore.onBottomLoaded();
          console.log(this.pageModel.pageNum);
          if(this.pageModel.hasNextPage){
            this.getMyAddressList("loadmore",this.pageModel.pageNum+1,10)
          }else{
            this.allLoaded=true
            this.$refs.loadmore.onBottomLoaded();
          }

        },
        getMyAddressList:function (optype,pageNo,pageSize) {
          var _vm=this
          this.service.get("/shipping/list.do",{
            "pageNum":pageNo,
            "pageSize":pageSize
          })
            .then(function(response){


              //_vm.orderList.push(response.data.data.list);

              console.log(response.data.data)

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

      mounted(){
        this.isShowFooterBar(false)
        this.getMyAddressList('refresh',1,10)
        console.log("=====mounted====")

        this.wrapperHeight = document.documentElement.clientHeight
          -this.$refs.wrapper.getBoundingClientRect().top;
        console.log(this.wrapperHeight)

      },

    }
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .addresslist
    width 100%
    #corder_loadmore
      overflow-y: auto
      .address-item
        box-shadow: .01rem .05rem .1rem #888888
        margin-top .1rem
        height 2.6rem
        .address-info
          margin-top .2rem
          margin-left .2rem
          .address-div
            font-size .32rem
            .address-p
              width 98%
              margin-top .1rem
              ellipsis()
            .address-zip
              margin-top .1rem
          .receiver-div
            font-size .3rem
            .receiver-name-p
              margin-top .1rem
            .receiver-moblie
              margin-top .1rem
        .address-edit
          margin-left .2rem
          margin-top .1rem

</style>
