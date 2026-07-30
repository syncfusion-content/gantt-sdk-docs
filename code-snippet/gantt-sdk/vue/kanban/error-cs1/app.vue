<template>
  <div id="app">
   <ejs-kanban id="kanban" ref="KanbanObj" keyField="Status" :dataSource="kanbanData"
    :cardSettings="cardSettings" :actionFailure='actionFailure'>
      <e-columns>
        <e-column headerText="To Do" keyField="Open"></e-column>
        <e-column headerText="In Progress" keyField="InProgress"></e-column>
        <e-column headerText="Testing" keyField="Testing"></e-column>
        <e-column headerText="Done" keyField="Close"></e-column>
      </e-columns>
    </ejs-kanban>
  </div>
</template>


<script>

import { KanbanComponent, ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-vue-kanban';
import { DataManager, ODataAdaptor } from "@syncfusion/ej2-data";

export default {
name: "App",
components: {
"ejs-kanban":KanbanComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data: function() {
  return {
      kanbanData: new DataManager({
          url: 'http://some.com/invalidUrl',
          adaptor: new ODataAdaptor()
      }),
      cardSettings: {
          contentField: "Summary",
          headerField: "Id"
      },
  };
  },
  methods: {
    actionFailure: function() {
      var span = document.createElement('span');
      this.$refs.KanbanObj.ej2Instances.element.parentNode.insertBefore(span, this.$refs.KanbanObj.ej2Instances.element);
      span.style.color = '#FF0000'
      span.innerHTML = 'Server exception: 404 Not found';
    }
  }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-layouts/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-kanban/styles/tailwind3.css';
</style>