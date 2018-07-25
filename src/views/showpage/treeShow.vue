<style scoped lang="less">
</style>
<template>
    <Row :gutter=16 style="height: 100%">
    <Col span="8" style="height: 100%;">
    <card :hover=true style="height: 100%">
    <p>树形组件</p>
    <p>左侧为自定义树形组件</p>
    <p>右侧为渲染函数写的树形组件</p>
    </card>
    </Col>
    <Col span="8" style="height: 100%;">
    <Card :bordered="false" style="height: 100%;">
    <tree0></tree0>
    </Card>
    </Col>
    <Col span="8" style="height: 100%;">
    <card style="height: 100%;">
    <tree1></tree1>
    </card>
    </Col>
    </Row>
</template>
<script>
    import tree0 from '@/views/tree/custom/tree0.vue';
    import tree1 from '@/views/tree/tree1.vue';
    import card from '@/views/card/card.vue';
    export default {
        components: {
            tree0,
            tree1,
            card
        }
    }
</script>
