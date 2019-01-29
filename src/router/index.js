import Vue from 'vue'
import Router from 'vue-router'
import bindParkpayment from '@/views/bind-parkpayment'
import temporaryStop from '@/views/temporary-stop'
import paymentSuccess from '@/views/payment-success'
import carKeep from '@/views/car-keep'
import paymentRecord from '@/views/payment-record'
import keepPayment from '@/views/keep-payment'
import renewalDecored from '@/views/renewal-decored'
import decoredRegular from '@/views/decored-regular'
import bindStorage from '@/views/bind-storage'
import haveStorage from '@/views/have-storage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/haveStorage'
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
    },
    {
      path:'/paymentsuccess',
      name:'paymentSuccess',
      component: paymentSuccess
    },
    {
      path:'/carkeep',
      name:'carKeep',
      component: carKeep
    },
    {
      path:'/paymentrecord',
      name:'paymentRecord',
      component: paymentRecord
    },
    {
      path:'/keeppayment',
      name:'keepPayment',
      component: keepPayment
    },
    {
      path:'/renewaldecored',
      name:'renewalDecored',
      component: renewalDecored
    },
    {
      path:'/decoredregular',
      name:'decoredRegular',
      component: decoredRegular
    },
    {
      path:'/bindStorage',
      name:'bindStorage',
      component: bindStorage
    },
    {
      path:'/havestorage',
      name:'haveStorage',
      component: haveStorage
    },
  ]
})
