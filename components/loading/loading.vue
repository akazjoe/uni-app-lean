<template>
	<view class="loading-box">
		<view class="loading-info-box">
			<view class="">
				进度条加载，用于小程序等前端场景
			</view>
			<view class="">
				可滑动进度条，获取接口数据，动态实时加载动画，需要JS进行控制
			</view>
		</view>
		<view class="slider-progress-box"  >
			<view class="progress-block" :style="{left: activedNum +'%' }" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
				<view class="progress-block-val " >{{activedNum}}</view>
			</view>
			<view class="prosess-actived prosess-actived-anime" :style="{width: displayNum+'%'}">
				<view class="prosess-actived-value ">{{displayNum}}</view>
			</view>
			<view class="scale-box">
				<view class="scale-item1" style="width:10%;"></view>
				<view class="scale-item2" style="width:20%;"></view>
				<view class="scale-item1" style="width:30%;"></view>
				<view class="scale-item2" style="width:40%;"></view>
				<view class="scale-item1" style="width:50%;"></view>
				<view class="scale-item2" style="width:60%;"></view>
				<view class="scale-item1" style="width:70%;"></view>
				<view class="scale-item2" style="width:80%;"></view>
				<view class="scale-item1" style="width:90%;"></view>
			</view>
		</view>
		<view class="slider-info-box">
			<view class="">
				纯CSS动画效果,使用到的知识点有
			</view>
			<view class="slider-info">
				<view>动画：animation</view>
				<view>滤镜：filter: blur(15px)</view>
				<view>背景：background-image: linear-gradient(to right, #4bb6ff,#87cefd, #0099ff,#4bb6ff );</view>
			</view>
		</view>
		<view class="slider"></view>
	</view>
</template>

<script>
	export default {
		name:"loading",
		data() {
			return {
				activedNum: 0,
				displayNum: 0,
				adjustmsg: 0,
				right: 0,
				startX: 0,
				startY: 0,
				slider: null,
				blockWidth: 0,
				prosessTimer: null,
			};
		},
		onLoad(options) {
		},
		methods: {
			handleTouchStart(e){
				this.$set(this, 'startX', e.touches[0].clientX);
				this.$set(this, 'startY', e.touches[0].clientY);
			},
			handleTouchMove (e) {
				uni.createSelectorQuery()
				  .select('.progress-block')
				  .fields({ node: true, size: true })
				  .exec((res) => {
				    const element = res[0]; // 访问DOM元素
					this.$set(this, 'blockWidth', element.width);
				});
				uni.createSelectorQuery()
				  .select('.slider-progress-box')
				  .fields({ node: true, size: true })
				  .exec((res) => {
				    const element = res[0]; // 访问DOM元素
					let slider = {};
					slider.width = element.width;
					slider.height = element.height;
					this.$set(this, 'slider', slider);
				});
				
				let offsetX = e.touches[0].clientX - this.startX;
				if( this.right + offsetX <= this.slider.width &&   this.right + offsetX >= 0 ){
		
					this.right = this.right + offsetX;
		
					let activedNum =  Math.round(( this.right / this.slider.width ).toFixed(2) * 100);
					if( activedNum <= 100 && activedNum >= 0 ){
						this.$set(this, 'activedNum', activedNum);
					}
				}
				this.$set(this, 'startX', e.touches[0].clientX);
			},
			handleTouchEnd (e) {
				// 触摸结束事件处理函数
				let _this = this;
				setTimeout( function(){
					let prosess = _this.activedNum;
					let displayNum = _this.displayNum
					if( prosess>displayNum ){
						_this.prosessTimer = setInterval(() => {
							_this.$set(_this, 'displayNum', displayNum);
							displayNum = displayNum + 1;
							if( displayNum>prosess ){
								clearInterval(_this.prosessTimer); // 清除定时器
								_this.prosessTimer = null;
							}
						}, 100);
							
					}else{
						_this.prosessTimer = setInterval(() => {
							_this.$set(_this, 'displayNum', displayNum);
							displayNum = displayNum - 1;
							if( displayNum<prosess ){
								clearInterval(_this.prosessTimer); // 清除定时器
								_this.prosessTimer = null;
							}
						}, 100);
					}
				},600)
			},
			// 进度条加载动画
			rightProsessCharge (  ) {
				let prosess = this.activedNum;
				let displayNum = this.displayNum
				if( prosess>displayNum ){
					this.prosessTimer = setInterval(() => {
						displayNum = displayNum + 1;
						if( displayNum>prosess ){
							clearInterval(_this.prosessTimer); // 清除定时器
							this.prosessTimer = null;
						}
					}, 100);
		
				}else{
					this.prosessTimer = setInterval(() => {
						displayNum = displayNum - 1;
						if( displayNum<prosess ){
							clearInterval(this.prosessTimer); // 清除定时器
							this.prosessTimer = null;
						}
					}, 100);
				}
			},
		}
	}
</script>

<style>
.loading-box{
	width: 100%;
	height: 380px;
	padding: 10px;
	display: flex;
	justify-content: center;
	/* align-items: center; */
}
.slider-progress-box{
    position: relative;
    border: 1rpx solid #aaeaff;
    background-color: #fff;
    border-radius: 8px;
    width: 80%;
    height: 25px;
	top: 120px;
	
}
.loading-info-box,.slider-info-box{
	position: absolute;
	top: 20rpx;
	font-size: 26rpx;
	width: 80%;
	height: 80rpx;
	line-height: 50rpx;
}
.slider-info-box{
	top: 380rpx;
	height: auot;
}
.slider-info{
	width: 100%;
	text-align: left;
}
.slider-info view{
	background-color: #0099ff30;
	padding: 10rpx;
	border-radius: 10rpx;
	margin-bottom: 10rpx;
}
.progress-block{
    position: absolute;
    top: -6px;
    width: 15px;
    height: 35px;
    background-color: #fff;
    z-index: 3;
    border-radius: 5px;
    box-shadow: 2px 3px 3px #222f33;
}
.progress-block-val{
    position: absolute;
    font-size: 15px;
    top: -32px;
    left: -16px;
    width: 45px;
    height: 22px;
    line-height: 24px;
    text-align: center;
    background-color: #f0f0f0;
    border-radius: 5px;
    box-shadow: 1px 3px 10px #222f33;
    color: #4f6570;
}
.progress-block-val::after{
    content: '';
    position: absolute;
    display: inline-block;
    width: 0;
    height: 0;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-top: 10px solid #f0f0f0;
    bottom: -8.5px;
    left: 15px;
}
.prosess-actived{
    position: absolute;
    background-color: rgba(0,224,121,1);
    height: 25px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}

/* 定义渐变背景 */
.prosess-actived-anime {
    background-image: linear-gradient(to right, #4bb6ff,#87cefd, #0099ff,#4bb6ff );
    background-size: 400% 100%;
    animation: slide-out 5s linear infinite;
}
/* ::before元素用户设置外发光效果 */
.prosess-actived-anime::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -5px;
    bottom: -5px;
    left: -5px;
    right: -5px;
    border-radius: 45px;
    background: linear-gradient(to right, #4bb6ff,#87cefd, #0099ff,#4bb6ff );
    background-color: #cad3c3;
    background-size: 600% 100%;
    filter: blur(15px);
    opacity: 0;
    transition: 1s;
    animation: anime 5s linear infinite;
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
/* 定义动画 */
@keyframes slide-out {
    from {
        background-position: 100%;
    }
    to {
        background-position: 0%;
    }
}
.prosess-actived{
    background-color: #4bb6ff;
}
.prosess-actived-block{
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.full-value{
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
}
.prosess-actived-value{
    font-size: 18px;
    position: absolute;
    top: 28px;
    right: -10px;
    width: 25px;
    text-align: right;
    color: rgba(0,224,121,1);
}
.prosess-actived-value{
    color: #4bb6ff;
}
.scale-item1,.scale-item2{
    position: absolute;
    left: -3px;
    height: 13px;
    border-right: 3px solid #e5e1e6;
    z-index: 1;
    margin-top: 7px;
}
.scale-item1{
    height: 9px;
    margin-top: 8px;
}


.slider {
	position: absolute;
	width: 280px;
	height: 30px;
	border-radius: 40px;
	border: none;
	outline: none;
	color: white;
	font-size: 200px;
	font-weight: 600;
	text-align: center;
	line-height: 30px;
	letter-spacing: 4px;
	font-family: none;
	top: 380px;
	/* 渐变背景，首尾颜色要一样，以配合动画实现平滑过渡 */
	background: linear-gradient(to right,  #2486d8, #f84077, #fcd217,  #2486d8);
	/* 拉长背景宽度*/
	background-size: 600% 100%;
	animation: animeFont 5s linear infinite;
}

.slider:hover {
	animation: anime1 12s linear infinite;
}

/* 动画通过改变背景位置来改变显示出的颜色 */
@keyframes anime1 {
	0% {
		background-position: 0%;
	}

	100% {
		background-position: -600% 0;
	}
}
@keyframes animeFont {
	0% {
		filter: brightness(110%);
		color: #59ff00;
	}
	25% {
		filter: blur(1px);
		color: #00d9ff;
	}
	50% {
		filter: blur(2px);
		color: #00d9ff;
	}
	75% {
		filter: blur(1px);
		color: #00d9ff;
	}
	100% {
		filter: brightness(110%);
		color: #fffb00;
	}
}
</style>