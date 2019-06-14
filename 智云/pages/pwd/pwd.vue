<template>
    <view class="content">
        <view class="input-group">
            <view class="input-row">
                <text class="title">邮箱：</text>
                <m-input type="text" focus clearable v-model="email" placeholder="请输入邮箱"></m-input>
            </view>
        </view>

        <view class="btn-row">
            <button type="primary" class="primary" @tap="findPassword">提交</button>
        </view>
		<view class="bg">
			<view>
				<p class="noPermissions">无权限，即将返回首页</p>
				<text class="text">对不起，您无此功能操作权限，请联系管理员了解情况</text>
				<p class="determine">确定 ({{time}}秒)</p>
			</view>
		</view>
    </view>
</template>

<script>
    import service from '../../service.js';
    import mInput from '../../components/m-input.vue';
	import {
	    mapState,
	    mapMutations
	} from 'vuex'

    export default {
		// onLoad() {
		// 	if (!this.hasLogin) {
		// 		uni.showModal({
		// 			title: '提示',
		// 			content: '这是一个模态弹窗',
		// 			showCancel: false,
		// 			success: function (res) {
		// 				if (res.confirm) {
		// 					uni.reLaunch({
		// 						url: '../main/main'
		// 					})
		// 					clearTimeout(time)
		// 				}
		// 			}
		// 		});
		// 		var time = setTimeout(function() {
		// 			uni.reLaunch({
		// 				url: '../main/main'
		// 			})
		// 			uni.hideToast();
		// 		},4000)
		// 	}
		// },
        components: {
            mInput
        },
		computed: mapState(['hasLogin']),
        data() {
            return {
                email: '',
				time: 5
            }
        },
		created() {
			var time = 5;
			// var times = setInterval(() => {
			// 	if (time === 0) {
			// 		clearInterval(times)
			// 		return false
			// 	}
			// 	time = time - 1
			// 	this.time = time
			// 	console.log(this.time)
			// }, 1000)
			var that = this;
			var times = setInterval(function() {
				if (time === 0) {
					clearInterval(times)
					return false
				}
				time = time - 1
				that.time = time
				console.log(that.time)
			},1000)
		},
        methods: {
            findPassword() {
                /**
                 * 仅做示例
                 */
                if (this.email.length < 3 || !~this.email.indexOf('@')) {
                    uni.showToast({
                        icon: 'none',
                        title: '邮箱地址不合法',
                    });
                    return;
                }
                uni.showToast({
                    icon: 'none',
                    title: '已发送重置邮件至注册邮箱，请注意查收。',
                    duration: 3000
                });
            }
        }
    }
</script>

<style>
	.content{
		position: relative;
	}
	.bg{
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,1);
		z-index: 999;
	}
	.bg>view{
		position: absolute;
		top: 50%;
		left: 10%;
		margin-top: -200upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 80%;
		height: 400upx;
		border-radius: 20upx;
		background: #fff;
	}
	.bg>view>.text{
		padding: 40upx 0;
		width: 80%;
	}
	.bg>view>.determine{
		width: 100%;
		padding-top: 30upx;
		border-top: 1upx solid #999;
		color: #007AFF;
		text-align: center;
	}
</style>
