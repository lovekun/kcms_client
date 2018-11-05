<style scoped>
@import '../../style/topMenu.less';
</style>
<template>
		<Menu mode="horizontal" theme="dark" active-name="1" style="height: 10vh" @on-select="menuSelect">
	        <div class="logo">
	            kcms
	        </div>
	        	<div class="splitLine">
	        </div>
	        <MenuItem name="1">
	            <Icon type="ios-navigate"></Icon>
	            信息列表
	        </MenuItem>
	        <MenuItem name="2">
	            <Icon type="ios-keypad"></Icon>
	            图形图表
	        </MenuItem>
	        <MenuItem name="3">
	            <Icon type="ios-analytics"></Icon>
	            系统设置
	        </MenuItem>
	        <MenuItem name="4" style="position: relative;float: right">
	            <Icon type="android-person"></Icon>
	            admin
	        </MenuItem>
	    </Menu>
</template>
<script>
export default {
	  name: "topMenu",
	  methods: {
	    menuSelect (name) {
	      if (name === "1") {
	        this.$router.push({
	          name: "list"
	        });
	      } else if (name === "2") {
	        this.$router.push({
	          name: "infos"
	        });
	      } else if (name === "3") {
	        this.$router.push({
	          name: "setting"
	        });
	      }
	    }
	}
};
</script>