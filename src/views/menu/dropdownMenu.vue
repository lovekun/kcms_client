<template>
    <div>
        <Dropdown transfer  placement="right-start" trigger="hover" @on-click="dropdownMenuSelect">
        <Button type="text">
            <Icon :size="20" color="white" type="ios-analytics"></Icon>
        </Button>
        <DropdownMenu slot="list" style="width: 200px;">
        <DropdownItem name='tree'>树形结构</DropdownItem>
        <DropdownItem name='list'>列表</DropdownItem>
        <DropdownItem name='chart'>图表</DropdownItem>
        <DropdownItem name='dragComponent'>可拖动组件</DropdownItem>
        <DropdownItem name='markdown'>markdown编辑器</DropdownItem>
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
