<style scoped>
.layout {

}
</style>
<template>
    <div>
        <div>
            <button type="button" class="btn" @click="showModal">打开Modal</button>
            <div v-show="isvisible">hello world</div>
        </div>
    
        <modal v-show="isvisible" @close="closeModal"></modal>
        
    </div>
    
</template>
<script>
import toolbar from './toolbar.vue';
import modal from './modal.vue';
export default {
    name: 'index',
    components: {
        toolbar,
        modal
    },
    data () {
        return {
            isvisible: false
        }
    },
    methods: {
        showModal: function() {
            this.$Message.success('Success!');
            this.isvisible = true;
        },
        closeModal: function() {
            this.$Message.success('Success!');
            this.isvisible = false;
        }
    }
}
</script>
