<style scoped lang="less">
    @import "~@/views/showpage/treeShow.less";

</style>
<template>
    <div class="treeshow">
        <Row class="treeshow-row" :gutter=16>
        <Col class="treeshow-row-col1" span="8">
        <card class="treeshow-row-col1-card" :hover=true>
        <p>树形组件</p>
        <p>左侧为自定义树形组件</p>
        <p>右侧为渲染函数写的树形组件</p>
        </card>
        </Col>
        <Col class="treeshow-row-col2" span="8">
        <Card class="treeshow-row-col2-card" :bordered="false">
        <tree0></tree0>
        </Card>
        </Col>
        <Col class="treeshow-row-col3" span="8">
        <card class="treeshow-row-col3-card" style="height: 100%;">
        <tree1></tree1>
        </card>
        </Col>
        </Row>
    </div>
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
