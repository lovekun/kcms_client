<style scoped lang="less">
@import "~@/style/topMenu0.less";
</style>
<template>
    <div>
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
    </div>
</template>

<script>
export default {
    name: 'topMenu0',
    props: {
        isCollapsed: {
            type: Boolean
        }
    },
    data() {
        return {
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
            // this.isCollapsed = !this.isCollapsed;
            this.$emit('toggleMenu');            
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
        }
    },
    mounted: function () {
    }
}
</script>
