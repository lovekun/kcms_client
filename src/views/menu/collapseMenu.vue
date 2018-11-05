<template>
    <Menu theme="dark" width="auto" @on-select="menuSelect">
        <Submenu name="components">
        <template slot="title">
            <Icon type="ios-analytics"></Icon>
            <span>组件</span>
        </template>
        <MenuItem class="item" v-for="menuItem in menus" :name="menuItem.name"> {{ menuItem.label }}</MenuItem>
        </Submenu>
        <Submenu name="table">
        <template slot="title">
            <Icon type="ios-analytics"></Icon>
            <span>表格</span>
        </template>
        <MenuItem class="item" v-for="tableItem in tables" :name="tableItem.name">{{ tableItem.label }}</MenuItem>
        </Submenu>
        <MenuItem name="setting">
        <Icon type="search"></Icon>
        <span>设置</span>
        </MenuItem>
        <MenuItem name="test">
        <Icon type="search"></Icon>
        <span>测试页面</span>
        </MenuItem>
    </Menu>
</template>
<script>
export default {
	name: "collapseMenu",
	data () {
		return {
			menus: [
				{
					name: "tree",
					label: "树形结构"
				},
				{
					name: "chart",
					label: "图表"
				},
				{
					name: "dragComponent",
					label: "可拖动组件"
				},
				{
					name: "markdown",
					label: "markdown编辑器"
				}
			],
			tables: [
				{
					name: "editableList",
					label: "可编辑表格"
				},
				{
					name: "horizontalScrollList",
					label: "水平滑动表格"
				},
				{
					name: "exportableList",
					label: "可导出表格"
				},
				{
					name: "multiShowList",
					label: "多种显示方式展示"
				}
			]
		};
	},
	methods: {
		menuSelect (name) {
			this.$emit("menuSelect", name);
		}
	}
};
</script>
