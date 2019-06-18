<template>
    <view class="content">
		<view class="banner">
		    <img :src="userInfo.image" alt="">
			<p>{{userInfo.name}}</p>
		</view>
		<view class="user">
			<ul>
				<li @tap="switchUser">
					<text>当前用户</text>
					<p>{{userInfo.introduction}}</p>
					<img src="/static/img/rightarrow.png" alt="">
				</li>
				<li>
					<text>修改密码</text>
					<img src="/static/img/rightarrow.png" alt="">
				</li>
				<li>
					<text>技术支持</text>
					<img src="/static/img/rightarrow.png" alt="">
				</li>
				<li>
					<text @tap="exit" style="color: red;">退出登录</text>
				</li>
			</ul>
		</view>
		<view class="bg" :class="disUser ? 'no-bg' : ''">
			<view class="bg-content">
				<text>切换组织</text>
				<radio-group @change="radioChange" @tap="radioChange">
					<view v-for="(item, index) in userInfo.company_roles" :key="index">
						<label>
							<radio :value="index" checked="" />
							{{item}}
						</label>
					</view>
					<!-- <view>
						<label>
							<radio value="2" checked="" />
							青岛智慧云彩信息科技有限公司
						</label>
					</view> -->
				</radio-group>
			</view>
		</view>
		<!-- <view :class="[disUser ? '' : '']">
			<view class="bg-content">
				<text>切换组织</text>
				<radio-group @change="radioChange" @tap="radioChange">
					<view v-for="(item, index) in userInfo.company_roles" :key="index">
						<label>
							<radio :value="index" checked="" />
							{{item}}
						</label>
					</view>
					<view>
						<label>
							<radio value="2" checked="" />
							青岛智慧云彩信息科技有限公司
						</label>
					</view>
				</radio-group>
			</view>
		</view> -->
		<view v-if="tabbar" class="tabber">
			<ul>
				<li @tap="jumpTab(0)">
					<img src="/static/img/home.png" alt="">
					<text>协同</text>
				</li>
				<li @tap="jumpTab(1)">
					<img src="/static/img/home.png" alt="">
					<text>营销</text>
				</li>
				<li>
					<img src="/static/img/userHL.png" alt="">
					<text style="color: #0FAEFF;">我的</text>
				</li>
			</ul>
		</view>
    </view>
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'

    export default {
		data() {
			return {
				disUser: false,
				tabbar: true
			}
		},
		onLoad() {
			// console.log(JSON.stringify(this.userInfo));
			if (!this.userInfo.name) {
				uni.redirectTo({
					url: '../login/login'
				})
			}
		},
        computed: {
            ...mapState(['hasLogin', 'forcedLogin', 'userInfo'])
        },
        methods: {
            ...mapMutations(['logout']),
			// 切换用户
			switchUser() {
				this.disUser = true
				uni.hideTabBar();
			},
			radioChange(e) {
				this.disUser = false
				uni.showTabBar();
			},
			// 登录切换页面
			jumpTab(index) {
				console.log(index)
				if (index) {
					uni.switchTab({
						url: '../pwd/pwd'
					})
				} else {
					uni.switchTab({
						url: '../main/main'
					})
				}
			},
            bindLogout() {
                this.logout();
                /**
                 * 如果需要强制登录跳转回登录页面
                 */
                if (this.forcedLogin) {
                    uni.reLaunch({
                        url: '../login/login',
                    });
                }
            },
			exit() {
				// uni.showModal({
				// 	title: '确定要退出吗？',
				// 	content: '',
				// 	success: function (res) {
				// 		if (res.confirm) {
				// 			uni.switchTab({
				// 				url: '../login/login'
				// 			})
				// 		} else if (res.cancel) {
				// 			console.log('用户点击取消');
				// 		}
				// 	}
				// });
				uni.showModal({
					title: '确定要退出吗？',
					content: '真的确定要退出吗？',
					success: function (res) {
						if (res.confirm) {
							uni.switchTab({
								url: '../login/login'
							})
						} else if (res.cancel) {
							console.log('用户点击取消')
						}
					}
				});
			}
        }
    }
</script>

<style>
	.content{
		position: relative;
	}
	.banner{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 400upx;
		background: #0572ba;
		color: #fff;
	}
	.banner>img{
		width: 200upx;
		height: 200upx;
	}
	
	.user{
		width: 100%;
	}
	.user>ul{
		width: 100%;
	}
	.user>ul>li{
		position: relative;
		padding: 20upx 0;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-content: center;
		width: 100%;
		height: 60upx;
		border-bottom: 2upx solid #999;
	}
	.user>ul>li>img{
		position: absolute;
		top: 50%;
		right: 0;
		margin-top: -25upx;
		width: 50upx;
		height: 50upx;
	}
	.user>ul>li>p{
		margin: 0 60upx 0 40upx;
		width: 60%;
		/* 超出换行 */
		word-wrap:break-word;
		word-break:break-all;
		overflow: hidden;
	}
	.user>ul>li:first-child{
		height: auto;
	}
	
	.bg{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.8);
		position: absolute;
		display: none;
	}
	.no-bg{
		display: block;
	}
	.bg .bg-content{
		position: absolute;
		top: 50%;
		left: 50%;
		transform:translate(-50%,-50%);
		width: 80%;
		height: 400upx;
		background: #fff;
		border-radius: 30upx;
		text-align: center;
	}
	.bg .bg-content>text{
		font-weight: bold;
	}
	.bg .bg-content view{
		margin: 20upx 0;
	}
	
	
	.tabber{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 120upx;
	}
	.tabber>ul{
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 100%;
		background: #fff;
		border-top: 1upx solid #ccc;
		font-size: 28upx;
	}
	.tabber>ul>li{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 33%;
		height: 100%;
	}
	.tabber>ul>li>img{
		width: 50upx;
		height: 50upx;
	}
</style>
