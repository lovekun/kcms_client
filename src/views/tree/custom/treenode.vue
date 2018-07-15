<template>
    <div>
        <render :data="treedata.title" :depth=depth></render>
        <treenode v-for="item in treedata.children" :treedata="item" :depth=depth+1></treenode>
    </div>
</template>
<script>
    import render from './render.js';
    export default {
        name: 'treenode',
        components: {render},
        props: {
            treedata: {
                type: Object
            },
            depth: {
                type: Number
            }
        },
        /* 
        computed: {
            indent() {
                var a = this.depth * 50;
                return { transform: `translate(${this.depth * 50}px)` };
            }
        },
        */
        mounted: function() {
            // console.log(this.depth);
        }
    }
</script>
