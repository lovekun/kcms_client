<style scoped>
</style>
<template>
    <div :is='child'>
    </div>
</template>

<script>
import main0 from "@/views/main0.vue";
export default {
	components: {
		main0
	},
	data () {
		let vx = this;
		return {
			child: vx.$store.state.mainPageType
		};
	},
	computed: {

	},
	methods: {

	},
	mounted: function () {
	  if (this.$store.state.mainPageType === "") {
      this.$cookie.set("mainPageType", "main0");
      this.$store.state.mainPageType = "main0";
      this.child = "main0";
    }
	},
	watch: {

	}
};
</script>
