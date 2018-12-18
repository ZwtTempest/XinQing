<template>
    <div class="app-home">
		<headers></headers>
        <div class="home-tip">
            <div class="home-tip-left">
                <span class="fa fa-bullhorn"></span>
            </div>
            <div class="home-tip-right">
                <p>
                    <marquee>通知公告信息通知公告信息通知公告信息通知公告信息</marquee>
                </p>
            </div>
        </div>
        <div class="home-wrap">
            <div class="home-wrap-top">
                <h4>第20181521期</h4>
                <router-link to="/previous">
                    往期数据
                </router-link>
            </div>
            <div class="home-wrap-data">
                <ul>
                    <li>5</li>
                    <li>2</li>
                    <li>1</li>
                    <li>3</li>
                    <li>5</li>
                </ul>
            </div>
        </div>
        <div class="home-wrap-next">
            <span class="mui-icon-extra mui-icon-extra-outline"></span>
            <p>距离下期结束</p>
            <div class="next-timed">
                <span>05</span>分<span>05</span>秒<span>05</span>
            </div>
        </div>
        <div class="home-rule">
            <span>抢购规则：</span>
            根据当期“揭晓号码”的最后一位数字，为单数则为"买单"抢购成功，反之"买双"抢购成功。
            <router-link to="/news/newinfo">
                详细说明>>>
            </router-link>
        </div>
        <div class="home-product">
            <div class="home-product-title">
                <p>
                    <span class="fa fa-shopping-bag"></span>
                    虚拟商品
                </p>
            </div>
            <div class="home-product-detail">
                <ul>
                    <li v-for="item in proList" :key="item.id">
                        <a>
                            <div>
                                <router-link to="/pro_detail">
                                    <img :src="item.img">
                                </router-link>
                            </div>
                        </a>
                        <div class="home-product-info">
                            <p>{{item.proTitle}}</p>
                            <p class="grey">
                                原价:￥
                                <span>{{item.proPrice}}</span>
                            </p>
                            <p class="red">
                                抢购价:￥
                                <span>{{item.newPrice}}</span>
                            </p>
                            <div class="home-product-add">
                                <a @click="getProduct()">立即抢购</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="home-product-true">
            <div class="home-product-title">
                <p>
                    <span class="fa fa-shopping-bag"></span>
                    实物商品
                </p>
            </div>
            <div class="home-product-detail">
                <ul>
                    <li v-for="item in proList" :key="item.id">
                        <a>
                            <div>
                                <router-link to="/pro_detail">
                                    <img :src="item.img">
                                </router-link>
                            </div>
                        </a>
                        <div class="home-product-info">
                            <p>{{item.proTitle}}</p>
                            <p class="grey">
                                原价:￥
                                <span>{{item.proPrice}}</span>
                            </p>
                            <p class="red">
                                抢购价:￥
                                <span>{{item.newPrice}}</span>
                            </p>
                            <div class="home-product-add">
                                <a @click="getProduct()">立即抢购</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <footers></footers>
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
    .home-tip{
        width: 100%;
        height: 40px;
        background-color: #fff;
        margin-top: 65px;
    }
    .home-tip-left{
        float: left;
        width: 50px;
        height: 40px;
        text-align: center;
        margin: 0 5px;
    }
    .home-tip-left>span{
        line-height: 40px;
        font-size: 20px;
        color: #c00000;
    }
    .home-tip-right{
        float: left;
        width: 315px;
        height: 40px;
        overflow: hidden;
    }
    .home-tip-right>p{
        line-height: 40px;
        color: #000;
    }
    .home-wrap{
        width: 100%;
        height: 160px;
        background: url("../img/banner.png") no-repeat;
        background-size: cover;
    }
    .home-wrap-top{
        height: 60px;
        position: relative;
    }
    .home-wrap-top>h4{
        color: #fff;
        font-size: 20px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        margin: 0;
    }
    .home-wrap-top a{
        position: absolute;
        width: 80px;
        height: 32px;
        line-height: 32px;
        color: #000;
        text-align: center;
        font-size: 12px;
        border: 1px solid #fff;
        border-radius: 5px;
        right: 15px;
        top: 14px;
        background: rgba(255,255,255,.5);
    }
    .home-wrap-data{
        padding: 20px 0;
        text-align: center;
    }
    .home-wrap-data>ul{
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .home-wrap-data>ul>li{
        display: inline-block;
        width: 40px;
        height: 40px;
        line-height: 40px;
        color: #9e1819;
        font-size: 24px;
        margin: 0 6px;
        border: 1px solid #9E1819;
        border-radius: 5px;
        box-shadow: 0 0 0 3px #f5c6a6;
        background: #f5c6a6;
    }
    .home-wrap-next{
        width: 100%;
        height: 50px;
        color: #fff;
        background-color: #c00000;
    }
    .home-wrap-next>span{
        width: 30px;
        height: 50px;
        float: left;
        display: block;
        font-size: 26px;
        text-align: center;
        line-height: 50px;
        margin: 0 5px;
    }
    .home-wrap-next>p{
        float: left;
        width: 90px;
        height: 50px;
        line-height: 50px;
        color: #fff;
        margin: 0;
    }
    .next-timed{
        float: left;
        width: calc(100% - 130px);
        height: 50px;
        line-height: 50px;
        padding-top: 2px;
    }
    .next-timed>span{
        display: inline-block;
        width: 32px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 18px;
        color: #9E1819;
        background: #f5c6a6;
        border: 1px solid #9E1819;
        border-radius: 5px;
        box-shadow: 0 0 0 3px #f5c6a6;
        margin: 5px;
    }
    .home-rule{
        font-size: 14px;
        color: #666;
        line-height: 24px;
        padding: 5px;
        background-color: #fff;
    }
    .home-rule>span,.home-rule>a{
        color: #be3233;
    }
    .home-product{
        margin-top: 10px;
    }
    .home-product::after{
        content: "";
        display: block;
        clear: both;
    }
    .home-product-title{
        width: 100%;
        height: 42px;
        line-height: 42px;
        overflow: hidden;
        background-color: #fff;
    }
    .home-product-title>p{
        color: #333;
        font-size: 16px;
        margin-left: 16px;
    }
    .home-product-detail>ul{
        margin: 0;
        padding: 0;
    }
    .home-product-detail>ul::after{
        content: "";
        display: block;
        clear: both;
    }
    .home-product-detail>ul>li{
        float: left;
        list-style: none;
        box-shadow: 1px 1px 0 0 #eee;
        padding: 1px;
    }
    .home-product-detail>ul>li>a>div{
        height: 180px;
        padding: 5px;
    }
    .home-product-detail img{
        width: 175.5px;
        height: 170px;
    }
    .home-product-info{
        width: 185.5px;
        height: 130px;
        padding: 5px;
        padding-top: 0;
        background-color: #fff;
    }
    .home-product-info::before{
        content: "";
        display: table;
    }
    .home-product-info>p{
        font-size: 14px;
        color: #333;
        margin: 10px 0;
        text-overflow: ellipsis;
    }
    .home-product-info>p.grey{
        color: #ccc;
        margin: 0;
        height: 20px;
        line-height: 20px;
    }
    .home-product-info>p.red{
        color: #ea4e00;
        margin: 0;
        height: 20px;
        line-height: 20px;
    }
    .home-product-add{
        width: 100%;
        height: 50px;
        padding: 5px;
    }
    .home-product-add>a{
        display: block;
        width: 88%;
        height: 32px;
        line-height: 32px;
        color: #c52600;
        font-size: 14px;
        border: 1px solid #c52600;
        text-align: center;
        border-radius: 5px;
        margin: 4px auto;
    }
    .home-product-true{
        margin-top: 10px;
        margin-bottom: 55px;
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
</style>
<script>
    import footers from './footers.vue'
    import headers from './header.vue'
	export default {
		data(){
			return{
                proList:[
                    {id:1,img:require('../img/pic1.png'),proTitle:'小米笔记本MIX8核i72G独显',proPrice:18.00,newPrice:15.00},
                    {id:2,img:require('../img/pic2.png'),proTitle:'小米笔记本MIX8核i72G独显',proPrice:18.00,newPrice:15.00},
                    {id:3,img:require('../img/pic3.png'),proTitle:'小米笔记本MIX8核i72G独显',proPrice:18.00,newPrice:15.00},
                    {id:4,img:require('../img/pic4.png'),proTitle:'小米笔记本MIX8核i72G独显',proPrice:18.00,newPrice:15.00}
                ],
                showZzc: false,
                spanStyle:{}
            }
		},
        components:{
            "footers":footers,
            "headers":headers
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
            }
        },
        created(){

        }
	}
</script>