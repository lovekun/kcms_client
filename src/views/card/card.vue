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
    name: 'card',
    props: {
        hover: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        card() {
            var card_hover = this.hover ? 'card-hover' : '';
            return `card ${card_hover}`;
        }
    },
    mounted: function() {
    }
}
</script>
