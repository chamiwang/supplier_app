<template name="tabBer">
	<view class="tabber">
    <ul @tap="wq">
    	<li v-for="(item, index) in liData" :key="index" @tap="wq(index)">{{item}}</li>
    </ul>
  </view>
</template>

<script>
  export default{
    data() {
      return {
        liData: ['全部订单', '发货单', '商城待下单']
      }
    },
    name: 'tabBer',
    props: {
      
    },
    methods: {
      wq(index) {
        console.log(index)
        if (!index) {
          uni.navigateTo({
            url: '/pages/sanji/sanji'
          })
        } else if(index === 1) {
          uni.navigateTo({
            url: '/pages/sanji1/sanji1'
          })
        } else {
          uni.navigateTo({
            url: '/pages/sanji2/sanji2'
          })
        }
      }
    },
  }
</script>

<style>
  ul,li{
    list-style: none;
    padding: 0;
  }
  .tabber{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100upx;
  }
  .tabber>ul{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .tabber>ul>li{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 33%;
    border-top: 1upx solid #ccc;
    border-right: 1upx solid #ccc;
  }
  .tabber>ul>li:last-child{
    border-right: 0;
  }
</style>
