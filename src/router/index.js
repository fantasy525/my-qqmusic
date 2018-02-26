import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:'singer'
    },{
      path:'/singer',
      component:()=>import('@/pages/home')
    },
    {
      path:'/recommed',
      component:()=>import('@/pages/home')
    }
  ]
})
