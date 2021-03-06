import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/amap'
    },
    {
      path: '/amap',
      name: '高德地图',
      component: () => import('@/views/map/AMap')
    },
    {
      path: '/editor',
      name: '富文本编辑器',
      component: () => import('@/views/editor/wangeditor')
    }
  ]
})
