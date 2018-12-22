import Vue from 'vue'
import resource from 'vue-resource'
import App from './App.vue'
import router from './router'

import'mint-ui/lib/style.css'

Vue.config.productionTip = false
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/css/font-awesome.css'

import {Header,Swipe,SwipeItem} from "mint-ui"
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)
Vue.use(resource);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
