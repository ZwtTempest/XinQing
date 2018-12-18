<template>
    <div class="app-qrdd">
        <div class="news-top">
            <div class="top-left">
                <router-link to="/">
                    <a>
                        <span class="mui-icon mui-icon-back"></span>
                    </a>
                </router-link>
            </div>
            <div class="top-center">确认订单</div>
        </div>
        <div class="qrdd-body">
            <div class="qrdd-body-address">
                <p>
                    收货地址
                    <a>修改</a>
                </p>
                <div>
                    <p>
                        <span>侯钰凯</span>
                        <span>1586264544</span>
                    </p>
                    <p>武汉市江夏区保利海上五月花17栋1702</p>
                </div>
            </div>
            <ul>
                <li></li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
    p,ul{
        margin: 0;
        padding: 0;
    }
    ul{
        list-style: none;
    }
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
    .qrdd-body{
        padding: 44px 0 60px 0;
    }
    .qrdd-body-address{
        background-color: #fff;
        padding: 5px 10px;
        margin-bottom: 10px;
    }
    .qrdd-body-address>p{
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        color: #000;
        text-indent: 5px;
        border-bottom: 1px solid #ddd;
        position: relative;
    }
    .qrdd-body-address>p>a{
        position: absolute;
        top: 0;
        right: 5px;
        color: #be3233;
        font-size: 14px;
    }
    .qrdd-body-address>div{
        padding: 5px;
    }
    .qrdd-body-address>div>p{
        height: 24px;
        line-height: 24px;
        color: #666;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .qrdd-body-address>div>p>span{
        color: #222;
        margin-right: 10px;
    }
    .qrdd-body>ul>li{
        background-color: #fff;
        padding: 5px 10px;
        margin-bottom: 10px;
    }
</style>
<script>
    export default {
        data(){
            return {

            }
        }
    }
</script>
