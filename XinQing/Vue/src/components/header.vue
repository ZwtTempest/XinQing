<template>
    <div class="app-header">
        <div class="header-left">
            <img src="../img/pic1.png">
            <p>
                ID:
                <span>54545</span>
            </p>
            <p>
                当前金币
                <span style="color:red">452</span>
            </p>
        </div>
        <ul>
            <li>
                <router-link to="/news">
                    <a>
                        <p class="mui-icon mui-icon-chat"></p>
                        <p>消息</p>
                    </a>
                </router-link>
            </li>
            <li>
                <a>
                    <p class="mui-icon-extra mui-icon-extra-cart"></p>
                    <p>兑换</p>
                </a>
            </li>
            <li>
                <router-link to="/cash">
                    <a>
                        <p class="mui-icon-extra mui-icon-extra-prech"></p>
                        <p>提现</p>
                    </a>
                </router-link>
            </li>
            <li>
                <router-link to="/recharge">
                    <a>
                        <p class="mui-icon-extra mui-icon-extra-card"></p>
                        <p>充值</p>
                    </a>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<style scoped>
.app-header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.2);
    z-index: 100;
}
.header-left{
    position: relative;
    width: 130px;
    height: 40px;
    float: left;
    margin-top: 8px;
}
.header-left>img{
    position: absolute;
    top: 7px;
    left: 7px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    box-shadow: 0 0 0 2px #ddd;
}
.header-left>p{
    padding: 0;
    margin: 0;
    font-size: 12px;
    color: #333;
    line-height: 8px;
    margin-left: 43px;
    margin-top: 10px;
}
.app-header>ul{
    float: right;
    margin: 0;
    padding: 0;
    margin-top: 12px;
}
.app-header>ul>li{
    list-style: none;
    float: left;
    text-align: center;
    margin-left: 26px;
}
.app-header>ul>li:last-child{
    margin-right: 13px;
}
.app-header>ul>li a{
    color: #333;
}
.app-header>ul>li p{
    padding: 0;
    margin: 0;
    font-size: 12px;
}
.app-header>ul>li a>p:first-child{
    font-size: 20px;
    
}
</style>
<script>
    export default {
		data () {
			return {}
		}
	}
</script>