<template>
    <div>
        <Button type="text">
            <Icon :size="25" color="white" type="email"></Icon>
        </Button>
        <!--
            <Button type="text">
            <Icon :size="18" color="white" type="locked"></Icon>
            </Button>
        -->
        <lock-screen style="display:inline-block"></lock-screen>

        <full-screen style="display:inline-block" v-model="isFullScreen" @on-change="fullscreenChange"></full-screen>
        <!--
            <Button type="text">
            <Icon :size="25" color="white" type="arrow-expand"></Icon>
            </Button>
        -->
        <Input icon="ios-search" placeholder="search..." style="width: 200px"></Input>
    </div>
</template>
<script>
import fullScreen from '@/views/components/fullscreen.vue';
import lockScreen from '@/views/components/lockscreen.vue';

export default {
    name: 'toolMenu',
    components: {
        fullScreen,
        lockScreen
    },
    data() {
        return {
            isFullScreen: false
        }
    },
    methods: {
        userMenuSelect(name) {
            this.$emit('userMenuSelect', name);
        },
        fullscreenChange (isFullScreen) {
            // console.log(isFullScreen);
        }
    }
}
</script>
