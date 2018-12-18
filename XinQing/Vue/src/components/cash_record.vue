<template>
    <div class="app-cash-record">
        <div class="cash-top">
            <div class="cash-top-left">
                <router-link to="/cash">
                    <a>
                        <span class="mui-icon mui-icon-back"></span>
                    </a>
                </router-link>
            </div>
            <div class="cash-top-center">提现记录</div>
        </div>
        <table>
            <thead>
                <th>提现类型</th>
                <th>提现金额</th>
                <th>当前状态</th>
                <th>时间</th>
            </thead>
            <tbody></tbody>
        </table>
    </div>
</template>
<style scoped>
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
    table{
        width: 100%;
        text-align: center;
        font-size: 14px;
        border-collapse: collapse;
        background: #fff;
    }
    th{
        width: 20%;
        height: 38px;
        line-height: 38px;
        padding: 10px !important;
    }
</style>
<script>
    export default{
		data(){
			return{}
		}
	}
</script>