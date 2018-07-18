<template>
    <Menu theme="dark" width="auto" @on-select="menuSelect">
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
</template>
<script>
export default {
    name: 'collapseMenu',
    methods: {
        menuSelect(name) {
            this.$emit('menuSelect', name);
        }
    }
}
</script>
