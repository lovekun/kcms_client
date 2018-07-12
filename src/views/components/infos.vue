<template>
	<div>
		<div>infos page</div>
    	<tree></tree>
	</div>
    
</template>
<script>
	import tree from '../tree/tree.vue';
	export default {
		name: 'infos',
		components: {
        	tree
    	},
    	mounted: function() {
            console.log(this.$route.path);
        }
	}
</script>
