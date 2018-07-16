<style scoped>
.item {
    height: 40px;
    line-height: 40px;
    border: 1px solid #f0f0f0;
    margin-left: this.depth * 20 + 'px';
}
.item:hover {
    background: yellow;
}
.item-icon {
    margin-left: 20px;
    width: 40px;
    height: 40px;
}
.item-data {
}
.item-operation {
    float: right;
    margin-right: 5px;
    height: 40px;
    width: 40px;
    line-height: 40px;
}
.item-menu {
    width: 40px;
    height: 60px;
}
</style>
<template>
    <div>
        <!--
            <render class="test" :data="treedata.title" :depth=depth @click='toggle'></render>
        -->
        <div class="item" @click="toggle" :style="{marginLeft: depth * 20 +  'px'}">
            <Icon class="item-icon" :type="iconType"></Icon>
            <span class="item-data">{{treedata.title}}</span>
            <Dropdown class="item-operation" transfer @on-click="toggleOperation">
            <Button type="text">
                <Icon type="ios-gear-outline" size=24></Icon>
            </Button>
            <DropdownMenu slot="list" placement="bottom-end">
            <DropdownItem name="add">add</DropdownItem>
            <DropdownItem name="edit">edit</DropdownItem>
            <DropdownItem name="delete">delete</DropdownItem>
            </DropdownMenu>
            </Dropdown>
            <!--
                <Dropdown>
                <Icon class="item-operation" size=24 type="ios-gear-outline" @click.stop="openOperation"></Icon>
                <DropdownMenu transfer placement="bottom" style="display:inline-block">
                <DropdownItem>add</DropdownItem>
                <DropdownItem>edit</DropdownItem>
                <DropdownItem>delete</DropdownItem>
                </DropdownMenu>
                </Dropdown>
            -->
        </div>
        <treenode v-show='isfold' v-for="item in treedata.children" :treedata="item" :depth=depth+1></treenode>
    </div>
</template>
<script>
import render from './render.js';
export default {
    name: 'treenode',
    components: {render},
    data() {
        return {
            isfold: false,
            iconType: 'chevron-right',
            showMenu: false
        }
    },
    props: {
        treedata: {
            type: Object
        },
        depth: {
            type: Number
        }
    },
    computed: {
    },
    methods: {
        toggle() {
            this.isfold = !this.isfold;
            if(this.isfold) {
                this.iconType = 'chevron-down';
            } else {
                this.iconType = 'chevron-right';
            }
        },
        openOperation() {
            this.showMenu = !this.showMenu;
        },
        toggleOperation(name) {
            if (name = 'add') {

            } else if (name = 'edit') {

            } else if (name = 'delete') {

            }
        }
    },
    mounted: function() {

    }
}
</script>
