<template>
    <view class="content">
        <view v-if="hasLogin" class="hello">
            <view class="title">
                您好 {{userName}}，您已成功登录。
            </view>
            <view class="ul">
                <view>这是 uni-app 带登录模板的示例App首页。</view>
                <view>在 “我的” 中点击 “退出” 可以 “注销当前账户”</view>
            </view>
        </view>
        <view v-if="!hasLogin" class="hello">
            <view class="title" @tap="setTab">
                <img src="/static/img/qq.png" alt="">
            </view>
            <view class="sales-amount">
                <p class="sales-amount-top">销售金额</p>
                <ul class="sales-amount-bottom">
                	<li class="sales-amount-bottom-1">
                        <p>￥32,009,00</p>
                        <p>今日</p>
                    </li>
                    <li class="sales-amount-bottom-1">
                        <p>￥3,232,000,00</p>
                        <p>本月</p>
                    </li>
                    <li class="sales-amount-bottom-1">
                        <p>￥13,203,230,00</p>
                        <p>全部</p>
                    </li>
                </ul>
            </view>
            <view class="ul">
                <ul>
                	<li class="list">
                        <view>
                            <img src="/static/img/weixin.png" alt="">
                            <text>销售订单</text>
                        </view>
                        <p>20</p>
                    </li>
                    <li class="list">
                        <view>
                            <img src="/static/img/weixin.png" alt="">
                            <text>询报价</text>
                        </view>
                        <p>2</p>
                    </li>
                    <li class="list">
                        <view>
                            <img src="/static/img/weixin.png" alt="">
                            <text>网商银行</text>
                        </view>
                        <p></p>
                    </li>
                </ul>
            </view>
        </view>
    </view>
</template>

<script>
    import {
        mapState
    } from 'vuex'

    export default {
        computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
        methods: {
            setTab() {
                uni.navigateTo({
                    url: '/pages/erji/erji'
                })
            }
        },
        onLoad() {
//             if (!this.hasLogin) {
//                 uni.showModal({
//                     title: '未登录',
//                     content: '您未登录，需要登录后才能继续',
//                     /**
//                      * 如果需要强制登录，不显示取消按钮
//                      */
//                     showCancel: !this.forcedLogin,
//                     success: (res) => {
//                         if (res.confirm) {
// 							/**
// 							 * 如果需要强制登录，使用reLaunch方式
// 							 */
//                             if (this.forcedLogin) {
//                                 uni.reLaunch({
//                                     url: '../login/login'
//                                 });
//                             } else {
//                                 uni.navigateTo({
//                                     url: '../login/login'
//                                 });
//                             }
//                         }
//                     }
//                 });
//             }
        }
    }
</script>

<style>
    ul,li{
        list-style: none;
        padding: 0;
    }
    .hello {
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    .title {
        width: 100%;
        height: 300upx;
        /* color: #8f8f94;
        margin-top: 50upx; */
    }
    .title img{
        width: 100%;
        height: 100%;
    }

    .sales-amount{
        margin-top: 50upx;
        width: 100%;
    }
    .sales-amount .sales-amount-top{
        padding-bottom: 10upx;
        border-bottom: 1px solid #999;
    }
    .sales-amount .sales-amount-bottom{
        margin-top: 10upx;
        width: 100%;
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid #999;
        /* align-items: center;
        justify-content: space-between; */
    }
    .sales-amount-bottom-1{
        padding-left: 10upx;
        padding-bottom: 20upx;
        width: 30%;
		/* 超出换行 */
        word-wrap:break-word;
        word-break:break-all;
        overflow: hidden;
        border-right: 1px solid #999;
    }
    .sales-amount-bottom-1:last-child{
        border-right: 0;
    }
    
    
    .ul{
        margin-left: 5%;
        width: 90%;
        font-size: 30upx;
        color: #8f8f94;
        margin-top: 50upx;
    }
    .ul .list{
        padding: 10upx;
        margin-bottom: 50upx;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border: 1px solid #ccc;
        border-radius: 20upx;
    }
    .ul .list>view{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 20upx;
    }
    .ul .list>view img{
        width: 40upx;
        height: 40upx;
    }
    .ul .list>p{
        margin-right: 20upx;
    }
</style>
