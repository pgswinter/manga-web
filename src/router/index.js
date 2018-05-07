import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home'
import Details from '@/pages/Details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      	path: '/',
      	name: 'Home',
      	component: Home
    },
    {
    	path: '/details/:id/:chapter',
    	name: 'Details',
    	component: Details
    }
  ]
})
