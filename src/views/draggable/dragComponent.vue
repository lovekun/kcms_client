<style scoped>

</style>

<template>
    <div style="height: 100%">
        <h1>Vue Draggable</h1>
        <Row :gutter="32" style="height: 100%">
            <Col span="12" style="height: 100%">
                <div style="height: 100%">
                    <Card style="height: 100%">
                    <draggable v-model="list" class="dragArea" :options="{group:'people'}" style="height: 100%">
                            <div class="dragItem" v-for="element in list" style="height: 40px;line-height: 40px;">{{element.name}}</div>
                    </draggable>
                </Card>
                </div>
            </Col>
            <Col span="12" style="height: 100%">
                <div style="height: 100%">
                    <Card style="height: 100%">
                    <draggable v-model="list2" class="dragArea" :options="{group:'people'}" style="height: 100%">
                    <div class="dragItem" v-for="element in list2" style="height: 40px;line-height: 40px;">{{element.name}}</div>
                    </draggable>
                </Card>
                </div>
            </Col>
        </Row>
        
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
