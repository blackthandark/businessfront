<template>
    <div class="addaddress">
      <mt-header title="添加地址">
        <router-link to="/" slot="left">
          <mt-button icon="back" @click="back">返回</mt-button>
        </router-link>
      </mt-header>
      <div class="input-info">
        <mt-field label="收件人" placeholder="请输入收件人" v-model="receiverName"></mt-field>
        <mt-field label="联系电话" placeholder="请输入联系电话"  v-model="receiverPhone"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号"  v-model="receiverMobile"></mt-field>
        <mt-field label="详细地址" placeholder="请输入详细地址" v-model="receiverAddress"></mt-field>
        <mt-field label="邮编" placeholder="请输入邮编"  v-model="receiverZip"></mt-field>
      </div>
      <div class="button">
        <mt-button type="primary" size="small" @click="choose">选择地址</mt-button>
        <span >{{address}}</span>
      </div>
      <div class="chooseaddress" v-if="show">
        <v-distpicker type="mobile" @selected="onSelected" :province="select.province" :city="select.city" :area="select.area" :placeholders="placeholders"></v-distpicker>
      </div>
      <div class="commit">
        <mt-button type="primary" size="large" @click="commit">提交</mt-button>
      </div>



    </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'
  import VDistpicker from 'v-distpicker'
    export default {

        name: "AddAddress",
        components:{VDistpicker},
        data(){
          return{
            userId:'',
            receiverName:'',
            receiverPhone:'',
            receiverMobile:'',
            receiverProvince:'',
            receiverCity:'',
            receiverDistrict:'',
            receiverAddress:'',
            receiverZip:'',
            placeholders: {
              province: '请选择所在省份',
              city: '请选择所在城市',
              area:'请选择所在区'
            },
            select: {
              province: '',
              city: '',
              area:''
            },
            address:'请选择地址',
            show:false
          }
        },
        computed:{
          ...mapGetters(['getUser'])
        },
        methods:{
          ...mapActions(['isShowFooterBar']),
          back:function () {
            this.$router.go(-1)
          },
          choose:function(){
            this.show=true
          },
          commit:function(){
            var _vm=this
            if(this.userId!=''&&this.receiverName!=''&&this.receiverPhone!=''
              &&this.receiverMobile!=''&&this.receiverProvince!=''&&this.receiverCity!=''
              &&this.receiverDistrict!=''&&this.receiverAddress!=''&&this.receiverZip!=''){
              this.service.get("/shipping/add.do",{
                params:{
                  "userId":this.userId,
                  "receiverName":this.receiverName,
                  "receiverPhone":this.receiverPhone,
                  "receiverMoblie":this.receiverMobile,
                  "receiverProvince":this.receiverProvince,
                  "receiverCity":this.receiverCity,
                  "receiverDistrict":this.receiverDistrict,
                  "receiverAddress":this.receiverAddress,
                  "receiverZip":this.receiverZip
                }
              })
                .then(function (response) {
                  console.log(response)
                  if(response.data.data.status==0){

                  }
                  _vm.$router.go(-1)
                })
                .catch(function (error) {
                  console.log(error)
                })
            }
          },
          onSelected: function (data) {
            this.show=false
            this.address= data.province.value+" "+ data.city.value+" "+data.area.value
            this.receiverProvince=data.province.value
            this.receiverCity=data.city.value
            this.receiverDistrict=data.area.value
            /*this.$emit('city', this.citys + this.cityDetails)*/
            console.log(this.address)
          },
        },

      mounted(){
        this.isShowFooterBar(false)
        this.userId=this.getUser.id
        console.log(this.userId)
      }
    }
</script>

<style lang="stylus" scoped>
  .addaddress
    .input-info
      margin-top .3rem
    .button
      margin-top .2rem
      margin-left .2rem
    .commit
      text-align center
      margin-top .3rem
</style>
