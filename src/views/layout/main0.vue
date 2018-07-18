<style scoped lang="less">
@import "~@/style/main0.less";
</style>
<template>
    <div class="main0" style="height: 100%;">
        <navigate0 style="height: 100%">
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
        </navigate0>
    </div>
</template>
<script>
import navigate0 from '@/views/navigate/navigate0.vue'
export default {
    components: {
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

