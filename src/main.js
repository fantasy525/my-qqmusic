import Vue from 'vue'
import App from './App'
import router from './router'
import Http from '@/common/http'
import 'mint-ui/lib/style.css'
import Mint from 'mint-ui';
Vue.use(Mint);
Vue.prototype.$http=Http
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
