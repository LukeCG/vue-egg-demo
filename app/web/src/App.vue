<template>
	<div id="app">
		<transition name="router-fade" mode="out-in">
			<keep-alive>
					<router-view v-if="$route.meta.keepAlive"></router-view>
			</keep-alive>
		</transition>

		<transition name="router-fade" mode="out-in">
			<router-view v-if="!$route.meta.keepAlive"></router-view>
		</transition>
	</div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
	width: 750px;
	color: #666;
	font-size: 26px;
	height: 100%;
}
.router-fade-enter-active, .router-fade-leave-active {
		transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active {
		opacity: 0;
}
</style>
