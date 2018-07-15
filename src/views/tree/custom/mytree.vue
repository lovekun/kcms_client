<template>
    <div style="width: 300px;">
        <treenode :treedata="treeVal" :depth=0></treenode>
    </div>
</template>

<script>
    import treenode from './treenode.vue';
    export default {
        components: {treenode},
        data() {
            return {
                treeVal: {
                    'title': 'root',
                    'children': [
                        {
                            'title': 'child-1'
                        },
                        {
                            'title': 'child-2'
                        }
                    ]
                }
            }
        }
    }
</script>
