<template>
    <div class="app-product-detail">
        <div class="news-top">
            <div class="top-left">
                <a href="javascript:window.history.back()">
                    <span class="mui-icon mui-icon-back"></span>
                </a>
            </div>
            <div class="top-center">产品详情</div>
        </div>
        <div class="pdetail-body">
            <mt-swipe  :auto="4000">
                <mt-swipe-item v-for="item in imgList" :key="item.id">
                    <img :src="item.url" />
                </mt-swipe-item>
                <!-- <mt-swipe-item>
                    <img src="../img/banner2.png" />
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../img/banner1.png" />
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../img/banner4.png" />
                </mt-swipe-item> -->
            </mt-swipe>
            <div class="body-detail">
                <ul>
                    <li>
                        <span>小米手机MIX全新款</span>
                    </li>
                    <li>
                        <span>原价:</span>
                        <a>2000</a>
                        元
                    </li>
                    <li>
                        <span>抢购价:</span>
                        <a>600</a>
                        元
                    </li>
                </ul>
            </div>
            <div class="body-spxq">
                <p>商品详情</p>
                <div>
                    <img src="../img/banner2.png" width="100%" height="210px">
                    <p class="spxq-title">标配免费服务内容</p>
                    <p class="spxq-detail">全程免费维保服务；管家式客服跟踪服务。</p>
                    <img src="../img/banner1.png" width="100%" height="190px">
                    <img src="../img/banner4.png" width="100%" height="225px">
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="footer-l">
                <span>
                    抢购价:<span>￥<b>600</b>元</span>
                </span>
            </div>
            <div class="footer-r">
                <a @click="getProduct()">立即购买</a>
            </div>
        </div>
        <div class="zzc" v-show="showZzc"></div>
        <div class="shopping" :style="spanStyle">
            <div class="shop-top">
                <div class="shop-top-img">
                    <img src="../img/pic1.png">
                </div>
                <div class="shop-top-title">
                    <p>小米笔记本电脑</p>
                    <p>
                        原价:<span>18.00</span>元
                    </p>
                    <p>
                        抢购价:<span>15.00</span>元
                    </p>
                    <i class="mui-icon mui-icon-closeempty" @click="closeShop()"></i>
                </div>
            </div>
            <div class="shop-info">
                <p>请选择抢购方案</p>
                <ul>
                    <li class="active">买单</li>
                    <li>买双</li>
                </ul>
                <p>购买数量</p>
                <div class="shop-info-num">
                    <input type="button" value="-">
                    <input type="text" value="1">
                    <input type="button" value="+">
                </div>
            </div>
            <div class="shop-money">
                <p>
                    您共需支付:<span>￥<b>600</b>元</span>
                </p>
                <p>
                    账户余额:<span><b>600</b>金币</span>
                </p>
            </div>
            <a>确定</a>
        </div>
    </div>
</template>
<style scoped>
    .news-top{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 44px;
        line-height: 44px;
        color: white;
        text-align: center;
        background: linear-gradient(to right,#be3233,#9e1819);
        z-index: 50;
    }
    .top-left{
        float: left;
        width: 60px;
        height: 44px;
        line-height: 44px;
        text-align: center;
    }
    .top-left a>span{
        display: block;
        font-size: 35px;
        color: #fff;
        margin-top: 4px;
    }
    .top-center{
        float: left;
        width: calc(100% - 120px);
        height: 44px;
        line-height: 44px;
        text-align: center;
        color: #fff;
        font-size: 18px;
    }
    .pdetail-body{
        margin-top: 44px;
        margin-bottom: 60px;
    }
    .app-product-detail div.pdetail-body .mint-swipe{
        width: 100%;
        height: 222px;
    }
    .app-product-detail div.pdetail-body .mint-swipe img{
        width: 100%;
        height: 222px;
    }
    .body-detail>ul{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .body-detail>ul>li{
        height: 44px;
        line-height: 44px;
        color: #666;
        font-size: 14px;
        background-color: #fff;
        margin-top: 1px;
    }
    .body-detail>ul>li>span{
        display: block;
        float: left;
        width: 80px;
        color: #000;
        text-indent: 14px;
    }
    .body-detail>ul>li:first-child>span{
        width: 80%;
        font-size: 18px;
        text-indent: 18px;
    }
    .body-detail>ul>li:nth-child(2)>a{
        font-size: 12px;
        color: #bbb;
    }
    .body-detail>ul>li:nth-child(3)>a{
        font-size: 12px;
        color: #be3233;
    }
    .body-spxq{
        margin-top: 6px;
        font-size: 14px;
    }
    .body-spxq>p{
        height: 44px;
        line-height: 44px;
        color: #000;
        text-indent: 14px;
    }
    .body-spxq>div{
        color: #666;
        background-color: #fff;
        padding: 10px;
        line-height: 10px;
    }
    .spxq-title{
        margin: 0;
        padding: 0;
        height: 40px;
        line-height: 40px;
        color: #333;
    }
    .spxq-detail{
        margin: 0;
        padding: 0;
        font-size: 12px;
        line-height: 24px;
    }
    .footer{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 60px;
        box-shadow: 0 -1px 3px 0 rgba(0,0,0,.2);
        background: #fff;
        z-index: 10;
    }
    .footer-l{
        float: left;
        width: 130px;
        height: 60px;
        line-height: 60px;
        padding: 0 5px;
    }
    .footer-l>span{
        font-size: 14px;
    }
    .footer-l>span>span{
        color: #be3233;
    }
    .footer-r{
        width: calc(100% - 140px);
        float: right;
        height: 60px;
        text-align: right;
    }
    .footer-r>a{
        text-decoration: none;
        display: inline-block;
        width: 80px;
        height: 40px;
        line-height: 40px;
        margin-top: 10px;
        border-radius: 5px;
        margin-right: 10px;
        text-align: center;
        color: white;
        font-size: 14px;
        background-color: #be3233;
    }
    .shopping{
        width: 100%;
        height: 380px;
        position: fixed;
        left: 0;
        bottom: -380px;
        z-index: 101;
        background-color: #fff;
        transition: all 0.3s linear;
    }
    .shop-top{
        width: 100%;
        height: 100px;
    }
    .shop-top-img{
        float: left;
        width: 100px;
        height: 100px;
        padding: 10px;
    }
    .shop-top-img>img{
        width: 80px;
        height: 80px;
        box-shadow: 0 0 0 1px #ddd;
        border-radius: 3px;
    }
    .shop-top-title{
        float: left;
        width: calc(100% - 100px);
        height: 100px;
        padding: 10px 10px 0 10px;
        position: relative;
    }
    .shop-top-title>p{
        margin: 0;
        padding: 0;
        height: 26px;
        line-height: 26px;
        font-size: 12px;
    }
    .shop-top-title>p:first-child{
        height: 30px;
        line-height: 30px;
        font-size: 16px;
        color: #000;
    }
    .shop-top-title>p:last-child{
        color: #be3233;
    }
    .shop-top-title>i{
        position: absolute;
        top: 0;
        right: 0;
        color: #333;
        font-size: 45px;
    }
    .shop-info>p{
        margin: 0;
        padding: 0;
        height: 36px;
        line-height: 36px;
        text-indent: 10px;
        color: #000;
        background-color: #f2f2f2;
    }
    .shop-info>ul{
        margin: 10px auto;
        padding: 0 0 0 5px;
        list-style: none;
        height: 43px;
    }
    .shop-info>ul>li{
        float: left;
        font-size: 14px;
        text-align: center;
        color: #999;
        border: 1px solid #ddd;
        border-radius: 3px;
        padding: 6px 20px;
        margin: 5px;
    }
    .shop-info>ul>li.active{
        color: #fff;
        background-color: #ea4e00;
        border: 1px solid #ea4e00;
    }
    .shop-info-num{
        padding-left: 10px;
    }
    div.shop-info>div.shop-info-num>input{
        width: 60px;
        height: 34px;
        line-height: 34px;
        text-align: center;
        color: #fff;
        border: none;
        outline: none;
        background-color: #ea4e00;
        padding: 0;
        margin: 5px 0 0;
    }
    div.shop-info>div.shop-info-num>input:nth-child(2){
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        color: #333;
        background-color: #f9f9f9;
    }
    .shop-money{
        height: 40px;
        line-height: 40px;
        margin: 10px 0 0;
    }
    .shop-money>p{
        margin: 0;
        padding: 0;
        float: left;
        width: 50%;
        text-indent: 10px;
        font-size: 14px;
        color: #000;
    }
    .shop-money>p>span{
        color: #be3233;
    }
    .shopping>a{
        display: block;
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 14px;
        color: #fff;
        background-color: #be3233;
        margin-top: 6px;
    }
    .zzc{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        z-index: 100;
    }
</style>
<script>
	export default {
		data(){
			return{
                imgList:[
                    {id:1,url:require('../img/banner2.png')},
                    {id:2,url:require('../img/banner1.png')},
                    {id:3,url:require('../img/banner4.png')}
                ],
                showZzc: false,
                spanStyle: {}
            }
        },
        methods:{
            getProduct(){
                this.showZzc = true;
                this.spanStyle = {
                    "bottom":"0"
                };
            },
            closeShop(){
                this.showZzc = false;
                this.spanStyle = {
                    "bottom":"-380px"
                };
            },
            getId(){
                var id = this.$route.params.id;
                console.log(id)
            }
        },
        created(){
            this.getId()
        }
	}
</script>
