<style scoped>
.item {
    height: 40px;
    line-height: 40px;
}

.item:hover {
    background: #d9d9d9;
}
.item-icon {
    margin-left: 20px;
    width: 40px;
    height: 40px;
}
.item-data {
    display: inline-block;
}
.item-operation {
    float: right;
    margin-right: 15px;
    height: 35px;
    width: 35px;
    line-height: 40px;
}
</style>
<template>
    <div class="treenode">
        <div class="item" @click="toggle" :style="{paddingLeft: depth * 20 +  'px'}">
            <Icon class="item-icon" :type="iconType"></Icon>
            <div class="item-data">{{treedata.title}}</div>
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

            <Modal v-model="editModal" @on-ok="editOk"
                   @on-cancel="editCancel">
            <Input v-model="editVal" :placeholder="treedata.title" style="width: 300px"></Input>
            </Modal>

            <Modal v-model="addModal" @on-ok="addOk"
                   @on-cancel="addCancel">
            <Input v-model="addVal" placeholder="add new node" style="width: 300px"></Input>
            </Modal>
        </div>
        <treenode @deleteData='deleteData' v-show='isfold' v-for="item in treedata.children" :treedata="item" :depth=depth+1></treenode>
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
            showMenu: false,
            editModal: false,
            addModal: false,
            editVal: '',
            addVal: ''
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
            if (name == 'add') {
                this.addModal = true;

            } else if (name == 'edit') {
                this.editModal = true;
            } else if (name == 'delete') {
                this.$emit('deleteData', this.treedata.title);
            }
        },
        deleteData(delData) {
            var vx = this;
            this.treedata.children.forEach((item, index) => {
                if(item.title == delData) {
                    console.log(vx.treedata.children);
                    vx.treedata.children.splice(index, 1);
                }
            })

        },
        editOk() {
            this.treedata.title = this.editVal;
        },
        editCancel() {

        },
        addOk() {
            if(this.treedata.children) {
                this.treedata.children.push({'title': this.addVal});
            } else {
                this.treedata.children = [];
                this.treedata.children.push({'title': this.addVal});
            }
        },
        addCancel() {

        }
    },
    mounted: function() {

    }
}
</script>
