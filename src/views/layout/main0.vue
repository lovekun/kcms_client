<style scoped lang="less">
@import "~@/style/main0.less";
</style>
<template>
    <div class="main0" style="height: 100%;">
        <!--
        <div class="main0-left-sidebar" :style="{width: isCollapsed ? '60px':'200px'}">
            <div class="main0-left-sidebar-logo">
                <span>kcms</span>
            </div>
            <Menu class="main0-left-sidebar-menu" v-show="!isCollapsed" theme="dark" width="auto" @on-select="menuSelect">
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

            <div class="main0-left-sidebar-dropmenu" v-show="isCollapsed">
                <Dropdown class="main0-left-sidebar-dropmenu-item" transfer v-show="isCollapsed" placement="right-start" trigger="hover" @on-click="dropdownMenuSelect">
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
                <Button class="main0-left-sidebar-dropmenu-item" type="text" @click="settingBtnClick">
                    <Icon :size="25" color="white" type="gear-a"></Icon>
                </Button>
            </div>
        </div>
        -->


        <!--
        <left-menu0 style="height: 100%;" :isCollapsed="isCollapsed"></left-menu0>
        -->

       <!-- 
        <div class="main0-header" :style="{paddingLeft: isCollapsed?'60px':'200px'}">
            <div class="main0-header-collapseicon">
                <Icon class="main0-header-collapseicon-icon" type="navicon-round" :style="{transform: 'rotate(' + (isCollapsed ? '0' : '90') + 'deg'}" @click="collapseMenu"></Icon>
            </div>
            <Breadcrumb class="main0-header-breadcrumb">
            <BreadcrumbItem v-for="item in currentPath" :to="toPath"><span>{{item.title}}</span></BreadcrumbItem>
            </Breadcrumb>
            <div class="main0-header-user">
                <Dropdown class="main0-header-user-menu" transfer placement="bottom-start" trigger="hover" @on-click="dropdownMenuSelect">
                <Button type="text">
                    <Icon :size="20" color="white" type="android-person"></Icon>
                    <span>admin</span>
                </Button>
                <DropdownMenu class="main0-header-user-menu-item" slot="list">
                <DropdownItem name="userCenter">个人中心</DropdownItem>
                <DropdownItem name="logout">退出</DropdownItem>
                </DropdownMenu>
                </Dropdown>
            </div>

        </div>
       -->
       <!--
       <top-menu0 @toggleMenu="collapseMenu" :isCollapsed="isCollapsed"></top-menu0>
       -->
       <navigate0 style="height: 100%"></navigate0>
        <div class="main0-content" :style="{left: isCollapsed?'60px':'200px'}">
            <div class="main0-content-tagbar">
                <div class="main0-content-tagbar-taglist">
                    <Tag class="main0-content-tagbar-taglist-item" @click.native="tagClick(item)" v-for="item in tagList" :closable="item === 'index' ? false : true" @on-close="handleClose(item)">{{ item }}</Tag>
                </div>
                <div class="main0-content-tagbar-close" style="float: right;">
                    <Button class="main0-content-tagbar-close-item" type="error" @click="closeOthers">关闭其他</Button>
                    <Button class="main0-content-tagbar-close-item" type="error" @click="closeAll">关闭所有</Button>
                </div>
            </div>
            <div class="main0-content-router">
                <router-view></router-view>
            </div>
        </div>
        </div>
    
</template>
<script>
import leftMenu0 from '@/views/menu/leftMenu0.vue';
import topMenu0 from '@/views/menu/topMenu0.vue';
import navigate0 from '@/views/navigate/navigate0.vue'
export default {
    components: {
        leftMenu0,
        topMenu0,
        navigate0
    },
    data () {
        return {
            isCollapsed: false,
            toPath: '#/main/index'
        }
    },
    computed: {
        tagList() {
            return this.$store.state.tagList;
        },
        currentPath() {
            return this.$store.state.currentPath;
        }
    },
    methods: {
        collapseMenu: function() {
            this.isCollapsed = !this.isCollapsed;
        },
        menuSelect(name) {
            if(this.$store.state.tagList.indexOf(name) === -1) {
                this.$store.commit('updateTagList', name);
            }
            this.$router.push({name: name});
        },
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
        if(this.$store.state.tagList.indexOf('index') === -1) {
            this.$store.commit('updateTagList', 'index');
        }
        this.$router.push({
            name: 'index'
        });
    },
    watch: {
        '$route'(to) {
            this.$store.commit('setCurrentPath', to.name);
            this.toPath = to.path;
        }
    }
}
</script>

