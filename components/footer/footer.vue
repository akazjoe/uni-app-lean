<template>
	<view class="bottom-navigate">
		<block v-for="(item, index) in navList" :key="index">
			<navigator
			  open-type="navigate"
			  hover-class='none'
			  :url="item.url"
			  class="nav-list-item"
			  :class="{ actived: currentPage === item.name }"
			>
			  <!-- <view class="icon">
			    <view :class="['tn-icon-' + item.icon]"></view>
			  </view> -->
			  <view class="nav-link">
			    <view class='title'>{{ item.title }}</view>
			  </view>
			</navigator>
		</block>
	</view>
</template>

<script>
	import basicListData from '@/mock/basic.js'
	export default {
		name: 'Footer',
		data() {
			return {
				navList: basicListData.data,
			}
		},
		computed: {
			currentPage() {
				return this.$store.state.currentPage;
			}
		},
		onShow() {
			// 监听来自其他页面的消息
			
		},
		onUnload() {
			// 移除监听器
		},
		methods: {
		}
	}
</script>

<style>
	.bottom-navigate{
		position: fixed;
		bottom: 0;
		background-color: antiquewhite;
		opacity: 60%;
		padding: 8px 0px;
		width: 100%;
		height: 3vh;
		line-height: 3vh;
		font-size: 14px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.nav-list-item{
		width: 49%;
		margin: 2px;
		text-align: center;
	}
	.actived{
		color: lightblue;
	}
	.icon{
		font-size: 18px;
	}
</style>