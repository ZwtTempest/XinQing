<template>
    <div class="app-customer">
        <div class="customer-top">
            客服
        </div>
        <div class="customer-body">
            <ul>
                <li>
                    <a>支付方式</a>
                    <span class="mui-icon mui-icon-forward"></span>
                </li>
                <li>
                    <a>配送方式</a>
                    <span class="mui-icon mui-icon-forward"></span>
                </li>
                <li>
                    <a>售后服务</a>
                    <span class="mui-icon mui-icon-forward"></span>
                </li>
            </ul>
            <div>
                <a>联系微信客服</a>
            </div>
        </div>
        <footers></footers>
    </div>
</template>
<style scoped>
.app-customer ul{
    margin: 0;
    padding: 0;
    list-style: none;
}
.customer-top{
    width: 100%;
    height: 44px;
    color: #fff;
    line-height: 44px;
    text-align: center;
    font-size: 18px;
    background: linear-gradient(to right,#be3233,#9e1819);
}
.customer-body>ul>li{
    width: 100%;
    height: 46px;
    line-height: 26px;
    background-color: #fff;
    padding: 10px 0 10px 10px;
    margin-top: 10px;
}
.customer-body>ul>li>a{
    display: block;
    float: left;
    text-decoration: none;
    width: calc(100% - 40px);
    line-height: 26px;
    font-size: 14px;
    color: #333;
}
.customer-body>ul>li>span{
    display: block;
    float: left;
    font-size: 30px;
    color: #666;
    margin-top: -2px;
    margin-left: 5px;
}
.customer-body>div{
    width: 84%;
    margin: 50px auto 0;
}
.customer-body>div>a{
    display: block;
    height: 42px;
    line-height: 42px;
    border-radius: 5px;
    text-align: center;
    color: white;
    font-size: 14px;
    background: #be3233;
    text-decoration: none;
}
</style>
<script>
    import footers from './footers.vue'
	export default{
		data(){
			return{}
		},
        components:{
            "footers":footers
        }
	}
</script>