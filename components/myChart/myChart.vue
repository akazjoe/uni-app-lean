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
			minusRange: function(e) {
			        wx.vibrateShort() // 触发手机振动
			        let gaugeValue = this.data.gaugeValue-1;
			        if( gaugeValue >= 0 ){
			            this.setData({
			                gaugeValue:gaugeValue,
			                gaugeDisplayValue:gaugeValue,
			            })
			            this.setRingMark(gaugeValue,'minus');
			            clearTimeout(this.data.setTimer);
			            this.data.setTimer = setTimeout(()=>{
			                this.openLoading();
			                setTimeout(()=>{
			                    this.setRingDisplay(gaugeValue,'minus');
			                },3000);
			            },1000);
			        }
			    },
			    plusRange: function(e) {
			        wx.vibrateShort() // 触发手机振动
			        let gaugeValue = this.data.gaugeValue+1;
			        if( gaugeValue <= 100 ){
			            this.setData({
			                gaugeValue:gaugeValue,
			                gaugeDisplayValue:gaugeValue,
			            })
			            this.setRingMark(gaugeValue,'plus');
			        }
			        clearTimeout(this.data.setTimer);
			        this.data.setTimer = setTimeout(()=>{
			            this.openLoading();
			            setTimeout(()=>{
			                this.setRingDisplay(gaugeValue,'plus');
			            },3000);
			        },1000);
			    },
			    /**
			     * updateGaugeValue int 修改值
			     * type string 'active' 活动值 'display' 目标值
			     * mode string 'minus'|'plus'
			     **/
			    setRingMark(updateGaugeValue,mode) {
			        let titheBoxActive = this.data.titheBoxActive
			        titheBoxActive.forEach((item,index) => {
			            if( mode == 'minus' ){
			                item.active = 1;
			                if (item.tick >= updateGaugeValue) {
			                    item.active = 0;
			                }
			            }else if( mode == 'plus' ){
			                item.active = 0;
			                if (item.tick <= updateGaugeValue) {
			                    item.active = 1;
			                }
			            }
			        });
			        console.log(updateGaugeValue,'nummmmm')
			        this.setData({
			            titheBoxActive:titheBoxActive
			        })
			    },
			    setRingDisplay(updateGaugeValue,mode){
			        let titheBoxActive = this.data.titheBoxActive;
			        let index = updateGaugeValue,num=0,minus = this.data.gaugeDisplayValueActive;
			        let displayTimer = setInterval(()=>{
			            index--,num++,minus--;
			            titheBoxActive.forEach(item => {
			                if( mode == 'minus' ){
			                    if( minus>=this.data.gaugeValue ){
			                        item.display = 1;
			                        if (item.tick > minus || minus == 0) {
			                            item.display = 0;
			                        }
			                    }
			                }else if( mode == 'plus' ){
			                    item.display = 0;
			                    if (item.tick <= num) {
			                        item.display = 1;
			                    }
			                }
			            });
			            if( mode == 'minus' ){
			                if(updateGaugeValue<=this.data.gaugeValue){
			                    this.setData({
			                        titheBoxActive:titheBoxActive,
			                        gaugeDisplayValueActive:updateGaugeValue,
			                    })
			                }
			                if( minus==updateGaugeValue ){
			                    clearInterval(displayTimer)
			                }
			            }else if( mode=='plus' ){
			                if(this.data.gaugeDisplayValueActive<=num && num<=100){
			                    this.setData({
			                        titheBoxActive:titheBoxActive,
			                        gaugeDisplayValueActive:num,
			                    })
			                }
			                if( index==0 ){
			                    this.setData({
			                        gaugeDisplayValueActive:num,
			                    })
			                    clearInterval(displayTimer)
			                }
			            }
			        },50)
			    },
			    minusLongPress (e) {
			        // 长按事件处理函数
			        this.data.longPressTimer = setInterval(() => {
			            this.minusRange();
			        }, 100); // 每隔100毫秒触发一次
			    },
			    minusTouchEnd (e) {
			        // 触摸结束事件处理函数
			        if (this.data.longPressTimer) {
			            clearInterval(this.data.longPressTimer); // 清除定时器
			            this.data.longPressTimer = null;
			        }
			    },
			    plusLongPress (e) {
			        // 长按事件处理函数
			        this.data.longPressTimer = setInterval(() => {
			            this.plusRange();
			        }, 100); // 每隔100毫秒触发一次
			    },
			    plusTouchEnd (e) {
			        // 触摸结束事件处理函数
			        if (this.data.longPressTimer) {
			            clearInterval(this.data.longPressTimer); // 清除定时器
			            this.data.longPressTimer = null;
			        }
			    },
			    movePointer(e){
			        if( e.touches[0].pageX>=this.data.box.left && 
			            e.touches[0].pageX<=this.data.box.right &&
			            e.touches[0].pageY>=this.data.box.top && 
			            e.touches[0].pageY<=this.data.box.bottom
			        ){
			            wx.vibrateShort() // 触发手机振动
			            this.setData({
			                pressActive: 1,
			            });
			            let left = e.touches[0].pageX - this.rect.left;
			            let top = e.touches[0].pageY - this.rect.top;
			            let now_index = 0;
			            if (left <= this.rect.width_c) {
			                if (top < this.rect.height_c) {
			                    now_index = 1
			                } else {
			                    now_index = 0;
			                }
			            } else {
			                if (top < this.rect.height_c) {
			                    now_index = 2;
			                } else {
			                    now_index = 3;
			                }
			            }
			            let x = Math.abs(left - this.rect.width_c);
			            let y = Math.abs(top - this.rect.height_c);
			            let z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
			            let asin = 0;
			            if (now_index == 0 || now_index == 2) {
			                asin = Math.asin(x / z);
			            } else {
			                asin = Math.asin(y / z);
			            }
			            let angle = Number((asin * 180 / Math.PI).toFixed(2)) + (now_index * 90);
			            this.setData({
			                angle: angle
			            })
			            if(angle>=20&&angle<=330){
			                let mode = 'plus';
			                if( this.data.gaugeValue <= this.data.gaugeDisplayValueActive ){
			                    mode = 'minus';
			                }   
			                let angleValue = Math.floor(angle / 3);
			                if( angle < 30 ){
			                    angleValue = Math.floor(angle-20);
			                }
			                // 可用角度为300，在300角度平均分布100个值；
			                if( angleValue <= 100 && angleValue >= 0 ){
			                    this.setData({
			                        gaugeValue:angleValue,
			                        gaugeDisplayValue:angleValue,
			                        mode: mode
			                    })
			                    this.setRingMark(angleValue,mode);
			                }
			            }
			        }
			    },
			    pressTouchEnd(e){
			        if( !(this.data.gaugeValue==0 && this.data.mode=='plus') ){
			            clearTimeout(this.data.setTimer);
			            this.data.setTimer = setTimeout(()=>{
			                this.openLoading();
			                setTimeout(()=>{
			                    this.setRingDisplay(this.data.gaugeValue,this.data.mode);
			                },3000);
			            },1000);
			        }
			        this.setData({
			            pressActive: 0,
			        });
			    },
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
