<template>
	<view class="my-chart-box">
		<view id="gauge" class="gauge" style=" --gauge-value: 60; width: 380rpx; height: 380rpx; --gauge-display-value: 60;--gauge-display-active: 60;">
			<view class="ticks-box"  bind:touchmove="movePointer" bind:touchend="pressTouchEnd">
					<view v-for="(item, index) in titheBoxActive" :key="index" class="tick-content">
						<view class="tithe-box actived-blue actived-display" :style="{'--gauge-tithe-tick': item.tick }"></view>
					</view>
			</view>
			<view class="ticks">
				<view class="tithe" style="--gauge-tithe-tick:0;">
					<span class="titnum" style="transform: rotate(60deg);">0</span>
				</view>
				<view class="tithe" style="--gauge-tithe-tick:10;">
					<span class="titnum" style="transform: rotate(30deg);">10</span>
				</view>
				<view class="tithe" style="--gauge-tithe-tick:20;">
					<span class="titnum">20</span>
				</view>
				<view class="tithe" style="--gauge-tithe-tick:30;">
					<span class="titnum" style="transform: rotate(-30deg);">30</span>
				</view>
				<view class="tithe" style="--gauge-tithe-tick:40;">
					<span class="titnum" style="transform: rotate(-60deg);">40</span>
				</view>
				<view class="tithe" style="--gauge-tithe-tick:50;">
					<span class="titnum" style="transform: rotate(-90deg);">50</span>
				</view>			
				<view class="tithe" style="--gauge-tithe-tick:60;">
					<span class="titnum" style="transform: rotate(-120deg);">60</span>
				</view>
				<view class="tithe" style="--gauge-tithe-tick:70;">
					<span class="titnum" style="transform: rotate(-150deg);">70</span>
				</view>
				<view class="tithe" style="--gauge-tithe-tick:80;">
					<span class="titnum" style="transform: rotate(-180deg);">80</span>
				</view>
				<view class="tithe" style="--gauge-tithe-tick:90;">
					<span class="titnum" style="transform: rotate(-210deg);">90</span>
				</view>
				<view class="tithe" style="--gauge-tithe-tick:100;">
					<span class="titnum" style="transform: rotate(-240deg);">100</span>
				</view>
			</view>
			<view class="tick-circle"></view>
			<view class="needle"></view>
			<view class="labels">
				<view class="value-label" >
					 <view class="gauge-display-value"> {{gaugeValue}} </view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				gaugeValue: 10,
				titheBoxActive: []
			}
		},
		onLoad() {
			let titheBoxActive = [];
			for(let i=0;i<=50;i++){
				titheBoxActive.push({'tick':i*2,'active':0,'display':0})
			}
			this.$set(this,'titheBoxActive',titheBoxActive)
			console.log(titheBoxActive)
		},
		methods: {
			
		}
	}
</script>

<style>
	.my-chart-box{
		width: 100%;
		height: 500rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.gauge-box{
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 25rpx 15rpx;
		padding: 80rpx 0rpx;
		position: relative;
	}
	.gauge-title{
		position: absolute;
		top: 10rpx;
		left: 15rpx;
	}
	.gauge {
		position: relative;
		background: var(--gauge-bg);
		border-radius: 50%;
		width: 280rpx;
		height: 280rpx;
		font-size: 32rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 35rpx;
		margin-bottom: 10rpx;
	}
	.gauge .ticks-box {
		position: absolute;
		width: 530rpx;
		height: 530rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.tick-content{
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.gauge .ticks-box .tithe-box {
		transform: rotate(calc(3deg * var(--gauge-tithe-tick) - 59deg));
		position: relative;
		width: 620rpx;
		height: 12rpx;
		background: linear-gradient(90deg, rgba(2, 0, 36, 0) 0, rgba(0, 0, 0, 0) 9%, #ccc 8%, #ccc 15%, rgba(0, 0, 0, 0) 15%);
		opacity: 0.35;
	}
	.actived-blue{
		background: linear-gradient(90deg, rgba(52, 42, 248, 0) 0, rgba(0, 0, 0, 0) 9%, aqua 8%, aqua 15%, rgba(0, 0, 0, 0) 15%) !important;
		opacity: 1!important;
	}
	.actived-display{
		background: linear-gradient(90deg, rgba(52, 42, 248, 0) 0, rgba(0, 0, 0, 0) 9%, rgb(255, 80, 80) 8%, rgb(255, 80, 80) 15%, rgba(0, 0, 0, 0) 15%) !important;
		opacity: 1!important;
	}
	.gauge .ticks {
		position: absolute;
		width: 345rpx;
		height: 345rpx;
		background: #41555d;
		border-radius: 50%;
		border: 1px solid rgb(102, 102, 102);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.gauge .ticks .tithe {
		transform: rotate(calc(3deg * var(--gauge-tithe-tick) - 59deg));
		position: absolute;
		width: 366rpx;
		height: 2%;
		margin-bottom: -2%;
		background: linear-gradient(90deg, rgba(2, 0, 36, 0) 0, rgba(0, 0, 0, 0) 6%, #7192a0 6%, #7192a0 12%, rgba(0, 0, 0, 0) 14%);
		border-color: #41555d;
	}
	.gauge .tick-circle {
		position: absolute;
		width: calc(78% - .1em);
		height: calc(78% - .1em);
		/* border-left: .1em solid;
		border-top: .1em solid;
		border-right: .1em solid;
		border-bottom: .1em solid transparent; */
		border-radius: 50%;
		background-color: #41555d;
		border-color: #7192a0;
		opacity: 0;
	}
	.gauge .needle {
		transform: rotate(calc(295deg* calc(var(--gauge-value, 0deg) / 100) - 55deg));
		position: relative;
		width: 22vw;
		height: 5%;
		margin-bottom: -5%;
		background: linear-gradient(90deg, rgba(2, 0, 36, 0) 0, rgba(0, 0, 0, 0) 2%, #f2f2f2 2%, #f2f2f2 40%, rgba(0, 0, 0, 0) 50%);
	}

	.gauge .needle::after {
		content: '';
		position: absolute;
		width: 10rpx;
		height: 0rpx;
		border: 0.45rem solid;
		border-color: transparent rgb(255, 255, 255) transparent transparent;
		transform: translate(-80%,-15%);
	}
	.gauge .labels {
		position: absolute;
		width: 45vw;
		height: 45vw;
		z-index: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.gauge .labels .value-label {
		position: absolute;
		bottom: 8%;
		width: 10%;
		height: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 30rpx;
	}
	.gauge .labels .value-label .gauge-display-value-active{
	  color: #FF5050;
	  margin-right: 5rpx;
	}
	.gauge .labels .value-label .gauge-display-value{
	  color: #00FFFF;
	  margin-left: 5rpx;
	}
	.guide-x,
	.guide-y {
		background-color: orange;
		visibility: visible;
		position: absolute;
		left: 50%;
		top: 0;
		width: 1rpx;
		height: 100%
	}
	.guide-y {
		left: 0;
		top: 50%;
		width: 100%;
		height: 1rpx
	}
	.tithe{
	  font-size: 20rpx;
	}
	.titnum{
	    text-align: center;
	    position: absolute;
	    top: -12rpx;
	    left: 55rpx;
	    color: #f2f2f2;
	}
	.titname{
	    position: absolute;
	    font-size: 30rpx;
	    bottom: 0;
	    left: 30%;
	}
	.titnames{
	    position: absolute;
	    font-size: 30rpx;
	    bottom: 0;
	    right: 30%;
	}
</style>