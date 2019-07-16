<style scoped lang="less">
@import "./card.less";
</style>
<template>
    <div :class="card">
        <slot></slot> 
    </div>
</template>
<script>
export default {
	name: "card",
	props: {
		hover: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		card () {
			let cardHover = this.hover ? "card-hover" : "";
			return `card ${cardHover}`;
		}
	},
	mounted: function () {
	}
};
</script>
