<template>
	<div class="home">
		<div class="wallpaper"></div>
		<!--顶部标题展示-->
		<div class="head">
			<van-nav-bar title="主页"/>
		</div>
		<!--内容区-->
		<div class="content">
			<!--加载中-->
			<div class="loading-content flex-center" v-if="skeletonShow">
				<van-loading size="45px" vertical>加载中...</van-loading>
			</div>
			<!--列表内容-->
			<div class="real-content" v-else>
				<div class="no-data" v-if="lists.length === 0">
					<van-empty description="暂无日志"/>
					<van-button hairline type="info" round>添加日志</van-button>
				</div>
				<div class="lists-content" v-else>
					<!--日志块-->
					<div class="block-content" v-for="(item,index) in 10" :key="index">
						<div class="lists-block"></div>
					</div>
				</div>
			</div>
		</div>
		<!--底部导航-->
		<div class="bottom-nav">
			<van-tabbar v-model="active">
				<van-tabbar-item icon="home-o">主页</van-tabbar-item>
				<van-tabbar-item icon="friends-o">联系人</van-tabbar-item>
				<van-tabbar-item icon="setting-o">管理</van-tabbar-item>
			</van-tabbar>
		</div>
	</div>
</template>

<script>

	export default {
		name: "index",
		data() {
			return {
				active: 0, //导航默认激活
				skeletonShow: true, //骨架屏显示
				lists: [], //日志列表
			}
		},
		methods: {
			closeSkeleton() {
				setTimeout(() => {
					this.skeletonShow = false;
				}, 1000)
			}
		},
		filters: {},
		mounted() {
			this.closeSkeleton();
		}
	}
</script>

<style lang="scss">
	@import "../../assets/css/public.scss";
	
	.home {
		position: relative;
		overflow: hidden;
		
		.wallpaper {
			background-color: #f9f9f9;
			width: 100%;
			height: 100%;
			position: fixed;
			z-index: -1;
		}
		
		.head {
			width: 100%;
			position: fixed;
			z-index: 99;
		}
		
		.content {
			margin-top: 8vh;
			margin-bottom: 10vh;
			position: relative;
			
			.loading-content {
				width: 100%;
				height: 100%;
			}
			
			.bottom-nav {
				position: absolute;
				bottom: 0;
			}
			
			.real-content {
				overflow: auto;
				
				.no-data {
					text-align: center;
				}
				
				.lists-content {
					.block-content {
						padding: 0 15px;
						position: relative;
						height: 80px;
						margin-bottom: 15px;
						
						.lists-block {
							height: 80px;
							width: calc(100% - 30px);
							background-color: #ffffff;
							border-radius: 8px;
							box-shadow: 0 0 10px rgba(218, 218, 218, 0.65);
							position: absolute;
							animation: slideFromLeft 0.7s ease-in-out;
						}
					}
				}
			}
		}
		
		
		.flex-center {
			display: flex;
			align-items: center;
			justify-content: center;
		}
		
		@keyframes slideFromLeft {
			0% {
				left: -100%;
			}
			99% {
				left: 15px;
			}
			100% {
				left: initial;
			}
		}
		@-webkit-keyframes slideFromLeft {
			0% {
				left: -100%;
			}
			99% {
				left: 15px;
			}
			100% {
				left: initial;
			}
		}
	}
</style>
