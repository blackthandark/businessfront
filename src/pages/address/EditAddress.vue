<template>
  <div class="editaddress">
  <mt-header title="修改地址">
    <router-link to="/" slot="left">
      <mt-button icon="back" @click="back">返回</mt-button>
    </router-link>
  </mt-header>
    <div class="input-info">
      <mt-field label="收件人" :placeholder="addressInfo.receiverName" v-model="receiverName"></mt-field>
      <mt-field label="电话" :placeholder="addressInfo.receiverPhone"  v-model="receiverPhone"></mt-field>
      <mt-field label="手机号" :placeholder="addressInfo.receiverMobile"  v-model="receiverMobile"></mt-field>
      <mt-field label="详细地址" :placeholder="addressInfo.receiverAddress" v-model="receiverAddress"></mt-field>
      <mt-field label="邮编" :placeholder="addressInfo.receiverZip"  v-model="receiverZip"></mt-field>
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
  import {mapGetters} from 'vuex'
  import VDistpicker from 'v-distpicker'
    export default {
        name: "EditAddress",
      components:{VDistpicker},
        data(){
          return{
            addressInfo:{},
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
            address:'',
            newaddress:'',
            show:false
          }
        },
      computed:{
        ...mapGetters(['getUser'])
      },
        methods:{
          back:function () {
            this.$router.go(-1)
          },
          choose:function(){
            this.show=true
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
          commit:function(){
            var _vm=this
            if(this.receiverName!=''){
              this.addressInfo.receiverName=this.receiverName
            }
            if(this.receiverPhone!=''){
              this.addressInfo.receiverPhone=this.receiverPhone
            }
            if(this.receiverMobile!=''){
              this.addressInfo.receiverMobile=this.receiverMobile
            }
            if(this.receiverZip!=''){
              this.addressInfo.receiverZip=this.receiverZip
            }
            if(this.receiverProvince!=''){
              this.addressInfo.receiverProvince=this.receiverProvince
            }
            if(this.receiverCity!=''){
              this.addressInfo.receiverCity=this.receiverCity
            }
            if(this.receiverDistrict!=''){
              this.addressInfo.receiverDistrict=this.receiverDistrict
            }
            if(this.receiverAddress!=''){
              this.addressInfo.receiverCity=this.receiverAddress
            }
            this.service.get("/shipping/update.do",{
              params:{
                "id":this.addressInfo.id,
                "receiverAddress":this.addressInfo.receiverAddress,
                "receiverCity":this.addressInfo.receiverCity,
                "receiverDistrict":this.addressInfo.receiverDistrict,
                "receiverMobile":this.addressInfo.receiverMobile,
                "receiverName":this.addressInfo.receiverName,
                "receiverPhone":this.addressInfo.receiverPhone,
                "receiverProvince":this.addressInfo.receiverProvince,
                "receiverZip":this.addressInfo.receiverZip,
                "userId":this.addressInfo.userId,
              }
            })
              .then(function (response) {
                console.log(response)
                _vm.$router.go(-1)
              })
              .catch(function (error) {
                console.log(error)
              })
          },
          getaddress:function () {
            const shippingId=this.$route.params.id
            var _vm=this
            this.service.get("/shipping/select.do",{
              params:{
                shippingId:shippingId
              }
            })
              .then(function (response) {
                console.log(response)
                _vm.addressInfo=response.data.data
                _vm.address=_vm.addressInfo.receiverProvince+' '+_vm.addressInfo.receiverCity+' '+_vm.addressInfo.receiverDistrict
              })
              .catch(function (error) {
                console.log(error)
              })
          }
        },
        mounted(){
          this.getaddress()
        }
    }
</script>

<style lang="stylus" scoped>
  .editaddress
    .input-info
      margin-top .3rem
    .button
      margin-top .2rem
      margin-left .2rem
    .commit
      text-align center
      margin-top .3rem
</style>
