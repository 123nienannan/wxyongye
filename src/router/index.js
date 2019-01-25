import Vue from 'vue'
import Router from 'vue-router'
import bindParkpayment from '@/views/bind-parkpayment'
import temporaryStop from '@/views/temporary-stop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/bindparkpayment'
    },
    {
      path:'/bindparkpayment',
      name:'bindParkpayment',
      component: bindParkpayment
    },
    {
      path:'/temporarystop',
      name:'temporaryStop',
      component: temporaryStop
    }
  ]
})
