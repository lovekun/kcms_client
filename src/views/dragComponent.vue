<style scoped>

</style>
<template>
  <el-row :gutter="20">
    <el-col :span="12">
      <draggable v-model="list" class="dragArea" :options="{group:'people'}" style="height: 500px;">
        <div class="dragItem" v-for="element in list" style="height: 40px;line-height: 40px;">{{element.name}}</div>
      </draggable>
    </el-col>
    <el-col :span="12">
      <draggable v-model="list2" class="dragArea" :options="{group:'people'}" style="height: 500px">
        <div class="dragItem" v-for="element in list2" style="height: 40px;line-height: 40px;">{{element.name}}</div>
      </draggable>
    </el-col>
  </el-row>
</template>

<script>
import draggable from "vuedraggable";

export default {
	name: "dragComponent",
	components: {
		draggable
	},
	data () {
		return {
			list: [{
				name: "John"
			}, {
				name: "Joao"
			}, {
				name: "Jean"
			}],
			list2: [{
				name: "Juan"
			}, {
				name: "Edgard"
			}, {
				name: "Johnson"
			}]
		};
	},
	methods: {
		add: function () {
			this.list.push({
				name: "Juan"
			});
		},
		replace: function () {
			this.list = [{
				name: "Edgard"
			}];
		}
	}
};
</script>
