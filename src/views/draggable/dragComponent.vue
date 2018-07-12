<style scoped>
  .normal {
  background-color: grey;
}

.drag {
  background-color: green;
}

.dragArea {
  min-height: 10px;
}

</style>

<template>
  <div>
    <div id="main">
    <h1>Vue Draggable</h1>           
    <div class="drag">
      <div style="position: absolute;width: 50%;left: 0px;float: left;">
        <h2>List 1 Draggable</h2>
        <draggable v-model="list" class="dragArea" :options="{group:'people'}">
          <div v-for="element in list">{{element.name}}</div>
        </draggable>
      </div>
      <div style="position: absolute;width: 50%;right: 0px;float: right;">
        <h2>List 2 Draggable</h2>
        <draggable v-model="list2" class="dragArea" :options="{group:'people'}">
          <div v-for="element in list2">{{element.name}}</div>
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
