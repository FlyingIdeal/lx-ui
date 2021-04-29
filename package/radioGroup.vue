<template>
	<div>
		<slot></slot>
	</div>
</template>

<script>

export default {
	name: 'LxRadioGroup',
	props: {
		// group接收value的值
		// 触发当前组件的input事件
		value: null
	},
	provide() {
		return {
			RadioGroup: this
		}
	}
}
</script>

<style>

</style>
