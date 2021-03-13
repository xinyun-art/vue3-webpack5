import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Mine from '../views/Mine.vue'
import VW from '../views/VW.vue'
import RemWithVW from '../views/RemWithVW.vue'
import PS from '../views/PS.vue'

const hashRouter = createWebHashHistory()
const router = createRouter({
	history: hashRouter,
	routes: [
		{
			path: '/',
			redirect: '/home',
		},
		{
			path: '/home',
			name: 'Home',
			component: Home,
		},
		{
			path: '/mine',
			name: 'Mine',
			component: Mine,
		},
		{
			path: '/vw',
			name: 'VW',
			component: VW,
		},
		{
			path: '/rwv',
			name: 'RemWithVW',
			component: RemWithVW,
		},
		{
			path: '/ps',
			name: 'PS',
			component: PS,
		},
	],
})
export default router
