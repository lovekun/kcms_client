<template>
  <div>
    <div>
    	<div>
    		<draggable class="list-group" element="ul" v-model="list" :options="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false"> 
	          <transition-group type="transition" :name="'flip-list'">
	            <li class="list-group-item" v-for="element in list" :key="element.order"> 
	              <Card style="background: #abcabc" :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true">{{element.name}}<span>{{element.order}}</span></Card>
	            </li> 
	          </transition-group>
		    </draggable>
    	</div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
const message = [ "vue.draggable", "draggable", "component", "for", "vue.js 2.0", "based", "on", "Sortablejs" ];

export default {
	name: "dragComponent",
	components: {
		draggable
	},
	data () {
		return {
			list: message.map((name, index) => { return { name, order: index + 1, fixed: false }; }),
			list2: [],
			editable: true,
			isDragging: false,
			delayedDragging: false,
	    columns1: [
	        {
	            title: "Name",
	            key: "name"
	        },
	        {
	            title: "Age",
	            key: "age"
	        },
	        {
	            title: "Address",
	            key: "address"
	        }
	    ],
			data1: [
				{
					name: "John Brown",
					age: 18,
					address: "New York No. 1 Lake Park",
					date: "2016-10-03"
				},
				{
					name: "Jim Green",
					age: 24,
					address: "London No. 1 Lake Park",
					date: "2016-10-01"
				},
				{
					name: "Joe Black",
					age: 30,
					address: "Sydney No. 1 Lake Park",
					date: "2016-10-02"
				},
				{
					name: "Jon Snow",
					age: 26,
					address: "Ottawa No. 2 Lake Park",
					date: "2016-10-04"
				}
			]
		};
	},
	methods: {
		orderList () {
			this.list = this.list.sort((one, two) => { return one.order - two.order; });
		},
		onMove ({ relatedContext, draggedContext }) {
			const relatedElement = relatedContext.element;
			const draggedElement = draggedContext.element;
			return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed;
		}
	},
	computed: {
		dragOptions () {
			return {
				animation: 0,
				group: "description",
				disabled: !this.editable,
				ghostClass: "ghost"
			};
		},
		listString () {
			return JSON.stringify(this.list, null, 2);
		},
		list2String () {
			return JSON.stringify(this.list2, null, 2);
		}
	},
	watch: {
		isDragging (newValue) {
			if (newValue) {
				this.delayedDragging = true;
				return;
			}
			this.$nextTick(() => {
				this.delayedDragging = false;
			});
		}
	}
};
</script>

<style>
.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: .5;
  background: #C8EBFB;
}

.list-group {
  min-height: 20px;
}

.list-group-item {
  cursor: move;
}

.list-group-item i{
  cursor: pointer;
}
</style>
