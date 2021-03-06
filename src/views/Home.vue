<template>
	<div class="home">
		<div class="header">计算机科学</div>
		<ul class="math__list">
			<li v-for="(item, index) of math" :key="index" class="math__item">{{ item }}</li>
		</ul>
		<div class="banner"></div>
		<div class="nail--fixed"></div>
		<div class="test" ref="testLine"></div>
	</div>
</template>

<script>
import { onMounted, onBeforeUnmount, ref, reactive } from 'vue'
import { useStore } from 'vuex'
export default {
	name: 'Home',
	setup() {
		const count = ref(1)
		const math = reactive(['离散数学', '线性代数', '概率论'])
		const testLine = ref(null)
		const store = useStore()

		onMounted(() => {
			console.log('Home-onMounted')
			store.commit('setUser', { name: 'Art', age: 33 })
			console.log('testLine:', testLine.value.offsetHeight)
			window.addEventListener('orientationchange', ottChange, false)
		})

		onBeforeUnmount(() => {
			window.removeEventListener('orientationchange', ottChange, false)
		})

		const ottChange = () => {
			console.log('the orientation of the device is now ' + screen.orientation.angle)
		}

		return { count, math, testLine }
	},
}
</script>

<style lang="scss">
.home {
	.header {
		height: 2rem;
		line-height: 2rem;
		text-align: center;
		color: #fff;
		font-size: 1rem;
		background-color: #2c3a47;
	}
	.math__list {
		display: flex;
		justify-content: space-around;
		padding: 0.6rem 0;
	}
	.math__item {
		width: 6rem;
		height: 10rem;
		line-height: 10rem;
		text-align: center;
		font-size: 0.8rem;
		background-color: #cad3c8;
	}
	.banner {
		height: 2rem;
		background-color: #fd7272;
		margin: 1rem 0.8rem;
		box-sizing: border-box;
	}
	.nail--fixed {
		position: fixed;
		left: 9rem;
		top: 14.8rem;
		width: 1rem;
		height: 1rem;
		background-color: #58b19f;
	}
	.test {
		border: 0.5px solid red;
	}
}
</style>
