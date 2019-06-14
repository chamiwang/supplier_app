<template>
	<view class="content">
		<view class="order-no">
			<ul>
				<li>
					<p>订单编号</p>
					<text>PO001180514010</text>
				</li>
				<li>
					<p>单据状态</p>
					<text style="padding: 6upx 30upx;background: #ff9900;color: #fff;">待确定</text>
				</li>
				<li>
					<p>创建时间</p>
					<text>2018-05-14&emsp;18:20:23</text>
				</li>
				<li>
					<p>创建人</p>
					<text>吴国栋</text>
				</li>
			</ul>
		</view>
		<view class="purchasing-organization">
			<ul>
				<li>
					<p>采购组织</p>
					<text><view style="display: inline-block;color: red;">[直营店]</view>酒仙桥酒店有限公司</text>
				</li>
				<li>
					<p>收货地址</p>
					<text>虚拟收货地址97239283082</text>
				</li>
				<li>
					<p>联系人</p>
					<text>吴国栋</text>
				</li>
				<li>
					<p>联系电话</p>
					<text>138001280812</text>
				</li>
				<li>
					<p>到货日期</p>
					<text>2018-5-29</text>
				</li>
			</ul>
		</view>
		<view class="Invoice-payment">
			<ul>
				<li>
					<p>发票抬头</p>
					<text>18连锁北京酒仙桥店</text>
				</li>
				<li>
					<p>发票类型</p>
					<text>增值税专用发票</text>
				</li>
				<li>
					<p>默认税事</p>
					<text>13%</text>
				</li>
				<li>
					<p>付款类型</p>
					<text>账期</text>
				</li>
				<li>
					<p>付款方式</p>
					<text>对公/现金/<view style="display: inline-block;color: red;">线下支付</view>/<view style="display: inline-block;color: #007AFF;">在线支付</view></text>
				</li>
			</ul>
		</view>
		<view class="account">
			<ul>
				<li>
					<p>开户行</p>
					<text>中国工商银行长沙汇通支行</text>
				</li>
				<li>
					<p>开户行账号</p>
					<text>6222081901001109169</text>
				</li>
				<li>
					<p>税务登记证号</p>
					<text>820808712083212</text>
				</li>
			</ul>
		</view>
		<view class="money">
			<ul>
				<li>
					<p>无税金额</p>
					<text>¥ 466.00</text>
				</li>
				<li>
					<p>税额</p>
					<text>¥ 46.00</text>
				</li>
				<li>
					<p>总金额</p>
					<text>¥ 506.00</text>
				</li>
			</ul>
		</view>
		<view class="note">
			<ul>
				<li>
					<p>备注</p>
					<text></text>
				</li>
				<li>
					<p>附件</p>
					<text></text>
				</li>
			</ul>
		</view>
		<view class="product-list">
			<view class="title">
				产品列表
			</view>
			<view class="product">
				<view class="product-left">
					<img src="/static/img/weixin.png" alt="">
					<text>大兴西瓜(员餐 10-15斤/个)/斤</text>
				</view>
				<view class="product-right">
					<text>
						<p>5.00斤</p>
						<p>¥100.00</p>
					</text>
					<img src="/static/img/rightarrow.png" alt="">
				</view>
			</view>
			<view class="list">
				<ul>
					<li>
						产品编码:
						<text>jd808012231</text>
					</li>
					<li>
						含税单价:
						<text style="color: red;font-weight: bold;">¥20.00</text>
					</li>
					<li>
						已发/订购数量：
						<text>10.00/10.00</text>
					</li>
					<li>
						已收数量：
						<text>0.00</text>
					</li>
					<li>
						备注：
					</li>
					<li>
						税率：
						<text style="margin-right: 20upx;">0%</text>
						起订量：
						<text>0.00</text>
					</li>
				</ul>
			</view>
			<view class="btn">
				<text>确认订单</text>
				<text>拒绝订单</text>
				<text>订单发货</text>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.order-no{
		margin-left: 5%;
		width: 90%;
		font-size: 32upx;
	}
	.order-no>ul{
		width: 100%;
		border-bottom: 2upx solid #999;
	}
	.order-no>ul>li{
		margin: 30upx 0;
		display: flex;
		flex-direction: row;
		width: 100%;
	}
	.order-no>ul>li>p{
		width: 280upx;
	}
	
	.purchasing-organization, .Invoice-payment, .account, .money, .note{
		margin-left: 5%;
		width: 90%;
		font-size: 28upx;
	}
	.purchasing-organization>ul, .Invoice-payment>ul, .account>ul, .money>ul{
		width: 100%;
		border-bottom: 2upx solid #999;
	}
	.purchasing-organization>ul>li, .Invoice-payment>ul>li, .account>ul>li, .money>ul>li, .note>ul>li{
		margin: 20upx 0;
		display: flex;
		flex-direction: row;
		width: 100%;
	}
	.purchasing-organization>ul>li>p, .Invoice-payment>ul>li>p, .account>ul>li>p, .money>ul>li>p, .note>ul>li>p{
		width: 280upx;
	}
	
	.product-list{
		font-size: 32upx;
		width: 100%;
	}
	.product-list .title{
		padding: 20upx 0;
		text-indent: 0.5em;
		width: 100%;
		color: #fff;
		background: #3399ff;
	}
	.product-list .product{
		margin-top: 20upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}
	.product-list .product .product-left{
		padding-left: 10upx;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.product-list .product .product-left>text{
		width: 360upx;
	}
	.product-list .product .product-right{
		padding-right: 10upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		color: red;
	}
	.product-list .product .product-right>text{
		text-align: center;
	}
	
	.list{
		margin-top: 20upx;
		width: 100%;
	}
	.list>ul{
		width: 100%;
	}
	.list>ul>li{
		margin-bottom: 10upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		text-indent: 0.5em;
	}
	.list>ul>li>text{
		margin-left: 20upx;
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
	.btn>text{
		margin-left: 10upx;
		padding: 8upx 20upx;
	}
	.btn>text:nth-child(1){
		background: #00a65a;
	}
	.btn>text:nth-child(2){
		background: #dd4b39;
	}
	.btn>text:nth-child(3){
		background: #ff8d36;
	}
</style>
