<style scoped lang="less">
@import "~@/style/navigate0.less";
</style>

<template>
    <div>
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
        <div class="top" :style="{paddingLeft: isCollapsed?'60px':'200px'}">
            <div class="top-collapse-toggle">
                <Icon class="top-collapse-toggle-icon" type="navicon-round" :style="{transform: 'rotate(' + (isCollapsed ? '0' : '90') + 'deg'}" @click="collapseMenu"></Icon>
            </div>
            <Breadcrumb class="top-breadcrumb">
            <BreadcrumbItem v-for="item in currentPath" :to="toPath"><span>{{item.title}}</span></BreadcrumbItem>
            </Breadcrumb>
            <div class="top-user">
                <Dropdown class="top-user-menu" transfer placement="bottom-start" trigger="hover" @on-click="dropdownMenuSelect">
                <Button type="text">
                    <Icon :size="20" color="white" type="android-person"></Icon>
                    <span>admin</span>
                </Button>
                <DropdownMenu class="top-user-menu-item" slot="list">
                <DropdownItem name="userCenter">个人中心</DropdownItem>
                <DropdownItem name="logout">退出</DropdownItem>
                </DropdownMenu>
                </Dropdown>
            </div>
        </div>
        <div class="content" :style="{left: isCollapsed?'60px':'200px'}">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'navigate0',
    props: {
        /*
        isCollapsed: {
            type: Boolean
        }
         */
    },
    data() {
        return {
            isCollapsed: false,
            toPath: '#/main/index'
        }
    },
    computed: {
        currentPath() {
            return this.$store.state.currentPath;
        }
    },
    methods: {
        collapseMenu() {
            this.isCollapsed = !this.isCollapsed;
            // this.$emit('toggleMenu');
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
    },
    mounted: function () {
    }
}
</script>
