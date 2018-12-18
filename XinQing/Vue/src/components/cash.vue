<template>
    <div class="app-cash">
        <div class="cash-top">
            <div class="cash-top-left">
                <router-link to="/">
                    <a>
                        <span class="mui-icon mui-icon-back"></span>
                    </a>
                </router-link>
            </div>
            <div class="cash-top-center">提现</div>
            <div class="cash-top-right">
                <router-link to="/cash/cash_record">
                    <a>提现记录</a>
                </router-link>
            </div>
        </div>
        <div class="cash-body">
            <div class="cash-money">
                <div class="cash-money-detail">
                    <span>可提现余额(元)</span>
                </div>
                <div class="cash-money-num">
                    <span>19000元</span>
                </div>
            </div>
            <div class="cash-form">
                <ul>
                    <li>
                        <span>开户银行：</span>
                        <input type="text" placeholder="请输入开户银行" name="bank" />
                    </li>
                    <li>
                        <span>银行卡号：</span>
                        <input type="text" placeholder="请输入银行卡号" name="bank-cart" />
                    </li>
                    <li>
                        <span>提现金额：</span>
                        <input type="text" placeholder="请输入提现金额" name="cash-num" />
                    </li>
                    <li>
                        <span>您的姓名：</span>
                        <input type="text" placeholder="请输入姓名" name="username" />
                    </li>
                    <li>
                        <span>手机号码：</span>
                        <input type="text" placeholder="请输入手机号码" name="telphone" />
                    </li>
                </ul>
            </div>
            <a class="cash-submit">提交</a>
        </div>
    </div>
</template>
<style scoped>
    ul{
        list-style: none;
    }
    .app-cash form,.app-cash ul{
        margin: 0;
        padding: 0;
    }
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
    .cash-money{
        background-color: #fff;
        margin-bottom: 10px;
    }
    .cash-money-detail{
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        color: #bbb;
    }
    .cash-money-detail>span{
        margin-left: 10px;
    }
    .cash-money-num{
        height: 80px;
        line-height: 60px;
        text-align: center;
        color: #666;
        font-size: 24px;
        font-family: 'microsoft yahei',Verdana,Arial,Helvetica,sans-serif;
    }
    .cash-form>ul>li{
        height: 50px;
        line-height: 50px;
        font-size: 14px;
        background-color: #fff;
        margin-bottom: 1px;
    }
    .cash-form>ul>li>span{
        display: block;
        float: left;
        width: 80px;
        height: 50px;
        text-align: right;
    }
    .cash-form>ul>li>input{
        float: left;
        width: calc(100% - 80px);
        height: 50px;
        color: #555;
        font-size: 14px;
        border: none;
        background-color: #fff;
        padding: 0 5px;
        margin: 0 !important;
    }
    .cash-submit{
        display: block;
        width: 84%;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        color: #fff;
        text-align: center;
        border-radius: 5px;
        background-color: #be3233;
        margin: 40px auto;
    }
</style>
<script>
    export default{
		data(){
			return{
            
            }
		}
	}
</script>