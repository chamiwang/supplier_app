<template>
    <view class="content">
        <view class="banner" @tap="jump">
            <img src="/static/img/qq.png" alt="">
			<p>李冰&emsp;361834094@qq.com</p>
        </view>
		<view class="input-login">
			<view class="input-login-account">
				<!-- <text>账号：</text> -->
				<input @click="hideTabbar" @focus="hideTabbar" @blur="showTabbar" type="text" v-model="account" placeholder="请输入登录邮箱">
			</view>
			<view class="input-login-password">
				<!-- <text>密码：</text> -->
				<input @click="hideTabbar" @focus="hideTabbar" @blur="showTabbar" type="password" v-model="password" placeholder="请输入密码">
			</view>
		</view>
        <!-- <view class="input-group">
            <view class="input-row border">
                <text class="title">账号</text>
                <m-input class="m-input" type="text" clearable focus v-model="account" placeholder="请输入账号"></m-input>
            </view>
            <view class="input-row">
                <text class="title">密码</text>
                <m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input>
            </view>
        </view> -->
        <view class="btn-row">
            <button type="primary" class="primary" @tap="bindLogin">登录</button>
        </view>
        <view class="action-row">
            <navigator url="../reg/reg">注册账号</navigator>
            <text>|</text>
            <navigator url="../pwd/pwd">忘记密码</navigator>
        </view>
		<!-- <view v-if="tabbar" class="tabber">
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
		</view> -->
        <!-- <view class="oauth-row" v-if="hasProvider" v-bind:style="{top: positionTop + 'px'}">
            <view class="oauth-image" v-for="provider in providerList" :key="provider.value">
                <image :src="provider.image" @tap="oauth(provider.value)"></image>
            </view>
        </view> -->
    </view>
</template>

<script>
    import service from '../../service.js';
    import {
        mapState,
        mapMutations
    } from 'vuex'
    import mInput from '../../components/m-input.vue'

    export default {
        components: {
            mInput
        },
        data() {
            return {
                providerList: [],
                hasProvider: false,
                account: 'qdl@zyc',
                password: 'zhiyun2017~',
                positionTop: 0,
                html: '',
				windowHeight: '',
				tabbar: true
            }
        },
		onLoad() {
			uni.getSystemInfo({
				success: (res)=> {
					this.windowHeight = res.windowHeight;
				}
			});
			uni.onWindowResize((res) => {
				if(res.size.windowHeight < this.windowHeight){
					this.tabbar = false
				}else{
					this.tabbar = true
				}
			})
		},
        computed: mapState(['forcedLogin', 'loginInfo', 'token', 'userInfo']),
        methods: {
			...mapMutations(['login', 'setToken', 'setUserInfo']),
			jump() {
				uni.setStorage({
					key: 'hasLogin',
					data: true
				})
				this.login();
				uni.redirectTo({
					url: '../user/user'
				})
			},
			// jumpTab(index) {
			// 	console.log(index)
			// 	if (index) {
			// 		uni.switchTab({
			// 			url: '../pwd/pwd'
			// 		})
			// 	} else {
			// 		uni.switchTab({
			// 			url: '../main/main'
			// 		})
			// 	}
			// },
            initProvider() {
                const filters = ['weixin', 'qq', 'sinaweibo'];
                uni.getProvider({
                    service: 'oauth',
                    success: (res) => {
                        if (res.provider && res.provider.length) {
                            for (let i = 0; i < res.provider.length; i++) {
                                if (~filters.indexOf(res.provider[i])) {
                                    this.providerList.push({
                                        value: res.provider[i],
                                        image: '../../static/img/' + res.provider[i] + '.png'
                                    });
                                }
                            }
                            this.hasProvider = true;
                        }
                    },
                    fail: (err) => {
                        console.error('获取服务供应商失败：' + JSON.stringify(err));
                    }
                });
            },
            initPosition() {
                /**
                 * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
                 * 反向使用 top 进行定位，可以避免此问题。
                 */
                this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
            },
            bindLogin() {
				uni.showLoading({
					title: '正在登录',
					mask: true
				})
                /**
                 * 客户端对账号信息进行一些必要的校验。
                 * 实际开发中，根据业务需要进行处理，这里仅做示例。
                 */
                if (this.account.length < 5) {
                    uni.showToast({
                        icon: 'none',
                        title: '账号最短为 5 个字符'
                    });
                    return;
                }
                if (this.password.length < 6) {
                    uni.showToast({
                        icon: 'none',
                        title: '密码最短为 6 个字符'
                    });
                    return;
                }
                
                this.loginInfo.account = this.account;
                this.loginInfo.password = this.password;
                uni.request({
                    url: 'http://b2btest.zyuncai.com/zyapi/login_check',
                    method: 'post',
                    header: {
                        'Content-Type' : 'application/x-www-form-urlencoded',
                        'Access-Control-Allow-Origin' : '*'
                    },
                    data: {
                        '_username': this.loginInfo.account,
                        '_password': this.loginInfo.password
                    },
                    dataType: 'json',
                    success: (res) => {
						var token = res.data.token
						this.setToken(token)
						console.log(this.token)
						uni.request({
							url: 'http://webtest.zyuncai.com/zyapi/supplier/salesorderrecord/list',
							method: 'get',
							header: {
							    'Content-Type':'application/x-www-form-urlencoded',
								'Authorization':' Bearer '+ this.token
							},
							data: {
							    type: 'company'
							},
							success: (res) => {
								console.log(JSON.stringify(res.data));
								// var info = res.data.user_info
								// this.setUserInfo(info)
								uni.hideLoading();
								// // console.log(this.userInfo);
								// uni.redirectTo({
								// 	url: '../user/user'
								// })
								
							}
						})
                    },
                    fail: (err) => {
                        console.log(err)
                    }
                })
            },
            oauth(value) {
                uni.login({
                    provider: value,
                    success: (res) => {
                        uni.getUserInfo({
                            provider: value,
                            success: (infoRes) => {
                                /**
                                 * 实际开发中，获取用户信息后，需要将信息上报至服务端。
                                 * 服务端可以用 userInfo.openId 作为用户的唯一标识新增或绑定用户信息。
                                 */
                                this.toMain(infoRes.userInfo.nickName);
                            }
                        });
                    },
                    fail: (err) => {
                        console.error('授权登录失败：' + JSON.stringify(err));
                    }
                });
            },
            toMain(userName) {
                this.login(userName);
                /**
                 * 强制登录时使用reLaunch方式跳转过来
                 * 返回首页也使用reLaunch方式
                 */
                if (this.forcedLogin) {
                    uni.reLaunch({
                        url: '../main/main',
                    });
                } else {
                    uni.navigateBack();
                }

            },
			showTabbar(){
				this.tabbar = true;
			},
			hideTabbar(){
				this.tabbar = false;
			}
        },
        onLoad() {
            this.initPosition();
            this.initProvider();
        }
    }
</script>

<style>
	.banner{
		position: relative;
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
	
	.input-login{
		margin-top: 60upx;
		/* margin-left: 10%; */
		width: 100%;
	}
	.input-login>view{
		padding: 16upx 0;
		width: 100%;
		background: #fff;
		border-bottom: 1upx solid #999;
	}
	.input-login .input-login-account{
		margin-bottom: 30upx;
	}
	.input-login .input-login-account>input{
		padding-left: 40upx;
	}
	.input-login .input-login-password>input{
		padding-left: 40upx;
	}
	
	
    .action-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .action-row navigator {
        color: #007aff;
        padding: 0 20upx;
    }

    .oauth-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }

    .oauth-image {
        width: 100upx;
        height: 100upx;
        border: 1upx solid #dddddd;
        border-radius: 100upx;
        margin: 0 40upx;
        background-color: #ffffff;
    }

    .oauth-image image {
        width: 60upx;
        height: 60upx;
        margin: 20upx;
    }
	
	/* .tabber{
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
	} */
</style>
