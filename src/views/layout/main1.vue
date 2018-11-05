<style scoped>
.main-content {
	height: 90vh; 
	background: #f8f8f8;
	overflow: hidden;
}
</style>
<template>
	<div>
		<topMenu></topMenu>
		<Layout class="main-content">
			<Sider class="leftMenu" width="200px">
				<leftMenu></leftMenu>
			</Sider>
			<Layout>
				<Content>
					<router-view></router-view>
				</Content>
			</Layout>
		</Layout>
	</div>
</template>

<script>
import topMenu from "@/views/menu/topMenu.vue";
import leftMenu from "@/views/menu/leftMenu.vue";
export default {
	components: {
	    topMenu,
	    leftMenu
	},
	data () {
	    return {

	    };
  	},
	computed: {

	},
	methods: {

	},
	ready: function () {

	},
	mounted: function () {
	}
};
</script>
