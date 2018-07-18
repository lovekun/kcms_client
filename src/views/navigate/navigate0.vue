<style scoped lang="less">
@import "~@/style/navigate0.less";
</style>

<template>
    <div>
        <div class="menu" :style="{width: isCollapsed ? '60px':'200px'}">
            <div class="menu-logo">
                <span>kcms</span>
            </div>
            <collapse-menu class="menu-uncollapsed" v-show="!isCollapsed"  @menuSelect="menuSelect"></collapse-menu>

            <dropdown-menu class="menu-collapsed" v-show="isCollapsed" @dropdownMenuSelect="dropdownMenuSelect" @settingBtnClick="settingBtnClick"></dropdown-menu>
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
import collapseMenu from '@/views/menu/collapseMenu.vue';
import dropdownMenu from '@/views/menu/dropdownMenu.vue';
export default {
    name: 'navigate0',
    components: {
        collapseMenu,
        dropdownMenu
    },
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
