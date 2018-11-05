<style scoped lang="less">
@import "~@/views/layout/main0.less";
</style>
<template>
    <div class="main0">
        <!-- 左侧菜单栏 -->
        <div class="main0-left" :style="{width: isCollapsed ? '60px':'200px'}">
            <div class="main0-left-logo">
                <span>kcms</span>
            </div>
            <transition name="fade">
                <collapse-menu class="main0-left-uncollapsed" v-show="!isCollapsed"  @menuSelect="menuSelect"></collapse-menu>
            </transition>
            <dropdown-menu class="main0-left-collapsed" v-show="isCollapsed" @dropdownMenuSelect="dropdownMenuSelect" @settingBtnClick="settingBtnClick"></dropdown-menu>
        </div>
        <div class="main0-right">
            <!-- 顶部功能栏 -->
            <div class="main0-right-top">
                <div class="main0-right-top-menu">
                    <Button :style="{transform: 'rotateZ(' + (isCollapsed ? '-90' : '0') + 'deg)'}" type="text" @click="collapseMenu">
                        <Icon type="navicon" size="32"></Icon>
                    </Button>
                    <breadcrumb class="main0-right-top-menu-breadcrumb" :currentPath="currentPath" :toPath="toPath"></breadcrumb>
                    <user-center class="main0-right-top-menu-user" @userMenuSelect="userMenuSelect"></user-center>
                    <tool-menu class="main0-right-top-menu-tool" style="" @userMenuSelect="userMenuSelect"></tool-menu>
                </div>
                <tag class="main0-right-top-tag"></tag>
            </div>
            <!-- 页面主体内容 -->
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import collapseMenu from "@/views/menu/collapseMenu.vue";
import dropdownMenu from "@/views/menu/dropdownMenu.vue";
import userCenter from "@/views/menu/userCenter";
import breadcrumb from "@/views/breadcrumb/breadcrumb.vue";
import toolMenu from "@/views/menu/toolMenu.vue";
import tag from "@/views/tag/tag.vue";
export default {
	components: {
		collapseMenu,
		dropdownMenu,
		userCenter,
		breadcrumb,
		toolMenu,
		tag
	},
	data () {
		return {
			toPath: "#/main/index"
		};
	},
	computed: {
		tagList () {
			return this.$store.state.tagList;
		},
		isCollapsed () {
			return this.$store.state.isCollapsed;
		},
		currentPath () {
			return this.$store.state.currentPath;
		}
	},
	methods: {
		handleClose (name) {
			this.$store.commit("removeTagList", name);
			this.$router.push({ name: this.$store.state.tagList[this.$store.state.tagList.length - 1] });
		},
		tagClick (name) {
			this.$router.push({
				name: name
			});
		},
		closeOthers () {
			this.$store.commit("removeOtherTagList", this.$router.currentRoute.name);
		},
		closeAll () {
			this.$store.commit("removeAllTagList");
			this.$router.push({
				name: "index"
			});
		},
		collapseMenu () {
			this.$store.commit("toggleMenu");
		},
		menuSelect (name) {
			if (this.$store.state.tagList.indexOf(name) === -1) {
				this.$store.commit("updateTagList", name);
			}
			this.$router.push({ name: name });
		},
		userMenuSelect (name) {
			if (name === "logout") {
				this.$router.push({ name: "login" });
			} else {
				if (this.$store.state.tagList.indexOf(name) === -1) {
					this.$store.commit("updateTagList", name);
				}
				this.$router.push({ name: name });
			}
		},
		dropdownMenuSelect (name) {
			if (name === "logout") {
				this.$router.push({ name: "login" });
			} else {
				if (this.$store.state.tagList.indexOf(name) === -1) {
					this.$store.commit("updateTagList", name);
				}
				this.$router.push({ name: name });
			}
		},
		settingBtnClick () {
			if (this.$store.state.tagList.indexOf("setting") === -1) {
				this.$store.commit("updateTagList", "setting");
			}
			this.$router.push({ name: "setting" });
		}
	},
	mounted: function () {
		if (this.$store.state.tagList.indexOf("index") === -1) {
			this.$store.commit("updateTagList", "index");
		}
		this.$router.push({
			name: "index"
		});
	},
	watch: {
		"$route" (to) {
			this.$store.commit("setCurrentPath", to.name);
			this.toPath = to.path;
		}
	}
};
</script>

