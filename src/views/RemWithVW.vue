<template>
	<div class="RemWithVW">
		<div class="header">计算机科学</div>
		<ul class="math__list">
			<li v-for="(item, index) of math" :key="index" class="math__item">{{ item }}</li>
		</ul>
		<div class="banner"></div>
		<div>
			<h3 class="fs-16 hairline--title">transform+伪类--单边：</h3>
			<div>
				<div class="hairline__item--side fs-20">1px</div>
				<div class="hairline__item--side--fix fs-20">0.5px</div>
			</div>
		</div>
		<div>
			<h3 class="fs-16 hairline--title">transform+伪类--四边：</h3>
			<div>
				<div class="hairline__item--around fs-20">1px</div>
				<div class="hairline__item--around--fix fs-20">0.5px</div>
			</div>
		</div>
		<div>
			<h3 class="fs-16 hairline--title">box-shadow--单边：</h3>
			<div>
				<div class="hairline__item--side fs-20">1px</div>
				<div class="hairline__item--shadow--fix fs-20">0.5px</div>
			</div>
		</div>
	</div>
</template>

<script>
import { onMounted, reactive } from 'vue'
export default {
	name: 'RemWithVW',
	setup() {
		const math = reactive(['离散数学', '线性代数', '概率论'])

		onMounted(() => {
			console.log('VW-onMounted')
		})

		return { math }
	},
}
</script>

<style lang="scss">
html {
	font-size: 13.333333vw;
}
// .app {
// 	max-width: 980px;
// 	margin: 0 auto;
// }
@media screen and (min-width: 660px) {
	html {
		font-size: 54px;
	}
}
.RemWithVW {
	.fs-12 {
		font-size: 0.24rem;
	}
	.fs-14 {
		font-size: 0.28rem;
	}
	.fs-16 {
		font-size: 0.32rem;
	}
	.fs-18 {
		font-size: 0.36rem;
	}
	.fs-20 {
		font-size: 0.4rem;
	}
	.header {
		height: 0.88rem;
		line-height: 0.88rem;
		text-align: center;
		color: #fff;
		font-size: 0.4rem;
		background-color: #2c3a47;
	}
	.math__list {
		display: flex;
		justify-content: space-around;
		padding: 0.1rem 0;
	}
	.math__item {
		width: 2rem;
		height: 2.4rem;
		line-height: 2.4rem;
		text-align: center;
		font-size: 0.36rem;
		background-color: #cad3c8;
	}
	.banner {
		height: 0.8rem;
		background-color: #fd7272;
		margin: 0.1rem 0.06rem;
		box-sizing: border-box;
	}
	.hairline--title {
		padding: 0.2rem 0.1rem;
	}
	.hairline__item--side {
		width: 4rem;
		height: 3rem;
		overflow: hidden;
		margin: 0.2rem auto;
		border-style: solid;
		border-color: #2c3a47;
		border-left-width: 1px;
		border-bottom-width: 1px;
	}
	.hairline__item--side--fix {
		position: relative;
		width: 4rem;
		height: 3rem;
		overflow: hidden;
		margin: 0.2rem auto;
		border: none !important;
		&::before {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			width: 1px;
			height: 100%;
			background-color: #2c3a47;
			transform-origin: 0 0;
			transform: scaleX(0.5);
		}
		&::after {
			content: '';
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 1px;
			background-color: #2c3a47;
			transform-origin: 0 0;
			transform: scaleY(0.5);
		}
	}
	.hairline__item--around {
		width: 4rem;
		height: 3rem;
		overflow: hidden;
		margin: 0.2rem auto;
		border: 1px solid #2c3a47;
	}
	.hairline__item--around--fix {
		position: relative;
		width: 4rem;
		height: 3rem;
		overflow: hidden;
		margin: 0.2rem auto;
		border: none !important;
		&::before {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			width: 8rem;
			height: 6rem;
			border: 1px solid #2c3a47;
			// background-color: #2c3a47;
			transform-origin: 0 0;
			transform: scale(0.5);
			box-sizing: border-box;
		}
	}
	.hairline__item--shadow--fix {
		width: 4rem;
		height: 3rem;
		// overflow: hidden;
		margin: 0.2rem auto;
		box-shadow: inset 0 -1px 1px -1px #2c3a47;
	}
}
</style>
