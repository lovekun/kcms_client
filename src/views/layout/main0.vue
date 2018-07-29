<style scoped lang="less">
@import "~@/views/layout/main0.less";
</style>
<template>
    <navigate0 class="main0">
    <router-view class="main0-router"></router-view>
    </navigate0>
</template>
<script>
import navigate0 from '@/views/navigate/navigate0.vue'
import tag from '@/views/tag/tag.vue'
export default {
    components: {
        navigate0,
        tag
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
        }
    },
    methods: {
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

