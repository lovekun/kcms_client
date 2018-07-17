<style scoped>
.drag {
    width: 400px;
    height: 400px;
    position: relative;
}

.dragList {
    border: 1px solid;
    height: 400px;
    width: 150px;
    border: 2px solid #aaa;
}

.listLeft {
    float: left;
}

.listRight {
    float: right;
}

.dragArea {
    height: 400px;
    width: 150px;
}

.dragItem {
    width: 150px;
    height: 40px;
}
</style>

<template>
    <div>
        <div>
            <h1>Vue Draggable</h1>
            <div class="drag">
                <div class="dragList listLeft">
                    <draggable v-model="list" class="dragArea" :options="{group:'people'}">
                    <div class="dragItem" v-for="element in list">{{element.name}}</div>
                    </draggable>
                </div>
                <div class="dragList listRight">
                    <draggable v-model="list2" class="dragArea" :options="{group:'people'}">
                    <div class="dragItem" v-for="element in list2">{{element.name}}</div>
                    </draggable>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import draggable from 'vuedraggable';

export default {
    name: 'dragComponent',
    components: {
        draggable,
    },
    data() {
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
        }

    },
    methods: {
        add: function() {
            this.list.push({
                name: 'Juan'
            });
        },
        replace: function() {
            this.list = [{
                name: 'Edgard'
            }]
        }
    }
}

</script>
