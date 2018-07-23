<template>
    <div>
        <Dropdown transfer  placement="right-start" trigger="hover" @on-click="dropdownMenuSelect">
        <Button type="text">
            <Icon :size="20" color="white" type="ios-analytics"></Icon>
        </Button>
        <DropdownMenu slot="list" style="width: 200px;">
        <DropdownItem name='tree'v-for="menuItem in menus" :name="menuItem.name">{{ menuItem.label }}</DropdownItem>
        </DropdownMenu>
        </Dropdown>
        <Dropdown transfer  placement="right-start" trigger="hover" @on-click="dropdownMenuSelect">
        <Button type="text">
            <Icon :size="20" color="white" type="ios-analytics"></Icon>
        </Button>
        <DropdownMenu slot="list" style="width: 200px;">
        <DropdownItem name='tree'v-for="tableItem in tables" :name="tableItem.name">{{ tableItem.label }}</DropdownItem>
        </DropdownMenu>
        </Dropdown>
        <Button class="menu-collapsed-item" type="text" @click="settingBtnClick">
            <Icon :size="25" color="white" type="gear-a"></Icon>
        </Button>
    </div>
</template>
<script>
export default {
    name: 'dropdownMenu',
    data() {
        return {
            menus: [
                {
                    name: 'tree',
                    label: '树形结构'
                },
                {
                    name: 'chart',
                    label: '图表'
                },
                {
                    name: 'dragComponent',
                    label: '可拖动组件'
                },
                {
                    name: 'markdown',
                    label: 'markdown编辑器'
                }
            ],
            tables: [
                {
                    name: 'editableList',
                    label: '可编辑表格'
                },
                {
                    name: 'horizontalScrollList',
                    label: '水平滑动表格'
                },
                {
                    name: 'exportableList',
                    label: '可导出表格'
                },
                {
                    name: 'multiShowList',
                    label: '多种显示方式展示'
                }
            ]
        }
    },
    methods: {
        dropdownMenuSelect(name) {
            this.$emit('dropdownMenuSelect', name)
        },
        settingBtnClick() {
            this.$emit('settingBtnClick');
        }
    }
}
</script>
