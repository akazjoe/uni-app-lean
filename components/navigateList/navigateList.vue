<template>
	<view class="list-box">
		<block v-for="(item, index) in list" :key="index">
			<navigator
			  open-type="navigate"
			  hover-class='none'
			  :url="item.url"
			  class="nav-list-item"
			  :style="{ backgroundColor: item.color }"
			>
				<view class="icon">
					<view :class="['tn-icon-' + item.icon]" ></view>
				</view>
				<view class="nav-msg-box">
					<view class="nav-link">
						<view >{{ item.title }}</view>
					</view>
					<view class="nav-msg">
						{{ item.msg }}
					</view>
				</view>
			</navigator>
		</block>
	</view>
</template>

<script>
	export default {
		name: 'navigateList',
		props: {
			list: {
				type: [Array, Object],
				required: true
			},
		},
	}
</script>

<style>
.list-box{
	width: 100%;
	height: auto;
	border-radius: 15px;
}

.nav-list-item{
	width: 100%;
	height: 60px;
	border-radius: 15px;
	margin: 12px auto;
	padding: 10px 0px;
	color: #fff;
	display: flex;
	filter: brightness(120%);
	animation: boxShadow 5s linear infinite;
}
.nav-msg-box{
	width: auto;
	height: 40px;
	margin-top: 5px;
	margin-left: 2px;
}
.icon{
	font-size: 60px;
}
.nav-msg{
	margin: 2px auto;
	font-size: 12px;
	margin-right: 10px;
}
.color{
	background-color: #2486d8;
	color: #fff;
}
@keyframes boxShadow {
	0% {
		box-shadow: 1px 2px 2px #c3c3c3;
	}
	50%{
		box-shadow: 3px 8px 15px #616161;
	}
	100%{
		box-shadow: 1px 2px 2px #d8d8d8;
	}
}

/* @keyframes colorAnime {
	0% {
		background-color: rgba(1,190,255);
	}
	25%{
		background-color:  rgba(108, 255, 55);
	}
	75%{
		background-color:  rgba(255, 170, 255);
	}
	100%{
		background-color:  rgba(0, 251, 251);
	}
} */
</style>
