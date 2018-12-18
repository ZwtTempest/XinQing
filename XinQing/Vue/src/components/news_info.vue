<template>
    <div class="app-newinfo">
        <div class="news-top">
            <div class="top-left">
                <router-link to="/news">
                    <a>
                        <span class="mui-icon mui-icon-back"></span>
                    </a>
                </router-link>
            </div>
            <div class="top-center">新闻内容</div>
        </div>
        <div class="newinfo-body">
            <h4>中国驻瑞典大使：对瑞典警方的粗暴行为深感不解和震惊</h4>
            <div>
                <p>“中国驻瑞典大使馆”微信公号9月16日消息，9月16日，桂从友大使就瑞典警察粗暴对待中国游客事在使馆接受瑞典《晚报》记者米奇奇专访。全文如下：</p>
                <p>首先我要纠正你的错误。这3名游客有预定，只不过比预定的提前几个小时到了酒店。中国有近14亿人。我们珍惜每一个人的生命、安全和尊严。作为中国政府和中国使馆，我们的职责和重要任务就是保护中国公民在境外的生命、安全和尊严。这也应该是包括瑞典在内的任何一个国家政府应尽的职责。3名中国游客遭瑞典警察粗暴对待的事，竟然发生在一个天天讲人权、讲公正的国家，我们对此深感不解和震惊。这3名中国公民并没有触犯瑞典法律。即使他们违法了，瑞典警方也应依法处理，并通知我们使馆</p>
                <p>首先我要纠正你的错误。这3名游客有预定，只不过比预定的提前几个小时到了酒店。中国有近14亿人。我们珍惜每一个人的生命、安全和尊严。作为中国政府和中国使馆，我们的职责和重要任务就是保护中国公民在境外的生命、安全和尊严。这也应该是包括瑞典在内的任何一个国家政府应尽的职责。3名中国游客遭瑞典警察粗暴对待的事，竟然发生在一个天天讲人权、讲公正的国家，我们对此深感不解和震惊。这3名中国公民并没有触犯瑞典法律。即使他们违法了，瑞典警方也应依法处理，并通知我们使馆</p>
            </div>
        </div>
        
    </div>
</template>
<style scoped>
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
    .app-newinfo p{
        margin: 0;
        padding: 0;
    }
    .newinfo-body{
        width: 96%;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 0 3px 0 rgba(0,0,0,.13);
        padding: 10px;
        margin: 54px auto 10px;
    }
    .newinfo-body>h4{
        color: #333;
        font-size: 20px;
        line-height: 34px;
        margin-bottom: 20px;
    }
    .newinfo-body>div{
        line-height: 28px;
        font-size: 14px;
        color: #666;
    }
</style>
<script>
    export default{
		data(){
			return{}
		}
	}
</script>