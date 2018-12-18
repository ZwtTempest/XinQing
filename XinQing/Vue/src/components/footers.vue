<template>
    <div class="app-footers">
        <ul>
			<li v-for="value in tabsName" :key="value.id">
				<router-link :to="getRoute(value.route)">
					<a :class="{active:value.isActive}">
						<span :class="getClass(value.icon)"></span>
						<p :class="{active:value.isActive}">{{value.name}}</p>
					</a>
				</router-link>
			</li>
		</ul>
    </div>
</template>
<style scoped>
	.app-footers ul,.app-footers p{
		margin: 0;
		padding: 0;
	}
	.app-footers>ul{
		list-style: none;
		width: 100%;
		height: 55px;
		background-color: #fff;
		box-shadow: 0 -1px 3px 0 rgba(0,0,0,.2);
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 50;
	}
	.app-footers>ul>li{
		float: left;
		width: 25%;
		height: 55px;
		text-align: center;
	}
	.app-footers>ul>li a{
		display: block;
		color: #666;
		margin-top: 7px;
		line-height: 17px;
	}
	.app-footers>ul>li a.active,.app-footers>ul>li a>p.active{
		color: #be3233;
	}
	.app-footers>ul>li span{
		display: block;
		width: 25px;
		height: 25px;
		margin: 0 auto;
	}
</style>
<script>
    export default {
		data(){
			return{
				tabsName:[
					{id:1,route:"/",icon:"mui-icon mui-icon-home",name:"首页",isActive:false},
					{id:2,route:"/rank",icon:"mui-icon mui-icon-extra mui-icon-extra-rank",name:"排行",isActive:false},
					{id:3,route:"/customer",icon:"mui-icon mui-icon-extra mui-icon-extra-custom",name:"客服",isActive:false},
					{id:4,route:"/personal",icon:"mui-icon mui-icon-contact",name:"我的",isActive:false}
				]
			}
		},
		methods:{
			getClass(str){
				return str
			},
			getRoute(str){
				return str
			},
			getActive(){
				var url = window.location.href;
				var route = url.split("#");
				var len = this.tabsName.length;
				for(var i=0; i<len; i++){
					if(this.tabsName[i].route == route[1]){
						this.tabsName[i].isActive = true;
						return;
					}
				}
			}
		},
		created(){
			this.getActive()
		}
	}
</script>