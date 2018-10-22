<style scoped>
</style>
<template>
    <div :is='child'>
        <!-- 首页布局方式: main0(菜单栏左侧展开), main1(菜单栏顶部展开，工具栏左侧展开), main2(菜单栏顶部展开) -->
        <!--
        <div :is='child'>

        </div>
        -->
    </div>

</template>

<script>
    import main0 from '@/views/layout/main0.vue';
    import main1 from '@/views/layout/main1.vue';
    // import global_ from '@/util/global.vue';

    export default {
        components: {
            main0,
            main1
        },
        data () {
            var vx = this;
            return {
                child: vx.$store.state.mainPageType
                // 暂时使用webstorage的方法存储页面布局选项
                // child: window.localStorage.getItem("mainPageType") === null ? 'main1' : window.localStorage.getItem("mainPageType")
            };
        },
        computed: {

        },
        methods: {

        },
        mounted: function() {

        },
        watch: {

        }
    }
</script>
