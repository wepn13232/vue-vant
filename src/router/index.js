import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//路由按需引入，减少首页白屏时间
const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: "about" */ '../views/Home/index')
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router
