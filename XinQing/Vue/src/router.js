import Vue from 'vue'
import Router from 'vue-router'
import ceshi from "./components/ceshi.vue"
import home from "./components/home.vue"
import rank from "./components/rank.vue"
import personal from "./components/personal.vue"
import customer from "./components/customer.vue"
import news from "./components/my_news.vue"
import newinfo from "./components/news_info.vue"
import cash from "./components/cash.vue"
import cash_record from "./components/cash_record.vue"
import recharge from "./components/recharge.vue"
import previous from "./components/previous.vue"
import pro_detail from "./components/pro_detail.vue"
import my_address from "./components/my_address.vue"
import add_address from "./components/add_address.vue"
import qrdd from './components/qrdd.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/ceshi',component:ceshi},
    {path:'/',component:home},
    {path:'/rank',component:rank},
    {path:'/personal',component:personal},
    {path:'/customer',component:customer},
    {path:'/news',component:news},
    {path:'/news/newinfo',component:newinfo},
    {path:'/cash',component:cash},
    {path:'/cash/cash_record',component:cash_record},
    {path:'/recharge',component:recharge},
    {path:'/previous',component:previous},
    {path:'/pro_detail/:id',component:pro_detail},
    {path:'/personal/my_address',component:my_address},
    {path:'/personal/my_address/add_address',component:add_address},
    {path:'/qrdd',component:qrdd}
  ]
})
