<style scoped lang="less">
.col1:hover {
    box-shadow: 2px 2px #ccc;
}
</style>
<template>
    
    <div style="padding-left: 20px; padding-right: 20px; padding-top: 20px;padding-bottom: 20px;height: 100%">
    <!-- <Row type="flex" justify="space-between" style="padding-left: 20px; padding-right: 20px;"> -->
    <Row :gutter=32 style="height: 100%">
    <Col span="8" style="height: 100%;">
    <div style="height: 100%;">
        <Card :bordered="false">
            <p slot="title">树形组件</p>
            <p>左侧为自定义树形组件</p>
            <p>右侧为渲染函数写的树形组件</p>
        </Card>
    </div>
    </Col>
    <Col span="8" style="height: 100%;">
    <div style="height: 100%; border: 1px solid #eee; overflow: scroll;" class="col1">
        <Card style="height: 100%;">
        <tree0></tree0>
        </Card>
    </div>
    </Col>
    <Col span="8" style="height: 100%;">
    <div style="height: 100%;">
        <Card style="height: 100%;">
        <tree1></tree1>
        </Card>
    </div>
    </Col>
    </Row>
    </div>
    
    
</template>


<script>
import tree0 from '@/views/tree/custom/tree0.vue';
import tree1 from '@/views/tree/tree1.vue';
export default {
    components: {
        tree0,
        tree1
    }
}
</script>
