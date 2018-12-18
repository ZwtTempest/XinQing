<template>
    <div class="app-rank">
        <div class="rank-nav">
            <ul>
                <li v-for="(tab,i) in tabsName" :key="tab.id">
                    <a :class="{active:tab.isActive}" @click="getActive(i)">{{tab.name}}</a>
                </li>
            </ul>
        </div>
        <div class="rank-top">
            <ul>
                <li>
                    <div>
                        <img src="../img/pic1.png">
                    </div>
                    <h4>清风徐来</h4>
                    <p>已获胜<span>452</span>单</p>
                </li>
                <li>
                    <div>
                        <img src="../img/pic2.png">
                    </div>
                    <h4>清风徐来</h4>
                    <p>已获胜<span>392</span>单</p>
                </li>
                <li>
                    <div>
                        <img src="../img/pic3.png">
                    </div>
                    <h4>清风徐来</h4>
                    <p>已获胜<span>352</span>单</p>
                </li>
            </ul>
        </div>
        <div class="rank-data">
            <ul>
                <li>
                    <img src="../img/pic3.png">
                    <h4>不一样的卡布基诺</h4>
                    <p>
                        已获胜
                        <span>556</span>
                        单
                    </p>
                </li>
                <li>
                    <img src="../img/pic2.png">
                    <h4>不一样的卡布基诺</h4>
                    <p>
                        已获胜
                        <span>556</span>
                        单
                    </p>
                </li>
                <li>
                    <img src="../img/pic1.png">
                    <h4>不一样的卡布基诺</h4>
                    <p>
                        已获胜
                        <span>556</span>
                        单
                    </p>
                </li>
                <li>
                    <img src="../img/pic3.png">
                    <h4>不一样的卡布基诺</h4>
                    <p>
                        已获胜
                        <span>556</span>
                        单
                    </p>
                </li>
                <li>
                    <img src="../img/pic3.png">
                    <h4>不一样的卡布基诺</h4>
                    <p>
                        已获胜
                        <span>556</span>
                        单
                    </p>
                </li>
                <li>
                    <img src="../img/pic3.png">
                    <h4>不一样的卡布基诺</h4>
                    <p>
                        已获胜
                        <span>556</span>
                        单
                    </p>
                </li>
                <li>
                    <img src="../img/pic3.png">
                    <h4>不一样的卡布基诺</h4>
                    <p>
                        已获胜
                        <span>556</span>
                        单
                    </p>
                </li>
                <li>
                    <img src="../img/pic3.png">
                    <h4>不一样的卡布基诺</h4>
                    <p>
                        已获胜
                        <span>556</span>
                        单
                    </p>
                </li>
                <li>
                    <img src="../img/pic1.png">
                    <h4>不一样的卡布基诺</h4>
                    <p>
                        已获胜
                        <span>556</span>
                        单
                    </p>
                </li>
                <li>
                    <img src="../img/pic2.png">
                    <h4>不一样的卡布基诺</h4>
                    <p>
                        已获胜
                        <span>556</span>
                        单
                    </p>
                </li>
                <li>
                    <img src="../img/pic3.png">
                    <h4>不一样的卡布基诺</h4>
                    <p>
                        已获胜
                        <span>556</span>
                        单
                    </p>
                </li>
            </ul>
        </div>
        <footers></footers>
    </div>
</template>
<style scoped>
.app-rank{
    font-size: 14px;
}
.rank-nav>ul{
    list-style: none;
    margin: 0;
    padding: 0;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 44px;
    line-height: 44px;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1);
    z-index: 50;
}
.rank-nav>ul>li{
    float: left;
    width: 125px;
}
.rank-nav>ul>li>a{
    display: block;
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
    color: #666;
    border-bottom: 2px solid #fff;
}
.rank-nav>ul>li>a.active{
    color: #be3233;
    border-color: #be3233;
}
.rank-top{
    padding-top: 44px;
}
.rank-top>ul{
    list-style: none;
    margin: 0;
    height: 160px;
    padding: 20px 0;
    background: linear-gradient(to bottom right,#be3233 30%,#9e1819);
}
.rank-top>ul>li{
    float: left;
    width: 125px;
    height: 120px;
    text-align: center;
    position: relative;
}
.rank-top>ul>li>div{
    height: 70px;
    margin-bottom: 6px;
}
.rank-top>ul>li>div>img{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    box-shadow: 0 3px 3px 0 rgba(0,0,0,.2);
}
.rank-top>ul>li>h4{
    margin: 0;
    padding: 0;
    height: 22px;
    line-height: 22px;
    font-size: 14px;
    color: #fff;
}
.rank-top>ul>li>p{
    margin: 0;
    padding: 0;
    height: 22px;
    line-height: 22px;
    color: rgba(255,255,255,.6);
}
.rank-top>ul>li>p>span{
    color: #fff;
}
.rank-data{
    padding-bottom: 55px;
}
.rank-data>ul{
    margin: 0;
    padding: 0;
    list-style: none;
    background-color: #fff;
}
.rank-data>ul>li{
    height: 71px;
    line-height: 70px;
    border-bottom: 1px solid #eee;
}
.rank-data>ul>li::before{
    content: "";
    display: table;
}
.rank-data>ul>li>img{
    float: left;
    width: 50px;
    height: 50px;
    box-shadow: 0 0 0 1px #f0f0f0;
    border-radius: 50%;
    margin-top: 10px;
    margin-left: 10px;
}
.rank-data>ul>li>h4{
    margin: 0;
    float: left;
    line-height: 70px;
    font-size: 14px;
    color: #333;
    margin-left: 10px;
}
.rank-data>ul>li>p{
    margin: 0;
    padding: 0;
    float: right;
    line-height: 70px;
    margin-right: 10px;
}
.rank-data>ul>li>p>span{
    color: #be3233;
    font-size: 15px;
}
</style>
<script>
    import footers from './footers.vue'
	export default {
		data(){
			return{
                tabsName:[
                    {id:1,name:"日榜",isActive:true},
                    {id:2,name:"周榜",isActive:false},
                    {id:3,name:"月榜",isActive:false}
                ]
            }
		},
        components:{
            "footers":footers
        },
        methods:{
            getActive(i){
                for(var j=0; j<3; j++){
                    this.tabsName[j].isActive = false;
                }
                this.tabsName[i].isActive = true;
            }
        }
	}
</script>