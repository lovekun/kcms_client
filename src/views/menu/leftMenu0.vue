<style scoped lang="less">
@import "~@/style/leftMenu0.less";
</style>
<template>
    <div class="menu" :style="{width: isCollapsed ? '60px':'200px'}">
        <div class="menu-logo">
            <span>kcms</span>
        </div>
        <Menu class="menu-uncollapsed" v-show="!isCollapsed" theme="dark" width="auto" @on-select="menuSelect">
            <Submenu name="components">
            <template slot="title">
                <Icon type="ios-analytics"></Icon>
                <span>组件</span>
            </template>
            <MenuItem class="item" name="tree">树形结构</MenuItem>
            <MenuItem class="item" name="list">列表</MenuItem>
            <MenuItem class="item" name="chart">图表</MenuItem>
            <MenuItem class="item" name="dragComponent">可拖动组件</MenuItem>
            <MenuItem class="item" name="mytree">测试页面</MenuItem>
            </Submenu>
            <MenuItem name="setting">
            <Icon type="search"></Icon>
            <span>设置</span>
            </MenuItem>
        </Menu>
        <div class="menu-collapsed" v-show="isCollapsed">
            <Dropdown class="menu-collapsed-item" transfer v-show="isCollapsed" placement="right-start" trigger="hover" @on-click="dropdownMenuSelect">
            <Button type="text">
                <Icon :size="20" color="white" type="ios-analytics"></Icon>
            </Button>
            <DropdownMenu slot="list" style="width: 200px;">
            <DropdownItem name='tree'>树形结构</DropdownItem>
            <DropdownItem name='list'>列表</DropdownItem>
            <DropdownItem name='chart'>图表</DropdownItem>
            <DropdownItem name='dragComponent'>可拖动组件</DropdownItem>
            </DropdownMenu>
            </Dropdown>
            <Button class="menu-collapsed-item" type="text" @click="settingBtnClick">
                <Icon :size="25" color="white" type="gear-a"></Icon>
            </Button>
        </div> 
    </div>
</template>

<script>
export default {
    name: 'leftMenu0',
    data () {
        return {
            // isCollapsed: false
        }
    },
    props: {
        isCollapsed: {
            type: Boolean
        }
    },
    methods: {
        menuSelect(name) {
            if(this.$store.state.tagList.indexOf(name) === -1) {
                this.$store.commit('updateTagList', name);
            }
            this.$router.push({name: name});
        },
        dropdownMenuSelect(name) {
            if(name === 'logout') {
                this.$router.push({name: 'login'});
            } else {
                if(this.$store.state.tagList.indexOf(name) === -1) {
                    this.$store.commit('updateTagList', name);
                }
                this.$router.push({name: name});
            }
        },
        settingBtnClick() {
            if(this.$store.state.tagList.indexOf('setting') === -1) {
                this.$store.commit('updateTagList', 'setting');
            }
            this.$router.push({name: 'setting'});
        }
    }
}
</script>
