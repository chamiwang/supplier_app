<template>
	<view class="content">
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
			<view style="background: #fff; width: 60%; padding: 10upx 0; text-align: center;">
				<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
					<view class="uni-input">{{date}}</view>
				</picker>
			</view>
		</view>
		<view class="ipt">
			<text>发货日期</text>
			<view style="background: #fff; width: 60%; padding: 10upx 0; text-align: center;">
				<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
					<view class="uni-input">{{date}}</view>
				</picker>
			</view>
		</view>
		<!-- <view class="ipt">
			<text>发货日期</text>
			<input type="text">
		</view>
		<view class="ipt">
			<text>到货日期</text>
			<input type="text">
		</view> -->
		<view class="ipt">
			<text>是否包邮</text>
			<radio-group @change="radioChangeShipping">
				<label style="margin-right: 40upx;"><radio value="1" :checked="freeShipping" />包邮</label>
                <label><radio value="2" :checked="!freeShipping" />不包邮</label>
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
			<view class="committed">
				待发货数量：10
			</view>
			<view class="actual-salary">
				<text>实发：</text>
				<input type="number" v-model="actualSalaryValue">
				<button style="margin-left: 40upx;" type="default" size="mini" @tap="actualSalaryCutDown">-</button>
				<button style="margin-left: 10upx;" type="default" size="mini" @tap="actualSalaryAdd">+</button>
			</view>
			<view class="ipt" style="margin-left: 0;">
				<text style="margin-left: 30upx;">发货类型</text>
				<radio-group @change="radioChangeGoods">
					<label style="margin-right: 40upx;"><radio value="1" :checked="deliverGoods" />部分发货</label>
			        <label><radio value="2" :checked="!deliverGoods" />全部发货</label>
			    </radio-group>
			</view>
			<!-- <view class="delivery-type">
				<text>发货类型：</text>
				<view>
					<input @tap="btn" v-model="value" type="text">
					<view @tap="btn">{{value}}</view>
					<ul class="ul" :class="ulDis ? 'dis' : ''">
						<li @tap="add(item)" v-for="(item, index) in deliveryType" :key="index">
							{{item}}
						</li>
					</ul>
				</view>
			</view> -->
		</view>
		<view class="tax">
			<p>含税单价</p>
			<text>¥18.90</text>
		</view>
		<view class="tax">
			<p>含税金额</p>
			<text>¥94.50</text>
		</view>
		<view class="remark">
			<text>备注</text>
			<textarea />
		</view>
		<view>
			<checkbox-group @change="checkboxChange">
				<label for="">
					<checkbox :checked="qwe" />选中
				</label>
			</checkbox-group>
		</view>
		<view class="btn">
			<button type="primary" size="mini">确认发货</button>
			<!-- <text>确认发货</text> -->
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				date: currentDate,
				// 实发数量
				qwe: true,
				actualSalaryValue: 1,
				ulDis: true,
				// value: '部分发货',
				list: ['1', '2', '3', '4'],
				// 是否包邮
				freeShipping: true,
				// 是否全部发货
				deliverGoods: true,
				index: 0,
				// deliveryType: ['全部发货', '部分发货']
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			checkboxChange(e) {
				console.log(e)
			},
			// 实发增加按钮
			actualSalaryAdd() {
				this.actualSalaryValue = parseInt(this.actualSalaryValue) + 1
			},
			// 实发减少按钮
			actualSalaryCutDown() {
				if (this.actualSalaryValue <= 1) {
					this.actualSalaryValue = 1
				} else {
					this.actualSalaryValue = this.actualSalaryValue - 1
				}
			},
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
			// 是否包邮事件
			radioChangeShipping(e) {
				console.log(e)
			},
			// 是否发货事件
			radioChangeGoods(e) {
				console.log(e)
			}
		}
	}
</script>

<style>
	.content{
		padding: 0;
		margin: 0;
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
		font-size: 32upx;
	}
	.ipt>input{
		width: 60%;
		border: 1upx solid #999;
	}
	.ipt>textarea{
		width: 60%;
		height: 100upx;
		border: 1upx solid #999;
	}
	
	.list{
		width: 100%;
		font-size: 32upx;
	}
	.list .title{
		margin-left: 30upx;
	}
	.list .committed{
		padding: 30upx 0 30upx 30upx;
		font-size: 24upx;
		color: #999;
	}
	
	.actual-salary{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.actual-salary>text{
		margin-left: 30upx;
	}
	.actual-salary>input{
		margin-left: 90upx;
		width: 260upx;
		text-align: center;
		border: 1upx solid #999;
	}
	.actual-salary>button{
		margin: 0;
	}
	
	/* .delivery-type{
		margin-top: 40upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
	}
	.delivery-type>text{
		margin-left: 30upx;
		margin-right: 30upx;
	}
	.delivery-type>view{
		position: relative;
	}
	.delivery-type .ul{
		position: absolute;
		top: 50upx;
	}
	.dis{
		display: none;
	} */
	
	.tax{
		margin: 20upx 0;
		margin-left: 30upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 90%;
		font-size: 32upx;
	}
	.tax>p{
		color: #8F8F94;
	}
	.tax>text{
		margin-left: 30upx;
	}
	
	.remark{
		margin: 30upx 0;
		margin-left: 30upx;
		/* margin-left: 5%; */
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 90%;
	}
	.remark>textarea{
		margin-left: 72upx;
		width: 65%;
		height: 100upx;
		border: 1upx solid #999;
	}
	
	.btn{
		margin-top: 100upx;
		margin-right: 20upx;
		margin-bottom: 100upx;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		color: #fff;
		font-size: 32upx;
	}
	.btn>button{
		padding: 8upx 20upx;
		background: #00a65a;
	}
</style>