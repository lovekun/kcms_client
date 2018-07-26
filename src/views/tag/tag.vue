<style scoped lang="less">
@import "./tag.less";
</style>
<template>
    <div class="tag">
        <div style="display: inline-block;line-height: 40px;width: 40px;float:left;">
            <Button type="text" size="default">
                <Icon type="chevron-left"></Icon>
            </Button>
        </div>
        <div style="display: inline-block;line-height: 40px;width: 1006px;">
            <Tag type="dot" @click.native="tagClick(item)" v-for="item in tagList" :key="item" :name="item" :closable="item === 'index' ? false : true" @on-close="handleClose(item)">{{ item }}</Tag>
        </div>
        <Dropdown style="width: 40px;float:right;margin-right: 40px" placement="bottom">
        <Button type="text" size="default">
            <Icon type="ios-close-empty" size="30"></Icon>
        </Button>
        <DropdownMenu slot="list">
        <DropdownItem>关闭其他</DropdownItem>
        <DropdownItem>关闭所有</DropdownItem>
        </DropdownMenu>
        </Dropdown>
        <div style="display: inline-block;line-height: 40px;width: 40px;float:right;">
            <Button type="text" size="default">
                <Icon type="chevron-right"></Icon>
            </Button>
        </div>
    </div>
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
