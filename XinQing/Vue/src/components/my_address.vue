<template>
    <div class="app-address">
        <div class="address-header">
            <div class="header-back">
                <a href="javascript:window.history.back()">
                    <span class="mui-icon mui-icon-back"></span>
                </a>
            </div>
            <div class="header-title">
                收货地址
            </div>
            <div class="header-admin">
                <a @click="getAct()">管理</a>
            </div>
        </div>
        <div class="address-ul">
            <ul>
                <li v-for="(tab,i) in list" :key="tab.id" @click="getActive(i)">
                    <div class="add-check">
                        <i class="fa fa-circle-o"></i>
                        <i class="fa fa-check-circle-o" :class="{active:tab.isActive}" style="color:#be3233;"></i>
                    </div>
                    <h4>
                        <span>{{tab.uname}}</span>
                        <span>{{tab.phone}}</span>
                    </h4>
                    <p>{{tab.address}}</p>
                    <div class="add-delete" :class="{act:isAct}">
                        <i class="fa fa-trash"></i>
                    </div>
                </li>
            </ul>
        </div>
        <div class="add-tabs">
            <ul>
                <li>
                    <router-link to="/personal/my_address/add_address">
                        新建地址
                    </router-link>
                </li>
                <li>
                    <a>设为默认</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
    .address-header{
        width: 100%;
        height: 44px;
        position: fixed;
        top: 0;
        left: 0;
        color: #fff;
        background: linear-gradient(to right,#be3233,#9e1819);
        z-index: 50;
    }
    .address-header>div.header-back{
        float: left;
        width: 60px;
        height: 44px;
        line-height: 44px;
        text-align: center;
    }
    .address-header>div.header-back>a{
        color: #fff;
        text-decoration: none;
    }
    .address-header>div.header-back>a>span{
        font-size: 40px;
    }
    .address-header>div.header-title{
        float: left;
        width: calc(100% - 140px);
        height: 44px;
        line-height: 44px;
        text-align: center;
        text-indent: 20px;
        font-size: 18px;
    }
    .address-header>div.header-admin{
        float: left;
        width: 80px;
        height: 44px;
        line-height: 44px;
        text-align: center;
    }
    .address-header>div.header-admin>a{
        text-decoration: none;
        color: #fff;
        font-size: 14px;
    }
    .address-ul{     
        padding: 44px 0 60px 0;
    }
    .address-ul>ul{
        list-style: none;
        margin: 0;
        padding: 10px;
        background-color: #fff;
        font-size: 14px;
        font-family: 'microsoft yahei',Verdana,Arial,Helvetica,sans-serif;
    }
    .address-ul>ul>li{
        width: 100%;
        height: 60px;
        padding: 5px 0;
        border-bottom: 1px solid #eee;
        position: relative;
    }
    .address-ul>ul>li:last-child{
        border-bottom: none;
    }
    .address-ul>ul>li>div.add-check{
        width: 30px;
        height: 50px;
        position: absolute;
        top: 5px;
        left: 5px;
        line-height: 50px;
        text-align: center;
    }
    .address-ul>ul>li>div.add-check>i{
        font-size: 20px;
        color: #ccc;
    }
    .address-ul>ul>li>div.add-check>i:last-child{
        position: relative;
        top: -37px;
        display: none;
        z-index: 50;
    }
    .address-ul>ul>li>div.add-check>i:last-child.active{
        display: block;
    }
    .address-ul>ul>li>h4{
        width: 270px;
        height: 24px;
        line-height: 24px;
        font-size: 14px;
        font-weight: 400;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0;
        margin: 0;
        position: absolute;
        top: 5px;
        left: 40px;
    }
    .address-ul>ul>li>h4>span{
        color: #222;
        margin-right: 10px;
    }
    .address-ul>ul>li>p{
        padding: 0;
        margin: 0;
        width: 270px;
        color: #222;
        position: absolute;
        top: 29px;
        left: 40px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .address-ul>ul>li>div.add-delete{
        width: 30px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        position: absolute;
        top: 5px;
        right: 8px;
        display: none;
    }
    .address-ul>ul>li>div.add-delete.act{
        display: block;
    }
    .address-ul>ul>li>div.add-delete>i{
        color: #be3233;
        font-size: 20px;
    }
    .add-tabs>ul{
        margin: 0;
        padding: 0;
        list-style: none;
        width: 100%;
        height: 50px;
        font-size: 14px;
        background-color: #fff;
        position: fixed;
        left: 0;
        bottom: 0;
        box-shadow: 0 -1px 3px 0 rgba(0,0,0,.2);
    }
    .add-tabs>ul>li{
        float: left;
        width: 50%;
        height: 36px;
        line-height: 36px;
        margin-top: 7px;
    }
    .add-tabs>ul>li:first-child{
        box-shadow: 1px 0 0 0 #ddd;
    }
    .add-tabs>ul>li a{
        display: block;
        height: 36px;
        line-height: 36px;
        color: #be3233;
        text-align: center;
    }
    .add-tabs>ul>li:last-child>a{
        width: 50%;
        color: #fff;
        background: #be3233;
        border-radius: 5px;
        margin: 0 auto;
    }
</style>
<script>
    export default {
        data() {
            return {
                list: [
                    {id:1,isActive:true,uname:"卓先生",phone:12345678942,address:"福州市福州市福州市福州市福州市20栋804"},
                    {id:2,isActive:false,uname:"卓先生",phone:12345678942,address:"福州市福州市福州市福州市福州市20栋804"},
                    {id:3,isActive:false,uname:"卓先生",phone:12345678942,address:"福州市福州市福州市福州市福州市20栋804"},
                    {id:4,isActive:false,uname:"卓先生",phone:12345678942,address:"福州市福州市福州市福州市福州市20栋804"},
                    {id:5,isActive:false,uname:"卓先生",phone:12345678942,address:"福州市福州市福州市福州市福州市20栋804"}
                ],
                isAct:false
            }
        },
        methods:{
            getActive(i){
                var len = this.list.length;
                for(var j=0; j<len; j++){
                    this.list[j].isActive = false;
                }
                this.list[i].isActive = true;
            },
            getAct(){
                if(this.isAct){
                    this.isAct = false;
                    return;
                }
                this.isAct = true;
            }
        }
    }
</script>