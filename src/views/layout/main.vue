<style scoped>
/*.main-content {
	height: 90vh; 
	background: #f8f8f8;
	overflow: hidden;
}*/
</style>
<template>
    <div>
        <div :is='child'>
            
        </div>
    </div>
	
</template>

<script>
    import main0 from '@/views/layout/main0.vue';
    import main1 from '@/views/layout/main1.vue';
    import global_ from '@/util/global.vue';

    export default {
        components: {
            main0,
            main1
        },
        data () {
            return {
                child: window.localStorage.getItem("mainPageType") === null ? 'main1' : window.localStorage.getItem("mainPageType")
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
