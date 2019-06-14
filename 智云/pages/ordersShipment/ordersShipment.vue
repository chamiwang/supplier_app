<template>
	<view class="content">
		<view class="content">
			<input @tap="btn" style="border: 1upx solid #999;" v-model="value" type="text">
			<ul class="ul" :class="ulDis ? 'dis' : ''">
				<li style="border: 1upx solid #999;" @tap="add(item)" v-for="(item, index) in list" :key="index">
					{{item}}
				</li>
			</ul>
		</view>
		<view class="ipt">
			<text>物流公司</text>
			<input type="text">
		</view>
		<view class="ipt">
			<text>物流单号</text>
			<input type="text">
		</view>
		<view class="ipt">
			<text>物流联系人</text>
			<input type="text">
		</view>
		<view class="ipt">
			<text>物流电话</text>
			<input type="text">
		</view>
		<view class="ipt">
			<text>发货日期</text>
			<input type="text">
		</view>
		<view class="ipt">
			<text>到货日期</text>
			<input type="text">
		</view>
		<view class="ipt">
			<text>是否包邮</text>
			<radio-group @change="radioChange">
				<label style="margin-right: 40upx;"><radio value="1" :checked="wq" />包邮</label>
                <label><radio value="2" :checked="!wq" />不包邮</label>
            </radio-group>
		</view>
		<view class="ipt">
			<text>描述</text>
			<textarea />
		</view>
		
		<view class="list">
			<view class="title">
				[定制]白萝卜(员餐 1公斤/个)/斤
			</view>
			<view>
				待发货数量：10
			</view>
			<view>
				<text>实发：</text>
				<input type="text">
				<button type="default">-</button>
				<button type="default">+</button>
			</view>
			<view>
				<text>发货类型</text>
				<picker @change="bindPickerChange" :value="index" :range="deliveryType">
					<view class="uni-input">{{deliveryType[index]}}</view>
				</picker>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				ulDis: true,
				value: '',
				list: ['1', '2', '3', '4'],
				wq: true,
				index: 0,
				deliveryType: ['全部发货', '部分发货']
			}
		},
		methods: {
			btn() {
				this.ulDis = !this.ulDis
			},
			add(item) {
				console.log(item)
				this.value = item
				this.ulDis = true
			},
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			radioChange(e) {
				console.log(e)
			}
		}
	}
</script>

<style>
	.content{
		position: relative;
		width: 100%;
	}
	.ipt{
		margin: 30upx 0;
		margin-left: 5%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 90%;
	}
	.ipt>input{
		border: 1upx solid #999;
	}
	.ipt>textarea{
		width: 65%;
		height: 100upx;
		border: 1upx solid #999;
	}
	
	
	
	.ul{
		position: absolute;
		top: 50upx;
	}
	.dis{
		display: none;
	}
</style>