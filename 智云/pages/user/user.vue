<template>
    <view class="content">
		<view class="banner">
		    <img src="/static/img/qq.png" alt="">
			<p>李冰&emsp;361834094@qq.com</p>
		</view>
		<view class="user">
			<ul>
				<li>
					<text>当前用户</text>
					<p>北京智慧云彩电子商务科技有限公司</p>
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
    </view>
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'

    export default {
		onLoad() {
			if (!this.hasLogin) {
				uni.redirectTo({
					url: '../login/login'
				})
			}
		},
        computed: {
            ...mapState(['hasLogin', 'forcedLogin'])
        },
        methods: {
            ...mapMutations(['logout']),
            // bindLogin() {
            //     uni.navigateTo({
            //         url: '../login/login',
            //     });
            // },
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
					content: '这是一个模态弹窗',
					success: function (res) {
						if (res.confirm) {
							uni.redirectTo({
								url: '../login/login'
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
        }
    }
</script>

<style>
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
</style>
