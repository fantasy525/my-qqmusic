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
      component:()=>import('@/pages/home'),
      children:[
        {
          name:'SingerDetail',
          path:':id',
          component:()=>import('@/pages/singerDetail')
        }
      ]
    },
    {
      path:'/recommed',
      component:()=>import('@/pages/home')
    }
    
  ]
})
