<template>
    <div style="width: 300px;">
        <treenode :treedata="treeData" :depth=0></treenode>
    </div>
</template>

<script>
import treenode from './treenode.vue';
export default {
    components: {treenode},
    data() {
        return {
            treeData: {}
        }
    },
    mounted: function() {
        this.treeData = this.$store.state.treeData; 
    }
}
</script>
