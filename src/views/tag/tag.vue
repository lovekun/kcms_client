<style scoped lang="less">
@import "./tag.less";
</style>
<template>
    <div class="tag">
        <Dropdown class="tag-close" placement="bottom-start" @on-click="close">
        <Button type="text" size="default">
            <Icon type="ios-close-empty" size="30"></Icon>
        </Button>
        <DropdownMenu slot="list">
        <DropdownItem name="others">关闭其他</DropdownItem>
        <DropdownItem name="all">关闭所有</DropdownItem>
        </DropdownMenu>
        </Dropdown>

        <!--
            <div class="tag-left">
            <Button type="text" size="default">
            <Icon type="chevron-left"></Icon>
            </Button>
            </div>
        -->
        <div class="tag-bar">
            <Tag color="blue" type="dot" @click.native="tagClick(item)" v-for="item in tagList" :key="item" :name="item" :closable="item === 'index' ? false : true" @on-close="handleClose(item)">{{ item }}</Tag>
        </div>
        <!--
            <div class="tag-right">
            <Button type="text" size="default">
            <Icon type="chevron-right"></Icon>
            </Button>
            </div>
        -->

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
        },
        close(name) {
            console.log(name);
            if(name == 'others') {
                this.$store.commit('removeOtherTagList', this.$router.currentRoute.name);
            } else if(name == 'all') {
                this.$store.commit('removeAllTagList');
                this.$router.push({
                    name: 'index'
                });
            }
        }
    }
}
</script>
