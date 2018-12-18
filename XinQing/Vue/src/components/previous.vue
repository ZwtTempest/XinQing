<template>
    <div class="app-previous">
        <div class="news-top">
            <div class="top-left">
                <router-link to="/">
                    <a>
                        <span class="mui-icon mui-icon-back"></span>
                    </a>
                </router-link>
            </div>
            <div class="top-center">往期数据</div>
        </div>
        <div class="previous-body">
            <table>
                <thead>
                    <tr>
                        <td width="40%">期号</td>
                        <td width="40%">揭晓号码</td>
                        <td width="20%">获胜</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>20181225012415</td>
                        <td>25412</td>
                        <td>买单</td>
                    </tr>
                    <tr>
                        <td>20181225012415</td>
                        <td>25412</td>
                        <td>买单</td>
                    </tr>
                    <tr>
                        <td>20181225012415</td>
                        <td>25412</td>
                        <td>买单</td>
                    </tr>
                    <tr>
                        <td>20181225012415</td>
                        <td>25412</td>
                        <td>买单</td>
                    </tr>
                    <tr>
                        <td>20181225012415</td>
                        <td>25412</td>
                        <td>买单</td>
                    </tr>
                    <tr>
                        <td>20181225012415</td>
                        <td>25412</td>
                        <td>买单</td>
                    </tr>
                    <tr>
                        <td>20181225012415</td>
                        <td>25412</td>
                        <td>买单</td>
                    </tr>
                    <tr>
                        <td>20181225012415</td>
                        <td>25412</td>
                        <td>买单</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<style scoped>
    .previous-body{
        padding-top: 44px;
    }
    .previous-body>table{
        width: 100%;
        text-align: center;
        font-size: 14px;
        background-color: #fff;
    }
    .previous-body>table td{
        margin: 0;
        padding: 10px;
    }
    .previous-body>table>tbody>tr>td:last-child{
        color: #58C94A;
    }
    .previous-body>table>tbody>tr:nth-child(2n)>td:last-child{
        color: #be3233;
    }
</style>
<script>
	export default{
		data(){
			return{}
		}
	}
</script>

