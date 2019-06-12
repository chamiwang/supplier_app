<template>
	<view class="erji">
    <form class="form" action="">
      <input ref="input" class="input" :class="[isActive ? 'input1' : '']" @input="wq" v-model="search" confirm-type="search" placeholder="123" />
    </form>
		<view class="nav">
			<ul>
				<li>全部</li>
				<li>待确认</li>
				<li>待发货</li>
				<li>已发货</li>
				<li>待开票</li>
			</ul>
		</view>
		<view class="documents">
			<p>{{documentsData.noDocuments}}</p>
		</view>
		<view class="list">
			<ul>
				<li v-for="(item, index) in listData" :key="index">
					<text class="title">{{item.title}}</text>
					<p>{{item.paymentDays}}<span><img src="/static/img/rightarrow.png" alt=""></span></p>
					<text class="money">{{item.moneyTitle}}&emsp;金额：<span style="color: red;">{{item.money}}</span></text>
					<view class="state">
						{{item.state[2]}}
					</view>
				</li>
				<!-- <li>
					<text class="title">黄瓜(员餐)等80项</text>
					<p>西山温泉酒店-账期<span><img src="/static/img/rightarrow.png" alt=""></span></p>
					<text class="money">PO2982389312&emsp;金额：<span style="color: red;">¥23023.00</span></text>
					<view class="state">
						待确定
					</view>
				</li>
				<li>
					<text class="title">黄瓜(员餐)等80项</text>
					<p>西山温泉酒店-账期<span><img src="/static/img/rightarrow.png" alt=""></span></p>
					<text class="money">PO2982389312&emsp;金额：<span style="color: red;">¥23023.00</span></text>
					<view class="state">
						待发货
					</view>
				</li>
				<li>
					<text class="title">黄瓜(员餐)等80项</text>
					<p>西山温泉酒店-账期<span><img src="/static/img/rightarrow.png" alt=""></span></p>
					<text class="money">PO2982389312&emsp;金额：<span style="color: red;">¥23023.00</span></text>
					<view class="state">
						已发货
					</view>
				</li>
				<li>
					<text class="title">黄瓜(员餐)等80项</text>
					<p>西山温泉酒店-账期<span><img src="/static/img/rightarrow.png" alt=""></span></p>
					<text class="money">PO2982389312&emsp;金额：<span style="color: red;">¥23023.00</span></text>
					<view class="state">
						待开票
					</view>
				</li> -->
			</ul>
		</view>
    <tabBer></tabBer>
  </view>
</template>

<script>
  import tabBer from '../tabBer/tabBer.vue'
  export default{
    data() {
      return {
        search: '',
				isActive: false,
				documentsData: {
					noDocuments: '无单据'
				},
				listData: [
					{
						title: '黄瓜(员餐)等80项',
						paymentDays: '西山温泉酒店-账期',
						moneyTitle: 'PO2982389312',
						money: '¥23023.00',
						state: ['待确定', '待发货', '已发货', '待开票']
					},
					{
						title: '黄瓜(员餐)等80项',
						paymentDays: '西山温泉酒店-账期',
						moneyTitle: 'PO2982389312',
						money: '¥23023.00',
						state: ['待确定', '待发货', '已发货', '待开票']
					},
					{
						title: '黄瓜(员餐)等80项',
						paymentDays: '西山温泉酒店-账期',
						moneyTitle: 'PO2982389312',
						money: '¥23023.00',
						state: ['待确定', '待发货', '已发货', '待开票']
					},
					{
						title: '黄瓜(员餐)等80项',
						paymentDays: '西山温泉酒店-账期',
						moneyTitle: 'PO2982389312',
						money: '¥23023.00',
						state: ['待确定', '待发货', '已发货', '待开票']
					}
				]
      }
    },
    methods: {
      wq(e) {
				if (e.target.value == '') {
					this.isActive = false;
				} else {
					this.isActive = true;
				}
      }
    },
    components: {
      tabBer: tabBer
    }
  }
</script>

<style>
	.erji{
		width: 100%;
	}
  /* .form{
    margin-left: 10%;
    width: 80%;
  } */
  .input{
    margin-top: 10upx;
    margin-left: 10%;
    width: 80%;
    background-color: #ccc;
    border-radius: 15upx;
    background-image: url('../../static/img/sinaweibo.png');
    background-position: 50%;
    background-repeat: no-repeat;
  }
	// 动态更改input背景图
	.input1{
		background: #ccc;
	}
	
	.nav{
		margin-top: 40upx;
		width: 100%;
		height: 50upx;
	}
	.nav>ul{
		padding-bottom: 20upx;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 100%;
	}
	.nav>ul>li{
		padding-bottom: 20upx;
		border-bottom: 2upx solid #999;
		width: 20%;
		text-align: center;
	}
	.nav>ul>li:hover{
		border-bottom: 2upx solid #007AFF;
		color: #007AFF;
	}
	
	.documents{
		width: 100%;
		height: 200upx;
		border-bottom: 1upx solid #999;
	}
	.documents>p{
		padding-top: 30upx;
		padding-left: 30upx;
		word-wrap:break-word;
		word-break:break-all;
		overflow: hidden;
	}
	.list{
		width: 100%;
	}
	.list>ul{
		width: 100%;
	}
	.list>ul>li{
		position: relative;
		display: flex;
		flex-direction: column;
		margin-left: 1%;
		padding-bottom: 30upx;
		width: 98%;
		height: 160upx;
		font-size: 32upx;
		border-bottom: 2upx solid #999;
	}
	.list>ul>li>.title{
		margin: 15upx 0;
		color: #000;
	}
	.list>ul>li>p{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		color: #8F8F94;
	}
	.list>ul>li>p>span>img{
		width: 50upx;
		height: 50upx;
	}
	.list>ul>li>.state{
		position: absolute;
		top: 15upx;
		right: 15upx;
		padding: 8upx 30upx;
		background-color: #007AFF;
		color: #fff;
		font-size: 28upx;
	}
</style>
