<template>
	<view class="mode-box">
		<navigateLists :list="list"></navigateLists>
		<FooterNavigate></FooterNavigate>
	</view>
</template>

<script>
	import navigateLists from '@/components/navigateList/navigateList.vue';
	import FooterNavigate from '@/components/footer/footer.vue';
	import list from '@/mock/modeData.js';
	export default {
		components: {
			navigateLists,
			FooterNavigate
		},
		data() {
			return {
				list: list.data,
			}
		},
		onLoad() {
		},
		methods: {
		},
		onShow() {
			this.$store.commit('setCurrentPage', 'mode');
		}
	}
</script>

<style>
.mode-box{
	padding: 10px;
}
</style>
