<template>
	<view class="content">
		<input value="" type="text">
		<ul>
			<li @tap="add" v-for="(item, index) in list" :key="index">
				{{list}}
			</li>
		</ul>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				list: ['1', '2', '3', '4']
			}
		},
		methods: {
			add(e) {
				console.log(e)
			}
		}
	}
</script>

<style>
</style>
