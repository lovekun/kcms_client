<style>
.toolbar {
    width: 64px;
    height: 100%;
    background: #495060;
    position: fixed;
}

.modal {
    left: 64px;
    top: 20px;
    width: 200px;
    height: 2000px;
}
</style>
<template>
    <div class="toolbar">
        <Menu :style="{width: '64px'}" v-model="isCollapsed" @on-select="itemSelect">
            <MenuItem name="1">1</MenuItem>
            <MenuItem name="2">2</MenuItem>
            <MenuItem name="3">3</MenuItem>
            <Modal v-model="modal1" title="Common Modal dialog box title" @on-ok="ok" @on-cancel="cancel" class-name="modal">
                <p>Content of dialog</p>
                <Tree :data="data1"></Tree>
            </Modal>
        </Menu>
        
    </div>
</template>

<script>
export default {
	name: "toolbar",
	data () {
		return {
			modal1: false,
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
	computed: {

	},
	methods: {
		itemSelect (name) {
			this.$Message.success(name);
			if (name == "1") {
				this.modal1 = true;
			}
		},
		ok () {
			this.$Message.info("Clicked ok");
		},
		cancel () {
			this.$Message.info("Clicked cancel");
		}
	}
};
</script>