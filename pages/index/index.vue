<template>
	<view class="content">
		<view class="search-box">
			<view class="tn-icon-search"></view>
			<input type="text" name="title" value="" placeholder="搜索"/>
		</view>
		<view class="scroll-box">
			<swiper indicator-dots autoplay>
				<swiper-item v-for="(item, index) in imgList" :key="index">
					<image :src="item" class="slide-image"></image>
				</swiper-item>
			</swiper>
		</view>
		<navigateLists :list="list"></navigateLists>
		<FooterNavigate></FooterNavigate>
	</view>
</template>

<script>
	import navigateLists from '@/components/navigateList/navigateList.vue';
	import FooterNavigate from '@/components/footer/footer.vue';
	import list from '@/mock/indexData.js';
	export default {
		components: {
			navigateLists,
			FooterNavigate
		},
		data() {
			return {
				imgList: [
					'../../static/assess/image/1.jpg',
					'../../static/assess/image/2.png',
					'../../static/assess/image/3.png',
					'../../static/assess/image/4.png'
				],
				list: list.data,
			}
		},
		onLoad() {
			
		},
		methods: {
			
		},
		onShow() {
			this.$store.commit('setCurrentPage', 'index');
		}
	}
</script>
<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10px;
		height: 100%;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	
	.search-box{
		width: 100%;
		height: 35px;
		margin: auto;
		position: relative;
	}
	.tn-icon-search{
		position: absolute;
		top: 14px;
		right: 10px;
	}
	.search-box input{
		position: absolute;
		padding-left: 10px;
		top: 8px;
		width: calc(100% - 15px);
		border: 2px solid #ccc;
		border-radius: 10px;
		font-size: 12px;
		height: 25px;
	}
	
	.scroll-box{
		width: 100%;
		margin: 10px auto;
		margin-top: 15px;
		height: 150px;
		border-radius: 10px;
		box-shadow: 6px 8px 4px #999;
		padding: 0;
	}
	.scroll-box image{
		width: 100%;
		height: 100%;
		margin: 0;
		border-radius: 10px;
		filter: brightness(130%);
	}
	.scroll-box::before{
		content: '';
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		/* background-color: #90d3ce; */
		/* background: linear-gradient(to right, #2486d8, #f84077, #fcd217, #2486d8); */
		/* background-size: 600% 100%; */
		filter: blur(35px) opacity(45%);
		opacity: 0;
		transition: 1s;
		/* animation: anime 12s linear infinite; */
		opacity: 1;
	}
	@keyframes anime {
		0% {
			background-position: 0%;
		}
		100% {
			background-position: -600% 0;
		}
	}
	
</style>