<template>
	<view>
		<view class="">
			
		</view>
		<FooterNavigate></FooterNavigate>
	</view>
</template>

<script>
	import FooterNavigate from '@/components/footer/footer.vue';
	export default {
		components: {
			FooterNavigate
		},
		data() {
			return {
			}
		},
		onLoad() {
		},
		methods: {
		},
		onShow() {
			this.$store.commit('setCurrentPage', 'anime');
		}
	}
</script>

<style>

</style>
