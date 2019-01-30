// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/common.css'
import '@/util/rem'
import { Toast, Indicator, DatetimePicker } from 'mint-ui'

Vue.config.productionTip = false
Vue.prototype.$toast = Toast
Vue.prototype.$indicator = Indicator
Vue.component(DatetimePicker.name, DatetimePicker);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
