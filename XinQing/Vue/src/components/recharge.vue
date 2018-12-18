<template>
    <div class="app-recharge">
        <div class="cash-top">
            <div class="cash-top-left">
                <router-link to="/">
                    <a>
                        <span class="mui-icon mui-icon-back"></span>
                    </a>
                </router-link>
            </div>
            <div class="cash-top-center">充值</div>
            <div class="cash-top-right">
                <router-link to="/cash/cash_record">
                    <a>充值记录</a>
                </router-link>
            </div>
        </div>
        <div class="recharge-money">
            <p>充值金额:</p>
            <ul>
                <li v-for="(val,d) in listMoney" :key="val.id" :class="{active:val.isMoney}" @click="getClass(d)">{{val.money}}</li>
                <li>
                    1600
                </li>
            </ul>
        </div>
        <div class="recharge-payment">
            <p>支付方式:</p>
            <ul>
                <li v-for="(tab,i) in listPayment" :key="tab.id" :class="{active:tab.isPay}" @click="getActive(i)">
                    <span :class="getIcon(tab.icon)" :style="getColor(tab.payColor)"></span>
                    <span>{{tab.pay}}</span>
                </li>
            </ul>
        </div>
        <a>立即支付</a>
    </div>
</template>
<style scoped>
    .cash-top{
        width: 100%;
        height: 44px;
        color: #fff;
        background: linear-gradient(to right,#be3233,#9e1819);
    }
    .cash-top-left{
        float: left;
        width: 60px;
        height: 44px;
        line-height: 44px;
        text-align: center;
    }
    .cash-top-left a>span{
        display: block;
        font-size: 35px;
        color: #fff;
        margin-top: 4px;
    }
    .cash-top-center{
        float: left;
        width: calc(100% - 140px);
        height: 44px;
        line-height: 44px;
        text-align: center;
        color: #fff;
        font-size: 18px;
        font-weight: none;
        text-indent: 20px;
    }
    .cash-top-right{
        float: left;
        width: 80px;
        height: 44px;
        line-height: 44px;
        text-align: center;
    }
    .cash-top-right a{
        font-size: 14px;
        color: #fff;
    }
    .app-recharge p,.app-recharge ul{
        margin: 0;
        padding: 0;
    }
    .recharge-money>p,.recharge-payment>p{
        height: 50px;
        line-height: 50px;
        color: #000;
        text-indent: 3%;
        font-size: 16px;
        font-family: 'microsoft yahei',Verdana,Arial,Helvetica,sans-serif;
    }
    .recharge-money>ul{
        background-color: #fff;
        padding: 10px 7.5px;
        list-style: none;
    }
    .recharge-money>ul::after,.recharge-payment>ul::after{
        content: '';
        display: block;
        clear: both;
    }
    .recharge-money>ul>li{
        float: left;
        width: 21%;
        height: 40px;
        line-height: 40px;
        font-size: 15px;
        color: #666;
        text-align: center;
        background-color: #f8f8f8;
        box-shadow: 0 0 0 1px #ddd;
        border-radius: 5px;
        margin: 10px 2%;
    }
    .recharge-money>ul>li.active{
        background-color: #be3233;
        color: white;
        box-shadow: 0 0 0 1px #be3233;
    }
    .recharge-payment>ul{
        background-color: #fff;
        padding: 20px 2%;
        list-style: none;
    }
    .recharge-payment>ul>li{
        float: left;
        width: 30.33%;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        color: #666;
        background: #f8f8f8;
        box-shadow: 0 0 0 1px #ddd;
        border-radius: 5px;
        margin: 0 1.5%;
    }
    .recharge-payment>ul>li.active{
        background: #be3233;
        box-shadow: 0 0 0 1px #be3233;
        color: white;
    }
    .recharge-payment>ul>li>span{
        display: block;
        float: left;
    }
    .recharge-payment>ul>li>span:first-child{
        margin-left: 10px;
        margin-top: 8px;
        margin-right: 2px;
    }
    .recharge-payment>ul>li:nth-child(2)>span:first-child{
        margin-left: 20px;
    }
    .app-recharge>a{
        display: block;
        width: 84%;
        height: 40px;
        line-height: 40px;
        color: #fff;
        font-size: 14px;
        text-align: center;
        background: #be3233;
        border-radius: 5px;
        margin: 40px auto;
    }
</style>
<script>
    export default {
		data(){
			return{
                listPayment:[
                    {id:1,pay:"微信支付",isPay:true,icon:"mui-icon mui-icon-weixin",payColor:"color:limegreen"},
                    {id:2,pay:"支付宝",isPay:false,icon:"mui-icon-extra mui-icon-extra-alipay",payColor:"color:deepskyblue"},
                    {id:3,pay:"客服支付",isPay:false,icon:"mui-icon mui-icon-extra mui-icon-extra-custom",payColor:"color:orangered"}
                ],
                listMoney:[
                    {id:1,money:200,isMoney:true},
                    {id:2,money:400,isMoney:false},
                    {id:3,money:600,isMoney:false},
                    {id:4,money:800,isMoney:false},
                    {id:5,money:1000,isMoney:false},
                    {id:6,money:1200,isMoney:false},
                    {id:7,money:1400,isMoney:false}
                ]
            }
        },
        methods:{
            getIcon(str){
                return str;
            },
            getColor(str){
                return str;
            },
            getActive(index){
                var len = this.listPayment.length;
                for(var i=0; i<len; i++){
                    this.listPayment[i].isPay = false;
                }
                this.listPayment[index].isPay = true;
            },
            getClass(index){
                var len = this.listMoney.length;
                for(var i=0; i<len; i++){
                    this.listMoney[i].isMoney = false;
                }
                this.listMoney[index].isMoney = true;
            }
        }
	}
</script>


