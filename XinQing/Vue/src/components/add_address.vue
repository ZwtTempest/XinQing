<template>
    <div class="app-addadr">
        <div class="addadr-header">
            <div>
                <a href="javascript:window.history.back()">
                    <span class="mui-icon mui-icon-back"></span>
                </a>
            </div>
            <p>新建收货地址</p>
        </div>
        <div class="addadr-body">
            <div>
                <ul>
                    <li>
                        <label>收货人:</label>
                        <div>
                            <i class="fa fa-users"></i>
                            <input type="text" placeholder="请输入您的姓名" />
                        </div>
                    </li>
                    <li>
                        <label>联系电话:</label>
                        <div>
                            <i class="fa fa-mobile"></i>
                            <input type="text" placeholder="请输入您的电话号码" />
                        </div>
                    </li>
                    <li>
                        <label>收货地址:</label>
                        <div>
                            <i class="fa fa-address-book-o"></i>
                            <input type="text" placeholder="请输入您的收货地址" />
                        </div>
                    </li>
                </ul>
                <div>
                    <a>确定</a>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .addadr-header{
        width: 100%;
        height: 44px;
        background: linear-gradient(to right,#be3233,#9e1819);
        position: fixed;
        left: 0;
        top: 0;
        z-index: 99;
    }
    .addadr-header>div{
        float: left;
        width: 60px;
        height: 44px;
        text-align: center;
    }
    .addadr-header>div>a>span{
        display: block;
        color: #fff;
        font-size: 30px;
        margin-top: 6px;
    }
    .addadr-header>p{
        padding: 0;
        margin: 0;
        float: left;
        width: calc(100% - 140px);
        height: 44px;
        line-height: 44px;
        color: #fff;
        font-size: 14px;
        text-align: center;
        text-indent: 20px;
    }
    .addadr-body{
        padding: 44px 0 60px 0;
    }
    .addadr-body>div{
        width: 84%;
        margin: 60px auto 20px;
    }
    .addadr-body>div>ul{
        padding: 0;
        margin: 0;
        list-style: none;
    }
    .addadr-body>div>ul>li{
        position: relative;
        margin-bottom: 15px;
    }
    .addadr-body>div>ul>li>label{
        display: block;
        height: 30px;
        line-height: 30px;
        color: #000;
        font-size: 14px;
    }
    .addadr-body>div>ul>li>div{
        position: relative;
        height: 42px;
    }
    .addadr-body>div>ul>li>div>i{
        position: absolute;
        left: 10px;
        top: 8px;
        font-size: 20px;
        font-weight: 400;
    }
    .addadr-body>div>ul>li:nth-child(2)>div>i{
        font-size: 30px;
        top: 2px;
        left: 13px;
    }
    .addadr-body>div>ul>li>div>input{
        width: 100%;
        height: 40px;
        padding: 10px 0;
        border: none;
        border-bottom: 1px solid #ddd;
        background: none;
        line-height: 20px;
        font-size: 14px;
        text-indent: 40px;
    }
    .addadr-body>div>div{
        width: 84%;
        margin: 50px auto 20px;
    }
    .addadr-body>div>div>a{
        display: block;
        height: 42px;
        line-height: 42px;
        border-radius: 5px;
        text-align: center;
        color: #fff;
        background-color: #be3233;
        font-size: 14px;
    }
</style>
<script>
    export default {
        data(){
            return {}
        }
    }
</script>

