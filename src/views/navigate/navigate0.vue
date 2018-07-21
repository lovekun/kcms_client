<style scoped lang="less">
@import "~@/views/navigate/navigate0.less";
</style>

<template>
    <div>
        <!-- 左侧菜单栏 -->
        <div class="menu" :style="{width: isCollapsed ? '60px':'200px'}">
            <div class="menu-logo">
                <span>kcms</span>
            </div>
            <collapse-menu class="menu-uncollapsed" v-show="!isCollapsed"  @menuSelect="menuSelect"></collapse-menu>
            <dropdown-menu class="menu-collapsed" v-show="isCollapsed" @dropdownMenuSelect="dropdownMenuSelect" @settingBtnClick="settingBtnClick"></dropdown-menu>
        </div>
        <!-- 顶部功能栏 -->
        <div class="top" :style="{paddingLeft: isCollapsed?'60px':'200px'}">
            <div class="top-collapse-toggle">
                <Icon class="top-collapse-toggle-icon" type="navicon-round" :style="{transform: 'rotate(' + (isCollapsed ? '0' : '90') + 'deg'}" @click="collapseMenu"></Icon>
            </div>
            <breadcrumb class="top-breadcrumb" :currentPath="currentPath" :toPath="toPath"></breadcrumb>
            <div class="top-user">
                <user-center @userMenuSelect="userMenuSelect" class="top-user-menu"></user-center>
            </div>
        </div>
        <!-- 页面主体内容 -->
        <div class="content" :style="{paddingLeft: isCollapsed ? '60px' : '200px'}">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import collapseMenu from '@/views/menu/collapseMenu.vue';
import dropdownMenu from '@/views/menu/dropdownMenu.vue';
import userCenter from '@/views/menu/userCenter';
import breadcrumb from '@/views/breadcrumb/breadcrumb.vue';
export default {
    name: 'navigate0',
    components: {
        collapseMenu,
        dropdownMenu,
        userCenter,
        breadcrumb
    },
    props: {
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
        userMenuSelect(name) {
            if(name === 'logout') {
                this.$router.push({name: 'login'});
            } else {
                if(this.$store.state.tagList.indexOf(name) === -1) {
                    this.$store.commit('updateTagList', name);
                }
                this.$router.push({name: name});
            }
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
