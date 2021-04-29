<template>
	<div>
		<input type="text" name="" :value="value" @input="handClick">
	</div>
</template>

<script>

export default {
	name: 'LxInput',
	props: {
		value: {
			type: String,
			default: ''
		}
	},
	methods: {
		handClick(e) {
			this.$emit('input', e.target.value)
		}
	}
}
</script>

<style>

</style>
