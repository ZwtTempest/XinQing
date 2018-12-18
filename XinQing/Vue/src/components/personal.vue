<template>
    <div class="app-personal">
        <div class="personal-top">
            <div class="personal-top-info">
                <div class="personal-top-mying">
                    <img src="../img/pic1.png">
                    <h4>
                        <span>ID:154554656</span>
                    </h4>
                    <div>
                        158256126355
                    </div>
                </div>
                <div class="qb">
                    <span class="mui-icon mui-icon-qq"></span>
                    金币:255
                </div>
            </div>
            <ul>
                <li>
                    <a>
                        <span class="fa fa-first-order"></span>
                        <p>订单</p>
                    </a>
                </li>
                <li>
                    <a>
                        <span class="mui-icon-extra mui-icon-extra-cart"></span>
                        <p>兑换</p>
                    </a>
                </li>
                <li>
                    <a>
                        <span class="mui-icon-extra mui-icon-extra-prech"></span>
                        <p>充值</p>
                    </a>
                </li>
                <li>
                    <a>
                        <span class="mui-icon-extra mui-icon-extra-card"></span>
                        <p>提现</p>
                    </a>
                </li>
            </ul>
        </div>
        <ul class="personal-center">
            <li>
                <router-link to="/personal/my_address">
                    <a>
                        <div>
                            <span class="mui-icon mui-icon-person-filled"></span>
                        </div>
                        <p>收货地址</p>
                        <span class="mui-icon mui-icon-forward"></span>
                    </a>
                </router-link>
            </li>
            <li>
                <a>
                    <div>
                        <span class="mui-icon mui-icon-personadd"></span>
                    </div>
                    <p>代理</p>
                    <span class="mui-icon mui-icon-forward"></span>
                </a>
            </li>
            <li>
                <a>
                    <div>
                        <span class="mui-icon mui-icon-list"></span>
                    </div>
                    <p>代理详情</p>
                    <span class="mui-icon mui-icon-forward"></span>
                </a>
            </li>
            <li>
                <a>
                    <div>
                        <span class="mui-icon-extra mui-icon-extra-phone"></span>
                    </div>
                    <p>绑定手机</p>
                    <span class="mui-icon mui-icon-forward"></span>
                </a>
            </li>
        </ul>
        <ul class="personal-center" style="padding-bottom: 55px;">
            <li>
                <a>
                    <div>
                        <span class="mui-icon mui-icon-person-filled"></span>
                    </div>
                    <p>收货地址</p>
                    <span class="mui-icon mui-icon-forward"></span>
                </a>
            </li>
            <li>
                <a>
                    <div>
                        <span class="mui-icon mui-icon-personadd"></span>
                    </div>
                    <p>代理</p>
                    <span class="mui-icon mui-icon-forward"></span>
                </a>
            </li>
            <li>
                <a>
                    <div>
                        <span class="mui-icon mui-icon-list"></span>
                    </div>
                    <p>代理详情</p>
                    <span class="mui-icon mui-icon-forward"></span>
                </a>
            </li>
            <li>
                <a>
                    <div>
                        <span class="mui-icon-extra mui-icon-extra-phone"></span>
                    </div>
                    <p>绑定手机</p>
                    <span class="mui-icon mui-icon-forward"></span>
                </a>
            </li>
        </ul>
        <footers></footers>
    </div>
</template>
<style scoped>
.app-personal h4,.app-personal ul,.app-personal p{
    margin: 0;
    padding: 0;
}
.app-personal ul{
    list-style: none;
}
.personal-top{
    width: 100%;
    height: 200px;
    background: linear-gradient(to bottom right,#be3233 30%,#9e1819);
    padding: 10px 0;
    margin-bottom: 10px;
}
.personal-top::before{
    content: "";
    display: table;
}
.personal-top-info{
    width: 100%;
    height: 70px;
    margin: 35px auto 10px;
    position: relative;
}
.personal-top-mying{
    float: left;
    width: 225px;
    height: 70px;
    position: relative;
}
.personal-top-mying>img{
    width: 60px;
    height: 60px;
    box-shadow: 0 3px 3px 0 rgba(0,0,0,.2);
    border-radius: 50%;
    margin-left: 15px;
}
.personal-top-mying>h4{
    height: 30px;
    line-height: 30px;
    font-size: 18px;
    color: #fff;
    text-shadow: -1px 1px 0 rgba(0,0,0,.1);
    position: absolute;
    top: 1px;
    left: 80px;
}
.personal-top-mying>div{
    width: 100px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    font-size: 12px;
    color: #666;
    background-color: #fff;
    border-radius: 11px;
    position: absolute;
    top: 35px;
    left: 80px;
}
.qb{
    width: 130px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    font-size: 14px;
    border-radius: 15px 0 0 15px;
    background: #ff9c00;
    position: absolute;
    right: 0;
    top: 13px;
}
.qb>span{
    margin-left: 15px;
    font-size: 20px;
}
.personal-top>ul{
    width: 100%;
}
.personal-top>ul>li{
    float: left;
    width: 25%;
    text-align: center;
}
.personal-top>ul>li>a{
    color: #fff;
}
.personal-top>ul>li>a>span{
    font-size: 30px;
    text-shadow: 2px 2px 0 rgba(0,0,0,.1);
}
.personal-top>ul>li>a>p{
    height: 30px;
    line-height: 30px;
    color: #fff;
    font-size: 12px;
    text-shadow: -1px 1px 0 rgba(0,0,0,.1);
}
.app-personal>ul.personal-center{
    background-color: #fff;
    padding: 10px;
    margin: 10px auto;
}
.personal-center>li{
    padding: 8px;
    border-bottom: 1px solid #eee;
}
.personal-center>li:last-child{
    border-bottom: none;
}
.personal-center>li a{
    display: block;
    height: 34px;
    line-height: 34px;
    font-size: 14px;
}
.personal-center>li a>div{
    float: left;
    width: 34px;
    height: 34px;
}
.personal-center>li a>div>span{
    display: block;
    width: 34px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    color: #be3233;
    border-radius: 50%;
    background: rgba(175, 21, 20, 0.07);
}
.personal-center>li a>p{
    float: left;
    height: 34px;
    line-height: 34px;
    color: #666;
    margin-left: 20px;
}
.personal-center>li a>span{
    display: block;
    float: right;
    color: #666;
    font-size: 30px;
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