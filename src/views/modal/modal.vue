<style>
    .modal-backdrop {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0,0,0,.3);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal {
        background-color: #fff;
        box-shadow: 2px 2px 20px 1px;
        overflow-x:auto;
        display: flex;
        flex-direction: column; 
    }
</style>
<template>
    <div class="modal-backdrop">
        <div class="modal">
            <div>
                <Input v-model="value14" placeholder="Search" clearable style="width: 200px"></Input>
            </div>
            <div>
                <Tree class="tree" :data="data1"></Tree>
            </div>
            <div>
               <button type="button" class="btn-green" @click="close">关闭</button> 
            </div>
                
        </div>
    </div>
</template>

<script>
export default {
	name: "modal",
	data () {
		return {
			data1: [
				{
					title: "parent 1",
					expand: true,
					children: [
						{
							title: "parent 1-1",
							expand: true,
							children: [
								{
									title: "leaf 1-1-1"
								},
								{
									title: "leaf 1-1-2"
								}
							]
						},
						{
							title: "parent 1-2",
							expand: true,
							children: [
								{
									title: "leaf 1-2-1"
								},
								{
									title: "leaf 1-2-1"
								}
							]
						}
					]
				}
			]
		};
	},
	methods: {
		close: function () {
			this.$emit("close");
		}
	}
};
</script>