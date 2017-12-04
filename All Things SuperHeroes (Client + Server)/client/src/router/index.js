import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Characters from '@/components/Characters'
import Series from '@/components/ComicSeries'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/characters',
      name: 'characters',
      component: Characters
    },
    {
      path: '/series',
      name: 'series',
      component: Series
    }
  ],
  mode: 'history'
})
