<style lang="less" scoped>
@import '~@/style/leftMenu.less';
</style>
<template>
    <Layout>
        <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
            <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses" @on-select="menuSelect">
                <MenuItem name="1-1">
                    <Icon type="ios-navigate"></Icon>
                    <span>树形列表</span>
                </MenuItem>
                <MenuItem name="1-2">
                    <Icon type="search"></Icon>
                    <span>滑动列表</span>
                </MenuItem>
                <MenuItem name="1-3">
                    <Icon type="settings"></Icon>
                    <span>基本组件展示</span>
                </MenuItem>
            </Menu>
        </Sider>
        <Content v-model="isOpen" :class="toolbarClasses">
            <tree></tree>
        </Content>
        <Content v-model="isOpen1" :class="toolbarClasses1">
            <scroll></scroll>
        </Content>
        <Content v-model="isOpen2" :class="toolbarClasses2">
            <baseComponents></baseComponents>
        </Content>
    </Layout>
</template>
<script>
	import tree from '@/views/tree/tree1.vue';
    import scroll from '@/views/list/scroll.vue';
    import baseComponents from '@/views/components/baseComponents.vue';
    export default {
    	name: 'leftMenu',
    	components: {
            tree,
            scroll,
            baseComponents
        },
    	data () {
            return {
                isCollapsed: true,
                isvisible: true,
                isOpen: true,
                isOpen1: true,
                isOpen2: true
            };
        },
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            },
            toolbarClasses: function () {
                return [
                    'toolbar',
                    this.isOpen ? 'collapsed-toolbar' : ''
                ]
            },
            toolbarClasses1: function () {
                return [
                    'toolbar1',
                    this.isOpen1 ? 'collapsed-toolbar1' : ''
                ]
            },
            toolbarClasses2: function () {
                return [
                    'toolbar1',
                    this.isOpen2 ? 'collapsed-toolbar2' : ''
                ]
            }
        },
        methods: {
            menuSelect(name) {
                if (name == "1-1") {
                    if(!this.isOpen1){
                        this.isOpen1 = !this.isOpen1;
                    }
                    if(!this.isOpen2){
                        this.isOpen2 = !this.isOpen2;
                    }
                    this.isOpen = !this.isOpen;
                } else if (name == "1-2") {
                    if(!this.isOpen){
                        this.isOpen = !this.isOpen;
                    }
                    if(!this.isOpen2){
                        this.isOpen2 = !this.isOpen2;
                    }
                    this.isOpen1 = !this.isOpen1;
                } else if (name == "1-3") {
                    if(!this.isOpen){
                        this.isOpen = !this.isOpen;
                    }
                    if(!this.isOpen1){
                        this.isOpen1 = !this.isOpen1;
                    }
                    this.isOpen2 = !this.isOpen2;
                }
            }
        }
    }
</script>
