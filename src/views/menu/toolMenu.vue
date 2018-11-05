<template>
    <div>
        <Button type="text" @click="openMessage">
            <Icon :size="25" type="email"></Icon>
        </Button>
        <lock-screen style="width: 50px;"></lock-screen>
        <!-- <full-screen style="display:inline-block;line-height: 50;height: 50px;" v-model="isFullScreen" @on-change="fullscreenChange"></full-screen> -->
        <full-screen></full-screen>

        <div style="display: inline-block; line-height: 50px;">
            <Input type="text" icon="ios-search" placeholder="search..." style="width: 200px;"></Input>
        </div>
    </div>
</template>
<script>
import fullScreen from "@/views/components/fullscreen.vue";
import lockScreen from "@/views/components/lockscreen.vue";

export default {
	name: "toolMenu",
	components: {
		fullScreen,
		lockScreen
	},
	data () {
		return {
			isFullScreen: false
		};
	},
	methods: {
		userMenuSelect (name) {
			this.$emit("userMenuSelect", name);
		},
		fullscreenChange (isFullScreen) {
			// console.log(isFullScreen);
		},
		openMessage () {
			this.$router.push({ name: "message" });
		}
	}
};
</script>
