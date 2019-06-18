<template>
	<view class="content">
		<view>
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item>
					<view class="swiper-item uni-bg-red">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">C</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="title">
			结晶粉/桶
		</view>
		<view class="list">
			<ul>
				<li>
					<text>产品编号</text>
					<p>8392793</p>
				</li>
				<li>
					<text>产品分类</text>
					<p>零采类存货>零采清洁用品类93</p>
				</li>
				<li>
					<text>采购类型</text>
					<p>集采</p>
				</li>
				<li>
					<text>是否消耗品</text>
					<p>是</p>
				</li>
				<li>
					<text>产品级别</text>
					<p>1.0</p>
				</li>
				<li>
					<text>产品描述</text>
					<p>-</p>
				</li>
			</ul>
		</view>
		<view class="list">
			<ul>
				<li>
					<text>品牌</text>
					<p>-</p>
				</li>
				<li>
					<text>产品别名</text>
					<p>-</p>
				</li>
				<li>
					<text>规格型号</text>
					<p>-</p>
				</li>
				<li>
					<text>计量单位</text>
					<p>桶</p>
				</li>
				<li>
					<text>条形码</text>
					<p>-</p>
				</li>
				<li>
					<text>参考价格</text>
					<p>¥20.00</p>
				</li>
			</ul>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				circular: true
			}
		}
	}
</script>

<style>
	.content{
		width: 100%;
	}
	
	.title{
		margin-left: 5%;
		margin-bottom: 40upx;
		width: 90%;
	}
	
	.list{
		margin-left: 5%;
		width: 90%;
		font-size: 32upx;
		border-top: 2upx solid #999;
	}
	.list>ul{
		width: 100%;
	}
	.list>ul>li{
		margin: 20upx 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
	}
	.list>ul>li>text{
		width: 200upx;
	}
</style>
