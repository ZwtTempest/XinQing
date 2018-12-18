<template>
    <div class="app-news">
        <div class="news-top">
            <div class="top-left">
                <a href="javascript:window.history.back()">
                    <span class="mui-icon mui-icon-back"></span>
                </a>
            </div>
            <div class="top-center">新闻内容</div>
        </div>
        <div class="news-body">
            <ul>
                <li v-for="item in newsList" :key="item.id">
                    <router-link :to="getRoute(item.route)">
                        <div class="news-info">
                            <h4>{{item.title}}</h4>
                            <p>{{item.subtitle}}</p>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
    .app-news a{
        text-decoration: none;
    }
    .app-news ul{
        margin: 0;
        list-style: none;
    }
    .app-news h4,.app-news p{
        margin: 0;
        padding: 0;
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
    .news-body{
        padding-top: 44px;
    }
    .news-body>ul{
        padding: 10px;
        font-size: 14px;
    }
    .news-body>ul>li{
        height: 90px;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 0 3px 0 rgba(0,0,0,.2);
        padding: 5px 10px;
        margin-bottom: 10px;
    }
    .news-body>ul>li a>div{
        position: relative;
        height: 85px;
        padding-bottom: 5px;
    }
    .news-body>ul>li a>div>h4{
        height: 30px;
        line-height: 30px;
        color: #000;
        font-size: 14px;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .news-body>ul>li a>div>p{
        height: 48px;
        line-height: 24px;
        color: #999;
        overflow: hidden;       
    }
</style>
<script>
    export default {
		data(){
			return{
                newsList:[
                    {id:1,title:'消息通知的标题',subtitle:'消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容',route:'/news/newinfo'},
                    {id:2,title:'消息通知的标题',subtitle:'消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容',route:'/news/newinfo'},
                    {id:3,title:'消息通知的标题',subtitle:'消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容',route:'/news/newinfo'},
                    {id:4,title:'消息通知的标题',subtitle:'消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容',route:'/news/newinfo'},
                    {id:5,title:'消息通知的标题',subtitle:'消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容',route:'/news/newinfo'},
                    {id:6,title:'消息通知的标题',subtitle:'消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容',route:'/news/newinfo'},
                    {id:7,title:'消息通知的标题',subtitle:'消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容',route:'/news/newinfo'},
                    {id:8,title:'消息通知的标题',subtitle:'消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容',route:'/news/newinfo'},
                    {id:9,title:'消息通知的标题',subtitle:'消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容',route:'/news/newinfo'},
                    {id:10,title:'消息通知的标题',subtitle:'消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容',route:'/news/newinfo'},
                    {id:11,title:'消息通知的标题',subtitle:'消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容',route:'/news/newinfo'},
                    {id:12,title:'消息通知的标题',subtitle:'消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容消息通知的内容',route:'/news/newinfo'}
                ]
            }
        },
        methods:{
            getRoute(str){
                return str
            }
        }
	}
</script>