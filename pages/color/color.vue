<template>
	<view>
		<!-- 色盘 start-->
		<view class="box" >
		<view v-for="(item,index) in 16" :key="index" :class="'colorwheel-box colorwheel-' + (index+1)"></view>
		</view>
		<!-- 色盘 end-->
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
				colorList: [{
				    name: '红色',
				    color: 'red',
				    value: {
				      normal: '#E83A30',
				      dark: '#BA2E26',
				      disabled: '#F39C97',
				      light: '#FAD8D6'
				    }
				  },
				  {
				    name: '紫红色',
				    color: 'purplered',
				    value: {
				      normal: '#E72F8C',
				      dark: '#B9266F',
				      disabled: '#F397C5',
				      light: '#FAD5E8'
				    }
				  },
				  {
				    name: '紫色',
				    color: 'purple',
				    value: {
				      normal: '#892FE8',
				      dark: '#6E26BA',
				      disabled: '#C497F3',
				      light: '#E7D5FA'
				    }
				  },
				  {
				    name: '蓝紫色',
				    color: 'bluepurple',
				    value: {
				      normal: '#5F4FD9',
				      dark: '#4C3FAE',
				      disabled: '#AFA7EC',
				      light: '#DFDCF7'
				    }
				  },
				  {
				    name: '海蓝色',
				    color: 'aquablue',
				    value: {
				      normal: '#3646FF',
				      dark: '#2B38CC',
				      disabled: '#9AA2FF',
				      light: '#D7DAFF'
				    }
				  },
				  {
				    name: '蓝色',
				    color: 'blue',
				    value: {
				      normal: '#3D7EFF',
				      dark: '#3165CC',
				      disabled: '#9EBEFF',
				      light: '#D8E5FF'
				    }
				  },
				  {
				    name: '靛蓝色',
				    color: 'indigo',
				    value: {
				      normal: '#31C9E8',
				      dark: '#27A1BA',
				      disabled: '#98E4F3',
				      light: '#D6F4FA'
				    }
				  },
				  {
				    name: '青色',
				    color: 'cyan',
				    value: {
				      normal: '#2DE8BD',
				      dark: '#24BA97',
				      disabled: '#96F3DE',
				      light: '#D5FAF2'
				    }
				  },
				  {
				    name: '青绿色',
				    color: 'teal',
				    value: {
				      normal: '#24F083',
				      dark: '#1DC069',
				      disabled: '#91F7C1',
				      light: '#D3FCE6'
				    }
				  },
				  {
				    name: '绿色',
				    color: 'green',
				    value: {
				      normal: '#31E749',
				      dark: '#27B93A',
				      disabled: '#98F3A4',
				      light: '#D6FADB'
				    }
				  },
				  {
				    name: '黄绿色',
				    color: 'yellowgreen',
				    value: {
				      normal: '#A4E82F',
				      dark: '#82BA26',
				      disabled: '#D1F397',
				      light: '#EDFAD5'
				    }
				  },
				  {
				    name: '酸橙色',
				    color: 'lime',
				    value: {
				      normal: '#D5EB00',
				      dark: '#AABC00',
				      disabled: '#E9F57F',
				      light: '#F7FBCC'
				    }
				  },
				  {
				    name: '黄色',
				    color: 'yellow',
				    value: {
				      normal: '#FFF420',
				      dark: '#CCC21A',
				      disabled: '#FFF88F',
				      light: '#FFFDD2'
				    }
				  },
				  {
				    name: '橘黄色',
				    color: 'orangeyellow',
				    value: {
				      normal: '#FFCA28',
				      dark: '#CCA220',
				      disabled: '#FFE493',
				      light: '#FFF4D4'
				    }
				  },
				  {
				    name: '橙色',
				    color: 'orange',
				    value: {
				      normal: '#FFA726',
				      dark: '#CC851E',
				      disabled: '#FFD392',
				      light: '#FFEDD4'
				    }
				  },
				  {
				    name: '橘红色',
				    color: 'orangered',
				    value: {
				      normal: '#FF7043',
				      dark: '#CC5A36',
				      disabled: '#FFB7A1',
				      light: '#FFE2D9'
				    }
				  },
				  {
				    name: '棕色',
				    color: 'brown',
				    value: {
				      normal: '#914F2C',
				      dark: '#743F23',
				      disabled: '#C8A795',
				      light: '#E9DCD5'
				    }
				  },
				  {
				    name: '玄灰色',
				    color: 'grey',
				    value: {
				      normal: '#78909C',
				      dark: '#5F7E8B',
				      disabled: '#C6D1D8',
				      light: '#E4E9EC'
				    }
				  },
				  {
				    name: '灰色',
				    color: 'gray',
				    value: {
				      normal: '#AAAAAA',
				      dark: '#838383',
				      disabled: '#E6E6E6',
				      light: '#F8F7F8'
				    }
				  }
				],
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
/* 色盘 start*/
  .box{
      position: relative;
      margin: 30px auto;
      display: block;
      width: 600rpx;
      height: 600rpx;
      background: none;
	  /* border: 1px solid; */
	  animation: colorwheelAnime 12s linear infinite;
  }
  .colorwheel-box{
      position: absolute;
      width: 80%;
      height: 50%;
      left: 10%;
      bottom: 20%;
      border-radius: 100% 10rpx;
      opacity: 0.4;
  }
  @keyframes colorwheelAnime{
	  0%{
		transform: rotate(0deg);
	  }
	  100%{
	  	transform: rotate(360deg);
	  }
  }
  .colorwheel-1{
      background: #2DE8BD;
      transform: rotate(-78.75deg);
  }
  .colorwheel-2{
      background: #24F083;
      transform: rotate(-90deg);
  }
  .colorwheel-3{
      background: #31E749;
      transform: rotate(-101.25deg);
  }
  .colorwheel-4{
      background: #A4E82F;
      transform: rotate(-112.5deg);
  }
  .colorwheel-5{
      background: #D5EB00;
      transform: rotate(-123.75deg);
  }
  .colorwheel-6{
      background: #FFF420;
      transform: rotate(-135deg);
  }
  .colorwheel-7{
      background: #FFCA28;
      transform: rotate(-146.25deg);
  }
  .colorwheel-8{
      background: #FFA726;
      transform: rotate(-157.5deg);
  }
  .colorwheel-9{
      background: #FF7043;
      transform: rotate(-168.75deg);
  }
  .colorwheel-10{
      background: #E83A30;
      transform: rotate(0deg);
  }
  .colorwheel-11{
      background: #E72F8C;
      transform: rotate(-11.25deg);
  }
  .colorwheel-12{
      background: #892FE8;
      transform: rotate(-22.5deg);
  }
  .colorwheel-13{
      background: #5F4FD9;
      transform: rotate(-33.75deg);
  }
  .colorwheel-14{
      background: #3646FF;
      transform: rotate(-45deg);
  }
  .colorwheel-15{
      background: #3D7EFF;
      transform: rotate(-56.25deg);
  }
  .colorwheel-16{
      background: #31C9E8;
      transform: rotate(-67.5deg);
  }
/* 色盘 end*/
</style>
