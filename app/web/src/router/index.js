import Vue from 'vue'
import Router from 'vue-router'

import UserMake from '@/view/userMake'
import Login from '@/view/login'
import MakeInfo from '@/view/makeInfo'

Vue.use(Router)

export default new Router({
	routes: [{ 
		path: '/',
		component: UserMake,
	}, { 
		path: '/login',
		component: Login
	}, { 
		path: '/makeInfo',
		component: MakeInfo,
	}]
})