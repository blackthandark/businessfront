<template>
  <div class="order">
    <mt-header title="我的订单">
        <mt-button slot="left" icon="back" @click="back">返回</mt-button>
      <!--<mt-button icon="more" slot="right"></mt-button>-->
    </mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="-10">全部订单</mt-tab-item>
      <mt-tab-item id="10">未付款</mt-tab-item>
      <mt-tab-item id="20">已付款</mt-tab-item>
      <mt-tab-item id="40">已发货</mt-tab-item>
      <mt-tab-item id="60">已关闭</mt-tab-item>

    </mt-navbar>
    <div id="corder_loadmore" ref="wrapper" :style="{height:this.wrapperHeight+'px'}">
      <mt-loadmore :top-method="loadTop"
                   :bottom-method="loadBottom"
                   :bottom-all-loaded="allLoaded"
                   ref="loadmore"
                   :autoFill="autoFill">
          <!-- tab-container -->
          <mt-tab-container v-model="selected">
            <mt-tab-container-item id="-10">
              <div class="order-item" v-for="order of pageModel.list" :key="order.orderNo" >
                <p class="order-no">订单号:{{order.orderNo}}</p>
                <p class="order-receiver">收件人:{{order.receiverName}}</p>
                <p class="order-createtime">创建时间:{{order.createTime}}</p>
                <p class="order-status">订单状态:{{order.statusDesc}}</p>
                <p class="order-price">订单金额:{{order.payment|formatMoney("元")}}</p>
                <mt-button type="primary" size="normal" @click="detail(order.orderNo)">查看详情</mt-button>

              </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="10">
              <div class="order-item" v-for="order of pageModel.list" :key="order.orderNo" >
                <p class="order-no">订单号:{{order.orderNo}}</p>
                <p class="order-receiver">收件人:{{order.receiverName}}</p>
                <p class="order-createtime">创建时间:{{order.createTime}}</p>
                <p class="order-status">订单状态:{{order.statusDesc}}</p>
                <p class="order-price">订单金额:{{order.payment|formatMoney("元")}}</p>
                <mt-button type="primary" size="normal" @click="detail(order.orderNo)">查看详情</mt-button>
                <mt-button type="primary" size="normal" @click="pay(order.orderNo)">立即支付</mt-button>
              </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="20">
              <div class="order-item" v-for="order of pageModel.list" :key="order.orderNo" >
                <p class="order-no">订单号:{{order.orderNo}}</p>
                <p class="order-receiver">收件人:{{order.receiverName}}</p>
                <p class="order-createtime">创建时间:{{order.createTime}}</p>
                <p class="order-status">订单状态:{{order.statusDesc}}</p>
                <p class="order-price">订单金额:{{order.payment|formatMoney("元")}}</p>
                <mt-button type="primary" size="normal" @click="detail(order.orderNo)">查看详情</mt-button>

              </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="40">
              <div class="order-item" v-for="order of pageModel.list" :key="order.orderNo" >
                <p class="order-no">订单号:{{order.orderNo}}</p>
                <p class="order-receiver">收件人:{{order.receiverName}}</p>
                <p class="order-createtime">创建时间:{{order.createTime}}</p>
                <p class="order-status">订单状态:{{order.statusDesc}}</p>
                <p class="order-price">订单金额:{{order.payment|formatMoney("元")}}</p>
                <mt-button type="primary" size="normal" @click="detail(order.orderNo)">查看详情</mt-button>

              </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="60">
              <div class="order-item" v-for="order of pageModel.list" :key="order.orderNo" >
                <p class="order-no">订单号:{{order.orderNo}}</p>
                <p class="order-receiver">收件人:{{order.receiverName}}</p>
                <p class="order-createtime">创建时间:{{order.createTime}}</p>
                <p class="order-status">订单状态:{{order.statusDesc}}</p>
                <p class="order-price">订单金额:{{order.payment|formatMoney("元")}}</p>
                <mt-button type="primary" size="normal" @click="detail(order.orderNo)">查看详情</mt-button>

              </div>
            </mt-tab-container-item>
          </mt-tab-container>
      </mt-loadmore>
    </div>
  </div>
  </template>

<script>
  import {mapActions} from 'vuex'
    export default {
        name: "MyOrder",
        data(){
          return{
            selected:"-10",
            n:0,
            allLoaded:false,
            pageModel:{},
            autoFill:false,
            wrapperHeight:0
          }
        },
        computed:{
          orderList:function () {
            return this.pageModel.list
          }
        },
      watch:{
          /*selected: function () {
            if(this.selected==-10){
              this.pageModel={}
              this.getMyOrderList('refresh',1,3,-10)
            }
            if(this.selected==10){
              this.pageModel={}
              this.getMyOrderList('refresh',1,3,10)
            }
            if(this.selected==20){
              this.pageModel={}
              this.getMyOrderList('refresh',1,3,20)
            }
            if(this.selected==40){
              this.pageModel={}
              this.getMyOrderList('refresh',1,3,40)
            }
            if(this.selected==60){
              this.pageModel={}
              this.getMyOrderList('refresh',1,3,60)
            }
          },*/
        selected:function(newval,oldval){
          this.pageModel={}
          console.log("============newvale===="+newval)
          this.getMyOrderList('refresh',1,3,this.selected)

          /**
           * 我的上拉下拉是个切换卡，因为loadmore是同一个容器，所以你往上拉的时候，点击另一个tab它的内容就会定位到上一个tab拉到的位置处
           在tab切换时增加滚到顶部即可
           * */
          var loadme=document.getElementById('corder_loadmore');
          loadme.scrollTop=0
        }
      },

        methods:{
          ...mapActions(['isShowFooterBar']),
          back:function () {
            this.$router.push("/my")
          },
          pay:function(orderNo){
            this.$router.push('/pay/'+orderNo)
          },
          getOrder:function () {
            var _vm=this
            //全部订单
            this.service.get("/order/listall.do")
              .then(function (response) {
                console.log(response)
                if(response.data.status==0){
                  _vm.allOrderList=response.data.data
                }

              })
              .catch(function (error) {
                console.log(error)
              })
            //未付款订单
            this.service.get("/order/listall.do",{
              params:{
                status:10
              }
            })
              .then(function (response) {
                console.log(response)
                if(response.data.status==0){
                  _vm.unpayOrderList=response.data.data
                }

              })
              .catch(function (error) {
                console.log(error)
              })
            //已付款订单
            this.service.get("/order/listall.do",{
              params:{
                status:20
              }
            })
              .then(function (response) {
                console.log(response)
                if(response.data.status==0){
                  _vm.payedOrderList=response.data.data
                }

              })
              .catch(function (error) {
                console.log(error)
              })
            //已发货订单
            this.service.get("/order/listall.do",{
              params:{
                status:40
              }
            })
              .then(function (response) {
                console.log(response)
                if(response.data.status==0){
                  _vm.sendOrderList=response.data.data
                }
                _vm.sendOrderList=response.data.data
              })
              .catch(function (error) {
                console.log(error)
              })
            //已关闭订单
            this.service.get("/order/listall.do",{
              params:{
                status:60
              }
            })
              .then(function (response) {
                console.log(response)
                if(response.data.status==0){
                  _vm.closedOrderList=response.data.data
                }

              })
              .catch(function (error) {
                console.log(error)
              })
          },


          loadTop:function() {
            this.getMyOrderList('refresh',1,3,this.selected)

            // 加载更多数据
            // this.$refs.loadmore.onTopLoaded();
          },
          loadBottom:function() {
            // 加载更多数据
            console.log("=======加载更多===")
            // this.$refs.loadmore.onBottomLoaded();
            console.log(this.pageModel.pageNum);
            if(this.pageModel.hasNextPage){
              this.getMyOrderList('loadmore',this.pageModel.pageNum+1,3,this.selected)
            }else{
              this.allLoaded=true
              this.$refs.loadmore.onBottomLoaded();
            }

          },
          getMyOrderList:function (optype,pageNo,pageSize,status) {
            var _vm=this
            this.service.post("/order/list.do",{
              "pageNum":pageNo,
              "pageSize":pageSize,
              "status":status
            })
              .then(function(response){
                //_vm.orderList.push(response.data.data.list);

                console.log(response.data.data)
                console.log(_vm.allLoaded)
                /*console.log(response.data.data.list[0])*/

                if(optype=='refresh'){
                  _vm.pageModel=response.data.data
                  _vm.$refs.loadmore.onTopLoaded();
                  _vm.allLoaded=false
                }else if(optype=='loadmore'){
                  if(response.data.data.list.length>0){

                    const oldOrders= _vm.pageModel.list
                    console.log("=========旧数据===")
                    console.log(oldOrders)
                    //var orderItem;
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


          detail:function (orderNo) {

            this.$router.push('/orderdetail/'+orderNo)
          },
        },
      mounted(){
        this.isShowFooterBar(false)
        this.getMyOrderList('refresh',1,3,this.selected)
        this.wrapperHeight = document.documentElement.clientHeight -this.$refs.wrapper.getBoundingClientRect().top;
        console.log(this.wrapperHeight)
        console.log("=====mounted====")
      },
      updated(){
        this.isShowFooterBar(false)
      },
      created(){
        this.isShowFooterBar(false)

      },



    }
</script>

<style lang="stylus" scoped>
  .order
    background :#eee
    #corder_loadmore
      overflow-y: auto;
      .order-item
        border :.1rem
        width :100%
        height :3.5rem
        margin-top :.2rem
        background :white
        .order-no
          margin-left :.3rem
          margin-top :.13rem
          line-height :.48rem
          font-size :.33rem
        .order-receiver
          margin-left :.3rem
          margin-top :.2rem
          line-height :.48rem

        .order-createtime
          margin-left :.3rem
          line-height :.48rem
        .order-status
          margin-left :.3rem
          line-height :.48rem
        .order-price
          margin-left :.3rem
          line-height :.48rem
          color :#ff2222
</style>
