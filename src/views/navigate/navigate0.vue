<style scoped lang="less">
@import "~@/views/navigate/navigate0.less";
</style>
<template>
    <div style="display: flex; flex-direction: row">
        <!-- 左侧菜单栏 -->
        <div class="menu" :style="{width: isCollapsed ? '60px':'200px'}">
            <div class="menu-logo">
                <span>kcms</span>
            </div>
            <transition>
                <collapse-menu class="menu-uncollapsed" v-show="!isCollapsed"  @menuSelect="menuSelect"></collapse-menu>
            </transition>
            <dropdown-menu class="menu-collapsed" v-show="isCollapsed" @dropdownMenuSelect="dropdownMenuSelect" @settingBtnClick="settingBtnClick"></dropdown-menu>
        </div>
        <div style="width: 100%;">
        <!-- 顶部功能栏 -->
        <div class="top">
            <div style="width: 100%;height: 50px;">
                <Button :style="{transform: 'rotateZ(' + (isCollapsed ? '-90' : '0') + 'deg)'}" type="text" @click="collapseMenu">
                    <Icon type="navicon" size="32"></Icon>
                </Button>
                <!-- 这种写法导致其后元素无法水平居中 -->
                <!-- <Icon size=40 style="line-height: 50px;margin-left: 20px" type="navicon-round" :style="{transform: 'rotate(' + (isCollapsed ? '0' : '90') + 'deg'}" @click="collapseMenu"></Icon> -->
                <breadcrumb class="top-breadcrumb" :currentPath="currentPath" :toPath="toPath"></breadcrumb>
                <user-center style="float:right;line-height: 50px;margin-right: 15px;" @userMenuSelect="userMenuSelect" class="top-user-menu"></user-center>
                <tool-menu style="display:inline-block;float:right;height: 50px;" @userMenuSelect="userMenuSelect" class="top-user-menu"></tool-menu>
            </div>
            <tag></tag>
        </div>
        <!-- 页面主体内容 -->
        <!--<slot class="content" :style="{paddingLeft: isCollapsed ? '60px' : '200px'}"></slot>-->
        <slot></slot>
        </div>
    </div>
</template>
<script>
import collapseMenu from '@/views/menu/collapseMenu.vue';
import dropdownMenu from '@/views/menu/dropdownMenu.vue';
import userCenter from '@/views/menu/userCenter';
import breadcrumb from '@/views/breadcrumb/breadcrumb.vue';
import toolMenu from '@/views/menu/toolMenu.vue';
import tag from '@/views/tag/tag.vue';

export default {
    name: 'navigate0',
    components: {
        collapseMenu,
        dropdownMenu,
        userCenter,
        breadcrumb,
        toolMenu,
        tag
    },
    props: {
    },
    data() {
        return {
            toPath: '#/main/index'
        }
    },
    computed: {
        currentPath() {
            return this.$store.state.currentPath;
        },
        isCollapsed() {
            return this.$store.state.isCollapsed;
        }
    },
    methods: {
        collapseMenu() {
            // this.isCollapsed = !this.isCollapsed;
            this.$store.commit('toggleMenu');
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
