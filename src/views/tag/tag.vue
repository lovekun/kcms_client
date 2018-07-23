<style scoped lang="less">
@import "./tag.less";
</style>
<template>
    <Row class="tag">
        <Col span="20" class="tag-item">
            <Tag type="dot" @click.native="tagClick(item)" v-for="item in tagList" :key="item" :name="item" :closable="item === 'index' ? false : true" @on-close="handleClose(item)">{{ item }}</Tag>
        </Col>
        <Col span="2" class="tag-close"><Button type="text" @click="closeOthers">关闭其他</Button></Col>
        <Col span="2" class="tag-close"><Button type="text" class="tag-close-all" @click="closeAll">关闭所有</Button></Col>
    </Row>
</template>
<script>
export default {
    name: 'tag',
    computed: {
        tagList() {
            return this.$store.state.tagList;
        }
    },
    methods: {
        handleClose(name) {
            this.$store.commit('removeTagList', name);
            this.$router.push({name: this.$store.state.tagList[this.$store.state.tagList.length - 1]});
        },
        tagClick(name) {
            this.$router.push({
                name: name
            });
        },
        closeOthers() {
            this.$store.commit('removeOtherTagList', this.$router.currentRoute.name);
        },
        closeAll() {
            this.$store.commit('removeAllTagList');
            this.$router.push({
                name: 'index'
            });
        }
    }
}
</script>
